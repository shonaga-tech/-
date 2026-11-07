import { getDb } from './taskNaviDb';
import type { TaskCompletionReview, TaskFavorite } from '../domain/taskNaviTypes';
import type { ChatAttachmentPromotion } from '../domain/taskNaviTypes';
import type {
  Project, User, Task, TaskAssignment, TaskNote, TaskNoteFavorite,
  TaskPurpose, TaskStatus, TaskAttachment, AttachmentRevision,
  AssignmentDocumentRequirement, AssignmentSubmission, TaskActivityEvent,
  AttachmentType, CloseType, ProgressStatus, EligibilityStatus,
  SubmissionType, SubmissionStatus, AccessMethod, RequirementStatus,
  PersonalTask, PersonalTaskAttachment, PersonalTaskDeletionEvent,
  TaskTemplate, TaskTemplateAttachment, TaskTemplateFavorite,
} from '../domain/taskNaviTypes';

function uuid(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') return crypto.randomUUID();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function now(): string {
  return new Date().toISOString();
}

// === Projects ===
export async function getProjects(): Promise<Project[]> {
  return getDb().projects.toArray();
}

// === Users ===
export async function getUsers(): Promise<User[]> {
  return getDb().users.toArray();
}

export async function getUser(id: string): Promise<User | undefined> {
  return getDb().users.get(id);
}

export async function getProjectMembers(projectId: string): Promise<{ user: User; role: string }[]> {
  const db = getDb();
  const members = await db.project_members.where('project_id').equals(projectId).toArray();
  const users = await db.users.toArray();
  const userMap = new Map(users.map((u) => [u.id, u]));
  return members.map((m) => ({ user: userMap.get(m.user_id)!, role: m.role })).filter((m) => m.user);
}

export async function getAllProjectMembers(): Promise<{ project_id: string; user_id: string; role: string }[]> {
  return getDb().project_members.toArray();
}

// === Tasks ===
export async function getTasksByProject(projectId: string): Promise<Task[]> {
  return getDb().tasks.where('project_id').equals(projectId).toArray();
}

export async function getAllTasks(): Promise<Task[]> {
  return getDb().tasks.toArray();
}

export async function getTask(id: string): Promise<Task | undefined> {
  return getDb().tasks.get(id);
}

export async function createTask(data: {
  project_id: string;
  purpose: TaskPurpose;
  title: string;
  body: string;
  due_at: string | null;
  created_by: string;
  status: TaskStatus;
  assignee_user_ids: string[];
  successor_user_id: string | null;
}): Promise<Task> {
  const db = getDb();
  const id = uuid();
  const ts = now();
  const task: Task = {
    id,
    project_id: data.project_id,
    purpose: data.purpose,
    title: data.title,
    body: data.body,
    status: data.status,
    due_at: data.due_at,
    created_by: data.created_by,
    created_at: ts,
    updated_at: ts,
    opened_at: data.status === 'open' ? ts : null,
    closed_at: null,
    close_type: null,
    close_reason: null,
    closed_by_user_id: null,
    archived_at: null,
    successor_user_id: data.successor_user_id,
  };
  const assignments: TaskAssignment[] = data.assignee_user_ids.map((uid) => ({
    id: uuid(),
    task_id: id,
    user_id: uid,
    progress_status: 'pending' as const,
    assignment_status: 'active' as const,
    eligibility_status: 'eligible' as const,
    completed_at: null,
    updated_at: ts,
  }));
  await db.transaction('rw', [db.tasks, db.task_assignments, db.task_activity_events], async () => {
    await db.tasks.put(task);
    await db.task_assignments.bulkPut(assignments);
    await db.task_activity_events.put({
      id: uuid(),
      task_id: id,
      project_id: data.project_id,
      event_type: data.status === 'open' ? 'task_published' : 'task_drafted',
      label: data.status === 'open' ? 'タスクを公開しました' : '下書きとして保存しました',
      user_id: data.created_by,
      created_at: ts,
      reason: null,
    });
  });
  return task;
}

export async function updateTask(taskId: string, updates: Partial<Task>): Promise<void> {
  await getDb().tasks.update(taskId, { ...updates, updated_at: now() });
}

export async function setTaskStatus(taskId: string, status: TaskStatus, extra?: Partial<Task>): Promise<void> {
  await getDb().tasks.update(taskId, { status, ...extra, updated_at: now() });
}

