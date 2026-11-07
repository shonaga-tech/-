import type {
  Task, TaskAssignment, User, AssigneeView, TaskView, DisplayBadge, BoardColumn,
  ChatMessageView, NoteView, TodoView, TaskDetailView, ActivityView,
  NoteListView, Project, TaskPurpose, ProgressStatus,
  TaskAttachment, AttachmentRevision, AssignmentDocumentRequirement,
  AssignmentSubmission, TaskActivityEvent, AttachmentView, RequirementView,
  SubmissionView, AssigneeDetailView, HistoryView,
  PersonalTask, PersonalTaskAttachment, PersonalTaskView, PersonalTaskDetailView, PersonalBoardColumn,
  TaskTemplate, TaskTemplateAttachment, TaskTemplateFavorite, TemplateView, TemplateAttachmentView,
  ProjectView, UserView,
} from '../domain/taskNaviTypes';
import {
  COMPLETE_STATUSES, COMPLETE_BY_PURPOSE, progressLabel, ATTACHMENT_TYPE_LABELS,
  PERSONAL_STATUS_LABELS, PERSONAL_PROJECT_DASH, PERSONAL_PROJECT_INACCESSIBLE,
} from '../domain/taskNaviConstants';

export function isEligibleActive(a: TaskAssignment): boolean {
  return a.assignment_status === 'active' && a.eligibility_status === 'eligible';
}

export function computeBadge(task: Task, assignments: TaskAssignment[], requirements: AssignmentDocumentRequirement[]): DisplayBadge | null {
  if (task.status !== 'open') return null;
  const eligible = assignments.filter(isEligibleActive);

  // 1. 期限超過
  if (task.due_at && new Date(task.due_at) < new Date()) return 'overdue';

  // 2. 差戻し対応中
  if (task.purpose === '作業依頼' && eligible.some((a) => a.progress_status === 'returned')) return 'returned';

  // 3. 受領待ち
  if (task.purpose === '作業依頼' && eligible.some((a) => a.progress_status === 'reported')) return 'accept_pending';

  // 4. 確認待ち (requirement_status=required exists)
  if (requirements.some((r) => r.requirement_status === 'required')) return 'confirm_pending';

  // 5. 回答待ち
  if (task.purpose === '回答・申込受付' && eligible.some((a) => a.progress_status === 'pending')) return 'answer_pending';

  // 6. 対応中
  return 'in_progress';
}

export function computeBoardColumn(task: Task, badge: DisplayBadge | null): BoardColumn {
  if (task.status === 'draft') return 'draft';
  if (task.status === 'closed' || task.status === 'archived') return 'closed';
  if (badge === 'confirm_pending' || badge === 'answer_pending') return 'confirm_answer';
  if (badge === 'accept_pending' || badge === 'returned') return 'accept_return';
  return 'in_progress';
}

export function computeProgressPercent(assignments: TaskAssignment[]): number {
  const eligible = assignments.filter(isEligibleActive);
  if (eligible.length === 0) return 0;
  const completed = eligible.filter((a) => COMPLETE_STATUSES.includes(a.progress_status)).length;
  return Math.round((completed / eligible.length) * 100);
}

export function buildAssigneeViews(assignments: TaskAssignment[], users: Map<string, User>): AssigneeView[] {
  return assignments.map((a) => {
    const user = users.get(a.user_id);
    return {
      assignment_id: a.id,
      user_id: a.user_id,
      name: user?.name ?? '不明',
      avatar_class: user?.avatar_class ?? 'avatar-navy',
      initials: user?.initials ?? '??',
      progress_status: a.progress_status,
      assignment_status: a.assignment_status,
      eligibility_status: a.eligibility_status,
      is_complete: COMPLETE_STATUSES.includes(a.progress_status),
      is_eligible_active: isEligibleActive(a),
      completed_at: a.completed_at,
    };
  });
}

