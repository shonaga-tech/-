import * as completionRepo from '../data/taskNaviRepository';
import {
  getChatAttachmentPromotionsByTask,
  getChatAttachmentPromotionByChatMessage,
  createChatAttachmentPromotion,
  approveChatAttachmentPromotion,
} from '../data/taskNaviRepository';
import {
  getProjects, getUsers, getTasksByProject, getAssignmentsByTask, getAllAssignments,
  getAllTasks, getAllAssignmentsByUser,
  getChatMessages, getNotes, getAllNotes, getTodos,
  addChatMessage as repoAddChat, addNote as repoAddNote, updateNote as repoUpdateNote, deleteNoteAtomic,
  addTodo as repoAddTodo, toggleTodo as repoToggleTodo, deleteTodo as repoDeleteTodo,
  createTask as repoCreateTask, setTaskStatus, updateTask,
  getProjectMembers, getRecentActivity, getActivityByTask, addActivityEvent,
  getUser, getTask,
  getNoteFavorites, addNoteFavorite, removeNoteFavorite,
  getAttachmentsByTask, createAttachment, reviseAttachment as repoReviseAttachment, withdrawAttachment as repoWithdrawAttachment,
  getRevisionsByAttachment, getAttachment,
  getRequirementsByAssignment, getAllRequirementsForTask,
  createRequirementsForAssignment, updateRequirement, getRequirement,
  getSubmissionsByAssignment, getAllSubmissionsByTask, createSubmission, updateSubmission,
  getAssignmentByUserAndTask, updateAssignment,
  getAllProjectMembers,
  getPersonalTasksByOwner, getPersonalTask, createPersonalTask, updatePersonalTask,
  deletePersonalTaskAtomic, getPersonalTaskAttachments,
  addPersonalTaskAttachment, deletePersonalTaskAttachment,
  getAllTemplates, getTemplate, createTemplate, getTemplateAttachments, addTemplateAttachment,
  deleteTemplateAtomic,
  getTemplateFavorites, addTemplateFavorite, removeTemplateFavorite,
  getNote,
} from '../data/taskNaviRepository';
import {
  buildTaskView, buildChatMessageViews, buildNoteViews, buildTodoViews, buildActivityViews,
  buildNoteListViews, isEligibleActive, validatePublish, checkAutoClose,
  buildAttachmentViews, buildRequirementViews, buildSubmissionViews,
  buildAssigneeDetailViews, buildHistoryViews,
  buildPersonalTaskView, buildPersonalTaskDetailView, buildTemplateView,
  sortSharedTasks, sortPersonalTasks, searchSharedTasks, searchPersonalTasks, paginate,
  computeSharedSummaryCounts, computePersonalSummaryCounts, computeMyTasksSummaryCounts,
} from './taskNaviSelectors';
import { COMPLETE_BY_PURPOSE } from '../domain/taskNaviConstants';
import type {
  Task, TaskView, TaskDetailView, ProjectView, UserView, ActivityView, NoteListView,
  TaskPurpose, TaskStatus, AttachmentType, EligibilityStatus,
  PersonalTask, PersonalTaskView, PersonalTaskDetailView, TaskTemplate,
  TemplateView, TaskType, PersonalTaskStatus,
  SharedSummaryCounts, PersonalSummaryCounts, MyTasksSummaryCounts,
  TaskAssignment,
} from '../domain/taskNaviTypes';
import { getDb } from '../data/taskNaviDb';

export async function loadProjects(): Promise<ProjectView[]> {
  const projects = await getProjects();
  return projects.map((p) => ({ id: p.id, name: p.name, color: p.color }));
}

export async function loadUsers(): Promise<UserView[]> {
  const users = await getUsers();
  return users.map((u) => ({ id: u.id, name: u.name, avatar_class: u.avatar_class, initials: u.initials }));
}

function isTaskRelevant(task: Task, assignments: TaskAssignment[], currentUserId: string): boolean {
  if (task.created_by === currentUserId) return true;
  if (task.successor_user_id === currentUserId) return true;
  return assignments.some((a) => a.user_id === currentUserId && isEligibleActive(a));
}

export async function loadAllTasksForUser(currentUserId: string): Promise<TaskView[]> {
  const [allTasks, users, projects, myAssignments] = await Promise.all([
    getAllTasks(), getUsers(), getProjects(), getAllAssignmentsByUser(currentUserId),
  ]);
  const userMap = new Map(users.map((u) => [u.id, u]));
  const projectMap = new Map(projects.map((p) => [p.id, p]));
  const myTaskIds = new Set(myAssignments.map((a) => a.task_id));
  const relatedTasks = allTasks.filter((t) => {
    if (t.created_by === currentUserId) return true;
    if (t.successor_user_id === currentUserId) return true;
    if (!myTaskIds.has(t.id)) return false;
    const taskAssignments = myAssignments.filter((a) => a.task_id === t.id);
    return taskAssignments.some(isEligibleActive);
  });
  const taskIds = relatedTasks.map((t) => t.id);
  const allAssignments = await getAllAssignments(taskIds);
  return relatedTasks
    .filter((t) => t.status !== 'archived')
    .map((task) => {
      const assignments = allAssignments.filter((a) => a.task_id === task.id);
      return buildTaskView(task, assignments, userMap, projectMap, currentUserId);
    });
}

export async function loadSharedTasksForUser(projectId: string, currentUserId: string): Promise<TaskView[]> {
  const tasks = await getTasksByProject(projectId);
  const users = await getUsers();
  const projects = await getProjects();
  const userMap = new Map(users.map((u) => [u.id, u]));
  const projectMap = new Map(projects.map((p) => [p.id, p]));
  const taskIds = tasks.map((t) => t.id);
  const allAssignments = await getAllAssignments(taskIds);
  return tasks
    .filter((t) => {
      if (t.status === 'draft') return t.created_by === currentUserId;
      if (t.status === 'open' || t.status === 'closed') {
        return isTaskRelevant(t, allAssignments.filter((a) => a.task_id === t.id), currentUserId);
      }
      return false;
    })
    .map((task) => {
      const assignments = allAssignments.filter((a) => a.task_id === task.id);
      return buildTaskView(task, assignments, userMap, projectMap, currentUserId);
    });
}