// === Assignments ===
export async function getAssignmentsByTask(taskId: string): Promise<TaskAssignment[]> {
  return getDb().task_assignments.where('task_id').equals(taskId).toArray();
}

export async function getAllAssignments(taskIds: string[]): Promise<TaskAssignment[]> {
  const db = getDb();
  const result: TaskAssignment[] = [];
  for (const id of taskIds) {
    const a = await db.task_assignments.where('task_id').equals(id).toArray();
    result.push(...a);
  }
  return result;
}

export async function getAllAssignmentsByUser(userId: string): Promise<TaskAssignment[]> {
  return getDb().task_assignments.where('user_id').equals(userId).toArray();
}

export async function updateAssignment(assignmentId: string, updates: Partial<TaskAssignment>): Promise<void> {
  await getDb().task_assignments.update(assignmentId, { ...updates, updated_at: now() });
}

export async function getAssignment(assignmentId: string): Promise<TaskAssignment | undefined> {
  return getDb().task_assignments.get(assignmentId);
}

export async function getAssignmentByUserAndTask(taskId: string, userId: string): Promise<TaskAssignment | undefined> {
  const db = getDb();
  const all = await db.task_assignments.where('task_id').equals(taskId).toArray();
  return all.find((a) => a.user_id === userId);
}

// === Submissions ===
export async function getSubmissionsByAssignment(assignmentId: string): Promise<AssignmentSubmission[]> {
  const db = getDb();
  return db.assignment_submissions.where('assignment_id').equals(assignmentId).sortBy('submitted_at');
}

export async function getAllSubmissionsByTask(taskId: string): Promise<AssignmentSubmission[]> {
  const db = getDb();
  const assignments = await db.task_assignments.where('task_id').equals(taskId).toArray();
  const result: AssignmentSubmission[] = [];
  for (const a of assignments) {
    const subs = await db.assignment_submissions.where('assignment_id').equals(a.id).toArray();
    result.push(...subs);
  }
  return result;
}
export async function createSubmission(data: {
  assignment_id: string;
  submission_type: SubmissionType;
  body: string;
  submitted_by: string;
  deliverable_name?: string | null;
  storage_location?: string | null;
  supplementary_note?: string | null;
}): Promise<AssignmentSubmission> {
  const db = getDb();

  const existing = await db.assignment_submissions
    .where('assignment_id')
    .equals(data.assignment_id)
    .toArray();

  const maxNo = existing.reduce(
    (max, submission) => Math.max(max, submission.submission_no),
    0,
  );

  const ts = now();

  const submission: AssignmentSubmission = {
    id: uuid(),
    assignment_id: data.assignment_id,
    submission_type: data.submission_type,
    submission_no: maxNo + 1,
    body: data.body,

    // 非インデックス項目として既存レコードと共存させる。
    deliverable_name: data.deliverable_name ?? null,
    storage_location: data.storage_location ?? null,
    supplementary_note: data.supplementary_note ?? null,

    submission_status: 'submitted',
    submitted_by: data.submitted_by,
    submitted_at: ts,
    reviewed_by_user_id: null,
    reviewed_at: null,
    review_comment: null,
  };

  await db.assignment_submissions.put(submission);

  return submission;
}

export async function updateSubmission(submissionId: string, updates: Partial<AssignmentSubmission>): Promise<void> {
  await getDb().assignment_submissions.update(submissionId, updates);
}

// === Attachments ===
export async function getAttachmentsByTask(taskId: string): Promise<TaskAttachment[]> {
  return getDb().task_attachments.where('task_id').equals(taskId).toArray();
}

export async function getAttachment(id: string): Promise<TaskAttachment | undefined> {
  return getDb().task_attachments.get(id);
}

export async function createAttachment(data: {
  task_id: string;
  name: string;
  attachment_type: AttachmentType;
  uploaded_by: string;
}): Promise<TaskAttachment> {
  const db = getDb();
  const id = uuid();
  const ts = now();
  const att: TaskAttachment = {
    id,
    task_id: data.task_id,
    name: data.name,
    attachment_type: data.attachment_type,
    attachment_status: 'active',
    uploaded_by: data.uploaded_by,
    uploaded_at: ts,
    current_revision_no: 1,
    withdrawn_at: null,
    withdrawal_reason: null,
  };
  const rev: AttachmentRevision = {
    id: uuid(),
    attachment_id: id,
    revision_no: 1,
    filename: data.name,
    revision_reason: null,
    uploaded_by: data.uploaded_by,
    uploaded_at: ts,
  };
  await db.transaction('rw', [db.task_attachments, db.attachment_revisions], async () => {
    await db.task_attachments.put(att);
    await db.attachment_revisions.put(rev);
  });
  return att;
}