export function isTaskRelated(
  task: Task,
  assignments: TaskAssignment[],
  currentUserId: string,
): boolean {
  if (task.created_by === currentUserId) return true;
  if (task.successor_user_id === currentUserId) return true;
  const myAssignments = assignments.filter((a) => a.user_id === currentUserId);
  return myAssignments.some(isEligibleActive);
}

export function buildTaskView(
  task: Task,
  assignments: TaskAssignment[],
  users: Map<string, User>,
  projects: Map<string, Project>,
  currentUserId: string,
  requirements?: AssignmentDocumentRequirement[],
): TaskView {
  const eligible = assignments.filter(isEligibleActive);
  const completed = eligible.filter((a) => COMPLETE_STATUSES.includes(a.progress_status)).length;
  const badge = computeBadge(task, assignments, requirements ?? []);
  const dueLabel = task.due_at ? formatDueLabel(task.due_at) : '未設定';
  const creator = users.get(task.created_by);
  const project = projects.get(task.project_id);
  const closedBy = task.closed_by_user_id ? users.get(task.closed_by_user_id) : null;

  return {
    id: task.id,
    project_id: task.project_id,
    project_name: project?.name ?? '',
    purpose: task.purpose,
    title: task.title,
    body: task.body,
    status: task.status,
    due_at: task.due_at,
    due_label: dueLabel,
    created_by: task.created_by,
    created_by_name: creator?.name ?? '不明',
    created_at: task.created_at,
    updated_at: task.updated_at,
    badge,
    board_column: computeBoardColumn(task, badge),
    progress_percent: computeProgressPercent(assignments),
    total_assignees: eligible.length,
    completed_assignees: completed,
    assignees: buildAssigneeViews(assignments, users),
    is_creator: task.created_by === currentUserId,
    is_assignee: assignments.some((a) => a.user_id === currentUserId),
    is_eligible_assignee: assignments.some((a) => a.user_id === currentUserId && isEligibleActive(a)),
    is_successor: task.successor_user_id === currentUserId,
    is_related: isTaskRelated(task, assignments, currentUserId),
    close_type: task.close_type,
    close_reason: task.close_reason,
    closed_by_name: closedBy?.name ?? null,
    closed_at: task.closed_at,
    task_type: 'shared' as const,
    my_progress_label: computeMyProgressLabel(task, assignments, currentUserId),
  };
}