export async function loadArchivedTasksForUser(currentUserId: string): Promise<TaskView[]> {
  const allTasks = await getAllTasks();
  const users = await getUsers();
  const projects = await getProjects();
  const userMap = new Map(users.map((u) => [u.id, u]));
  const projectMap = new Map(projects.map((p) => [p.id, p]));
  const archivedTasks = allTasks.filter((t) => t.status === 'archived');
  const taskIds = archivedTasks.map((t) => t.id);
  const allAssignments = await getAllAssignments(taskIds);
  return archivedTasks
    .filter((t) => isTaskRelevant(t, allAssignments.filter((a) => a.task_id === t.id), currentUserId))
    .map((task) => {
      const assignments = allAssignments.filter((a) => a.task_id === task.id);
      return buildTaskView(task, assignments, userMap, projectMap, currentUserId);
    });
}

export async function loadTaskDetail(taskId: string, currentUserId: string): Promise<TaskDetailView | null> {
  const task = await getTask(taskId);
  if (!task) return null;

  const [users, projects, assignments, favorites, attachmentsRaw, allRequirements, allSubmissions, promotions, chats, notes, todos, history] = await Promise.all([
    getUsers(), getProjects(), getAssignmentsByTask(taskId), getNoteFavorites(currentUserId),
    getAttachmentsByTask(taskId), getAllRequirementsForTask(taskId),
    getAllSubmissionsByTask(taskId),
      getChatAttachmentPromotionsByTask(taskId),
      getChatMessages(taskId),
      getNotes(taskId),
    getTodos(taskId, currentUserId), getActivityByTask(taskId, 50),
  ]);

  const userMap = new Map(users.map((u) => [u.id, u]));
  const projectMap = new Map(projects.map((p) => [p.id, p]));
  const favoriteSet = new Set(favorites.map((f) => f.note_id));
  const taskView = buildTaskView(task, assignments, userMap, projectMap, currentUserId, allRequirements);

  const attachmentMap = new Map(attachmentsRaw.map((a) => [a.id, a]));
  const attachmentViews = buildAttachmentViews(attachmentsRaw, userMap);

  const subsByAssignment = new Map<string, typeof allSubmissions>();
  for (const s of allSubmissions) {
    const arr = subsByAssignment.get(s.assignment_id) ?? [];
    arr.push(s);
    subsByAssignment.set(s.assignment_id, arr);
  }
  const reqsByAssignment = new Map<string, typeof allRequirements>();
  for (const r of allRequirements) {
    const arr = reqsByAssignment.get(r.assignment_id) ?? [];
    arr.push(r);
    reqsByAssignment.set(r.assignment_id, arr);
  }

  const allAssigneeDetails = buildAssigneeDetailViews(
    assignments, userMap, subsByAssignment, reqsByAssignment, attachmentMap,
  );

  const myAssignment = allAssigneeDetails.find((a) => a.user_id === currentUserId) ?? null;
  const myRequirements = myAssignment?.requirements ?? [];

  const { shared, personal } = buildNoteViews(notes, currentUserId, favoriteSet, userMap);
  const publishErrors = task.status === 'draft' ? validatePublish(task, assignments, attachmentsRaw) : [];
  const canPublish = publishErrors.length === 0;
  const canForceClose = (task.status === 'draft' || task.status === 'open') && task.created_by === currentUserId;
  const canArchive = task.status === 'closed' && task.created_by === currentUserId;

  const canSaveTemplate = (task.status === 'closed' || task.status === 'archived') && task.created_by === currentUserId;

  return {
    task: taskView,
    chats: buildChatMessageViews(chats, userMap, currentUserId),
    chat_attachment_promotions: promotions
      .sort((a, b) => b.requested_at.localeCompare(a.requested_at))
      .map((promotion) => ({
        id: promotion.id,
        task_id: promotion.task_id,
        chat_message_id: promotion.chat_message_id,
        attachment_filename: promotion.attachment_filename,
        requested_by_user_id: promotion.requested_by_user_id,
        requested_by_name: userMap.get(promotion.requested_by_user_id)?.name ?? '不明',
        requested_at: promotion.requested_at,
        requested_at_label: new Date(promotion.requested_at).toLocaleString('ja-JP'),
        status: promotion.status,
        approved_by_user_id: promotion.approved_by_user_id,
        approved_by_name: promotion.approved_by_user_id
          ? userMap.get(promotion.approved_by_user_id)?.name ?? '不明'
          : null,
        approved_at: promotion.approved_at,
        created_attachment_id: promotion.created_attachment_id,
      })),
    shared_notes: shared, personal_notes: personal,
    todos: buildTodoViews(todos),
    attachments: attachmentViews,
    my_requirements: myRequirements,
    my_assignments: allAssigneeDetails.filter((a) => a.user_id === currentUserId),
    all_assignees: allAssigneeDetails,
    history: buildHistoryViews(history, userMap),
    publish_errors: publishErrors,
    can_publish: canPublish,
    can_force_close: canForceClose,
    can_archive: canArchive,
    my_assignment: myAssignment,
    can_save_template: canSaveTemplate,
  };
}

export async function loadActivity(projectId: string, limit: number): Promise<ActivityView[]> {
  const events = await getRecentActivity(projectId, limit);
  const tasks = await getTasksByProject(projectId);
  const users = await getUsers();
  const taskMap = new Map(tasks.map((t) => [t.id, t]));
  const userMap = new Map(users.map((u) => [u.id, u]));
  return buildActivityViews(events, taskMap, userMap);
}

export async function loadNoteList(currentUserId: string): Promise<NoteListView[]> {
  const [allNotes, allTasks, favorites] = await Promise.all([
    getAllNotes(), getAllTasks(), getNoteFavorites(currentUserId),
  ]);
  const taskMap = new Map(allTasks.map((t) => [t.id, t]));
  const favoriteSet = new Set(favorites.map((f) => f.note_id));
  return buildNoteListViews(allNotes, taskMap, currentUserId, favoriteSet);
}