export async function getRevisionsByAttachment(attachmentId: string): Promise<AttachmentRevision[]> {
  return getDb().attachment_revisions.where('attachment_id').equals(attachmentId).sortBy('revision_no');
}

export async function reviseAttachment(attachmentId: string, reason: string, userId: string): Promise<void> {
  const db = getDb();
  const att = await db.task_attachments.get(attachmentId);
  if (!att) return;
  const newRevNo = att.current_revision_no + 1;
  const ts = now();
  const rev: AttachmentRevision = {
    id: uuid(),
    attachment_id: attachmentId,
    revision_no: newRevNo,
    filename: att.name,
    revision_reason: reason,
    uploaded_by: userId,
    uploaded_at: ts,
  };
  await db.transaction('rw', [db.task_attachments, db.attachment_revisions], async () => {
    await db.task_attachments.update(attachmentId, { current_revision_no: newRevNo });
    await db.attachment_revisions.put(rev);
  });
}

export async function withdrawAttachment(attachmentId: string, reason: string): Promise<void> {
  const db = getDb();
  const ts = now();
  await db.task_attachments.update(attachmentId, {
    attachment_status: 'withdrawn',
    withdrawn_at: ts,
    withdrawal_reason: reason,
  });
}

// === Document Requirements ===
export async function getRequirementsByAssignment(assignmentId: string): Promise<AssignmentDocumentRequirement[]> {
  return getDb().assignment_document_requirements.where('assignment_id').equals(assignmentId).toArray();
}

export async function getRequirementsByAttachment(attachmentId: string): Promise<AssignmentDocumentRequirement[]> {
  return getDb().assignment_document_requirements.where('attachment_id').equals(attachmentId).toArray();
}

export async function getAllRequirementsForTask(taskId: string): Promise<AssignmentDocumentRequirement[]> {
  const db = getDb();
  const assignments = await db.task_assignments.where('task_id').equals(taskId).toArray();
  const result: AssignmentDocumentRequirement[] = [];
  for (const a of assignments) {
    const reqs = await db.assignment_document_requirements.where('assignment_id').equals(a.id).toArray();
    result.push(...reqs);
  }
  return result;
}

export async function createRequirementsForAssignment(assignmentId: string, attachmentId: string, revisionNo: number): Promise<void> {
  const db = getDb();
  await db.assignment_document_requirements.put({
    id: uuid(),
    assignment_id: assignmentId,
    attachment_id: attachmentId,
    required_revision_no: revisionNo,
    accessed_revision_no: null,
    accessed_at: null,
    access_method: null,
    confirmed_revision_no: null,
    confirmed_at: null,
    requirement_status: 'required',
  });
}

export async function updateRequirement(reqId: string, updates: Partial<AssignmentDocumentRequirement>): Promise<void> {
  await getDb().assignment_document_requirements.update(reqId, updates);
}

export async function getRequirement(assignmentId: string, attachmentId: string): Promise<AssignmentDocumentRequirement | undefined> {
  const db = getDb();
  const all = await db.assignment_document_requirements.where('assignment_id').equals(assignmentId).toArray();
  return all.find((r) => r.attachment_id === attachmentId);
}

// === Chat ===
export async function getChatMessages(taskId: string): Promise<{ id: string; user_id: string; text: string; attachment_filename: string | null; created_at: string }[]> {
  return getDb().task_chat_messages.where('task_id').equals(taskId).sortBy('created_at');
}

export async function addChatMessage(taskId: string, userId: string, text: string, attachmentFilename: string | null): Promise<void> {
  await getDb().task_chat_messages.put({
    id: uuid(), task_id: taskId, user_id: userId, text,
    attachment_filename: attachmentFilename, created_at: now(),
  });
}

// === Notes ===
export async function getNotes(taskId: string): Promise<TaskNote[]> {
  return getDb().task_notes.where('task_id').equals(taskId).sortBy('created_at');
}

export async function getAllNotes(): Promise<TaskNote[]> {
  return getDb().task_notes.toArray();
}