export function formatDueLabel(iso: string): string {
  const d = new Date(iso);
  const now = new Date();
  const diffMs = d.getTime() - now.getTime();
  const diffHours = diffMs / (1000 * 60 * 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffHours < 0 && diffHours > -24) return '期限超過';
  if (diffHours < 0) return `${Math.abs(Math.ceil(diffDays))}日前期限超過`;
  if (diffHours < 24) return `今日 ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
  if (diffDays === 1) return '明日';
  if (diffDays < 7) return `${diffDays + 1}日後`;
  return `${d.getMonth() + 1}月${d.getDate()}日`;
}

export function formatTimeLabel(iso: string): string {
  const d = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'たった今';
  if (diffMins < 60) return `${diffMins}分前`;
  if (diffHours < 24) return `${diffHours}時間前`;
  if (diffDays < 7) return `${diffDays}日前`;
  return `${d.getMonth() + 1}月${d.getDate()}日`;
}

export function buildChatMessageViews(
  messages: { id: string; user_id: string; text: string; attachment_filename: string | null; created_at: string }[],
  users: Map<string, User>,
  currentUserId: string,
): ChatMessageView[] {
  return messages.map((m) => {
    const user = users.get(m.user_id);
    return {
      id: m.id, user_id: m.user_id,
      author: user?.name ?? '不明',
      avatar_class: user?.avatar_class ?? 'avatar-navy',
      initials: user?.initials ?? '??',
      text: m.text, attachment_filename: m.attachment_filename,
      created_at: m.created_at, time_label: formatTimeLabel(m.created_at),
      mine: m.user_id === currentUserId,
    };
  });
}

export function buildNoteViews(
  notes: { id: string; text: string; color: string; attachment_filename: string | null; visibility: 'shared' | 'personal'; user_id: string; created_at: string; updated_at: string }[],
  currentUserId: string, favorites: Set<string>, users: Map<string, User>,
): { shared: NoteView[]; personal: NoteView[] } {
  const shared: NoteView[] = [];
  const personal: NoteView[] = [];
  for (const n of notes) {
    const author = users.get(n.user_id);
    const view: NoteView = {
      id: n.id, text: n.text, color: n.color,
      attachment_filename: n.attachment_filename,
      visibility: n.visibility, created_at: n.created_at,
      updated_at: n.updated_at,
      author_name: author?.name ?? '不明',
      mine: n.user_id === currentUserId, is_favorited: favorites.has(n.id),
    };
    if (n.visibility === 'shared') shared.push(view);
    else if (n.user_id === currentUserId) personal.push(view);
  }
  return { shared, personal };
}

export function buildTodoViews(todos: { id: string; text: string; done: boolean }[]): TodoView[] {
  return todos.map((t) => ({ id: t.id, text: t.text, done: t.done }));
}

export function buildActivityViews(
  events: { id: string; task_id: string; label: string; event_type: string; user_id: string; created_at: string }[],
  tasks: Map<string, Task>, users: Map<string, User>,
): ActivityView[] {
  const colorMap: Record<string, string> = {
    task_closed: 'green', task_auto_closed: 'green', task_forced_closed: 'orange',
    task_archived: 'slate', task_published: 'green', task_drafted: 'amber',
    chat_sent: 'blue', attachment_added: 'orange', attachment_revised: 'orange',
    attachment_withdrawn: 'orange', attachment_viewed: 'blue',
    attachment_downloaded: 'blue', document_confirmation_completed: 'green',
    submission_submitted: 'blue', work_report_accepted: 'green',
    work_report_returned: 'orange', assignment_exempted: 'amber',
    assignment_out_of_scope: 'amber',
  };
  return events.map((e) => {
    const task = tasks.get(e.task_id);
    const user = users.get(e.user_id);
    return {
      id: e.id, label: e.label, event_type: e.event_type,
      task_title: task?.title ?? '', user_name: user?.name ?? '',
      time_label: formatTimeLabel(e.created_at),
      icon_color: colorMap[e.event_type] ?? 'blue',
    };
  });
}

export function buildHistoryViews(
  events: TaskActivityEvent[], users: Map<string, User>,
): HistoryView[] {
  const colorMap: Record<string, string> = {
    task_drafted: 'amber', task_published: 'green',
    attachment_added: 'orange', attachment_revised: 'orange',
    attachment_withdrawn: 'orange', attachment_viewed: 'blue',
    attachment_downloaded: 'blue', document_confirmation_completed: 'green',
    submission_submitted: 'blue', work_report_accepted: 'green',
    work_report_returned: 'orange', assignment_exempted: 'amber',
    assignment_out_of_scope: 'amber', task_auto_closed: 'green',
    task_forced_closed: 'orange', task_archived: 'slate',
  };
  return events.map((e) => {
    const user = users.get(e.user_id);
    return {
      id: e.id, event_type: e.event_type, label: e.label,
      user_name: user?.name ?? '', created_at: e.created_at,
      time_label: formatTimeLabel(e.created_at),
      reason: e.reason, icon_color: colorMap[e.event_type] ?? 'blue',
    };
  });
}

export function buildNoteListViews(
  notes: { id: string; text: string; color: string; visibility: 'shared' | 'personal'; task_id: string; user_id: string; created_at: string }[],
  tasks: Map<string, Task>, currentUserId: string, favorites: Set<string>,
): NoteListView[] {
  return notes
    .filter((n) => n.visibility === 'personal' ? n.user_id === currentUserId : favorites.has(n.id))
    .map((n) => {
      const task = tasks.get(n.task_id);
      return {
        id: n.id, text: n.text, color: n.color, visibility: n.visibility,
        task_id: n.task_id, task_title: task?.title ?? '',
        created_at: n.created_at, time_label: formatTimeLabel(n.created_at),
        is_favorited: favorites.has(n.id),
      };
    });
}

export function buildAttachmentViews(
  attachments: TaskAttachment[],
  users: Map<string, User>,
): AttachmentView[] {
  return attachments.map((a) => {
    const uploader = users.get(a.uploaded_by);
    return {
      id: a.id, name: a.name,
      attachment_type: a.attachment_type,
      attachment_type_label: ATTACHMENT_TYPE_LABELS[a.attachment_type],
      attachment_status: a.attachment_status,
      current_revision_no: a.current_revision_no,
      uploaded_by_name: uploader?.name ?? '不明',
      uploaded_at: a.uploaded_at,
      updated_at_label: formatTimeLabel(a.uploaded_at),
      is_withdrawn: a.attachment_status === 'withdrawn',
    };
  });
}

export function buildRequirementViews(
  requirements: AssignmentDocumentRequirement[],
  attachments: Map<string, TaskAttachment>,
): RequirementView[] {
  return requirements.map((r) => {
    const att = attachments.get(r.attachment_id);
    return {
      attachment_id: r.attachment_id,
      attachment_name: att?.name ?? '不明',
      required_revision_no: r.required_revision_no,
      accessed_revision_no: r.accessed_revision_no,
      accessed_at: r.accessed_at,
      access_method: r.access_method,
      confirmed_revision_no: r.confirmed_revision_no,
      confirmed_at: r.confirmed_at,
      requirement_status: r.requirement_status,
      can_confirm: r.requirement_status === 'required' &&
        r.accessed_revision_no !== null &&
        r.accessed_revision_no >= r.required_revision_no,
    };
  });
}
export function buildSubmissionViews(
  submissions: AssignmentSubmission[],
  users: Map<string, User>,
): SubmissionView[] {
  return [...submissions]
    .sort((left, right) => {
      const dateDifference = left.submitted_at.localeCompare(right.submitted_at);

      return dateDifference !== 0
        ? dateDifference
        : left.submission_no - right.submission_no;
    })
    .map((submission) => {
      const submitter = users.get(submission.submitted_by);
      const reviewer = submission.reviewed_by_user_id
        ? users.get(submission.reviewed_by_user_id)
        : null;

      return {
        id: submission.id,
        assignment_id: submission.assignment_id,
        submission_type: submission.submission_type,
        submission_no: submission.submission_no,
        body: submission.body,

        deliverable_name: submission.deliverable_name ?? null,
        storage_location: submission.storage_location ?? null,
        supplementary_note: submission.supplementary_note ?? null,

        submission_status: submission.submission_status,
        submitted_by_name: submitter?.name ?? '不明',
        submitted_at: submission.submitted_at,
        reviewed_by_name: reviewer?.name ?? null,
        reviewed_at: submission.reviewed_at,
        review_comment: submission.review_comment,
      };
    });
}

export function buildAssigneeDetailViews(
  assignments: TaskAssignment[],
  users: Map<string, User>,
  submissions: Map<string, AssignmentSubmission[]>,
  requirements: Map<string, AssignmentDocumentRequirement[]>,
  attachments: Map<string, TaskAttachment>,
): AssigneeDetailView[] {
  return assignments.map((a) => {
    const user = users.get(a.user_id);
    const subs = submissions.get(a.id) ?? [];
    const reqs = requirements.get(a.id) ?? [];
    return {
      assignment_id: a.id, user_id: a.user_id,
      name: user?.name ?? '不明',
      avatar_class: user?.avatar_class ?? 'avatar-navy',
      initials: user?.initials ?? '??',
      progress_status: a.progress_status,
      assignment_status: a.assignment_status,
      eligibility_status: a.eligibility_status,
      is_complete: COMPLETE_STATUSES.includes(a.progress_status),
      is_eligible_active: isEligibleActive(a),
      completed_at: a.completed_at,
      submissions: buildSubmissionViews(subs, users),
      requirements: buildRequirementViews(reqs, attachments),
    };
  });
}

// === Publish validation ===
export function validatePublish(
  task: Task,
  assignments: TaskAssignment[],
  attachments: TaskAttachment[],
): string[] {
  const errors: string[] = [];
  if (!task.project_id) errors.push('プロジェクトが設定されていません');
  if (!task.purpose) errors.push('目的を選択してください');
  if (!task.title.trim()) errors.push('件名を入力してください');
  if (!task.due_at) errors.push('期限を設定してください');
  const eligible = assignments.filter(isEligibleActive);
  if (eligible.length === 0) errors.push('有効な対象者を1名以上設定してください');
  if (task.purpose === '確認・判断依頼' || task.purpose === '周知・意見聴取') {
    const activeConfirmAtts = attachments.filter((a) => a.attachment_type === 'confirmation_required' && a.attachment_status === 'active');
    if (activeConfirmAtts.length === 0) errors.push('確認に必要な資料を1件以上追加してください');
  }
  return errors;
}

// === Auto-close check ===
export function checkAutoClose(
  task: Task,
  assignments: TaskAssignment[],
  requirements: AssignmentDocumentRequirement[],
): boolean {
  if (task.status !== 'open') return false;
  const eligible = assignments.filter(isEligibleActive);
  if (eligible.length === 0) return false;
  const completeStatuses = COMPLETE_BY_PURPOSE[task.purpose];
  const allComplete = eligible.every((a) => completeStatuses.includes(a.progress_status));
  if (!allComplete) return false;
  const pendingReqs = requirements.filter((r) => r.requirement_status === 'required');
  if (pendingReqs.length > 0) return false;
  return true;
}

export function getProgressLabelForPurpose(purpose: TaskPurpose, status: ProgressStatus): string {
  return progressLabel(purpose, status);
}

function computeMyProgressLabel(
  task: Task,
  assignments: TaskAssignment[],
  currentUserId: string,
): string | null {
  if (task.status !== 'open') return null;
  const myAssignment = assignments.find((a) => a.user_id === currentUserId && isEligibleActive(a));
  if (!myAssignment) return null;
  return progressLabel(task.purpose, myAssignment.progress_status);
}

// === Personal Task selectors ===
export function isPersonalOverdue(task: PersonalTask): boolean {
  return task.status === 'open' && task.due_at !== null && new Date(task.due_at) < new Date();
}

export function computePersonalBoardColumn(task: PersonalTask): PersonalBoardColumn | null {
  if (task.status === 'archived') return null;
  if (task.status === 'draft') return 'draft';
  if (isPersonalOverdue(task)) return 'overdue';
  return 'open';
}

export function buildPersonalTaskView(
  task: PersonalTask,
  attachments: PersonalTaskAttachment[],
  projects: Map<string, Project>,
  memberProjectIds: Set<string>,
): PersonalTaskView {
  const project = task.related_project_id ? projects.get(task.related_project_id) : null;
  const accessible = task.related_project_id === null || (project !== null && memberProjectIds.has(task.related_project_id));
  let relatedProjectName: string | null = null;
  if (task.related_project_id === null) {
    relatedProjectName = null;
  } else if (project) {
    relatedProjectName = project.name;
  } else {
    relatedProjectName = null;
  }
  return {
    id: task.id,
    owner_user_id: task.owner_user_id,
    title: task.title,
    body: task.body,
    related_project_id: task.related_project_id,
    related_project_name: relatedProjectName,
    related_project_accessible: accessible,
    due_at: task.due_at,
    due_label: task.due_at ? formatDueLabel(task.due_at) : '未設定',
    status: task.status,
    status_label: PERSONAL_STATUS_LABELS[task.status],
    created_at: task.created_at,
    updated_at: task.updated_at,
    started_at: task.started_at,
    archived_at: task.archived_at,
    attachments: attachments.map((a) => ({ id: a.id, display_name: a.display_name, created_at: a.created_at })),
    is_overdue: isPersonalOverdue(task),
    board_column: computePersonalBoardColumn(task) ?? 'draft',
    task_type: 'personal' as const,
  };
}

export function buildPersonalTaskDetailView(
  task: PersonalTask,
  attachments: PersonalTaskAttachment[],
  projects: Map<string, Project>,
  memberProjectIds: Set<string>,
): PersonalTaskDetailView {
  const view = buildPersonalTaskView(task, attachments, projects, memberProjectIds);
  const isDraft = task.status === 'draft';
  const isOpen = task.status === 'open';
  const startErrors: string[] = [];
  if (!task.title.trim()) startErrors.push('タイトルを入力してください');
  if (!task.due_at) startErrors.push('期限を設定してください');
  return {
    task: view,
    can_start: isDraft && startErrors.length === 0,
    can_complete: isOpen,
    can_delete: isDraft || isOpen,
    can_edit_title: isDraft || isOpen,
    can_edit_body: isDraft || isOpen,
    can_edit_due: isDraft,
    can_edit_project: isDraft || isOpen,
    can_add_attachment: isDraft || isOpen,
    can_delete_attachment: isDraft || isOpen,
    start_errors: startErrors,
  };
}

export function getPersonalProjectDisplay(view: PersonalTaskView): string {
  if (view.related_project_id === null) return PERSONAL_PROJECT_DASH;
  if (!view.related_project_accessible) return PERSONAL_PROJECT_INACCESSIBLE;
  return view.related_project_name ?? PERSONAL_PROJECT_INACCESSIBLE;
}

// === Template selectors ===
export function buildTemplateView(
  template: TaskTemplate,
  attachments: TaskTemplateAttachment[],
  users: Map<string, User>,
  favoriteTemplateIds: Set<string>,
): TemplateView {
  const creator = users.get(template.created_by_user_id);
  return {
    id: template.id,
    name: template.name,
    purpose: template.purpose,
    title_template: template.title_template,
    body_template: template.body_template,
    created_by_name: creator?.name ?? '不明',
    created_at: template.created_at,
    updated_at: template.updated_at,
    updated_at_label: formatTimeLabel(template.updated_at),
    attachments: attachments.map((a) => ({
      id: a.id,
      display_name: a.display_name,
      attachment_type: a.attachment_type,
      attachment_type_label: ATTACHMENT_TYPE_LABELS[a.attachment_type],
      sort_order: a.sort_order,
    })),
    is_favorited: favoriteTemplateIds.has(template.id),
    source_task_id: template.source_task_id,
  };
}

// === Sorting ===
export function sortSharedTasks(tasks: TaskView[]): TaskView[] {
  const overdue: TaskView[] = [];
  const withDue: TaskView[] = [];
  const noDue: TaskView[] = [];
  const closed: TaskView[] = [];
  const archived: TaskView[] = [];
  for (const t of tasks) {
    if (t.status === 'archived') { archived.push(t); continue; }
    if (t.status === 'closed') { closed.push(t); continue; }
    if (t.badge === 'overdue') { overdue.push(t); continue; }
    if (t.due_at) { withDue.push(t); continue; }
    noDue.push(t);
  }
  overdue.sort((a, b) => (a.due_at ?? '').localeCompare(b.due_at ?? ''));
  withDue.sort((a, b) => (a.due_at ?? '').localeCompare(b.due_at ?? ''));
  noDue.sort((a, b) => b.updated_at.localeCompare(a.updated_at));
  closed.sort((a, b) => (b.closed_at ?? '').localeCompare(a.closed_at ?? ''));
  archived.sort((a, b) => (b.updated_at).localeCompare(a.updated_at));
  return [...overdue, ...withDue, ...noDue, ...closed, ...archived];
}

export function sortPersonalTasks(tasks: PersonalTaskView[]): PersonalTaskView[] {
  const overdue: PersonalTaskView[] = [];
  const open: PersonalTaskView[] = [];
  const draft: PersonalTaskView[] = [];
  const archived: PersonalTaskView[] = [];
  for (const t of tasks) {
    if (t.status === 'archived') { archived.push(t); continue; }
    if (t.status === 'draft') { draft.push(t); continue; }
    if (t.is_overdue) { overdue.push(t); continue; }
    open.push(t);
  }
  overdue.sort((a, b) => (a.due_at ?? '').localeCompare(b.due_at ?? ''));
  open.sort((a, b) => (a.due_at ?? '').localeCompare(b.due_at ?? ''));
  draft.sort((a, b) => b.updated_at.localeCompare(a.updated_at));
  archived.sort((a, b) => (b.archived_at ?? '').localeCompare(a.archived_at ?? ''));
  return [...overdue, ...open, ...draft, ...archived];
}

// === Search ===
export function searchSharedTasks(tasks: TaskView[], query: string): TaskView[] {
  if (!query.trim()) return tasks;
  const q = query.trim().toLowerCase();
  return tasks.filter((t) =>
    t.title.toLowerCase().includes(q) ||
    t.body.toLowerCase().includes(q) ||
    t.project_name.toLowerCase().includes(q) ||
    t.purpose.toLowerCase().includes(q)
  );
}

export function searchPersonalTasks(tasks: PersonalTaskView[], query: string): PersonalTaskView[] {
  if (!query.trim()) return tasks;
  const q = query.trim().toLowerCase();
  return tasks.filter((t) =>
    t.title.toLowerCase().includes(q) ||
    t.body.toLowerCase().includes(q) ||
    (t.related_project_name ?? '').toLowerCase().includes(q)
  );
}

// === Pagination ===
export function paginate<T>(items: T[], page: number, pageSize: number): { items: T[]; total: number; start: number; end: number } {
  const total = items.length;
  if (total === 0) return { items: [], total: 0, start: 0, end: 0 };
  const start = (page - 1) * pageSize;
  const end = Math.min(start + pageSize, total);
  return { items: items.slice(start, end), total, start: start + 1, end };
}

// === Summary counts ===
import type { SharedSummaryCounts, PersonalSummaryCounts, MyTasksSummaryCounts } from '../domain/taskNaviTypes';

export function computeSharedSummaryCounts(tasks: TaskView[]): SharedSummaryCounts {
  let draft = 0, open = 0, overdue = 0, closed = 0;
  for (const t of tasks) {
    if (t.status === 'archived') continue;
    if (t.status === 'draft') { draft++; continue; }
    if (t.status === 'closed') { closed++; continue; }
    if (t.badge === 'overdue') { overdue++; continue; }
    open++;
  }
  return { draft, open, overdue, closed, total: draft + open + overdue + closed };
}

export function computePersonalSummaryCounts(tasks: PersonalTaskView[]): PersonalSummaryCounts {
  let draft = 0, open = 0, overdue = 0;
  for (const t of tasks) {
    if (t.status === 'archived') continue;
    if (t.status === 'draft') { draft++; continue; }
    if (t.is_overdue) { overdue++; continue; }
    open++;
  }
  return { draft, open, overdue, total: draft + open + overdue };
}

export function computeMyTasksSummaryCounts(tasks: TaskView[]): MyTasksSummaryCounts {
  let myProgress = 0, managing = 0, overdue = 0, closed = 0;
  let all = 0;
  for (const t of tasks) {
    if (t.status === 'archived') continue;
    all++;
    if (t.is_creator) managing++;
    if (t.is_eligible_assignee && t.status === 'open') myProgress++;
    if (t.badge === 'overdue') overdue++;
    if (t.status === 'closed') closed++;
  }
  return { all, my_progress: myProgress, managing, overdue, closed };
}