export async function toggleNoteFavorite(noteId: string, userId: string): Promise<void> {
  const favorites = await getNoteFavorites(userId);
  const isFavorited = favorites.some((f) => f.note_id === noteId);
  if (isFavorited) await removeNoteFavorite(noteId, userId);
  else await addNoteFavorite(noteId, userId);
}

// === Task creation (always creates as draft) ===
export async function createNewTask(data: {
  project_id: string; purpose: TaskPurpose; title: string; body: string;
  due_at: string | null; assignee_user_ids: string[];
  created_by: string; successor_user_id: string | null;
}): Promise<Task> {
  return repoCreateTask({
    ...data,
    status: 'draft',
  });
}

// === Publish (authoritative — used for both new and existing drafts) ===
export async function publishTask(taskId: string, userId: string): Promise<void> {
  const task = await getTask(taskId);
  if (!task || task.status !== 'draft') return;
  const assignments = await getAssignmentsByTask(taskId);
  const attachments = await getAttachmentsByTask(taskId);
  const errors = validatePublish(task, assignments, attachments);
  if (errors.length > 0) return;
  const ts = new Date().toISOString();
  await setTaskStatus(taskId, 'open', { opened_at: ts });
  await addActivityEvent({
    task_id: taskId, project_id: task.project_id,
    event_type: 'task_published', label: 'タスクを公開しました',
    user_id: userId,
  });
}

// === Create and publish in one operation (still goes through validation) ===
export async function createAndPublishTask(data: {
  project_id: string; purpose: TaskPurpose; title: string; body: string;
  due_at: string | null; assignee_user_ids: string[];
  created_by: string; successor_user_id: string | null;
}): Promise<{ task: Task; published: boolean }> {
  const task = await repoCreateTask({
    ...data,
    status: 'draft',
  });
  const assignments = await getAssignmentsByTask(task.id);
  const attachments = await getAttachmentsByTask(task.id);
  const errors = validatePublish(task, assignments, attachments);
  if (errors.length > 0) {
    return { task, published: false };
  }
  const ts = new Date().toISOString();
  await setTaskStatus(task.id, 'open', { opened_at: ts });
  await addActivityEvent({
    task_id: task.id, project_id: data.project_id,
    event_type: 'task_published', label: 'タスクを公開しました',
    user_id: data.created_by,
  });
  return { task, published: true };
}

// === Update draft task fields ===
export async function updateDraftTask(taskId: string, updates: Partial<Task>, userId: string): Promise<void> {
  const task = await getTask(taskId);
  if (!task || task.status !== 'draft') return;
  if (task.created_by !== userId) return;
  await updateTask(taskId, updates);
}

// === Attachment operations ===
export async function addAttachment(taskId: string, userId: string, name: string, attachmentType: AttachmentType): Promise<void> {
  const task = await getTask(taskId);
  if (!task) return;
  const att = await createAttachment({ task_id: taskId, name, attachment_type: attachmentType, uploaded_by: userId });
  if (attachmentType === 'confirmation_required') {
    const assignments = await getAssignmentsByTask(taskId);
    const eligible = assignments.filter(isEligibleActive);
    for (const a of eligible) {
      await createRequirementsForAssignment(a.id, att.id, 1);
    }
  }
  await addActivityEvent({
    task_id: taskId, project_id: task.project_id,
    event_type: 'attachment_added', label: `資料「${name}」を追加しました`,
    user_id: userId,
  });
}

export async function reviseAttachment(taskId: string, attachmentId: string, reason: string, userId: string): Promise<void> {
  const task = await getTask(taskId);
  if (!task) return;
  await repoReviseAttachment(attachmentId, reason, userId);
  const att = await getAttachment(attachmentId);
  if (att && att.attachment_type === 'confirmation_required') {
    const assignments = await getAssignmentsByTask(taskId);
    const eligible = assignments.filter(isEligibleActive);
    for (const a of eligible) {
      const req = await getRequirement(a.id, attachmentId);
      if (req) {
        await updateRequirement(req.id, {
          required_revision_no: att.current_revision_no,
          requirement_status: 'required',
          confirmed_revision_no: null,
          confirmed_at: null,
        });
      }
    }
  }
  await addActivityEvent({
    task_id: taskId, project_id: task.project_id,
    event_type: 'attachment_revised', label: `資料「${att?.name ?? ''}」を改訂しました`,
    user_id: userId, reason,
  });
}

export async function withdrawAttachment(taskId: string, attachmentId: string, reason: string, userId: string): Promise<void> {
  const task = await getTask(taskId);
  if (!task) return;
  await repoWithdrawAttachment(attachmentId, reason);
  const reqs = await getAllRequirementsForTask(taskId);
  const pendingReqs = reqs.filter((r) => r.attachment_id === attachmentId && r.requirement_status === 'required');
  for (const r of pendingReqs) {
    await updateRequirement(r.id, { requirement_status: 'not_required' });
  }
  const att = await getAttachment(attachmentId);
  await addActivityEvent({
    task_id: taskId, project_id: task.project_id,
    event_type: 'attachment_withdrawn', label: `資料「${att?.name ?? ''}」を撤回しました`,
    user_id: userId, reason,
  });
}

// === Document access & confirmation ===
export async function accessAttachment(taskId: string, assignmentId: string, attachmentId: string, method: 'view' | 'download', userId: string): Promise<void> {
  const task = await getTask(taskId);
  if (!task) return;
  const req = await getRequirement(assignmentId, attachmentId);
  if (!req || req.requirement_status !== 'required') return;
  const att = await getAttachment(attachmentId);
  if (!att) return;
  const ts = new Date().toISOString();
  await updateRequirement(req.id, {
    accessed_revision_no: att.current_revision_no,
    accessed_at: ts,
    access_method: method,
  });
  await addActivityEvent({
    task_id: taskId, project_id: task.project_id,
    event_type: method === 'view' ? 'attachment_viewed' : 'attachment_downloaded',
    label: `資料「${att.name}」を${method === 'view' ? '閲覧' : 'ダウンロード'}しました`,
    user_id: userId,
  });
}