export async function addNote(taskId: string, userId: string, visibility: 'shared' | 'personal', color: string, text: string, attachmentFilename: string | null): Promise<void> {
  const ts = now();
  await getDb().task_notes.put({
    id: uuid(), task_id: taskId, user_id: userId, visibility, color, text,
    attachment_filename: attachmentFilename, created_at: ts, updated_at: ts,
  });
}

export async function updateNote(noteId: string, updates: { text?: string; color?: string; attachment_filename?: string | null }): Promise<void> {
  const db = getDb();
  const note = await db.task_notes.get(noteId);
  if (!note) return;
  await db.task_notes.put({
    ...note,
    ...updates,
    updated_at: now(),
  });
}

export async function deleteNoteAtomic(noteId: string): Promise<void> {
  const db = getDb();
  await db.transaction('rw', [db.task_notes, db.task_note_favorites], async () => {
    await db.task_notes.delete(noteId);
    await db.task_note_favorites.where('note_id').equals(noteId).delete();
  });
}

export async function getNote(noteId: string): Promise<TaskNote | undefined> {
  return getDb().task_notes.get(noteId);
}

// === Note Favorites ===
export async function getNoteFavorites(userId: string): Promise<TaskNoteFavorite[]> {
  return getDb().task_note_favorites.where('user_id').equals(userId).toArray();
}

export async function addNoteFavorite(noteId: string, userId: string): Promise<void> {
  const db = getDb();
  const existing = await db.task_note_favorites
    .where('[note_id+user_id]').equals([noteId, userId]).first();
  if (!existing) {
    await db.task_note_favorites.put({
      id: uuid(), note_id: noteId, user_id: userId, created_at: now(),
    });
  }
}

export async function removeNoteFavorite(noteId: string, userId: string): Promise<void> {
  const db = getDb();
  const fav = await db.task_note_favorites
    .where('[note_id+user_id]').equals([noteId, userId]).first();
  if (fav) await db.task_note_favorites.delete(fav.id);
}

// === Todos ===
export async function getTodos(taskId: string, userId: string): Promise<{ id: string; text: string; done: boolean }[]> {
  const db = getDb();
  const all = await db.task_todos.where('task_id').equals(taskId).toArray();
  return all.filter((t) => t.user_id === userId);
}

export async function addTodo(taskId: string, userId: string, text: string): Promise<void> {
  await getDb().task_todos.put({
    id: uuid(), task_id: taskId, user_id: userId, text, done: false, created_at: now(),
  });
}

export async function toggleTodo(todoId: string): Promise<void> {
  const db = getDb();
  const todo = await db.task_todos.get(todoId);
  if (todo) await db.task_todos.update(todoId, { done: !todo.done });
}

export async function deleteTodo(todoId: string): Promise<void> {
  await getDb().task_todos.delete(todoId);
}

// === Activity ===
export async function getRecentActivity(projectId: string, limit: number): Promise<TaskActivityEvent[]> {
  const db = getDb();
  const events = await db.task_activity_events.where('project_id').equals(projectId).reverse().sortBy('created_at');
  return events.slice(0, limit);
}

export async function getActivityByTask(taskId: string, limit: number): Promise<TaskActivityEvent[]> {
  const db = getDb();
  const events = await db.task_activity_events.where('task_id').equals(taskId).reverse().sortBy('created_at');
  return events.slice(0, limit);
}

export async function addActivityEvent(data: {
  task_id: string;
  project_id: string;
  event_type: string;
  label: string;
  user_id: string;
  reason?: string | null;
}): Promise<void> {
  await getDb().task_activity_events.put({
    id: uuid(),
    task_id: data.task_id,
    project_id: data.project_id,
    event_type: data.event_type,
    label: data.label,
    user_id: data.user_id,
    created_at: now(),
    reason: data.reason ?? null,
  });
}

// === Personal Tasks ===
export async function getPersonalTasksByOwner(userId: string): Promise<PersonalTask[]> {
  return getDb().personal_tasks.where('owner_user_id').equals(userId).toArray();
}

export async function getPersonalTask(id: string): Promise<PersonalTask | undefined> {
  return getDb().personal_tasks.get(id);
}