export async function confirmDocument(taskId: string, assignmentId: string, attachmentId: string, userId: string): Promise<void> {
  const task = await getTask(taskId);
  if (!task) return;
  const req = await getRequirement(assignmentId, attachmentId);
  if (!req || req.requirement_status !== 'required') return;
  if (!req.accessed_revision_no || req.accessed_revision_no < req.required_revision_no) return;
  const ts = new Date().toISOString();
  await updateRequirement(req.id, {
    requirement_status: 'confirmed',
    confirmed_revision_no: req.accessed_revision_no,
    confirmed_at: ts,
  });
  const att = await getAttachment(attachmentId);
  await addActivityEvent({
    task_id: taskId, project_id: task.project_id,
    event_type: 'document_confirmation_completed',
    label: `資料「${att?.name ?? ''}」の確認を完了しました`,
    user_id: userId,
  });
  await checkAndAutoClose(taskId);
}

// === Assignee operations ===
export async function confirmTask(taskId: string, assignmentId: string, userId: string): Promise<void> {
  const task = await getTask(taskId);
  if (!task || task.status !== 'open') return;
  const ts = new Date().toISOString();
  await updateAssignment(assignmentId, { progress_status: 'confirmed', completed_at: ts });
  await addActivityEvent({
    task_id: taskId, project_id: task.project_id,
    event_type: 'submission_submitted', label: '確認を完了しました',
    user_id: userId,
  });
  await checkAndAutoClose(taskId);
}

export async function submitResponse(taskId: string, assignmentId: string, body: string, userId: string): Promise<void> {
  const task = await getTask(taskId);
  if (!task || task.status !== 'open') return;
  await createSubmission({ assignment_id: assignmentId, submission_type: 'response', body, submitted_by: userId });
  const ts = new Date().toISOString();
  await updateAssignment(assignmentId, { progress_status: 'reported', completed_at: ts });
  await addActivityEvent({
    task_id: taskId, project_id: task.project_id,
    event_type: 'submission_submitted', label: '回答を提出しました',
    user_id: userId,
  });
  await checkAndAutoClose(taskId);
}

export async function submitWorkReport(taskId: string, assignmentId: string, body: string, userId: string): Promise<void> {
  const task = await getTask(taskId);
  if (!task || task.status !== 'open') return;
  await createSubmission({ assignment_id: assignmentId, submission_type: 'work_report', body, submitted_by: userId });
  const ts = new Date().toISOString();
  await updateAssignment(assignmentId, { progress_status: 'reported', completed_at: ts });
  await addActivityEvent({
    task_id: taskId, project_id: task.project_id,
    event_type: 'submission_submitted', label: '作業報告を提出しました',
    user_id: userId,
  });
}

export async function acceptWorkReport(taskId: string, submissionId: string, userId: string): Promise<void> {
  const task = await getTask(taskId);
  if (!task) return;
  const ts = new Date().toISOString();
  await updateSubmission(submissionId, { submission_status: 'accepted', reviewed_by_user_id: userId, reviewed_at: ts });
  const subs = await getAllSubmissionsByTask(taskId);
  const sub = subs.find((s) => s.id === submissionId);
  if (sub) {
    await updateAssignment(sub.assignment_id, { progress_status: 'accepted', completed_at: ts });
  }
  await addActivityEvent({
    task_id: taskId, project_id: task.project_id,
    event_type: 'work_report_accepted', label: '作業報告を受領しました',
    user_id: userId,
  });
  await checkAndAutoClose(taskId);
}

export async function returnWorkReport(taskId: string, submissionId: string, reason: string, userId: string): Promise<void> {
  const task = await getTask(taskId);
  if (!task) return;
  const ts = new Date().toISOString();
  await updateSubmission(submissionId, { submission_status: 'returned', reviewed_by_user_id: userId, reviewed_at: ts, review_comment: reason });
  const subs = await getAllSubmissionsByTask(taskId);
  const sub = subs.find((s) => s.id === submissionId);
  if (sub) {
    await updateAssignment(sub.assignment_id, { progress_status: 'returned', completed_at: null });
  }
  await addActivityEvent({
    task_id: taskId, project_id: task.project_id,
    event_type: 'work_report_returned', label: '作業報告を差戻しました',
    user_id: userId, reason,
  });
}

// === Exempt / out of scope ===
export async function exemptAssignee(taskId: string, assignmentId: string, reason: string, userId: string): Promise<void> {
  const task = await getTask(taskId);
  if (!task) return;
  await updateAssignment(assignmentId, { eligibility_status: 'exempted' });
  const reqs = await getRequirementsByAssignment(assignmentId);
  for (const r of reqs) {
    if (r.requirement_status === 'required') {
      await updateRequirement(r.id, { requirement_status: 'not_required' });
    }
  }
  await addActivityEvent({
    task_id: taskId, project_id: task.project_id,
    event_type: 'assignment_exempted', label: '対象者を免除しました',
    user_id: userId, reason,
  });
  await checkAndAutoClose(taskId);
}

export async function outOfScopeAssignee(taskId: string, assignmentId: string, reason: string, userId: string): Promise<void> {
  const task = await getTask(taskId);
  if (!task) return;
  await updateAssignment(assignmentId, { eligibility_status: 'out_of_scope' });
  const reqs = await getRequirementsByAssignment(assignmentId);
  for (const r of reqs) {
    if (r.requirement_status === 'required') {
      await updateRequirement(r.id, { requirement_status: 'not_required' });
    }
  }
  await addActivityEvent({
    task_id: taskId, project_id: task.project_id,
    event_type: 'assignment_out_of_scope', label: '対象者を対象外にしました',
    user_id: userId, reason,
  });
  await checkAndAutoClose(taskId);
}

// === Force close ===
export async function forceCloseTask(taskId: string, reason: string, userId: string): Promise<void> {
  const task = await getTask(taskId);
  if (!task) return;
  if (task.status !== 'draft' && task.status !== 'open') return;
  const ts = new Date().toISOString();
  await setTaskStatus(taskId, 'closed', {
    close_type: 'forced', close_reason: reason,
    closed_by_user_id: userId, closed_at: ts,
  });
  await addActivityEvent({
    task_id: taskId, project_id: task.project_id,
    event_type: 'task_forced_closed', label: '強制終了しました',
    user_id: userId, reason,
  });
}

// === Archive ===
export async function archiveTask(taskId: string, userId: string): Promise<void> {
  const task = await getTask(taskId);
  if (!task || task.status !== 'closed') return;
  const ts = new Date().toISOString();
  await setTaskStatus(taskId, 'archived', { archived_at: ts });
  await addActivityEvent({
    task_id: taskId, project_id: task.project_id,
    event_type: 'task_archived', label: 'アーカイブしました',
    user_id: userId,
  });
}

// === Auto-close helper ===
async function checkAndAutoClose(taskId: string): Promise<void> {
  const task = await getTask(taskId);
  if (!task || task.status !== 'open') return;
  const assignments = await getAssignmentsByTask(taskId);
  const requirements = await getAllRequirementsForTask(taskId);
  if (checkAutoClose(task, assignments, requirements)) {
    const ts = new Date().toISOString();
    await setTaskStatus(taskId, 'closed', {
      close_type: 'auto', closed_at: ts, close_reason: null, closed_by_user_id: null,
    });
    await addActivityEvent({
      task_id: taskId, project_id: task.project_id,
      event_type: 'task_auto_closed', label: '全員の条件達成により通常終了しました',
      user_id: '',
    });
  }
}

// === Chat / Notes / Todos ===
export async function sendChat(taskId: string, userId: string, text: string, attachmentFilename: string | null): Promise<void> {
  await repoAddChat(taskId, userId, text, attachmentFilename);
}

export async function addSharedNote(taskId: string, userId: string, color: string, text: string, attachmentFilename: string | null): Promise<void> {
  await repoAddNote(taskId, userId, 'shared', color, text, attachmentFilename);
}

export async function addPersonalNote(taskId: string, userId: string, color: string, text: string, attachmentFilename: string | null): Promise<void> {
  await repoAddNote(taskId, userId, 'personal', color, text, attachmentFilename);
}

export async function updateNote(noteId: string, userId: string, updates: { text?: string; color?: string; attachment_filename?: string | null }): Promise<void> {
  const note = await getNote(noteId);
  if (!note) return;
  if (note.user_id !== userId) return;
  await repoUpdateNote(noteId, updates);
}

export async function removeNote(noteId: string, userId: string): Promise<void> {
  const note = await getNote(noteId);
  if (!note) return;
  if (note.user_id !== userId) return;
  await deleteNoteAtomic(noteId);
}

export async function addTodo(taskId: string, userId: string, text: string): Promise<void> {
  await repoAddTodo(taskId, userId, text);
}

export async function toggleTodoItem(todoId: string): Promise<void> {
  await repoToggleTodo(todoId);
}

export async function removeTodo(todoId: string): Promise<void> {
  await repoDeleteTodo(todoId);
}

export async function getProjectMemberUsers(projectId: string): Promise<UserView[]> {
  const members = await getProjectMembers(projectId);
  return members.map((m) => ({ id: m.user.id, name: m.user.name, avatar_class: m.user.avatar_class, initials: m.user.initials }));
}

export { getUser };
export { getAllProjectMembers } from '../data/taskNaviRepository';

// === Personal Tasks ===
export async function loadPersonalTasks(userId: string): Promise<PersonalTaskView[]> {
  const [tasks, projects, members] = await Promise.all([
    getPersonalTasksByOwner(userId), getProjects(), getAllProjectMembers(),
  ]);
  const projectMap = new Map(projects.map((p) => [p.id, p]));
  const memberProjectIds = new Set(members.filter((m) => m.user_id === userId).map((m) => m.project_id));
  const allAttachments = await Promise.all(tasks.map((t) => getPersonalTaskAttachments(t.id)));
  const attMap = new Map(allAttachments.map((a, i) => [tasks[i].id, a]));
  return tasks.map((t) => buildPersonalTaskView(t, attMap.get(t.id) ?? [], projectMap, memberProjectIds));
}

export async function loadPersonalTaskDetail(taskId: string): Promise<PersonalTaskDetailView | null> {
  const task = await getPersonalTask(taskId);
  if (!task) return null;
  const [attachments, projects, members] = await Promise.all([
    getPersonalTaskAttachments(taskId), getProjects(), getAllProjectMembers(),
  ]);
  const projectMap = new Map(projects.map((p) => [p.id, p]));
  const memberProjectIds = new Set(members.filter((m) => m.user_id === task.owner_user_id).map((m) => m.project_id));
  return buildPersonalTaskDetailView(task, attachments, projectMap, memberProjectIds);
}

export async function createPersonalTaskItem(data: {
  owner_user_id: string;
  title: string;
  body: string;
  related_project_id: string | null;
  due_at: string | null;
}): Promise<PersonalTask> {
  return createPersonalTask({ ...data, status: 'draft' });
}

export async function startPersonalTask(taskId: string, userId: string): Promise<void> {
  const task = await getPersonalTask(taskId);
  if (!task || task.status !== 'draft') return;
  if (task.owner_user_id !== userId) return;
  if (!task.title.trim() || !task.due_at) return;
  const ts = new Date().toISOString();
  await updatePersonalTask(taskId, { status: 'open', started_at: ts });
}

export async function completePersonalTask(taskId: string, userId: string): Promise<void> {
  const task = await getPersonalTask(taskId);
  if (!task || task.status !== 'open') return;
  if (task.owner_user_id !== userId) return;
  const ts = new Date().toISOString();
  await updatePersonalTask(taskId, { status: 'archived', archived_at: ts });
}