export async function createPersonalTask(data: {
  owner_user_id: string;
  title: string;
  body: string;
  related_project_id: string | null;
  due_at: string | null;
  status: PersonalTask['status'];
}): Promise<PersonalTask> {
  const db = getDb();
  const id = uuid();
  const ts = now();
  const task: PersonalTask = {
    id,
    owner_user_id: data.owner_user_id,
    title: data.title,
    body: data.body,
    related_project_id: data.related_project_id,
    due_at: data.due_at,
    status: data.status,
    created_at: ts,
    updated_at: ts,
    started_at: null,
    archived_at: null,
  };
  await db.personal_tasks.put(task);
  return task;
}

export async function updatePersonalTask(id: string, updates: Partial<PersonalTask>): Promise<void> {
  await getDb().personal_tasks.update(id, { ...updates, updated_at: now() });
}

export async function deletePersonalTaskAtomic(id: string, deletionEvent: { owner_user_id: string; was_overdue: boolean; had_related_project: boolean }): Promise<void> {
  const db = getDb();
  await db.transaction('rw', [db.personal_tasks, db.personal_task_attachments, db.personal_task_deletion_events], async () => {
    await db.personal_tasks.delete(id);
    await db.personal_task_attachments.where('personal_task_id').equals(id).delete();
    await db.personal_task_deletion_events.put({
      id: uuid(),
      owner_user_id: deletionEvent.owner_user_id,
      deleted_at: now(),
      was_overdue: deletionEvent.was_overdue,
      had_related_project: deletionEvent.had_related_project,
    });
  });
}

export async function getPersonalTaskAttachments(taskId: string): Promise<PersonalTaskAttachment[]> {
  return getDb().personal_task_attachments.where('personal_task_id').equals(taskId).toArray();
}

export async function addPersonalTaskAttachment(taskId: string, displayName: string): Promise<void> {
  await getDb().personal_task_attachments.put({
    id: uuid(),
    personal_task_id: taskId,
    display_name: displayName,
    created_at: now(),
  });
}

export async function deletePersonalTaskAttachment(attachmentId: string): Promise<void> {
  await getDb().personal_task_attachments.delete(attachmentId);
}

export async function createPersonalTaskDeletionEvent(data: {
  owner_user_id: string;
  was_overdue: boolean;
  had_related_project: boolean;
}): Promise<void> {
  await getDb().personal_task_deletion_events.put({
    id: uuid(),
    owner_user_id: data.owner_user_id,
    deleted_at: now(),
    was_overdue: data.was_overdue,
    had_related_project: data.had_related_project,
  });
}

// === Templates ===
export async function getAllTemplates(): Promise<TaskTemplate[]> {
  return getDb().task_templates.where('status').equals('active').toArray();
}

export async function getTemplate(id: string): Promise<TaskTemplate | undefined> {
  return getDb().task_templates.get(id);
}

export async function createTemplate(data: {
  name: string;
  purpose: TaskPurpose;
  title_template: string;
  body_template: string;
  created_by_user_id: string;
  source_task_id: string | null;
}): Promise<TaskTemplate> {
  const db = getDb();
  const id = uuid();
  const ts = now();
  const template: TaskTemplate = {
    id,
    name: data.name,
    purpose: data.purpose,
    title_template: data.title_template,
    body_template: data.body_template,
    created_by_user_id: data.created_by_user_id,
    created_at: ts,
    updated_at: ts,
    source_task_id: data.source_task_id,
    status: 'active',
  };
  await db.task_templates.put(template);
  return template;
}

export async function getTemplateAttachments(templateId: string): Promise<TaskTemplateAttachment[]> {
  return getDb().task_template_attachments.where('template_id').equals(templateId).sortBy('sort_order');
}

export async function addTemplateAttachment(data: {
  template_id: string;
  display_name: string;
  attachment_type: AttachmentType;
  sort_order: number;
}): Promise<void> {
  await getDb().task_template_attachments.put({
    id: uuid(),
    template_id: data.template_id,
    display_name: data.display_name,
    attachment_type: data.attachment_type,
    sort_order: data.sort_order,
  });
}


export async function deleteTemplateAtomic(templateId: string, ownerUserId: string): Promise<void> {
  const db = getDb();
  const template = await db.task_templates.get(templateId);

  // 他ユーザーのテンプレートは削除不可
  if (!template || template.created_by_user_id !== ownerUserId) return;

  await db.transaction(
    'rw',
    [db.task_templates, db.task_template_attachments, db.task_template_favorites],
    async () => {
      await db.task_template_attachments.where('template_id').equals(templateId).delete();
      await db.task_template_favorites.where('template_id').equals(templateId).delete();
      await db.task_templates.delete(templateId);
    },
  );
}
export async function getTemplateFavorites(userId: string): Promise<TaskTemplateFavorite[]> {
  return getDb().task_template_favorites.where('user_id').equals(userId).toArray();
}

export async function addTemplateFavorite(templateId: string, userId: string): Promise<void> {
  const db = getDb();
  const existing = await db.task_template_favorites
    .where('[template_id+user_id]').equals([templateId, userId]).first();
  if (!existing) {
    await db.task_template_favorites.put({
      id: uuid(), template_id: templateId, user_id: userId, created_at: now(),
    });
  }
}

export async function removeTemplateFavorite(templateId: string, userId: string): Promise<void> {
  const db = getDb();
  const fav = await db.task_template_favorites
    .where('[template_id+user_id]').equals([templateId, userId]).first();
  if (fav) await db.task_template_favorites.delete(fav.id);
}


// ==========================================================
// Chat attachment promotion requests
// ==========================================================

export async function getChatAttachmentPromotionsByTask(
  taskId: string,
): Promise<ChatAttachmentPromotion[]> {
  return getDb()
    .chat_attachment_promotions
    .where('task_id')
    .equals(taskId)
    .toArray();
}

export async function getChatAttachmentPromotionByChatMessage(
  taskId: string,
  chatMessageId: string,
): Promise<ChatAttachmentPromotion | undefined> {
  // 複合インデックスの書式差異に依存しないよう、
  // タスク内の申請を取得してからチャットIDで特定する。
  const promotions = await getChatAttachmentPromotionsByTask(taskId);

  return promotions.find(
    (promotion) => promotion.chat_message_id === chatMessageId,
  );
}

export async function createChatAttachmentPromotion(data: {
  task_id: string;
  chat_message_id: string;
  attachment_filename: string;
  requested_by_user_id: string;
}): Promise<ChatAttachmentPromotion> {
  const existing = await getChatAttachmentPromotionByChatMessage(
    data.task_id,
    data.chat_message_id,
  );

  // 同じタスクの同じチャット添付に対する二重申請を防止する。
  if (existing) return existing;

  const promotion: ChatAttachmentPromotion = {
    id: uuid(),
    task_id: data.task_id,
    chat_message_id: data.chat_message_id,
    attachment_filename: data.attachment_filename,
    requested_by_user_id: data.requested_by_user_id,
    requested_at: now(),
    status: 'pending',
    approved_by_user_id: null,
    approved_at: null,
    created_attachment_id: null,
  };

  await getDb().chat_attachment_promotions.put(promotion);

  return promotion;
}

export async function approveChatAttachmentPromotion(
  promotionId: string,
  approvedByUserId: string,
  createdAttachmentId: string | null,
): Promise<void> {
  await getDb().chat_attachment_promotions.update(promotionId, {
    status: 'approved',
    approved_by_user_id: approvedByUserId,
    approved_at: now(),
    created_attachment_id: createdAttachmentId,
  });
}

// ==========================================================
// Completed / archived shared task review metadata
// ==========================================================

export async function getTaskCompletionReview(
  taskId: string,
): Promise<TaskCompletionReview | undefined> {
  return getDb()
    .task_completion_reviews
    .where('task_id')
    .equals(taskId)
    .first();
}

export async function getTaskCompletionReviews(
  taskIds: string[],
): Promise<TaskCompletionReview[]> {
  if (taskIds.length === 0) return [];

  const targetTaskIds = new Set(taskIds);
  const allReviews = await getDb().task_completion_reviews.toArray();

  return allReviews.filter((review) => targetTaskIds.has(review.task_id));
}

export async function upsertTaskCompletionReview(data: {
  task_id: string;
  updated_by_user_id: string;
  ai_analysis_output_generated_at?: string | null;
  ai_summary?: string | null;
  admin_comment?: string | null;
}): Promise<TaskCompletionReview> {
  const db = getDb();
  const existing = await getTaskCompletionReview(data.task_id);
  const timestamp = now();

  const review: TaskCompletionReview = {
    id: existing?.id ?? uuid(),
    task_id: data.task_id,
    ai_analysis_output_generated_at:
      'ai_analysis_output_generated_at' in data
        ? data.ai_analysis_output_generated_at ?? null
        : existing?.ai_analysis_output_generated_at ?? null,
    ai_summary:
      'ai_summary' in data
        ? data.ai_summary ?? null
        : existing?.ai_summary ?? null,
    admin_comment:
      'admin_comment' in data
        ? data.admin_comment ?? null
        : existing?.admin_comment ?? null,
    updated_by_user_id: data.updated_by_user_id,
    created_at: existing?.created_at ?? timestamp,
    updated_at: timestamp,
  };

  await db.task_completion_reviews.put(review);

  return review;
}