export async function deletePersonalTask(taskId: string, userId: string): Promise<void> {
  const task = await getPersonalTask(taskId);
  if (!task) return;
  if (task.owner_user_id !== userId) return;
  if (task.status !== 'draft' && task.status !== 'open') return;
  const wasOverdue = task.status === 'open' && task.due_at !== null && new Date(task.due_at) < new Date();
  const hadRelatedProject = task.related_project_id !== null;
  await deletePersonalTaskAtomic(taskId, {
    owner_user_id: task.owner_user_id,
    was_overdue: wasOverdue,
    had_related_project: hadRelatedProject,
  });
}

export async function addPersonalAttachment(taskId: string, userId: string, displayName: string): Promise<void> {
  const task = await getPersonalTask(taskId);
  if (!task) return;
  if (task.owner_user_id !== userId) return;
  if (task.status !== 'draft' && task.status !== 'open') return;
  await addPersonalTaskAttachment(taskId, displayName);
}

export async function removePersonalAttachment(attachmentId: string, userId: string): Promise<void> {
  const db = getDb();
  const att = await db.personal_task_attachments.get(attachmentId);
  if (!att) return;
  const task = await getPersonalTask(att.personal_task_id);
  if (!task || task.owner_user_id !== userId) return;
  if (task.status !== 'draft' && task.status !== 'open') return;
  await deletePersonalTaskAttachment(attachmentId);
}

export async function updatePersonalTaskItem(taskId: string, userId: string, updates: Partial<PersonalTask>): Promise<void> {
  const task = await getPersonalTask(taskId);
  if (!task) return;
  if (task.owner_user_id !== userId) return;
  if (task.status === 'archived') return;
  if (task.status === 'open' && 'due_at' in updates) {
    delete updates.due_at;
  }
  await updatePersonalTask(taskId, updates);
}

// === Templates ===
export async function loadTemplates(userId: string): Promise<TemplateView[]> {
  const [allTemplates, users, favorites] = await Promise.all([
    getAllTemplates(),
    getUsers(),
    getTemplateFavorites(userId),
  ]);

  // テンプレートは個人保有とし、作成者本人のものだけを返す。
  const templates = allTemplates.filter(
    (template) => template.created_by_user_id === userId,
  );

  const userMap = new Map(users.map((user) => [user.id, user]));
  const favoriteIds = new Set(
    favorites.map((favorite) => favorite.template_id),
  );

  const allAttachments = await Promise.all(
    templates.map((template) => getTemplateAttachments(template.id)),
  );

  const attachmentMap = new Map(
    allAttachments.map((attachments, index) => [
      templates[index].id,
      attachments,
    ]),
  );

  return templates.map((template) =>
    buildTemplateView(
      template,
      attachmentMap.get(template.id) ?? [],
      userMap,
      favoriteIds,
    ),
  );
}

export async function createUserTemplate(data: {
  name: string;
  purpose: TaskPurpose;
  title: string;
  body: string;
  user_id: string;
}): Promise<TaskTemplate> {
  const template = await createTemplate({
    name: data.name.trim(),
    purpose: data.purpose,
    title_template: data.title.trim(),
    body_template: data.body.trim(),
    created_by_user_id: data.user_id,
    source_task_id: null,
  });

  return template;
}

export async function deleteUserTemplate(
  templateId: string,
  userId: string,
): Promise<void> {
  const template = await getTemplate(templateId);

  // 作成者本人以外の削除は許可しない。
  if (!template || template.created_by_user_id !== userId) return;

  await deleteTemplateAtomic(templateId, userId);
}
export async function saveTaskAsTemplate(data: {
  task_id: string;
  name: string;
  user_id: string;
}): Promise<TaskTemplate> {
  const task = await getTask(data.task_id);
  if (!task || (task.status !== 'closed')) throw new Error('Template can only be saved from closed tasks');
  if (task.created_by !== data.user_id) throw new Error('Only the task creator can save a template');
  const attachments = await getAttachmentsByTask(data.task_id);
  const template = await createTemplate({
    name: data.name,
    purpose: task.purpose,
    title_template: task.title,
    body_template: task.body,
    created_by_user_id: data.user_id,
    source_task_id: data.task_id,
  });
  for (let i = 0; i < attachments.length; i++) {
    const att = attachments[i];
    await addTemplateAttachment({
      template_id: template.id,
      display_name: att.name,
      attachment_type: att.attachment_type,
      sort_order: i,
    });
  }
  return template;
}

export async function createTaskFromTemplate(data: {
  template_id: string;
  project_id: string;
  user_id: string;
}): Promise<Task> {
  const template = await getTemplate(data.template_id);
  if (!template) throw new Error('Template not found');
  const attachments = await getTemplateAttachments(data.template_id);
  const task = await repoCreateTask({
    project_id: data.project_id,
    purpose: template.purpose,
    title: template.title_template,
    body: template.body_template,
    due_at: null,
    created_by: data.user_id,
    status: 'draft',
    assignee_user_ids: [],
    successor_user_id: null,
  });
  for (const att of attachments) {
    const created = await createAttachment({
      task_id: task.id,
      name: att.display_name,
      attachment_type: att.attachment_type,
      uploaded_by: data.user_id,
    });
    if (att.attachment_type === 'confirmation_required') {
      const assignments = await getAssignmentsByTask(task.id);
      const eligible = assignments.filter(isEligibleActive);
      for (const a of eligible) {
        await createRequirementsForAssignment(a.id, created.id, 1);
      }
    }
  }
  return task;
}

export async function toggleTemplateFavorite(templateId: string, userId: string): Promise<void> {
  const favorites = await getTemplateFavorites(userId);
  const isFav = favorites.some((f) => f.template_id === templateId);
  if (isFav) await removeTemplateFavorite(templateId, userId);
  else await addTemplateFavorite(templateId, userId);
}

// === Summary counts ===
export { computeSharedSummaryCounts, computePersonalSummaryCounts, computeMyTasksSummaryCounts };

// === Sorting, search, pagination re-exports ===
export { sortSharedTasks, sortPersonalTasks, searchSharedTasks, searchPersonalTasks, paginate };