export async function getTaskFavoritesByUser(
  userId: string,
): Promise<TaskFavorite[]> {
  return getDb().task_favorites.where('user_id').equals(userId).toArray();
}

export async function addTaskFavorite(
  taskId: string,
  userId: string,
): Promise<void> {
  const db = getDb();

  const existing = await db.task_favorites
    .where('[task_id+user_id]')
    .equals([taskId, userId])
    .first();

  if (existing) return;

  await db.task_favorites.put({
    id: uuid(),
    task_id: taskId,
    user_id: userId,
    created_at: now(),
  });
}

export async function removeTaskFavorite(
  taskId: string,
  userId: string,
): Promise<void> {
  const db = getDb();

  const existing = await db.task_favorites
    .where('[task_id+user_id]')
    .equals([taskId, userId])
    .first();

  if (existing) {
    await db.task_favorites.delete(existing.id);
  }
}

export async function archiveTaskWithCompletionReviewAtomic(data: {
  task_id: string;
  ai_summary: string | null;
  admin_comment: string | null;
  updated_by_user_id: string;
}): Promise<void> {
  const db = getDb();
  const existingReview = await getTaskCompletionReview(data.task_id);
  const timestamp = now();

  await db.transaction(
    'rw',
    [db.tasks, db.task_completion_reviews],
    async () => {
      await db.task_completion_reviews.put({
        id: existingReview?.id ?? uuid(),
        task_id: data.task_id,
        ai_analysis_output_generated_at:
          existingReview?.ai_analysis_output_generated_at ?? null,
        ai_summary: data.ai_summary,
        admin_comment: data.admin_comment,
        updated_by_user_id: data.updated_by_user_id,
        created_at: existingReview?.created_at ?? timestamp,
        updated_at: timestamp,
      });

      await db.tasks.update(data.task_id, {
        status: 'archived',
        archived_at: timestamp,
        updated_at: timestamp,
      });
    },
  );
}

export async function deleteSharedTaskAtomic(
  taskId: string,
): Promise<void> {
  const db = getDb();

  await db.transaction(
    'rw',
    [
      db.tasks,
      db.task_assignments,
      db.assignment_submissions,
      db.task_attachments,
      db.attachment_revisions,
      db.assignment_document_requirements,
      db.task_chat_messages,
      db.task_notes,
      db.task_note_favorites,
      db.task_todos,
      db.task_activity_events,
      db.chat_attachment_promotions,
      db.task_completion_reviews,
      db.task_favorites,
    ],
    async () => {
      const assignments = await db.task_assignments
        .where('task_id')
        .equals(taskId)
        .toArray();

      const attachments = await db.task_attachments
        .where('task_id')
        .equals(taskId)
        .toArray();

      const notes = await db.task_notes
        .where('task_id')
        .equals(taskId)
        .toArray();

      for (const assignment of assignments) {
        await db.assignment_submissions
          .where('assignment_id')
          .equals(assignment.id)
          .delete();

        await db.assignment_document_requirements
          .where('assignment_id')
          .equals(assignment.id)
          .delete();
      }

      for (const attachment of attachments) {
        await db.attachment_revisions
          .where('attachment_id')
          .equals(attachment.id)
          .delete();
      }

      for (const note of notes) {
        await db.task_note_favorites
          .where('note_id')
          .equals(note.id)
          .delete();
      }

      await db.task_assignments.where('task_id').equals(taskId).delete();
      await db.task_attachments.where('task_id').equals(taskId).delete();
      await db.task_chat_messages.where('task_id').equals(taskId).delete();
      await db.task_notes.where('task_id').equals(taskId).delete();
      await db.task_todos.where('task_id').equals(taskId).delete();
      await db.task_activity_events.where('task_id').equals(taskId).delete();
      await db.chat_attachment_promotions.where('task_id').equals(taskId).delete();
      await db.task_completion_reviews.where('task_id').equals(taskId).delete();
      await db.task_favorites.where('task_id').equals(taskId).delete();

      await db.tasks.delete(taskId);
    },
  );
}