// ==========================================================
// Chat attachment promotion workflow
// ==========================================================

// 一般メンバーがチャット添付を関連資料にするよう申請する。
export async function requestChatAttachmentPromotion(
  taskId: string,
  chatMessageId: string,
  userId: string,
): Promise<void> {
  const task = await getTask(taskId);

  if (!task || task.status !== 'open') {
    throw new Error('公開中の共有タスクでのみ申請できます。');
  }

  if (task.created_by === userId) {
    throw new Error('タスク作成者は申請せず、直接関連資料へ追加してください。');
  }

  const messages = await getChatMessages(taskId);
  const message = messages.find(
    (item) => item.id === chatMessageId && !!item.attachment_filename,
  );

  if (!message?.attachment_filename) {
    throw new Error('対象のチャット添付ファイルが見つかりません。');
  }

  const existingPromotion = await getChatAttachmentPromotionByChatMessage(
    taskId,
    chatMessageId,
  );

  if (existingPromotion?.status === 'approved') {
    throw new Error('このファイルはすでに関連資料として登録されています。');
  }

  if (existingPromotion?.status === 'pending') {
    throw new Error('このファイルはすでに関連資料化を申請済みです。');
  }

  await createChatAttachmentPromotion({
    task_id: taskId,
    chat_message_id: chatMessageId,
    attachment_filename: message.attachment_filename,
    requested_by_user_id: userId,
  });

  await addActivityEvent({
    task_id: taskId,
    project_id: task.project_id,
    event_type: 'chat_attachment_promotion_requested',
    label: `チャット添付「${message.attachment_filename}」の関連資料化を申請しました`,
    user_id: userId,
  });
}

// タスク作成者がチャット添付を直接、関連資料として登録する。
export async function addChatAttachmentAsReference(
  taskId: string,
  chatMessageId: string,
  userId: string,
): Promise<void> {
  const task = await getTask(taskId);

  if (!task || task.created_by !== userId) {
    throw new Error('関連資料への直接追加はタスク作成者のみ実行できます。');
  }

  if (task.status !== 'draft' && task.status !== 'open') {
    throw new Error('この状態のタスクには関連資料を追加できません。');
  }

  const messages = await getChatMessages(taskId);
  const message = messages.find(
    (item) => item.id === chatMessageId && !!item.attachment_filename,
  );

  if (!message?.attachment_filename) {
    throw new Error('対象のチャット添付ファイルが見つかりません。');
  }

  const attachments = await getAttachmentsByTask(taskId);
  const existingAttachment = attachments.find(
    (item) =>
      item.name === message.attachment_filename &&
      item.attachment_status === 'active',
  );

  if (existingAttachment) {
    throw new Error('このファイルはすでに関連資料として登録されています。');
  }

  const attachment = await createAttachment({
    task_id: taskId,
    name: message.attachment_filename,
    attachment_type: 'reference',
    uploaded_by: userId,
  });

  const promotion = await getChatAttachmentPromotionByChatMessage(
    taskId,
    chatMessageId,
  );

  // 一般メンバーが既に申請済みの場合、直接追加も許可済みとして記録する。
  if (promotion?.status === 'pending') {
    await approveChatAttachmentPromotion(
      promotion.id,
      userId,
      attachment.id,
    );
  }

  await addActivityEvent({
    task_id: taskId,
    project_id: task.project_id,
    event_type: 'chat_attachment_promoted',
    label: `チャット添付「${message.attachment_filename}」を関連資料に追加しました`,
    user_id: userId,
  });
}

// タスク作成者が一般メンバーの申請を許可し、正式な関連資料として登録する。
export async function approveChatAttachmentPromotionRequest(
  taskId: string,
  promotionId: string,
  userId: string,
): Promise<void> {
  const task = await getTask(taskId);

  if (!task || task.created_by !== userId) {
    throw new Error('関連資料化申請の許可はタスク作成者のみ実行できます。');
  }

  const promotions = await getChatAttachmentPromotionsByTask(taskId);
  const promotion = promotions.find((item) => item.id === promotionId);

  if (!promotion || promotion.status !== 'pending') {
    throw new Error('処理対象の関連資料化申請が見つかりません。');
  }

  const messages = await getChatMessages(taskId);
  const message = messages.find(
    (item) =>
      item.id === promotion.chat_message_id &&
      item.attachment_filename === promotion.attachment_filename,
  );

  if (!message?.attachment_filename) {
    throw new Error('申請対象のチャット添付ファイルが見つかりません。');
  }

  const attachments = await getAttachmentsByTask(taskId);
  const existingAttachment = attachments.find(
    (item) =>
      item.name === message.attachment_filename &&
      item.attachment_status === 'active',
  );

  let attachmentId: string | null = existingAttachment?.id ?? null;

  if (!existingAttachment) {
    const attachment = await createAttachment({
      task_id: taskId,
      name: message.attachment_filename,
      attachment_type: 'reference',
      uploaded_by: userId,
    });

    attachmentId = attachment.id;
  }

  await approveChatAttachmentPromotion(
    promotion.id,
    userId,
    attachmentId,
  );

  await addActivityEvent({
    task_id: taskId,
    project_id: task.project_id,
    event_type: 'chat_attachment_promotion_approved',
    label: `チャット添付「${message.attachment_filename}」の関連資料化を許可しました`,
    user_id: userId,
  });
}

// ==========================================================
// Completed / archived shared task review workflow
// ==========================================================

function isCompletionReviewAdministratorRole(role: string): boolean {
  const normalized = role.trim().toLowerCase();

  return [
    '管理者',
    'プロジェクト管理者',
    'administrator',
    'admin',
  ].includes(normalized);
}

async function canManageTaskCompletionReview(
  taskId: string,
  userId: string,
): Promise<boolean> {
  const task = await getTask(taskId);

  if (!task) return false;

  // タスク作成者は常に操作できます。
  if (task.created_by === userId) return true;

  const members = await getProjectMembers(task.project_id);

  return members.some(
    (member) =>
      member.user.id === userId &&
      isCompletionReviewAdministratorRole(member.role),
  );
}

export async function loadTaskCompletionReviewView(
  taskId: string,
) {
  const [review, users] = await Promise.all([
    completionRepo.getTaskCompletionReview(taskId),
    getUsers(),
  ]);

  if (!review) return null;

  const userMap = new Map(users.map((user) => [user.id, user]));
  const updatedBy = review.updated_by_user_id
    ? userMap.get(review.updated_by_user_id)
    : undefined;

  return {
    task_id: review.task_id,
    ai_analysis_output_generated_at: review.ai_analysis_output_generated_at,
    ai_summary: review.ai_summary,
    admin_comment: review.admin_comment,
    updated_by_user_id: review.updated_by_user_id,
    updated_by_name: updatedBy?.name ?? null,
    updated_at: review.updated_at,
    updated_at_label: new Date(review.updated_at).toLocaleString('ja-JP'),
  };
}

export async function loadTaskDetailWithCompletionReview(
  taskId: string,
  currentUserId: string,
): Promise<TaskDetailView | null> {
  const [detail, completionReview, canManage] = await Promise.all([
    loadTaskDetail(taskId, currentUserId),
    loadTaskCompletionReviewView(taskId),
    canManageTaskCompletionReview(taskId, currentUserId),
  ]);

  if (!detail) return null;

  return {
    ...detail,
    completion_review: completionReview,
    can_manage_completion_review: canManage,
  };
}

export async function saveTaskCompletionReview(
  taskId: string,
  userId: string,
  data: {
    ai_summary: string | null;
    admin_comment: string | null;
  },
): Promise<void> {
  const task = await getTask(taskId);

  if (!task || (task.status !== 'closed')) {
    throw new Error('完了済みのタスクでのみ保存できます。');
  }

  if (!(await canManageTaskCompletionReview(taskId, userId))) {
    throw new Error('AIまとめ・管理者所感を編集する権限がありません。');
  }

  await completionRepo.upsertTaskCompletionReview({
    task_id: taskId,
    updated_by_user_id: userId,
    ai_summary: data.ai_summary,
    admin_comment: data.admin_comment,
  });
}

export async function generateTaskAiAnalysisOutput(
  taskId: string,
  userId: string,
): Promise<void> {
  const task = await getTask(taskId);

  if (!task || (task.status !== 'closed')) {
    throw new Error('完了済みのタスクでのみ実行できます。');
  }

  if (!(await canManageTaskCompletionReview(taskId, userId))) {
    throw new Error('AI分析用出力を実行する権限がありません。');
  }

  const existingReview = await completionRepo.getTaskCompletionReview(taskId);

  // 外部API連携は将来実装とし、今回は一度だけ実行済み状態を記録します。
  if (existingReview?.ai_analysis_output_generated_at) return;

  await completionRepo.upsertTaskCompletionReview({
    task_id: taskId,
    updated_by_user_id: userId,
    ai_analysis_output_generated_at: new Date().toISOString(),
  });

  await addActivityEvent({
    task_id: taskId,
    project_id: task.project_id,
    event_type: 'ai_analysis_output_prepared',
    label: 'AI分析用出力を準備しました',
    user_id: userId,
  });
}

export async function archiveTaskWithCompletionReview(
  taskId: string,
  userId: string,
  data: {
    ai_summary: string | null;
    admin_comment: string | null;
  },
): Promise<void> {
  const task = await getTask(taskId);

  if (!task || task.status !== 'closed') {
    throw new Error('完了済みのタスクのみアーカイブできます。');
  }

  if (!(await canManageTaskCompletionReview(taskId, userId))) {
    throw new Error('このタスクをアーカイブする権限がありません。');
  }

  await completionRepo.archiveTaskWithCompletionReviewAtomic({
    task_id: taskId,
    ai_summary: data.ai_summary,
    admin_comment: data.admin_comment,
    updated_by_user_id: userId,
  });

  await addActivityEvent({
    task_id: taskId,
    project_id: task.project_id,
    event_type: 'task_archived',
    label: 'タスクをアーカイブしました',
    user_id: userId,
  });
}

export async function deleteClosedSharedTask(
  taskId: string,
  userId: string,
): Promise<void> {
  const task = await getTask(taskId);

  if (!task || (task.status !== 'closed')) {
    throw new Error('完了済みのタスクのみ削除できます。');
  }

  if (!(await canManageTaskCompletionReview(taskId, userId))) {
    throw new Error('このタスクを削除する権限がありません。');
  }

  await completionRepo.deleteSharedTaskAtomic(taskId);
}

export async function toggleArchivedTaskFavorite(
  taskId: string,
  userId: string,
): Promise<void> {
  const favorites = await completionRepo.getTaskFavoritesByUser(userId);

  const isFavorited = favorites.some(
    (favorite) => favorite.task_id === taskId,
  );

  if (isFavorited) {
    await completionRepo.removeTaskFavorite(taskId, userId);
  }
  else {
    await completionRepo.addTaskFavorite(taskId, userId);
  }
}

export async function loadArchivedTasksWithMetadata(
  currentUserId: string,
): Promise<TaskView[]> {
  const archivedTasks = await loadArchivedTasksForUser(currentUserId);

  const [reviews, favorites] = await Promise.all([
    completionRepo.getTaskCompletionReviews(
      archivedTasks.map((task) => task.id),
    ),
    completionRepo.getTaskFavoritesByUser(currentUserId),
  ]);

  const reviewByTaskId = new Map(
    reviews.map((review) => [review.task_id, review]),
  );

  const favoriteTaskIds = new Set(
    favorites.map((favorite) => favorite.task_id),
  );

  return archivedTasks.map((task) => {
    const review = reviewByTaskId.get(task.id);

    return {
      ...task,
      archived_at: task.archived_at ?? task.updated_at,
      ai_analysis_output_generated_at:
        review?.ai_analysis_output_generated_at ?? null,
      ai_summary: review?.ai_summary ?? null,
      admin_comment: review?.admin_comment ?? null,
      is_favorited: favoriteTaskIds.has(task.id),
    };
  });
}