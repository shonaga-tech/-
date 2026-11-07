# tasknavi-feature-context.txt

- **元ファイル**: tasknavi-feature-context.txt
- **ファイルサイズ**: 313884 bytes
- **作成日時**: 2026-09-16 04:39:52

## ソースコード

    # TASK-NAVI Feature Context
    # Generated: 2026-09-15 15:37:22
    # Root: C:\Users\1140604\Desktop\30project-bolt-sb1-pjo3hodx\project
    
    ============================================================
    FILE: src\domain\taskNaviTypes.ts
    ============================================================
    // Domain types for TASK-NAVI local development v3
    
    // === Persisted entity types (IndexedDB) ===
    
    export type TaskStatus = 'draft' | 'open' | 'closed' | 'archived';
    export type CloseType = 'auto' | 'forced';
    export type ProgressStatus = 'pending' | 'confirmed' | 'reported' | 'accepted' | 'returned';
    export type AssignmentStatus = 'active' | 'excluded';
    export type EligibilityStatus = 'eligible' | 'exempted' | 'out_of_scope';
    export type TaskPurpose = '作業依頼' | '確認・判断依頼' | '周知・意見聴取' | '回答・申込受付';
    export type NoteVisibility = 'shared' | 'personal';
    export type AttachmentType = 'reference' | 'confirmation_required';
    export type AttachmentStatus = 'active' | 'withdrawn';
    export type RequirementStatus = 'required' | 'confirmed' | 'not_required';
    export type AccessMethod = 'view' | 'download';
    export type SubmissionType = 'response' | 'work_report';
    export type SubmissionStatus = 'submitted' | 'accepted' | 'returned';
    
    // Personal task types
    export type PersonalTaskStatus = 'draft' | 'open' | 'archived';
    
    export interface PersonalTask {
      id: string;
      owner_user_id: string;
      title: string;
      body: string;
      related_project_id: string | null;
      due_at: string | null;
      status: PersonalTaskStatus;
      created_at: string;
      updated_at: string;
      started_at: string | null;
      archived_at: string | null;
    }
    
    export interface PersonalTaskAttachment {
      id: string;
      personal_task_id: string;
      display_name: string;
      created_at: string;
    }
    
    export interface PersonalTaskDeletionEvent {
      id: string;
      owner_user_id: string;
      deleted_at: string;
      was_overdue: boolean;
      had_related_project: boolean;
    }
    
    // Template types
    export type TemplateStatus = 'active' | 'archived';
    
    export interface TaskTemplate {
      id: string;
      name: string;
      purpose: TaskPurpose;
      title_template: string;
      body_template: string;
      created_by_user_id: string;
      created_at: string;
      updated_at: string;
      source_task_id: string | null;
      status: TemplateStatus;
    }
    
    export interface TaskTemplateAttachment {
      id: string;
      template_id: string;
      display_name: string;
      attachment_type: AttachmentType;
      sort_order: number;
    }
    
    export interface TaskTemplateFavorite {
      id: string;
      template_id: string;
      user_id: string;
      created_at: string;
    }
    
    // === Existing shared task entities ===
    
    export interface Project {
      id: string;
      name: string;
      color: string;
      created_at: string;
    }
    
    export interface User {
      id: string;
      name: string;
      avatar_class: string;
      initials: string;
    }
    
    export interface ProjectMember {
      id: string;
      project_id: string;
      user_id: string;
      role: string;
    }
    
    export interface Task {
      id: string;
      project_id: string;
      purpose: TaskPurpose;
      title: string;
      body: string;
      status: TaskStatus;
      due_at: string | null;
      created_by: string;
      created_at: string;
      updated_at: string;
      opened_at: string | null;
      closed_at: string | null;
      close_type: CloseType | null;
      close_reason: string | null;
      closed_by_user_id: string | null;
      archived_at: string | null;
      successor_user_id: string | null;
    }
    
    export interface TaskAssignment {
      id: string;
      task_id: string;
      user_id: string;
      progress_status: ProgressStatus;
      assignment_status: AssignmentStatus;
      eligibility_status: EligibilityStatus;
      completed_at: string | null;
      updated_at: string;
    }
    
    export interface AssignmentSubmission {
      id: string;
      assignment_id: string;
      submission_type: SubmissionType;
      submission_no: number;
      body: string;
      submission_status: SubmissionStatus;
      submitted_by: string;
      submitted_at: string;
      reviewed_by_user_id: string | null;
      reviewed_at: string | null;
      review_comment: string | null;
    }
    
    export interface TaskAttachment {
      id: string;
      task_id: string;
      name: string;
      attachment_type: AttachmentType;
      attachment_status: AttachmentStatus;
      uploaded_by: string;
      uploaded_at: string;
      current_revision_no: number;
      withdrawn_at: string | null;
      withdrawal_reason: string | null;
    }
    
    export interface AttachmentRevision {
      id: string;
      attachment_id: string;
      revision_no: number;
      filename: string;
      revision_reason: string | null;
      uploaded_by: string;
      uploaded_at: string;
    }
    
    export interface AssignmentDocumentRequirement {
      id: string;
      assignment_id: string;
      attachment_id: string;
      required_revision_no: number;
      accessed_revision_no: number | null;
      accessed_at: string | null;
      access_method: AccessMethod | null;
      confirmed_revision_no: number | null;
      confirmed_at: string | null;
      requirement_status: RequirementStatus;
    }
    
    export interface TaskChatMessage {
      id: string;
      task_id: string;
      user_id: string;
      text: string;
      attachment_filename: string | null;
      created_at: string;
    }
    
    export interface TaskNote {
      id: string;
      task_id: string;
      user_id: string;
      visibility: NoteVisibility;
      color: string;
      text: string;
      attachment_filename: string | null;
      created_at: string;
      updated_at: string;
    }
    
    export interface TaskNoteFavorite {
      id: string;
      note_id: string;
      user_id: string;
      created_at: string;
    }
    
    export interface TaskTodo {
      id: string;
      task_id: string;
      user_id: string;
      text: string;
      done: boolean;
      created_at: string;
    }
    
    export interface TaskActivityEvent {
      id: string;
      task_id: string;
      project_id: string;
      event_type: string;
      label: string;
      user_id: string;
      created_at: string;
      reason: string | null;
    }
    
    // === View model types (computed, not persisted) ===
    
    export type DisplayBadge = 'overdue' | 'returned' | 'accept_pending' | 'confirm_pending' | 'answer_pending' | 'in_progress';
    
    export type TaskType = 'shared' | 'personal';
    
    export interface AssigneeView {
      assignment_id: string;
      user_id: string;
      name: string;
      avatar_class: string;
      initials: string;
      progress_status: ProgressStatus;
      assignment_status: AssignmentStatus;
      eligibility_status: EligibilityStatus;
      is_complete: boolean;
      is_eligible_active: boolean;
      completed_at: string | null;
    }
    
    export interface AttachmentView {
      id: string;
      name: string;
      attachment_type: AttachmentType;
      attachment_type_label: string;
      attachment_status: AttachmentStatus;
      current_revision_no: number;
      uploaded_by_name: string;
      uploaded_at: string;
      updated_at_label: string;
      is_withdrawn: boolean;
    }
    
    export interface RequirementView {
      attachment_id: string;
      attachment_name: string;
      required_revision_no: number;
      accessed_revision_no: number | null;
      accessed_at: string | null;
      access_method: AccessMethod | null;
      confirmed_revision_no: number | null;
      confirmed_at: string | null;
      requirement_status: RequirementStatus;
      can_confirm: boolean;
    }
    
    export interface SubmissionView {
      id: string;
      assignment_id: string;
      submission_type: SubmissionType;
      submission_no: number;
      body: string;
      submission_status: SubmissionStatus;
      submitted_by_name: string;
      submitted_at: string;
      reviewed_by_name: string | null;
      reviewed_at: string | null;
      review_comment: string | null;
    }
    
    export interface AssigneeDetailView extends AssigneeView {
      submissions: SubmissionView[];
      requirements: RequirementView[];
    }
    
    export interface HistoryView {
      id: string;
      event_type: string;
      label: string;
      user_name: string;
      created_at: string;
      time_label: string;
      reason: string | null;
      icon_color: string;
    }
    
    export interface TaskView {
      id: string;
      project_id: string;
      project_name: string;
      purpose: TaskPurpose;
      title: string;
      body: string;
      status: TaskStatus;
      due_at: string | null;
      due_label: string;
      created_by: string;
      created_by_name: string;
      created_at: string;
      updated_at: string;
      badge: DisplayBadge | null;
      board_column: BoardColumn;
      progress_percent: number;
      total_assignees: number;
      completed_assignees: number;
      assignees: AssigneeView[];
      is_creator: boolean;
      is_assignee: boolean;
      is_eligible_assignee: boolean;
      is_successor: boolean;
      is_related: boolean;
      close_type: CloseType | null;
      close_reason: string | null;
      closed_by_name: string | null;
      closed_at: string | null;
      task_type: TaskType;
      my_progress_label: string | null;
    }
    
    export type BoardColumn = 'draft' | 'in_progress' | 'confirm_answer' | 'accept_return' | 'closed';
    export type PersonalBoardColumn = 'draft' | 'open' | 'overdue';
    
    export interface ChatMessageView {
      id: string;
      user_id: string;
      author: string;
      avatar_class: string;
      initials: string;
      text: string;
      attachment_filename: string | null;
      created_at: string;
      time_label: string;
      mine: boolean;
    }
    
    export interface NoteView {
      id: string;
      text: string;
      color: string;
      attachment_filename: string | null;
      visibility: NoteVisibility;
      created_at: string;
      updated_at: string;
      author_name: string;
      mine: boolean;
      is_favorited: boolean;
    }
    
    export interface TodoView {
      id: string;
      text: string;
      done: boolean;
    }
    
    export interface TaskDetailView {
      task: TaskView;
      chats: ChatMessageView[];
      chat_attachment_promotions: ChatAttachmentPromotionView[];
      shared_notes: NoteView[];
      personal_notes: NoteView[];
      todos: TodoView[];
      attachments: AttachmentView[];
      my_requirements: RequirementView[];
      my_assignments: AssigneeDetailView[];
      all_assignees: AssigneeDetailView[];
      history: HistoryView[];
      publish_errors: string[];
      can_publish: boolean;
      can_force_close: boolean;
      can_archive: boolean;
      my_assignment: AssigneeDetailView | null;
      can_save_template: boolean;
    }
    
    export interface ProjectView {
      id: string;
      name: string;
      color: string;
    }
    
    export interface UserView {
      id: string;
      name: string;
      avatar_class: string;
      initials: string;
    }
    
    export interface ActivityView {
      id: string;
      label: string;
      event_type: string;
      task_title: string;
      user_name: string;
      time_label: string;
      icon_color: string;
    }
    
    export interface NoteListView {
      id: string;
      text: string;
      color: string;
      visibility: NoteVisibility;
      task_id: string;
      task_title: string;
      created_at: string;
      time_label: string;
      is_favorited: boolean;
    }
    
    // Personal task view types
    export interface PersonalTaskAttachmentView {
      id: string;
      display_name: string;
      created_at: string;
    }
    
    export interface PersonalTaskView {
      id: string;
      owner_user_id: string;
      title: string;
      body: string;
      related_project_id: string | null;
      related_project_name: string | null;
      related_project_accessible: boolean;
      due_at: string | null;
      due_label: string;
      status: PersonalTaskStatus;
      status_label: string;
      created_at: string;
      updated_at: string;
      started_at: string | null;
      archived_at: string | null;
      attachments: PersonalTaskAttachmentView[];
      is_overdue: boolean;
      board_column: PersonalBoardColumn;
      task_type: TaskType;
    }
    
    export interface PersonalTaskDetailView {
      task: PersonalTaskView;
      can_start: boolean;
      can_complete: boolean;
      can_delete: boolean;
      can_edit_title: boolean;
      can_edit_body: boolean;
      can_edit_due: boolean;
      can_edit_project: boolean;
      can_add_attachment: boolean;
      can_delete_attachment: boolean;
      start_errors: string[];
    }
    
    // Template view types
    export interface TemplateAttachmentView {
      id: string;
      display_name: string;
      attachment_type: AttachmentType;
      attachment_type_label: string;
      sort_order: number;
    }
    
    export interface TemplateView {
      id: string;
      name: string;
      purpose: TaskPurpose;
      title_template: string;
      body_template: string;
      created_by_name: string;
      created_at: string;
      updated_at: string;
      updated_at_label: string;
      attachments: TemplateAttachmentView[];
      is_favorited: boolean;
      source_task_id: string | null;
    }
    
    // Filter and pagination types
    export type MyTasksFilter = 'all' | 'my_progress' | 'managing' | 'closed';
    export type TaskTypeFilter = 'all' | 'shared' | 'personal';
    export type SharedConditionFilter = 'all' | 'overdue' | 'confirm_answer' | 'accept_pending' | 'returned' | 'in_progress';
    export type PersonalConditionFilter = 'all' | 'draft' | 'open' | 'overdue' | 'archived';
    export type PageView = 'guide' | 'my_tasks' | 'shared' | 'personal' | 'notes' | 'archive';
    
    export interface PaginationState {
      page: number;
      pageSize: number;
    }
    
    export interface SharedSummaryCounts {
      draft: number;
      open: number;
      overdue: number;
      closed: number;
      total: number;
    }
    
    export interface PersonalSummaryCounts {
      draft: number;
      open: number;
      overdue: number;
      total: number;
    }
    
    export interface MyTasksSummaryCounts {
      all: number;
      my_progress: number;
      managing: number;
      overdue: number;
      closed: number;
    }
    
    export type ChatAttachmentPromotionStatus = 'pending' | 'approved';
    
    export interface ChatAttachmentPromotion {
      id: string;
      task_id: string;
      chat_message_id: string;
      attachment_filename: string;
      requested_by_user_id: string;
      requested_at: string;
      status: ChatAttachmentPromotionStatus;
      approved_by_user_id: string | null;
      approved_at: string | null;
      created_attachment_id: string | null;
    }
    
    export interface ChatAttachmentPromotionView {
      id: string;
      task_id: string;
      chat_message_id: string;
      attachment_filename: string;
      requested_by_user_id: string;
      requested_by_name: string;
      requested_at: string;
      requested_at_label: string;
      status: ChatAttachmentPromotionStatus;
      approved_by_user_id: string | null;
      approved_by_name: string | null;
      approved_at: string | null;
      created_attachment_id: string | null;
    }
    
    ============================================================
    FILE: src\domain\taskNaviConstants.ts
    ============================================================
    import type { BoardColumn, ProgressStatus, TaskPurpose, TaskStatus, CloseType, AttachmentType, RequirementStatus, SubmissionType, SubmissionStatus, AccessMethod, PersonalTaskStatus, PersonalBoardColumn, MyTasksFilter, TaskTypeFilter, SharedConditionFilter, PersonalConditionFilter, PageView } from './taskNaviTypes';
    
    export const DB_NAME = 'task-navi-db';
    export const DB_VERSION = 5;
    
    export const COMPLETE_STATUSES: ProgressStatus[] = ['confirmed', 'accepted', 'reported'];
    
    export const COMPLETE_BY_PURPOSE: Record<TaskPurpose, ProgressStatus[]> = {
      '作業依頼': ['accepted'],
      '確認・判断依頼': ['confirmed'],
      '周知・意見聴取': ['confirmed'],
      '回答・申込受付': ['reported'],
    };
    
    export const BOARD_COLUMN_META: Record<BoardColumn, { label: string; className: string; columnClass: string }> = {
      draft: { label: '下書き', className: 'status-draft', columnClass: 'column-draft' },
      in_progress: { label: '進行中', className: 'status-open', columnClass: 'column-open' },
      confirm_answer: { label: '確認・回答待ち', className: 'status-confirm-answer', columnClass: 'column-confirm-answer' },
      accept_return: { label: '受領・差戻し対応', className: 'status-accept-return', columnClass: 'column-accept-return' },
      closed: { label: '終了', className: 'status-closed', columnClass: 'column-closed' },
    };
    
    export const BOARD_COLUMN_ORDER: BoardColumn[] = ['draft', 'in_progress', 'confirm_answer', 'accept_return', 'closed'];
    
    export const BOARD_COLUMN_LIMITS: Record<BoardColumn, number> = {
      draft: 5,
      in_progress: 8,
      confirm_answer: 8,
      accept_return: 8,
      closed: 5,
    };
    
    export const PERSONAL_BOARD_COLUMN_META: Record<PersonalBoardColumn, { label: string; className: string; columnClass: string }> = {
      draft: { label: '下書き', className: 'status-draft', columnClass: 'column-draft' },
      open: { label: '対応中', className: 'status-open', columnClass: 'column-open' },
      overdue: { label: '期限超過', className: 'status-overdue', columnClass: 'column-overdue' },
    };
    
    export const PERSONAL_BOARD_COLUMN_ORDER: PersonalBoardColumn[] = ['draft', 'open', 'overdue'];
    
    export const PERSONAL_BOARD_LIMIT = 8;
    
    export const STATUS_LABELS: Record<TaskStatus, string> = {
      draft: '下書き',
      open: '公開中',
      closed: '終了',
      archived: 'アーカイブ',
    };
    
    export const PERSONAL_STATUS_LABELS: Record<PersonalTaskStatus, string> = {
      draft: '下書き',
      open: '対応中',
      archived: 'アーカイブ',
    };
    
    export const CLOSE_TYPE_LABELS: Record<CloseType, string> = {
      auto: '通常終了',
      forced: '強制終了',
    };
    
    export const PROGRESS_LABELS: Record<ProgressStatus, string> = {
      pending: '未対応',
      confirmed: '確認済み',
      reported: '報告済み',
      accepted: '受領済み',
      returned: '差戻し中',
    };
    
    export const PROGRESS_LABELS_BY_PURPOSE: Record<TaskPurpose, Partial<Record<ProgressStatus, string>>> = {
      '作業依頼': { pending: '未報告', reported: '受領待ち', accepted: '受領済み', returned: '差戻し・再対応' },
      '確認・判断依頼': { pending: '未確認', confirmed: '確認済み' },
      '周知・意見聴取': { pending: '未確認', confirmed: '確認済み' },
      '回答・申込受付': { pending: '未回答', reported: '回答済み' },
    };
    
    export function progressLabel(purpose: TaskPurpose, status: ProgressStatus): string {
      return PROGRESS_LABELS_BY_PURPOSE[purpose]?.[status] ?? PROGRESS_LABELS[status];
    }
    
    export const ATTACHMENT_TYPE_LABELS: Record<AttachmentType, string> = {
      reference: '参考資料',
      confirmation_required: '確認必須資料',
    };
    
    export const REQUIREMENT_STATUS_LABELS: Record<RequirementStatus, string> = {
      required: '要確認',
      confirmed: '確認済み',
      not_required: '不要',
    };
    
    export const SUBMISSION_TYPE_LABELS: Record<SubmissionType, string> = {
      response: '回答',
      work_report: '作業報告',
    };
    
    export const SUBMISSION_STATUS_LABELS: Record<SubmissionStatus, string> = {
      submitted: '提出済み',
      accepted: '受領済み',
      returned: '差戻し済み',
    };
    
    export const ACCESS_METHOD_LABELS: Record<AccessMethod, string> = {
      view: '閲覧',
      download: 'ダウンロード',
    };
    
    export const NOTE_COLORS = ['note-yellow', 'note-green', 'note-blue', 'note-pink'] as const;
    
    export const EVENT_LABELS: Record<string, string> = {
      task_drafted: '下書きとして保存しました',
      task_published: 'タスクを公開しました',
      attachment_added: '資料を追加しました',
      attachment_revised: '資料を改訂しました',
      attachment_withdrawn: '資料を撤回しました',
      attachment_viewed: '資料を閲覧しました',
      attachment_downloaded: '資料をダウンロードしました',
      document_confirmation_completed: '資料の確認を完了しました',
      submission_submitted: '提出しました',
      work_report_accepted: '作業報告を受領しました',
      work_report_returned: '作業報告を差戻しました',
      assignment_exempted: '対象者を免除しました',
      assignment_out_of_scope: '対象者を対象外にしました',
      task_auto_closed: '全員の条件達成により通常終了しました',
      task_forced_closed: '強制終了しました',
      task_archived: 'アーカイブしました',
    };
    
    // === Phase 3.0 UI labels ===
    
    export const NAV_ITEMS: { key: PageView; label: string }[] = [
      { key: 'guide', label: 'タスクを作成' },
      { key: 'my_tasks', label: 'マイタスク' },
      { key: 'shared', label: '共有タスク' },
      { key: 'personal', label: '個人タスク' },
      { key: 'notes', label: 'ノート' },
      { key: 'archive', label: 'アーカイブ' },
    ];
    
    export const MY_TASKS_FILTERS: { key: MyTasksFilter; label: string }[] = [
      { key: 'my_progress', label: '自分の対応' },
      { key: 'managing', label: '管理中' },
      { key: 'closed', label: '個人タスク' },
    ];
    
    export const TASK_TYPE_FILTERS: { key: TaskTypeFilter; label: string }[] = [
      { key: 'all', label: 'すべて' },
      { key: 'shared', label: '共有' },
      { key: 'personal', label: '個人' },
    ];
    
    export const SHARED_CONDITION_FILTERS: { key: SharedConditionFilter; label: string }[] = [
      { key: 'all', label: 'すべての状況' },
      { key: 'overdue', label: '期限超過' },
      { key: 'confirm_answer', label: '確認・回答待ち' },
      { key: 'accept_pending', label: '受領待ち' },
      { key: 'returned', label: '差戻し対応中' },
      { key: 'in_progress', label: '進行中' },
    ];
    
    export const PERSONAL_CONDITION_FILTERS: { key: PersonalConditionFilter; label: string }[] = [
      { key: 'all', label: 'すべて' },
      { key: 'draft', label: '下書き' },
      { key: 'open', label: '対応中' },
      { key: 'overdue', label: '期限超過' },
      { key: 'archived', label: 'アーカイブ' },
    ];
    
    export const PURPOSE_FILTERS: { key: TaskPurpose | 'all'; label: string }[] = [
      { key: 'all', label: 'すべての目的' },
      { key: '作業依頼', label: '作業依頼' },
      { key: '確認・判断依頼', label: '確認・判断依頼' },
      { key: '周知・意見聴取', label: '周知・意見聴取' },
      { key: '回答・申込受付', label: '回答・申込受付' },
    ];
    
    export const PAGE_SIZE_OPTIONS = [10, 30, 50, 100];
    export const DEFAULT_PAGE_SIZE = 30;
    
    export const SEARCH_PLACEHOLDER = 'タスク名・本文・プロジェクト名で検索';
    
    export const BADGE_LABELS: Record<string, string> = {
      overdue: '期限超過',
      confirm_pending: '確認待ち',
      answer_pending: '回答待ち',
      accept_pending: '受領待ち',
      returned: '差戻し対応中',
      in_progress: '',
    };
    
    export const TASK_TYPE_LABELS = {
      shared: '共有',
      personal: '個人',
    } as const;
    
    export const PERSONAL_PROJECT_NO_SELECTION = 'プロジェクト未選択';
    export const PERSONAL_PROJECT_DASH = 'プロジェクト：—';
    export const PERSONAL_PROJECT_INACCESSIBLE = '現在は参照できないプロジェクト';
    
    export const PERSONAL_DELETE_TITLE = '個人タスクを削除';
    export const PERSONAL_DELETE_MESSAGE = 'このタスクを削除しますか？';
    export const PERSONAL_START_TITLE = '個人タスクを開始';
    export const PERSONAL_START_MESSAGE = 'この個人タスクを開始しますか？';
    export const PERSONAL_COMPLETE_TITLE = '個人タスクを完了';
    export const PERSONAL_COMPLETE_MESSAGE = 'この個人タスクを完了してアーカイブしますか？';
    
    export const GUIDE_SHARED_TITLE = '共有タスク';
    export const GUIDE_SHARED_DESC = 'プロジェクト内の関係者へ依頼・確認・回答を求めるタスク';
    export const GUIDE_PERSONAL_TITLE = '個人タスク';
    export const GUIDE_PERSONAL_DESC = '自分だけで管理する、プロジェクトに共有されないタスク';
    
    // === Phase 4.0 UI labels ===
    
    export const GUIDE_SHARED_ACTION = '共有タスクを作成';
    export const GUIDE_PERSONAL_ACTION = '個人タスクを作成';
    
    export const SHARED_SUMMARY_CARDS = [
      { key: 'draft', label: '下書き' },
      { key: 'open', label: '公開中' },
      { key: 'overdue', label: '期限超過' },
      { key: 'closed', label: '完了' },
      { key: 'total', label: '合計' },
    ] as const;
    
    export const PERSONAL_SUMMARY_CARDS = [
      { key: 'draft', label: '下書き' },
      { key: 'open', label: '対応中' },
      { key: 'overdue', label: '期限超過' },
      { key: 'total', label: '合計' },
    ] as const;
    
    export const MY_TASKS_SUMMARY_CARDS = [
      { key: 'draft', label: '下書き' },
      { key: 'my_progress', label: '自分の対応' },
      { key: 'overdue', label: '期限超過' },
      { key: 'closed', label: '完了' },
      { key: 'all', label: '合計' },
    ] as const;
    
    export const MY_TASKS_OVERLAP_HELPER = '条件を選択して表示を絞り込めます。一部の条件は重複します。';
    
    export const NOTE_EDITOR_SHARED_HEADING = '共有ノートを編集';
    export const NOTE_EDITOR_PERSONAL_HEADING = '個人ノートを編集';
    export const NOTE_EDITOR_SHARED_SCOPE = 'タスクの関係者に表示されます';
    export const NOTE_EDITOR_PERSONAL_SCOPE = 'あなただけに表示されます';
    export const NOTE_EDITOR_NEW_SHARED = '共有ノートを追加';
    export const NOTE_EDITOR_NEW_PERSONAL = '個人ノートを追加';
    export const NOTE_EDITOR_BODY_LABEL = 'ノート本文';
    export const NOTE_EDITOR_ATTACHMENT_LABEL = '添付ファイル名';
    export const NOTE_EDITOR_SAVE = '保存';
    export const NOTE_EDITOR_CANCEL = 'キャンセル';
    export const NOTE_EDITOR_DELETE = 'ノートを削除';
    export const NOTE_EDITOR_DELETE_CONFIRM = 'このノートを削除しますか？';
    export const NOTE_EDITOR_DIRTY_CONFIRM = '未保存の内容があります。破棄しますか？';
    export const NOTE_FAVORITE_HELPER = 'お気に入りに追加した共有ノートは、左の「ノート」から後で確認できます。';
    export const NOTE_FAVORITE_ADD = 'お気に入りに追加';
    export const NOTE_FAVORITE_REMOVE = 'お気に入りから外す';
    export const NOTE_ADD_BUTTON = 'ノートを追加';
    
    export const SHARED_DRAFT_DOC_REQUIRED = '公開には確認必須資料が1件以上必要です';
    export const SHARED_PUBLISH_MISSING_PURPOSE = '目的を選択してください';
    export const SHARED_PUBLISH_MISSING_TITLE = '件名を入力してください';
    export const SHARED_PUBLISH_MISSING_DUE = '期限を設定してください';
    export const SHARED_PUBLISH_MISSING_ASSIGNEE = '有効な対象者を1名以上設定してください';
    export const SHARED_PUBLISH_MISSING_DOC = '確認に必要な資料を1件以上追加してください';
    
    export const PERSONAL_START_MISSING_TITLE = 'タイトルを入力してください';
    export const PERSONAL_START_MISSING_DUE = '期限を設定してください';
    export const PERSONAL_DUE_READONLY = '開始後は期限を変更できません';
    
    export const EMPTY_LIST_MESSAGE = '該当するタスクはありません';
    export const RELATED_DOCS_HEADING = '関連資料';
    export const CONFIRM_DOCS_HEADING = '確認必須資料';
    export const REFERENCE_DOCS_HEADING = '参考資料';
    
    export const PERSONAL_EDITOR_TITLE = '個人タスクを編集';
    export const PERSONAL_EDITOR_NEW_TITLE = '個人タスクを作成';
    export const PERSONAL_EDITOR_FIELD_TITLE = 'タイトル';
    export const PERSONAL_EDITOR_FIELD_BODY = '本文';
    export const PERSONAL_EDITOR_FIELD_DUE = '期限';
    export const PERSONAL_EDITOR_FIELD_PROJECT = '関連プロジェクト';
    export const PERSONAL_EDITOR_FIELD_ATTACHMENTS = '資料';
    export const PERSONAL_EDITOR_SAVE_DRAFT = '下書き保存';
    export const PERSONAL_EDITOR_START = '開始する';
    export const PERSONAL_EDITOR_UPDATE = '更新を保存';
    export const PERSONAL_EDITOR_CANCEL = 'キャンセル';
    
    export const SHARED_EDITOR_TITLE = '共有タスクを編集';
    export const SHARED_EDITOR_NEW_TITLE = '共有タスクを作成';
    export const SHARED_EDITOR_FIELD_PURPOSE = '目的';
    export const SHARED_EDITOR_FIELD_TITLE = '件名';
    export const SHARED_EDITOR_FIELD_BODY = '本文';
    export const SHARED_EDITOR_FIELD_DUE = '期限';
    export const SHARED_EDITOR_FIELD_ASSIGNEES = '対象者';
    export const SHARED_EDITOR_FIELD_SUCCESSOR = '後継者';
    export const SHARED_EDITOR_FIELD_DOCS = '関連資料';
    export const SHARED_EDITOR_SAVE_DRAFT = '下書き保存';
    export const SHARED_EDITOR_PUBLISH = '公開する';
    export const SHARED_EDITOR_CANCEL = 'キャンセル';
    
    
    ============================================================
    FILE: src\data\taskNaviDb.ts
    ============================================================
    import Dexie, { type Table } from 'dexie';
    import type {
      Project, User, ProjectMember, Task, TaskAssignment,
      AssignmentSubmission, TaskAttachment, AttachmentRevision,
      AssignmentDocumentRequirement, TaskChatMessage, TaskNote, TaskNoteFavorite,
      TaskTodo, TaskActivityEvent,
      PersonalTask, PersonalTaskAttachment, PersonalTaskDeletionEvent,
      TaskTemplate, TaskTemplateAttachment, TaskTemplateFavorite,
      ChatAttachmentPromotion,
    } from '../domain/taskNaviTypes';
    import { DB_NAME, DB_VERSION } from '../domain/taskNaviConstants';
    
    export class TaskNaviDB extends Dexie {
      projects!: Table<Project, string>;
      users!: Table<User, string>;
      project_members!: Table<ProjectMember, string>;
      tasks!: Table<Task, string>;
      task_assignments!: Table<TaskAssignment, string>;
      assignment_submissions!: Table<AssignmentSubmission, string>;
      task_attachments!: Table<TaskAttachment, string>;
      attachment_revisions!: Table<AttachmentRevision, string>;
      assignment_document_requirements!: Table<AssignmentDocumentRequirement, string>;
      task_chat_messages!: Table<TaskChatMessage, string>;
      task_notes!: Table<TaskNote, string>;
      task_note_favorites!: Table<TaskNoteFavorite, string>;
      task_todos!: Table<TaskTodo, string>;
      task_activity_events!: Table<TaskActivityEvent, string>;
      personal_tasks!: Table<PersonalTask, string>;
      personal_task_attachments!: Table<PersonalTaskAttachment, string>;
      personal_task_deletion_events!: Table<PersonalTaskDeletionEvent, string>;
      task_templates!: Table<TaskTemplate, string>;
      task_template_attachments!: Table<TaskTemplateAttachment, string>;
      task_template_favorites!: Table<TaskTemplateFavorite, string>;
      chat_attachment_promotions!: Table<ChatAttachmentPromotion, string>;
    
      constructor() {
        super(DB_NAME);
        this.version(1).stores({
          projects: 'id, name',
          users: 'id, name',
          project_members: 'id, project_id, user_id',
          tasks: 'id, project_id, status, created_by, updated_at',
          task_assignments: 'id, task_id, user_id, progress_status',
          assignment_submissions: 'id, assignment_id',
          task_attachments: 'id, task_id',
          attachment_revisions: 'id, attachment_id',
          assignment_document_requirements: 'id, assignment_id, attachment_id',
          task_chat_messages: 'id, task_id, user_id, created_at',
          task_notes: 'id, task_id, user_id, visibility, created_at',
          task_todos: 'id, task_id, user_id, done',
          task_activity_events: 'id, task_id, project_id, created_at',
        });
        this.version(2).stores({
          task_note_favorites: 'id, note_id, user_id, &[note_id+user_id]',
        });
        this.version(3).stores({
          tasks: 'id, project_id, status, created_by, successor_user_id, updated_at',
          task_attachments: 'id, task_id, attachment_status',
          attachment_revisions: 'id, attachment_id, revision_no',
          assignment_submissions: 'id, assignment_id, submission_status, submitted_at',
          assignment_document_requirements: 'id, assignment_id, attachment_id, requirement_status',
          task_activity_events: 'id, task_id, project_id, event_type, created_at',
        });
        this.version(DB_VERSION).stores({
          personal_tasks: 'id, owner_user_id, status, due_at, updated_at',
          personal_task_attachments: 'id, personal_task_id',
          personal_task_deletion_events: 'id, owner_user_id, deleted_at',
          task_templates: 'id, name, created_by_user_id, status, updated_at',
          task_template_attachments: 'id, template_id, sort_order',
          task_template_favorites: 'id, template_id, user_id, &[template_id+user_id]',
          task_notes: 'id, task_id, user_id, visibility, created_at, updated_at',
        }).upgrade(async (tx) => {
          const notes = await tx.table('task_notes').toArray();
          for (const n of notes) {
            if (!n.updated_at) {
              await tx.table('task_notes').put({ ...n, updated_at: n.created_at });
            }
          }
        });
      
          // チャット添付ファイルの関連資料化申請を保存するテーブル。
          // 同じタスク・同じチャットメッセージへの重複申請を複合一意キーで防止する。
          this.version(DB_VERSION + 1).stores({
            chat_attachment_promotions: 'id, task_id, chat_message_id, status, requested_by_user_id, &[task_id+chat_message_id]',
          });}
    }
    
    let dbInstance: TaskNaviDB | null = null;
    
    export function getDb(): TaskNaviDB {
      if (!dbInstance) {
        dbInstance = new TaskNaviDB();
      }
      return dbInstance;
    }
    
    export function isIndexedDBAvailable(): boolean {
      try {
        return typeof indexedDB !== 'undefined';
      } catch {
        return false;
      }
    }
    
    
    ============================================================
    FILE: src\data\taskNaviRepository.ts
    ============================================================
    import { getDb } from './taskNaviDb';
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
    }): Promise<AssignmentSubmission> {
      const db = getDb();
      const existing = await db.assignment_submissions.where('assignment_id').equals(data.assignment_id).toArray();
      const maxNo = existing.reduce((max, s) => Math.max(max, s.submission_no), 0);
      const ts = now();
      const sub: AssignmentSubmission = {
        id: uuid(),
        assignment_id: data.assignment_id,
        submission_type: data.submission_type,
        submission_no: maxNo + 1,
        body: data.body,
        submission_status: 'submitted',
        submitted_by: data.submitted_by,
        submitted_at: ts,
        reviewed_by_user_id: null,
        reviewed_at: null,
        review_comment: null,
      };
      await db.assignment_submissions.put(sub);
      return sub;
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
    
    ============================================================
    FILE: src\data\taskNaviSeed.ts
    ============================================================
    import { getDb } from './taskNaviDb';
    import type {
      Project, User, ProjectMember, Task, TaskAssignment,
      TaskChatMessage, TaskNote, TaskTodo, TaskActivityEvent, TaskPurpose, ProgressStatus,
      TaskAttachment, AttachmentRevision, AssignmentDocumentRequirement,
      AssignmentSubmission, CloseType,
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
    
    function now(): string { return new Date().toISOString(); }
    function daysFromNow(days: number): string { const d = new Date(); d.setDate(d.getDate() + days); return d.toISOString(); }
    function hoursAgo(h: number): string { const d = new Date(); d.setHours(d.getHours() - h); return d.toISOString(); }
    function daysAgo(days: number): string { const d = new Date(); d.setDate(d.getDate() - days); return d.toISOString(); }
    
    export async function isSeeded(): Promise<boolean> {
      const db = getDb();
      const count = await db.projects.count();
      return count > 0;
    }
    
    export async function seedDatabase(): Promise<void> {
      const db = getDb();
      const projectId = 'proj-road';
      const projectId2 = 'proj-bldg';
    
      const users: User[] = [
        { id: 'u-yamada', name: '山田 太郎', avatar_class: 'avatar-sand', initials: 'YT' },
        { id: 'u-tanaka', name: '田中 花子', avatar_class: 'avatar-navy', initials: 'TH' },
        { id: 'u-sato', name: '佐藤 一郎', avatar_class: 'avatar-blue', initials: 'SI' },
        { id: 'u-suzuki', name: '鈴木 次郎', avatar_class: 'avatar-green', initials: 'SJ' },
        { id: 'u-takahashi', name: '高橋 三郎', avatar_class: 'avatar-navy', initials: 'TK' },
        { id: 'u-ito', name: '伊藤 美咲', avatar_class: 'avatar-blue', initials: 'IM' },
        { id: 'u-watanabe', name: '渡辺 健一', avatar_class: 'avatar-green', initials: 'WK' },
      ];
    
      const projects: Project[] = [
        { id: projectId, name: '○○○道路工事', color: 'blue', created_at: now() },
        { id: projectId2, name: '△△△建築工事', color: 'orange', created_at: now() },
      ];
    
      const members: ProjectMember[] = [
        { id: uuid(), project_id: projectId, user_id: 'u-yamada', role: '作成者' },
        { id: uuid(), project_id: projectId, user_id: 'u-tanaka', role: '後継者' },
        { id: uuid(), project_id: projectId, user_id: 'u-sato', role: '対象者' },
        { id: uuid(), project_id: projectId, user_id: 'u-suzuki', role: '対象者' },
        { id: uuid(), project_id: projectId, user_id: 'u-takahashi', role: '対象者' },
        { id: uuid(), project_id: projectId, user_id: 'u-ito', role: '対象者' },
        { id: uuid(), project_id: projectId, user_id: 'u-watanabe', role: '対象者' },
        { id: uuid(), project_id: projectId2, user_id: 'u-yamada', role: '作成者' },
        { id: uuid(), project_id: projectId2, user_id: 'u-sato', role: '対象者' },
        { id: uuid(), project_id: projectId2, user_id: 'u-suzuki', role: '対象者' },
        { id: uuid(), project_id: projectId2, user_id: 'u-takahashi', role: '対象者' },
        { id: uuid(), project_id: projectId2, user_id: 'u-ito', role: '対象者' },
        { id: uuid(), project_id: projectId2, user_id: 'u-watanabe', role: '対象者' },
      ];
    
      const taskIds: string[] = [];
      for (let i = 0; i < 9; i++) taskIds.push(uuid());
    
      const tasks: Task[] = [
        // 1: 下書きタスク（draft）
        { id: taskIds[0], project_id: projectId, purpose: '作業依頼', title: '請求書の内容確認と報告（下書き）', body: '請求書の内容を確認し、報告してください。', status: 'draft', due_at: daysFromNow(5), created_by: 'u-yamada', created_at: hoursAgo(1), updated_at: hoursAgo(1), opened_at: null, closed_at: null, close_type: null, close_reason: null, closed_by_user_id: null, archived_at: null, successor_user_id: null },
        // 2: 作業依頼（open）— 対象者3名（1名報告済み）
        { id: taskIds[1], project_id: projectId, purpose: '作業依頼', title: '現場写真の撮影と報告', body: '現場の進捗状況を撮影し、報告してください。', status: 'open', due_at: daysFromNow(4), created_by: 'u-yamada', created_at: hoursAgo(24), updated_at: hoursAgo(20), opened_at: hoursAgo(20), closed_at: null, close_type: null, close_reason: null, closed_by_user_id: null, archived_at: null, successor_user_id: null },
        // 3: 確認・判断依頼（open / 期限切れ）— 添付資料付き（確認必須資料）
        { id: taskIds[2], project_id: projectId, purpose: '確認・判断依頼', title: '契約書の最終確認と承認', body: '契約内容を確認し、問題がなければ承認してください。', status: 'open', due_at: daysAgo(10), created_by: 'u-yamada', created_at: hoursAgo(72), updated_at: hoursAgo(48), opened_at: hoursAgo(48), closed_at: null, close_type: null, close_reason: null, closed_by_user_id: null, archived_at: null, successor_user_id: 'u-tanaka' },
        // 4: 周知・意見聴取（open）— チャット添付ファイル付き
        { id: taskIds[3], project_id: projectId, purpose: '周知・意見聴取', title: '社内ポリシー改訂案へのコメント', body: '改訂案についてコメントしてください。', status: 'open', due_at: daysFromNow(7), created_by: 'u-yamada', created_at: hoursAgo(8), updated_at: hoursAgo(2), opened_at: hoursAgo(7), closed_at: null, close_type: null, close_reason: null, closed_by_user_id: null, archived_at: null, successor_user_id: null },
        // 5: 回答・申込受付（open）— 対象者7名（6名完了、1名未完了）。「6/7人」表示用
        { id: taskIds[4], project_id: projectId2, purpose: '回答・申込受付', title: '懇親会参加申込', body: '参加可否を回答してください。', status: 'open', due_at: daysFromNow(6), created_by: 'u-yamada', created_at: hoursAgo(3), updated_at: hoursAgo(2), opened_at: hoursAgo(2), closed_at: null, close_type: null, close_reason: null, closed_by_user_id: null, archived_at: null, successor_user_id: null },
        // 6: 自動クローズ済みタスク（closed / auto）
        { id: taskIds[5], project_id: projectId, purpose: '周知・意見聴取', title: '第3四半期レビューの日程調整', body: '日程について意見を聞かせてください。', status: 'closed', due_at: daysFromNow(0), created_by: 'u-yamada', created_at: hoursAgo(48), updated_at: hoursAgo(24), opened_at: hoursAgo(40), closed_at: hoursAgo(24), close_type: 'auto' as CloseType, close_reason: null, closed_by_user_id: null, archived_at: null, successor_user_id: null },
        // 7: 強制終了済みタスク（closed / forced）
        { id: taskIds[6], project_id: projectId, purpose: '作業依頼', title: '不要になった資料作成', body: '不要となったため強制終了します。', status: 'closed', due_at: daysFromNow(0), created_by: 'u-yamada', created_at: hoursAgo(96), updated_at: hoursAgo(50), opened_at: hoursAgo(80), closed_at: hoursAgo(50), close_type: 'forced' as CloseType, close_reason: '業務要件変更により不要になりました', closed_by_user_id: 'u-yamada', archived_at: null, successor_user_id: null },
        // 8: 差戻し済みタスク（open / accept_return）
        { id: taskIds[7], project_id: projectId, purpose: '作業依頼', title: 'システム障害対応の報告書作成', body: '報告書を作成して提出してください。', status: 'open', due_at: daysFromNow(2), created_by: 'u-yamada', created_at: hoursAgo(72), updated_at: hoursAgo(10), opened_at: hoursAgo(48), closed_at: null, close_type: null, close_reason: null, closed_by_user_id: null, archived_at: null, successor_user_id: null },
        // 9: 確認・判断依頼（open）— 添付資料付き（確認必須）、対象者3名
        { id: taskIds[8], project_id: projectId2, purpose: '確認・判断依頼', title: '設計図面の確認と承認', body: '添付の設計図面を確認し、問題がなければ承認してください。', status: 'open', due_at: daysFromNow(3), created_by: 'u-yamada', created_at: hoursAgo(6), updated_at: hoursAgo(4), opened_at: hoursAgo(5), closed_at: null, close_type: null, close_reason: null, closed_by_user_id: null, archived_at: null, successor_user_id: null },
      ];
    
      const assignments: TaskAssignment[] = [];
      const assigneeSets: Record<number, { user_id: string; progress: ProgressStatus; completed_at: string | null }[]> = {
        1: [],
        2: [
          { user_id: 'u-sato', progress: 'reported', completed_at: hoursAgo(5) },
          { user_id: 'u-suzuki', progress: 'pending', completed_at: null },
          { user_id: 'u-takahashi', progress: 'pending', completed_at: null },
        ],
        3: [
          { user_id: 'u-sato', progress: 'pending', completed_at: null },
          { user_id: 'u-suzuki', progress: 'pending', completed_at: null },
        ],
        4: [
          { user_id: 'u-sato', progress: 'pending', completed_at: null },
          { user_id: 'u-suzuki', progress: 'pending', completed_at: null },
        ],
        5: [
          { user_id: 'u-yamada', progress: 'accepted', completed_at: hoursAgo(10) },
          { user_id: 'u-tanaka', progress: 'accepted', completed_at: hoursAgo(8) },
          { user_id: 'u-sato', progress: 'accepted', completed_at: hoursAgo(6) },
          { user_id: 'u-suzuki', progress: 'accepted', completed_at: hoursAgo(4) },
          { user_id: 'u-takahashi', progress: 'accepted', completed_at: hoursAgo(3) },
          { user_id: 'u-ito', progress: 'accepted', completed_at: hoursAgo(2) },
          { user_id: 'u-watanabe', progress: 'pending', completed_at: null },
        ],
        6: [
          { user_id: 'u-sato', progress: 'confirmed', completed_at: hoursAgo(30) },
          { user_id: 'u-suzuki', progress: 'confirmed', completed_at: hoursAgo(28) },
          { user_id: 'u-takahashi', progress: 'confirmed', completed_at: hoursAgo(25) },
        ],
        7: [
          { user_id: 'u-sato', progress: 'pending', completed_at: null },
          { user_id: 'u-suzuki', progress: 'pending', completed_at: null },
        ],
        8: [
          { user_id: 'u-sato', progress: 'returned', completed_at: null },
          { user_id: 'u-suzuki', progress: 'pending', completed_at: null },
        ],
        9: [
          { user_id: 'u-sato', progress: 'pending', completed_at: null },
          { user_id: 'u-suzuki', progress: 'pending', completed_at: null },
          { user_id: 'u-takahashi', progress: 'pending', completed_at: null },
        ],
      };
    
      tasks.forEach((task, idx) => {
        const set = assigneeSets[idx + 1];
        if (set) {
          set.forEach((a) => {
            assignments.push({
              id: uuid(), task_id: task.id, user_id: a.user_id,
              progress_status: a.progress, assignment_status: 'active',
              eligibility_status: 'eligible', completed_at: a.completed_at, updated_at: now(),
            });
          });
        }
      });
    
      // Attachments: task 3 (確認・判断依頼) with confirmation_required doc
      const att3Id = uuid();
      const attachments: TaskAttachment[] = [
        {
          id: att3Id, task_id: taskIds[2], name: '契約書_2026年版.pdf', attachment_type: 'confirmation_required',
          attachment_status: 'active', uploaded_by: 'u-yamada', uploaded_at: hoursAgo(48),
          current_revision_no: 1, withdrawn_at: null, withdrawal_reason: null,
        },
        // task 9 (確認・判断依頼) with confirmation_required doc
        {
          id: ((): string => { const v = uuid(); return v; })(), task_id: taskIds[8], name: '設計図面_改訂版.pdf',
          attachment_type: 'confirmation_required', attachment_status: 'active', uploaded_by: 'u-yamada',
          uploaded_at: hoursAgo(5), current_revision_no: 1, withdrawn_at: null, withdrawal_reason: null,
        },
      ];
      const att9Id = attachments[1].id;
    
      const revisions: AttachmentRevision[] = [
        { id: uuid(), attachment_id: att3Id, revision_no: 1, filename: '契約書_2026年版.pdf', revision_reason: null, uploaded_by: 'u-yamada', uploaded_at: hoursAgo(48) },
        { id: uuid(), attachment_id: att9Id, revision_no: 1, filename: '設計図面_改訂版.pdf', revision_reason: null, uploaded_by: 'u-yamada', uploaded_at: hoursAgo(5) },
      ];
    
      // Requirements: for task 3 assignees (both need to confirm the doc)
      const reqs: AssignmentDocumentRequirement[] = [];
      const a3s = assignments.filter((a) => a.task_id === taskIds[2]);
      a3s.forEach((a) => {
        reqs.push({
          id: uuid(), assignment_id: a.id, attachment_id: att3Id, required_revision_no: 1,
          accessed_revision_no: null, accessed_at: null, access_method: null,
          confirmed_revision_no: null, confirmed_at: null, requirement_status: 'required',
        });
      });
      // For task 9 assignees
      const a9s = assignments.filter((a) => a.task_id === taskIds[8]);
      a9s.forEach((a) => {
        reqs.push({
          id: uuid(), assignment_id: a.id, attachment_id: att9Id, required_revision_no: 1,
          accessed_revision_no: null, accessed_at: null, access_method: null,
          confirmed_revision_no: null, confirmed_at: null, requirement_status: 'required',
        });
      });
    
      const subs: AssignmentSubmission[] = [];
      const a2 = assignments.find((a) => a.task_id === taskIds[1] && a.user_id === 'u-sato');
      if (a2) {
        subs.push({ id: uuid(), assignment_id: a2.id, submission_type: 'work_report', submission_no: 1, body: '現場写真を撮影し、報告します。', submission_status: 'submitted', submitted_by: 'u-sato', submitted_at: hoursAgo(5), reviewed_by_user_id: null, reviewed_at: null, review_comment: null });
      }
      const a8 = assignments.find((a) => a.task_id === taskIds[7] && a.user_id === 'u-sato');
      if (a8) {
        subs.push({ id: uuid(), assignment_id: a8.id, submission_type: 'work_report', submission_no: 1, body: '報告書を作成しました。', submission_status: 'returned', submitted_by: 'u-sato', submitted_at: hoursAgo(20), reviewed_by_user_id: 'u-yamada', reviewed_at: hoursAgo(10), review_comment: '不足している項目があります。補完して再提出してください。' });
      }
    
      // Chats with attachment files (task 4: 周知・意見聴取)
      const chats: TaskChatMessage[] = [
        { id: uuid(), task_id: taskIds[3], user_id: 'u-sato', text: '改訂案について確認します。', attachment_filename: null, created_at: hoursAgo(2) },
        { id: uuid(), task_id: taskIds[3], user_id: 'u-yamada', text: '資料を添付します。', attachment_filename: 'ポリシー改訂案_草案.pdf', created_at: hoursAgo(2) },
        { id: uuid(), task_id: taskIds[3], user_id: 'u-suzuki', text: '確認しました。第3条についてコメントがあります。', attachment_filename: 'コメント案.docx', created_at: hoursAgo(1) },
        { id: uuid(), task_id: taskIds[3], user_id: 'u-yamada', text: 'よろしくお願いします。', attachment_filename: null, created_at: hoursAgo(1) },
        // task 2 also has a chat with file
        { id: uuid(), task_id: taskIds[1], user_id: 'u-sato', text: '現場写真をアップします。', attachment_filename: '現場写真_0901.jpg', created_at: hoursAgo(5) },
      ];
    
      const notes: TaskNote[] = [
        { id: uuid(), task_id: taskIds[3], user_id: 'u-yamada', visibility: 'shared', color: 'note-yellow', text: '第3条の記載を確認する', attachment_filename: null, created_at: hoursAgo(2), updated_at: hoursAgo(2) },
      ];
    
      const todos: TaskTodo[] = [
        { id: uuid(), task_id: taskIds[3], user_id: 'u-yamada', text: '改訂案を確認する', done: false, created_at: hoursAgo(2) },
      ];
    
      const activities: TaskActivityEvent[] = [
        { id: uuid(), task_id: taskIds[5], project_id: projectId, event_type: 'task_auto_closed', label: '全員の条件達成により自動終了しました', user_id: '', created_at: hoursAgo(24), reason: null },
        { id: uuid(), task_id: taskIds[6], project_id: projectId, event_type: 'task_forced_closed', label: '強制終了しました', user_id: 'u-yamada', created_at: hoursAgo(50), reason: '業務要件変更により不要になりました' },
        { id: uuid(), task_id: taskIds[7], project_id: projectId, event_type: 'work_report_returned', label: '作業報告を差戻しました', user_id: 'u-yamada', created_at: hoursAgo(10), reason: '不足している項目があります。補完して再提出してください。' },
        { id: uuid(), task_id: taskIds[2], project_id: projectId, event_type: 'attachment_added', label: '資料「契約書_2026年版.pdf」を追加しました', user_id: 'u-yamada', created_at: hoursAgo(48), reason: null },
        { id: uuid(), task_id: taskIds[8], project_id: projectId2, event_type: 'attachment_added', label: '資料「設計図面_改訂版.pdf」を追加しました', user_id: 'u-yamada', created_at: hoursAgo(5), reason: null },
      ];
    
      const ptIds: string[] = [];
      for (let i = 0; i < 5; i++) ptIds.push(uuid());
      const personalTasks: PersonalTask[] = [
        { id: ptIds[0], owner_user_id: 'u-yamada', title: '', body: '', related_project_id: null, due_at: null, status: 'draft', created_at: hoursAgo(2), updated_at: hoursAgo(2), started_at: null, archived_at: null },
        { id: ptIds[1], owner_user_id: 'u-yamada', title: '週次レポート作成', body: '今週の作業レポートをまとめる', related_project_id: projectId, due_at: daysFromNow(3), status: 'open', created_at: hoursAgo(10), updated_at: hoursAgo(8), started_at: hoursAgo(8), archived_at: null },
        { id: ptIds[2], owner_user_id: 'u-yamada', title: '経費精算の提出', body: '先月分の経費精算を提出する', related_project_id: null, due_at: hoursAgo(24), status: 'open', created_at: hoursAgo(72), updated_at: hoursAgo(48), started_at: hoursAgo(48), archived_at: null },
        { id: ptIds[3], owner_user_id: 'u-yamada', title: '過去の資料整理', body: '古い資料を整理して保管場所に移動', related_project_id: projectId2, due_at: hoursAgo(100), status: 'archived', created_at: hoursAgo(200), updated_at: hoursAgo(120), started_at: hoursAgo(180), archived_at: hoursAgo(120) },
        { id: ptIds[4], owner_user_id: 'u-yamada', title: 'プレゼン資料作成', body: '次回会議用のプレゼン資料を作成する', related_project_id: projectId, due_at: daysFromNow(7), status: 'open', created_at: hoursAgo(20), updated_at: hoursAgo(15), started_at: hoursAgo(15), archived_at: null },
      ];
      const personalAttachments: PersonalTaskAttachment[] = [
        { id: uuid(), personal_task_id: ptIds[4], display_name: '前回プレゼン資料.pptx', created_at: hoursAgo(14) },
      ];
    
      const tplIds: string[] = [uuid(), uuid()];
      const templates: TaskTemplate[] = [
        { id: tplIds[0], name: '第○回安全大会の準備', purpose: '周知・意見聴取', title_template: '第○回安全大会の開催案内', body_template: '安全大会の開催について周知します。参加可否をお知らせください。', created_by_user_id: 'u-yamada', created_at: hoursAgo(100), updated_at: hoursAgo(50), source_task_id: null, status: 'active' },
        { id: tplIds[1], name: '月次作業報告テンプレート', purpose: '作業依頼', title_template: '月次作業報告の提出', body_template: '今月の作業報告を提出してください。', created_by_user_id: 'u-yamada', created_at: hoursAgo(80), updated_at: hoursAgo(30), source_task_id: null, status: 'active' },
      ];
      const templateAttachments: TaskTemplateAttachment[] = [
        { id: uuid(), template_id: tplIds[0], display_name: '安全大会アジェンダ.pdf', attachment_type: 'reference', sort_order: 0 },
        { id: uuid(), template_id: tplIds[0], display_name: '安全点検表.xlsx', attachment_type: 'confirmation_required', sort_order: 1 },
      ];
      const templateFavorites: TaskTemplateFavorite[] = [
        { id: uuid(), template_id: tplIds[0], user_id: 'u-yamada', created_at: hoursAgo(40) },
      ];
    
      await db.transaction('rw', [db.projects, db.users, db.project_members, db.tasks, db.task_assignments, db.task_attachments, db.attachment_revisions, db.assignment_document_requirements, db.assignment_submissions, db.task_chat_messages, db.task_notes, db.task_todos, db.task_activity_events, db.personal_tasks, db.personal_task_attachments, db.task_templates, db.task_template_attachments, db.task_template_favorites], async () => {
        await db.projects.bulkPut(projects);
        await db.users.bulkPut(users);
        await db.project_members.bulkPut(members);
        await db.tasks.bulkPut(tasks);
        await db.task_assignments.bulkPut(assignments);
        await db.task_attachments.bulkPut(attachments);
        await db.attachment_revisions.bulkPut(revisions);
        await db.assignment_document_requirements.bulkPut(reqs);
        await db.assignment_submissions.bulkPut(subs);
        await db.task_chat_messages.bulkPut(chats);
        await db.task_notes.bulkPut(notes);
        await db.task_todos.bulkPut(todos);
        await db.task_activity_events.bulkPut(activities);
        await db.personal_tasks.bulkPut(personalTasks);
        await db.personal_task_attachments.bulkPut(personalAttachments);
        await db.task_templates.bulkPut(templates);
        await db.task_template_attachments.bulkPut(templateAttachments);
        await db.task_template_favorites.bulkPut(templateFavorites);
      });
    }
    
    export async function resetDatabase(): Promise<void> {
      const db = getDb();
      const tables = [db.projects, db.users, db.project_members, db.tasks, db.task_assignments,
        db.assignment_submissions, db.task_attachments, db.attachment_revisions,
        db.assignment_document_requirements, db.task_chat_messages, db.task_notes,
        db.task_note_favorites, db.task_todos, db.task_activity_events,
        db.personal_tasks, db.personal_task_attachments, db.personal_task_deletion_events,
        db.task_templates, db.task_template_attachments, db.task_template_favorites,
            db.chat_attachment_promotions];
      await db.transaction('rw', tables, async () => {
        await Promise.all(tables.map((t) => t.clear()));
      });
      await seedDatabase();
    }
    
    
    ============================================================
    FILE: src\services\taskNaviService.ts
    ============================================================
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
      if (!task || (task.status !== 'closed' && task.status !== 'archived')) throw new Error('Template can only be saved from closed or archived tasks');
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
    
    ============================================================
    FILE: src\hooks\useTaskNavi.ts
    ============================================================
    import { useCallback, useEffect, useRef, useState } from 'react';
    import { isIndexedDBAvailable } from '../data/taskNaviDb';
    import { isSeeded, seedDatabase, resetDatabase } from '../data/taskNaviSeed';
    import type {
      TaskView, TaskDetailView, ProjectView, UserView, ActivityView, NoteListView,
      TaskPurpose, TaskStatus, AttachmentType,
      PersonalTaskView, PersonalTaskDetailView, TemplateView,
      PageView, MyTasksFilter, TaskTypeFilter, SharedConditionFilter, PersonalConditionFilter,
      TaskPurpose as PurposeType,
    } from '../domain/taskNaviTypes';
    import * as service from '../services/taskNaviService';
    import { getProjectMembers, getAllProjectMembers, createTemplate as repoCreateTemplate, deleteTemplateAtomic } from '../data/taskNaviRepository';
    
    export interface TaskCreateInput {
      purpose: TaskPurpose;
      title: string;
      body: string;
      due_at: string | null;
      assignee_user_ids: string[];
      publish: boolean;
      successor_user_id: string | null;
    }
    
    export interface PersonalTaskCreateInput {
      title: string;
      body: string;
      related_project_id: string | null;
      due_at: string | null;
      publish: boolean;
    }
    
    export function useTaskNavi() {
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState<string | null>(null);
      const [projects, setProjects] = useState<ProjectView[]>([]);
      const [users, setUsers] = useState<UserView[]>([]);
      const [currentUserId, setCurrentUserId] = useState('');
      const [currentProjectId, setCurrentProjectId] = useState('');
      const [allTasks, setAllTasks] = useState<TaskView[]>([]);
      const [projectTasks, setProjectTasks] = useState<TaskView[]>([]);
      const [activities, setActivities] = useState<ActivityView[]>([]);
      const [projectMembers, setProjectMembers] = useState<UserView[]>([]);
      const [detail, setDetail] = useState<TaskDetailView | null>(null);
      const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
      const [toast, setToast] = useState('');
      const [showResetConfirm, setShowResetConfirm] = useState(false);
      const [noteList, setNoteList] = useState<NoteListView[]>([]);
    
      // Phase 3.0 state
      const [pageView, setPageView] = useState<PageView>('my_tasks');
      const [personalTasks, setPersonalTasks] = useState<PersonalTaskView[]>([]);
      const [templates, setTemplates] = useState<TemplateView[]>([]);
      // ユーザー切替中に、古いテンプレート読込結果が画面を上書きしないための連番。
      const templateReloadRequestRef = useRef(0);
      const [personalDetail, setPersonalDetail] = useState<PersonalTaskDetailView | null>(null);
      const [selectedPersonalTaskId, setSelectedPersonalTaskId] = useState<string | null>(null);
      const [availableProjectIds, setAvailableProjectIds] = useState<Set<string>>(new Set());
    
      // Filter state
      const [searchQuery, setSearchQuery] = useState('');
      const [myTasksFilter, setMyTasksFilter] = useState<MyTasksFilter>('all');
      const [taskTypeFilter, setTaskTypeFilter] = useState<TaskTypeFilter>('all');
      const [sharedConditionFilter, setSharedConditionFilter] = useState<SharedConditionFilter>('all');
      const [personalConditionFilter, setPersonalConditionFilter] = useState<PersonalConditionFilter>('all');
      const [purposeFilter, setPurposeFilter] = useState<PurposeType | 'all'>('all');
      const [viewMode, setViewMode] = useState<'list' | 'board'>('list');
      const [page, setPage] = useState(1);
      const [pageSize, setPageSize] = useState(30);
    
      function showToast(msg: string) {
        setToast(msg);
        window.setTimeout(() => setToast(''), 2400);
      }
    
      const reloadAllTasks = useCallback(async (userId: string) => {
        const list = await service.loadAllTasksForUser(userId);
        setAllTasks(list);
      }, []);
    
      const reloadProjectTasks = useCallback(async (projectId: string, userId: string) => {
        const [list, acts] = await Promise.all([
          service.loadSharedTasksForUser(projectId, userId),
          service.loadActivity(projectId, 10),
        ]);
        setProjectTasks(list);
        setActivities(acts);
      }, []);
    
      const reloadNoteList = useCallback(async (userId: string) => {
        const list = await service.loadNoteList(userId);
        setNoteList(list);
      }, []);
    
      const reloadPersonalTasks = useCallback(async (userId: string) => {
        const list = await service.loadPersonalTasks(userId);
        setPersonalTasks(list);
      }, []);
    
      const reloadTemplates = useCallback(async (userId: string) => {
        const requestNo = ++templateReloadRequestRef.current;
        const list = await service.loadTemplates(userId);
    
        // ユーザーA → ユーザーB → ユーザーA のような切替時に、
        // 前の非同期読込結果で現在の一覧を上書きしない。
        if (requestNo !== templateReloadRequestRef.current) return;
    
        setTemplates(list);
      }, []);
    
      const reloadAvailableProjects = useCallback(async (userId: string) => {
        const members = await getAllProjectMembers();
        setAvailableProjectIds(new Set(members.filter((m) => m.user_id === userId).map((m) => m.project_id)));
      }, []);
    
      const init = useCallback(async () => {
        if (!isIndexedDBAvailable()) {
          setError('このブラウザではIndexedDBが利用できません。');
          setLoading(false);
          return;
        }
        try {
          const seeded = await isSeeded();
          if (!seeded) await seedDatabase();
          const [projs, allUsers] = await Promise.all([service.loadProjects(), service.loadUsers()]);
          setProjects(projs);
          setUsers(allUsers);
          if (projs.length > 0) setCurrentProjectId(projs[0].id);
          if (allUsers.length > 0) setCurrentUserId(allUsers[0].id);
          setLoading(false);
        } catch (e) {
          setError(`データの読み込みに失敗しました: ${e instanceof Error ? e.message : String(e)}`);
          setLoading(false);
        }
      }, []);
    
      useEffect(() => { void init(); }, [init]);
    
      useEffect(() => {
        if (currentUserId) {
          void reloadAllTasks(currentUserId);
          void reloadNoteList(currentUserId);
          void reloadPersonalTasks(currentUserId);
          void reloadTemplates(currentUserId);
          void reloadAvailableProjects(currentUserId);
        }
      }, [currentUserId, reloadAllTasks, reloadNoteList, reloadPersonalTasks, reloadTemplates, reloadAvailableProjects]);
    
      useEffect(() => {
        if (currentProjectId && currentUserId) void reloadProjectTasks(currentProjectId, currentUserId);
      }, [currentProjectId, currentUserId, reloadProjectTasks]);
    
      useEffect(() => {
        async function loadMembers() {
          if (currentProjectId) {
            const members = await getProjectMembers(currentProjectId);
            setProjectMembers(members.map((m) => ({ id: m.user.id, name: m.user.name, avatar_class: m.user.avatar_class, initials: m.user.initials })));
          }
        }
        void loadMembers();
      }, [currentProjectId]);
    
      const openTask = useCallback(async (taskId: string) => {
        if (!currentUserId) return;
        setSelectedTaskId(taskId);
        setSelectedPersonalTaskId(null);
        setPersonalDetail(null);
        const d = await service.loadTaskDetail(taskId, currentUserId);
        setDetail(d);
      }, [currentUserId]);
    
      const closeTask = useCallback(() => {
        setSelectedTaskId(null);
        setDetail(null);
        setSelectedPersonalTaskId(null);
        setPersonalDetail(null);
      }, []);
    
      const refreshDetail = useCallback(async () => {
        if (selectedTaskId && currentUserId) {
          const d = await service.loadTaskDetail(selectedTaskId, currentUserId);
          setDetail(d);
        }
      }, [selectedTaskId, currentUserId]);
    
      const openPersonalTask = useCallback(async (taskId: string) => {
        const d = await service.loadPersonalTaskDetail(taskId);
        setSelectedPersonalTaskId(taskId);
        setSelectedTaskId(null);
        setDetail(null);
        setPersonalDetail(d);
      }, []);
    
      const refreshPersonalDetail = useCallback(async () => {
        if (selectedPersonalTaskId) {
          const d = await service.loadPersonalTaskDetail(selectedPersonalTaskId);
          setPersonalDetail(d);
        }
      }, [selectedPersonalTaskId]);
    
      const reloadAll = useCallback(async () => {
        if (currentUserId) await reloadAllTasks(currentUserId);
        if (currentProjectId && currentUserId) await reloadProjectTasks(currentProjectId, currentUserId);
        await refreshDetail();
        if (currentUserId) await reloadPersonalTasks(currentUserId);
      }, [currentUserId, currentProjectId, reloadAllTasks, reloadProjectTasks, refreshDetail, reloadPersonalTasks]);
    
      const navigateTo = useCallback((view: PageView) => {
        closeTask();
        setPageView(view);
        setPage(1);
        setSearchQuery('');
      }, [closeTask]);
    
      const createTask = useCallback(async (input: TaskCreateInput) => {
        if (!currentProjectId || !currentUserId) return;
        if (input.publish) {
          const result = await service.createAndPublishTask({
            project_id: currentProjectId,
            purpose: input.purpose, title: input.title, body: input.body,
            due_at: input.due_at, assignee_user_ids: input.assignee_user_ids,
            created_by: currentUserId, successor_user_id: input.successor_user_id,
          });
          await reloadAllTasks(currentUserId);
          if (currentProjectId) await reloadProjectTasks(currentProjectId, currentUserId);
          showToast(result.published ? 'タスクを公開しました' : '下書きとして保存しました');
        } else {
          await service.createNewTask({
            project_id: currentProjectId,
            purpose: input.purpose, title: input.title, body: input.body,
            due_at: input.due_at, assignee_user_ids: input.assignee_user_ids,
            created_by: currentUserId, successor_user_id: input.successor_user_id,
          });
          await reloadAllTasks(currentUserId);
          if (currentProjectId) await reloadProjectTasks(currentProjectId, currentUserId);
          showToast('下書きとして保存しました');
        }
      }, [currentProjectId, currentUserId, reloadAllTasks, reloadProjectTasks]);
    
      const publishTask = useCallback(async (taskId: string) => {
        if (!currentUserId) return;
        await service.publishTask(taskId, currentUserId);
        await reloadAll();
        showToast('タスクを公開しました');
      }, [currentUserId, reloadAll]);
    
      const addAttachment = useCallback(async (name: string, attachmentType: AttachmentType) => {
        if (!selectedTaskId || !currentUserId) return;
        await service.addAttachment(selectedTaskId, currentUserId, name, attachmentType);
        await refreshDetail();
        showToast('資料を追加しました');
      }, [selectedTaskId, currentUserId, refreshDetail]);
    
      const reviseAtt = useCallback(async (attachmentId: string, reason: string) => {
        if (!selectedTaskId || !currentUserId) return;
        await service.reviseAttachment(selectedTaskId, attachmentId, reason, currentUserId);
        await refreshDetail();
        showToast('資料を改訂しました');
      }, [selectedTaskId, currentUserId, refreshDetail]);
    
      const withdrawAtt = useCallback(async (attachmentId: string, reason: string) => {
        if (!selectedTaskId || !currentUserId) return;
        await service.withdrawAttachment(selectedTaskId, attachmentId, reason, currentUserId);
        await refreshDetail();
        showToast('資料を撤回しました');
      }, [selectedTaskId, currentUserId, refreshDetail]);
    
      const accessAtt = useCallback(async (assignmentId: string, attachmentId: string, method: 'view' | 'download') => {
        if (!selectedTaskId || !currentUserId) return;
        await service.accessAttachment(selectedTaskId, assignmentId, attachmentId, method, currentUserId);
        await refreshDetail();
      }, [selectedTaskId, currentUserId, refreshDetail]);
    
      const confirmDoc = useCallback(async (assignmentId: string, attachmentId: string) => {
        if (!selectedTaskId || !currentUserId) return;
        await service.confirmDocument(selectedTaskId, assignmentId, attachmentId, currentUserId);
        await reloadAll();
        showToast('資料の確認を完了しました');
      }, [selectedTaskId, currentUserId, reloadAll]);
      // 資料の閲覧・ダウンロードを確認完了として扱う。
      // アクセス記録を残した直後に確認完了処理まで実行し、完了ボタンの活性状態を更新する。
      const accessAndConfirmDoc = useCallback(async (
        assignmentId: string,
        attachmentId: string,
        method: 'view' | 'download',
      ) => {
        if (!selectedTaskId || !currentUserId) return;
    
        await service.accessAttachment(
          selectedTaskId,
          assignmentId,
          attachmentId,
          method,
          currentUserId,
        );
    
        await service.confirmDocument(
          selectedTaskId,
          assignmentId,
          attachmentId,
          currentUserId,
        );
    
        await reloadAll();
        showToast('資料を確認しました');
      }, [selectedTaskId, currentUserId, reloadAll]);
    
      const confirmTask = useCallback(async (assignmentId: string) => {
        if (!selectedTaskId || !currentUserId) return;
        await service.confirmTask(selectedTaskId, assignmentId, currentUserId);
        await reloadAll();
        showToast('確認を完了しました');
      }, [selectedTaskId, currentUserId, reloadAll]);
    
      const submitResponse = useCallback(async (assignmentId: string, body: string) => {
        if (!selectedTaskId || !currentUserId) return;
        await service.submitResponse(selectedTaskId, assignmentId, body, currentUserId);
        await reloadAll();
        showToast('回答を提出しました');
      }, [selectedTaskId, currentUserId, reloadAll]);
    
      const submitWorkReport = useCallback(async (assignmentId: string, body: string) => {
        if (!selectedTaskId || !currentUserId) return;
        await service.submitWorkReport(selectedTaskId, assignmentId, body, currentUserId);
        await refreshDetail();
        showToast('作業報告を提出しました');
      }, [selectedTaskId, currentUserId, refreshDetail]);
    
      const acceptWorkReport = useCallback(async (submissionId: string) => {
        if (!selectedTaskId || !currentUserId) return;
        await service.acceptWorkReport(selectedTaskId, submissionId, currentUserId);
        await reloadAll();
        showToast('作業報告を受領しました');
      }, [selectedTaskId, currentUserId, reloadAll]);
    
      const returnWorkReport = useCallback(async (submissionId: string, reason: string) => {
        if (!selectedTaskId || !currentUserId) return;
        await service.returnWorkReport(selectedTaskId, submissionId, reason, currentUserId);
        await refreshDetail();
        showToast('作業報告を差戻しました');
      }, [selectedTaskId, currentUserId, refreshDetail]);
    
      const exemptAssignee = useCallback(async (assignmentId: string, reason: string) => {
        if (!selectedTaskId || !currentUserId) return;
        await service.exemptAssignee(selectedTaskId, assignmentId, reason, currentUserId);
        await reloadAll();
        showToast('対象者を免除しました');
      }, [selectedTaskId, currentUserId, reloadAll]);
    
      const outOfScopeAssignee = useCallback(async (assignmentId: string, reason: string) => {
        if (!selectedTaskId || !currentUserId) return;
        await service.outOfScopeAssignee(selectedTaskId, assignmentId, reason, currentUserId);
        await reloadAll();
        showToast('対象者を対象外にしました');
      }, [selectedTaskId, currentUserId, reloadAll]);
    
      const forceCloseTask = useCallback(async (taskId: string, reason: string) => {
        if (!currentUserId) return;
        await service.forceCloseTask(taskId, reason, currentUserId);
        await reloadAll();
        showToast('タスクを強制終了しました');
      }, [currentUserId, reloadAll]);
    
      const archiveTask = useCallback(async (taskId: string) => {
        if (!currentUserId) return;
        await service.archiveTask(taskId, currentUserId);
        await reloadAll();
        showToast('タスクをアーカイブしました');
      }, [currentUserId, reloadAll]);
    
      const sendChat = useCallback(async (text: string, attachmentFilename: string | null) => {
        if (!selectedTaskId || !currentUserId) return;
        await service.sendChat(selectedTaskId, currentUserId, text, attachmentFilename);
        await refreshDetail();
      }, [selectedTaskId, currentUserId, refreshDetail]);
    
      const addNote = useCallback(async (visibility: 'shared' | 'personal', color: string, text: string, attachmentFilename: string | null) => {
        if (!selectedTaskId || !currentUserId) return;
        if (visibility === 'shared') await service.addSharedNote(selectedTaskId, currentUserId, color, text, attachmentFilename);
        else await service.addPersonalNote(selectedTaskId, currentUserId, color, text, attachmentFilename);
        await refreshDetail();
        await reloadNoteList(currentUserId);
      }, [selectedTaskId, currentUserId, refreshDetail, reloadNoteList]);
    
      const deleteNote = useCallback(async (noteId: string) => {
        if (!currentUserId) return;
        await service.removeNote(noteId, currentUserId);
        await refreshDetail();
        await reloadNoteList(currentUserId);
      }, [refreshDetail, reloadNoteList, currentUserId]);
    
      const toggleNoteFavorite = useCallback(async (noteId: string) => {
        if (!currentUserId) return;
        await service.toggleNoteFavorite(noteId, currentUserId);
        await refreshDetail();
        await reloadNoteList(currentUserId);
      }, [currentUserId, refreshDetail, reloadNoteList]);
    
      const addTodo = useCallback(async (text: string) => {
        if (!selectedTaskId || !currentUserId) return;
        await service.addTodo(selectedTaskId, currentUserId, text);
        await refreshDetail();
      }, [selectedTaskId, currentUserId, refreshDetail]);
    
      const toggleTodo = useCallback(async (todoId: string) => {
        await service.toggleTodoItem(todoId);
        await refreshDetail();
      }, [refreshDetail]);
    
      const deleteTodo = useCallback(async (todoId: string) => {
        await service.removeTodo(todoId);
        await refreshDetail();
      }, [refreshDetail]);
    
    
      // === Chat attachment promotion workflow ===
    
      // 一般メンバーによる関連資料化申請
      const requestChatAttachmentPromotion = useCallback(async (chatMessageId: string) => {
        if (!selectedTaskId || !currentUserId) return;
    
        await service.requestChatAttachmentPromotion(
          selectedTaskId,
          chatMessageId,
          currentUserId,
        );
    
        await refreshDetail();
        showToast('関連資料化を申請しました');
      }, [selectedTaskId, currentUserId, refreshDetail]);
    
      // タスク作成者による申請の許可
      const approveChatAttachmentPromotion = useCallback(async (promotionId: string) => {
        if (!selectedTaskId || !currentUserId) return;
    
        await service.approveChatAttachmentPromotionRequest(
          selectedTaskId,
          promotionId,
          currentUserId,
        );
    
        await reloadAll();
        showToast('関連資料化を許可しました');
      }, [selectedTaskId, currentUserId, reloadAll]);
    
      // タスク作成者によるチャット添付の直接追加
      const addChatAttachmentAsReference = useCallback(async (chatMessageId: string) => {
        if (!selectedTaskId || !currentUserId) return;
    
        await service.addChatAttachmentAsReference(
          selectedTaskId,
          chatMessageId,
          currentUserId,
        );
    
        await reloadAll();
        showToast('チャット添付を関連資料に追加しました');
      }, [selectedTaskId, currentUserId, reloadAll]);
      // === Personal Task operations ===
      const createPersonalTask = useCallback(async (input: PersonalTaskCreateInput) => {
        if (!currentUserId) return;
    
        // まずは下書きとして作成する。
        const createdTask = await service.createPersonalTaskItem({
          owner_user_id: currentUserId,
          title: input.title,
          body: input.body,
          related_project_id: input.related_project_id,
          due_at: input.due_at,
        });
    
        // 「公開」の場合、既存の開始処理を通して対応中（open）へ移行する。
        // 既存ロジックにより、件名・期限が揃っている場合だけ開始される。
        if (input.publish) {
          await service.startPersonalTask(createdTask.id, currentUserId);
        }
    
        await reloadPersonalTasks(currentUserId);
        showToast(input.publish ? '個人タスクを公開しました' : '下書きとして保存しました');
      }, [currentUserId, reloadPersonalTasks]);
    
      const startPersonalTask = useCallback(async (taskId: string) => {
        if (!currentUserId) return;
        await service.startPersonalTask(taskId, currentUserId);
        await reloadPersonalTasks(currentUserId);
        await refreshPersonalDetail();
        showToast('個人タスクを開始しました');
      }, [currentUserId, reloadPersonalTasks, refreshPersonalDetail]);
    
      const completePersonalTask = useCallback(async (taskId: string) => {
        if (!currentUserId) return;
        await service.completePersonalTask(taskId, currentUserId);
        await reloadPersonalTasks(currentUserId);
        closeTask();
        showToast('完了してアーカイブしました');
      }, [currentUserId, reloadPersonalTasks, closeTask]);
    
      const deletePersonalTask = useCallback(async (taskId: string) => {
        if (!currentUserId) return;
        await service.deletePersonalTask(taskId, currentUserId);
        await reloadPersonalTasks(currentUserId);
        closeTask();
        showToast('個人タスクを削除しました');
      }, [currentUserId, reloadPersonalTasks, closeTask]);
    
      const updatePersonalTask = useCallback(async (taskId: string, updates: Record<string, unknown>) => {
        if (!currentUserId) return;
        await service.updatePersonalTaskItem(taskId, currentUserId, updates as Partial<import('../domain/taskNaviTypes').PersonalTask>);
        await reloadPersonalTasks(currentUserId);
        await refreshPersonalDetail();
      }, [currentUserId, reloadPersonalTasks, refreshPersonalDetail]);
    
      const addPersonalAttachment = useCallback(async (taskId: string, displayName: string) => {
        if (!currentUserId) return;
        await service.addPersonalAttachment(taskId, currentUserId, displayName);
        await reloadPersonalTasks(currentUserId);
        await refreshPersonalDetail();
        showToast('資料を追加しました');
      }, [currentUserId, reloadPersonalTasks, refreshPersonalDetail]);
    
      const removePersonalAttachment = useCallback(async (attachmentId: string) => {
        if (!currentUserId) return;
        await service.removePersonalAttachment(attachmentId, currentUserId);
        await reloadPersonalTasks(currentUserId);
        await refreshPersonalDetail();
        showToast('資料を削除しました');
      }, [currentUserId, reloadPersonalTasks, refreshPersonalDetail]);
    
      // === Template operations ===
    
      const createTemplate = useCallback(async (data: {
        name: string;
        purpose: TaskPurpose;
        title: string;
        body: string;
      }) => {
        if (!currentUserId) {
          throw new Error('検証ユーザーが選択されていません。');
        }
    
        const createdTemplate = await service.createUserTemplate({
          name: data.name.trim(),
          purpose: data.purpose,
          title: data.title.trim(),
          body: data.body.trim(),
          user_id: currentUserId,
        });
    
        // DB保存後に、現在のユーザーが所有するテンプレートを再取得する。
        const templatesForCurrentUser = await service.loadTemplates(currentUserId);
    
        if (!templatesForCurrentUser.some((template) => template.id === createdTemplate.id)) {
          throw new Error(
            'テンプレートは保存されましたが、現在のユーザーの一覧に取得できませんでした。',
          );
        }
    
        setTemplates(templatesForCurrentUser);
        showToast('テンプレートを作成しました');
      }, [currentUserId]);
    
      const deleteTemplate = useCallback(async (templateId: string) => {
        if (!currentUserId) return;
    
        await service.deleteUserTemplate(templateId, currentUserId);
        await reloadTemplates(currentUserId);
        showToast('テンプレートを削除しました');
      }, [currentUserId, reloadTemplates]);
    
      const saveTemplate = useCallback(async (taskId: string, name: string) => {
        if (!currentUserId) return;
        await service.saveTaskAsTemplate({ task_id: taskId, name, user_id: currentUserId });
        await reloadTemplates(currentUserId);
        showToast('テンプレートとして保存しました');
      }, [currentUserId, reloadTemplates]);
    
      const createTaskFromTemplate = useCallback(async (templateId: string) => {
        if (!currentProjectId || !currentUserId) return;
        await service.createTaskFromTemplate({ template_id: templateId, project_id: currentProjectId, user_id: currentUserId });
        await reloadAllTasks(currentUserId);
        if (currentProjectId) await reloadProjectTasks(currentProjectId, currentUserId);
        showToast('テンプレートからタスクを作成しました');
      }, [currentProjectId, currentUserId, reloadAllTasks, reloadProjectTasks]);
    
      const toggleTemplateFavorite = useCallback(async (templateId: string) => {
        if (!currentUserId) return;
        await service.toggleTemplateFavorite(templateId, currentUserId);
        await reloadTemplates(currentUserId);
      }, [currentUserId, reloadTemplates]);
    
      const handleReset = useCallback(async () => {
        setShowResetConfirm(false);
        setLoading(true);
        await resetDatabase();
        closeTask();
        const [projs, allUsers] = await Promise.all([service.loadProjects(), service.loadUsers()]);
        setProjects(projs);
        setUsers(allUsers);
        if (projs.length > 0) setCurrentProjectId(projs[0].id);
        if (allUsers.length > 0) setCurrentUserId(allUsers[0].id);
        setLoading(false);
        showToast('検証データを初期状態に戻しました');
      }, [closeTask]);
    
      const currentUser = users.find((u) => u.id === currentUserId) ?? null;
      const currentProject = projects.find((p) => p.id === currentProjectId) ?? null;
      const archivedTasks = allTasks.filter((t) => t.status === 'archived');
    
      return {
        loading, error,
        projects, users, currentUserId, currentUser, currentProjectId, currentProject,
        allTasks, projectTasks, archivedTasks, activities, projectMembers,
        detail, selectedTaskId,
        toast, showResetConfirm, noteList,
        setCurrentUserId, setCurrentProjectId, setShowResetConfirm,
        openTask, closeTask, createTask, publishTask,
        addAttachment, reviseAtt, withdrawAtt, accessAtt, confirmDoc,
        requestChatAttachmentPromotion, approveChatAttachmentPromotion, addChatAttachmentAsReference, accessAndConfirmDoc,
        confirmTask, submitResponse, submitWorkReport, acceptWorkReport, returnWorkReport,
        exemptAssignee, outOfScopeAssignee, forceCloseTask, archiveTask,
        sendChat, addNote, deleteNote, toggleNoteFavorite, addTodo, toggleTodo, deleteTodo,
        handleReset,
        // Phase 3.0
        pageView, navigateTo,
        personalTasks, personalDetail, selectedPersonalTaskId,
        openPersonalTask, createPersonalTask, startPersonalTask, completePersonalTask,
        deletePersonalTask, updatePersonalTask, addPersonalAttachment, removePersonalAttachment,
        templates, saveTemplate, createTemplate, deleteTemplate, createTaskFromTemplate, toggleTemplateFavorite,
        availableProjectIds,
        searchQuery, setSearchQuery,
        myTasksFilter, setMyTasksFilter,
        taskTypeFilter, setTaskTypeFilter,
        sharedConditionFilter, setSharedConditionFilter,
        personalConditionFilter, setPersonalConditionFilter,
        purposeFilter, setPurposeFilter,
        viewMode, setViewMode,
        page, setPage, pageSize, setPageSize,
      };
    }
    
    
    ============================================================
    FILE: src\App.tsx
    ============================================================
    import { useMemo, useState } from 'react';
    import {
      Archive, Bell, BookOpen, Calendar, Check, ChevronDown, ChevronLeft, CircleHelp,
      ClipboardCheck, FileText, Filter, Inbox, LayoutDashboard, LayoutGrid, List as ListIcon,
      ListChecks, MessageSquare, MoreHorizontal, Plus, Search, Send,
      Settings, ShieldCheck, Sparkles, Star, StickyNote,
      Trash2, Users, X, AlertTriangle, Eye, Download, FileCheck, Ban,
      UserX, Lock, History, ChevronRight, Bookmark,
    } from 'lucide-react';
    import { useTaskNavi } from '@/hooks/useTaskNavi';
    import {
      BOARD_COLUMN_META, BOARD_COLUMN_ORDER, BOARD_COLUMN_LIMITS,
      PERSONAL_BOARD_COLUMN_META, PERSONAL_BOARD_COLUMN_ORDER, PERSONAL_BOARD_LIMIT,
      NOTE_COLORS, STATUS_LABELS, PERSONAL_STATUS_LABELS,
      CLOSE_TYPE_LABELS, ATTACHMENT_TYPE_LABELS, REQUIREMENT_STATUS_LABELS,
      SUBMISSION_STATUS_LABELS, progressLabel, EVENT_LABELS,
      NAV_ITEMS, MY_TASKS_FILTERS, TASK_TYPE_FILTERS, SHARED_CONDITION_FILTERS,
      PERSONAL_CONDITION_FILTERS, PURPOSE_FILTERS, PAGE_SIZE_OPTIONS,
      SEARCH_PLACEHOLDER, BADGE_LABELS, TASK_TYPE_LABELS,
      PERSONAL_PROJECT_NO_SELECTION, PERSONAL_PROJECT_INACCESSIBLE,
      PERSONAL_DELETE_TITLE, PERSONAL_DELETE_MESSAGE,
      PERSONAL_START_TITLE, PERSONAL_START_MESSAGE,
      PERSONAL_COMPLETE_TITLE, PERSONAL_COMPLETE_MESSAGE,
      GUIDE_SHARED_TITLE, GUIDE_SHARED_DESC,
      GUIDE_PERSONAL_TITLE, GUIDE_PERSONAL_DESC,
      PROGRESS_LABELS_BY_PURPOSE,
      GUIDE_SHARED_ACTION, GUIDE_PERSONAL_ACTION,
      SHARED_SUMMARY_CARDS, PERSONAL_SUMMARY_CARDS, MY_TASKS_SUMMARY_CARDS,
      MY_TASKS_OVERLAP_HELPER,
      NOTE_EDITOR_SHARED_HEADING, NOTE_EDITOR_PERSONAL_HEADING,
      NOTE_EDITOR_SHARED_SCOPE, NOTE_EDITOR_PERSONAL_SCOPE,
      NOTE_EDITOR_NEW_SHARED, NOTE_EDITOR_NEW_PERSONAL,
      NOTE_EDITOR_BODY_LABEL, NOTE_EDITOR_ATTACHMENT_LABEL,
      NOTE_EDITOR_SAVE, NOTE_EDITOR_CANCEL, NOTE_EDITOR_DELETE,
      NOTE_EDITOR_DELETE_CONFIRM, NOTE_EDITOR_DIRTY_CONFIRM,
      NOTE_FAVORITE_HELPER, NOTE_FAVORITE_ADD, NOTE_FAVORITE_REMOVE,
      NOTE_ADD_BUTTON,
      SHARED_DRAFT_DOC_REQUIRED,
      PERSONAL_START_MISSING_TITLE, PERSONAL_START_MISSING_DUE, PERSONAL_DUE_READONLY,
      EMPTY_LIST_MESSAGE, RELATED_DOCS_HEADING, CONFIRM_DOCS_HEADING, REFERENCE_DOCS_HEADING,
      PERSONAL_EDITOR_TITLE, PERSONAL_EDITOR_NEW_TITLE,
      PERSONAL_EDITOR_FIELD_TITLE, PERSONAL_EDITOR_FIELD_BODY,
      PERSONAL_EDITOR_FIELD_DUE, PERSONAL_EDITOR_FIELD_PROJECT,
      PERSONAL_EDITOR_FIELD_ATTACHMENTS,
      PERSONAL_EDITOR_SAVE_DRAFT, PERSONAL_EDITOR_START, PERSONAL_EDITOR_UPDATE,
      PERSONAL_EDITOR_CANCEL,
      SHARED_EDITOR_TITLE, SHARED_EDITOR_NEW_TITLE,
      SHARED_EDITOR_FIELD_PURPOSE, SHARED_EDITOR_FIELD_TITLE, SHARED_EDITOR_FIELD_BODY,
      SHARED_EDITOR_FIELD_DUE, SHARED_EDITOR_FIELD_ASSIGNEES, SHARED_EDITOR_FIELD_SUCCESSOR,
      SHARED_EDITOR_FIELD_DOCS,
      SHARED_EDITOR_SAVE_DRAFT, SHARED_EDITOR_PUBLISH, SHARED_EDITOR_CANCEL,
    } from '@/domain/taskNaviConstants';
    import { computeSharedSummaryCounts, computePersonalSummaryCounts, computeMyTasksSummaryCounts } from '@/services/taskNaviSelectors';
    import type {
      BoardColumn, DisplayBadge, NoteListView, TaskPurpose, TaskStatus,
      AttachmentType, AssigneeDetailView, RequirementView, SubmissionView,
      HistoryView, CloseType, TaskView, PersonalTaskView, PersonalTaskDetailView,
      TemplateView, PersonalBoardColumn, PageView, MyTasksFilter, TaskTypeFilter,
      SharedConditionFilter, PersonalConditionFilter, UserView,
    } from '@/domain/taskNaviTypes';
    
    type DockPanel = 'chat' | 'shared_note' | 'personal_note' | 'todo';
    
    const PURPOSE_OPTIONS: TaskPurpose[] = ['作業依頼', '確認・判断依頼', '周知・意見聴取', '回答・申込受付'];
    
    const SHARED_PRESET_FILTERS: { key: 'all' | 'my_progress' | 'managing'; label: string }[] = [
      { key: 'all', label: 'すべて' },
      { key: 'my_progress', label: '自分の対応' },
      { key: 'managing', label: '管理中' },
    ];
    
    const PURPOSE_BADGE_CLASS: Record<TaskPurpose, string> = {
      '作業依頼': 'purpose-work',
      '確認・判断依頼': 'purpose-confirm',
      '周知・意見聴取': 'purpose-notice',
      '回答・申込受付': 'purpose-answer',
    };
    
    function isTaskOverdue(task: TaskView): boolean {
      if (task.status !== 'open') return false;
      if (!task.due_at) return false;
      return new Date(task.due_at).getTime() < Date.now();
    }
    
    function formatDueAbsolute(dueAt: string | null): string {
      if (!dueAt) return '期限なし';
      const d = new Date(dueAt);
      if (isNaN(d.getTime())) return '期限なし';
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, '0');
      const dd = String(d.getDate()).padStart(2, '0');
      const hh = String(d.getHours()).padStart(2, '0');
      const mi = String(d.getMinutes()).padStart(2, '0');
      return `期限：${yyyy}/${mm}/${dd} ${hh}:${mi}`;
    }
    
    function todayLocalDate(): string {
      const d = new Date();
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }
    function compareTasksByDuePriority(
      a: { due_at: string | null; status: string },
      b: { due_at: string | null; status: string },
    ): number {
      const now = Date.now();
    
      function rank(task: { due_at: string | null; status: string }): number {
        const dueTime = task.due_at ? new Date(task.due_at).getTime() : NaN;
    
        // 対応中かつ期限切れ
        if (task.status === 'open' && !Number.isNaN(dueTime) && dueTime < now) return 0;
    
        // 対応中かつ期限あり（最も期限が近いものを優先）
        if (task.status === 'open' && !Number.isNaN(dueTime)) return 1;
    
        // 対応中だが期限なし
        if (task.status === 'open') return 2;
    
        // 下書き
        if (task.status === 'draft') return 3;
    
        // 完了・アーカイブ
        return 4;
      }
    
      const rankDiff = rank(a) - rank(b);
      if (rankDiff !== 0) return rankDiff;
    
      const aDue = a.due_at ? new Date(a.due_at).getTime() : Number.MAX_SAFE_INTEGER;
      const bDue = b.due_at ? new Date(b.due_at).getTime() : Number.MAX_SAFE_INTEGER;
    
      return aDue - bDue;
    }
    
    // ──────────────────────────────────────────────
    // Main App
    // ──────────────────────────────────────────────
    
    function executionButtonStyle(disabled: boolean): React.CSSProperties {
      return {
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
      };
    }
    
    function App() {
      const nav = useTaskNavi();
    
      // Local UI state
      const [showSidebar, setShowSidebar] = useState(false);
      const [chatOpen, setChatOpen] = useState(false);
      const [dockPanel, setDockPanel] = useState<DockPanel>('chat');
      const [chatSearchOpen, setChatSearchOpen] = useState(false);
      const [chatSearch, setChatSearch] = useState('');
      const [attachmentName, setAttachmentName] = useState('');
      const [chatInput, setChatInput] = useState('');
      const [noteInput, setNoteInput] = useState('');
      const [noteColor, setNoteColor] = useState<string>(NOTE_COLORS[0]);
      const [noteAttachmentName, setNoteAttachmentName] = useState('');
      const [noteVisibility, setNoteVisibility] = useState<'shared' | 'personal'>('shared');
      const [todoInput, setTodoInput] = useState('');
    
      // Modal state
      const [showCreate, setShowCreate] = useState(false);
      const [showCreatePersonal, setShowCreatePersonal] = useState(false);
      const [showForceClose, setShowForceClose] = useState(false);
      const [showArchive, setShowArchive] = useState(false);
      const [showExempt, setShowExempt] = useState<AssigneeDetailView | null>(null);
      const [showReturn, setShowReturn] = useState<SubmissionView | null>(null);
      const [showRevise, setShowRevise] = useState<string | null>(null);
      const [showWithdraw, setShowWithdraw] = useState<string | null>(null);
      const [showSubmitResponse, setShowSubmitResponse] = useState<AssigneeDetailView | null>(null);
      const [showSubmitReport, setShowSubmitReport] = useState<AssigneeDetailView | null>(null);
      const [showAddAttachment, setShowAddAttachment] = useState(false);
      const [showTemplateList, setShowTemplateList] = useState(false);
      const [showCreateTemplate, setShowCreateTemplate] = useState(false);
      const [showSaveTemplate, setShowSaveTemplate] = useState(false);
      const [showPersonalDelete, setShowPersonalDelete] = useState(false);
      const [showPersonalStart, setShowPersonalStart] = useState(false);
      const [showPersonalComplete, setShowPersonalComplete] = useState(false);
      const [personalAttachmentName, setPersonalAttachmentName] = useState('');
      const [showProjectDropdown, setShowProjectDropdown] = useState(false);
      const [showDetailMenu, setShowDetailMenu] = useState(false);
      const [showLinkChatAttachment, setShowLinkChatAttachment] = useState(false);
      // ノート追加モーダルの対象。共有ノート・個人ノートで保存先を切り替える。
      const [showCreateNote, setShowCreateNote] = useState<'shared' | 'personal' | null>(null);
    
      const isSharedDetailMode = nav.selectedTaskId !== null && nav.detail !== null;
      const isPersonalDetailMode = nav.selectedPersonalTaskId !== null && nav.personalDetail !== null;
    
      // 共有タスクは従来どおり詳細画面を表示する。
      // 個人タスクは一覧画面の上にモーダルとして表示する。
      const isDetailMode = isSharedDetailMode;
    
      // ── Navigation handlers ──
    
      function handleNavClick(view: PageView) {
        nav.closeTask();
        nav.navigateTo(view);
      }
    
      function handleProjectClick(projectId: string) {
        nav.closeTask();
        nav.setCurrentProjectId(projectId);
        nav.navigateTo('shared');
      }
    
      // ── Chat / Note / Todo handlers ──
    
      function sendChat() {
        const text = chatInput.trim();
        if (!text) return;
        void nav.sendChat(text, attachmentName || null);
        setChatInput('');
        setAttachmentName('');
      }
    
      function attachFile(file: File | undefined) { if (file) setAttachmentName(file.name); }
      function attachNoteFile(file: File | undefined) { if (file) setNoteAttachmentName(file.name); }
    
      function addNote() {
        const text = noteInput.trim();
        if (!text) return;
        void nav.addNote(noteVisibility, noteColor, text, noteAttachmentName || null);
        setNoteInput('');
        setNoteAttachmentName('');
      }
    
      function addTodo() {
        const text = todoInput.trim();
        if (!text) return;
        void nav.addTodo(text);
        setTodoInput('');
      }
    
      // ── Loading / Error ──
    
      if (nav.loading) {
        return (
          <div className="app-shell" style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
            <p style={{ color: '#83909d', fontSize: 14 }}>読み込み中...</p>
          </div>
        );
      }
    
      if (nav.error) {
        return (
          <div className="app-shell" style={{ display: 'grid', placeItems: 'center', height: '100vh', padding: 40 }}>
            <div style={{ maxWidth: 480, textAlign: 'center' }}>
              <AlertTriangle size={48} color="#c2756a" style={{ margin: '0 auto 16px' }} />
              <h2 style={{ color: '#c2756a', fontSize: 18, marginBottom: 8 }}>データの読み込みに失敗しました</h2>
              <p style={{ color: '#83909d', fontSize: 13, lineHeight: 1.6 }}>{nav.error}</p>
            </div>
          </div>
        );
      }
    
      const detail = nav.detail;
      const personalDetail = nav.personalDetail;
    
      const taskChats = detail?.chats ?? [];
      const taskSharedNotes = detail?.shared_notes ?? [];
      const taskPersonalNotes = detail?.personal_notes ?? [];
      const taskTodos = detail?.todos ?? [];
    
      const navLabel = NAV_ITEMS.find((n) => n.key === nav.pageView)?.label ?? '';
    
      return (
        <div className="app-shell">
          {/* ── Sidebar ── */}
          <aside className={`sidebar ${showSidebar ? 'sidebar-visible' : ''}`}>
            <div className="brand">
              <div className="brand-mark"><ClipboardCheck size={19} /></div>
              <span>TASK-NAVI</span>
              <span className="beta">β</span>
            </div>
            <div className="workspace-switcher" onClick={() => setShowProjectDropdown(!showProjectDropdown)}>
              <div className="workspace-icon">N</div>
              <div><small>ワークスペース</small><strong>{nav.currentProject?.name ?? '---'}</strong></div>
              <ChevronDown size={15} className={showProjectDropdown ? 'chevron-up' : ''} />
              {showProjectDropdown && (
                <div className="project-dropdown" onClick={(e) => e.stopPropagation()}>
                  {nav.projects.map((p) => (
                    <button
                      key={p.id}
                      className={`project-dropdown-item ${nav.currentProjectId === p.id ? 'selected' : ''}`}
                      onClick={() => { handleProjectClick(p.id); setShowProjectDropdown(false); }}
                    >
                      <span className={`project-dot ${p.color}`} />{p.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <nav className="primary-nav">
              <p className="nav-label">ワークスペース</p>
              {NAV_ITEMS.map((item) => {
                const icon = navIconFor(item.key);
                const count = navCountFor(nav, item.key);
                return (
                  <NavButton
                    key={item.key}
                    icon={icon}
                    label={item.label}
                    count={count}
                    active={nav.pageView === item.key}
                    onClick={() => handleNavClick(item.key)}
                  />
                );
              })}
            </nav>
            <div className="sidebar-bottom">
              <div className="dev-user-switcher">
                <small className="dev-label">検証ユーザー</small>
                <select value={nav.currentUserId} onChange={(e) => nav.setCurrentUserId(e.target.value)}>
                  {nav.users.map((u) => <option key={u.id} value={u.id}>{u.name}</option>)}
                </select>
              </div>
              <button className="reset-btn" onClick={() => nav.setShowResetConfirm(true)}>
                <Archive size={13} />検証データを初期状態に戻す
              </button>
              <NavButton icon={<Settings size={17} />} label="設定" active={false} onClick={() => {}} />
              <div className="sidebar-utilities">
                <button className="icon-btn" aria-label="ヘルプ" title="ヘルプ"><CircleHelp size={16} /></button>
                <button className="icon-btn notification" aria-label="通知" title="通知"><Bell size={16} /><i /></button>
              </div>
              <div className="user-row">
                <div className={`avatar ${nav.currentUser?.avatar_class ?? 'avatar-navy'}`}>{nav.currentUser?.initials ?? '??'}</div>
                <div>
                  <strong>{nav.currentUser?.name ?? '---'}</strong>
                  <small>{nav.currentUser ? (nav.allTasks.some((t) => t.is_creator) ? '作成者' : 'メンバー') : ''}</small>
                </div>
                <MoreHorizontal size={17} />
              </div>
            </div>
          </aside>
    
          {/* ── Main content ── */}
          <main className="main-content">
            <div className="page-content">
              {/* ── Page heading ── */}
              {!isDetailMode && (
                <section className="page-heading">
                  <div>
                    {nav.pageView === 'shared' && <div className="eyebrow"><span className="live-dot" />{nav.currentProject?.name ?? '---'}</div>}
                    <h1>{navLabel}</h1>
                    <p>{pageDescription(nav.pageView)}</p>
                  </div>
                  {nav.pageView === 'shared' && (
                    <button className="primary-button" onClick={() => setShowCreate(true)}><Plus size={15} />共有タスクを作成</button>
                  )}
                  {nav.pageView === 'personal' && (
                    <button className="primary-button" onClick={() => setShowCreatePersonal(true)}><Plus size={15} />個人タスクを作成</button>
                  )}
                </section>
              )}
    
              {/* ── Main content area ── */}
              {isSharedDetailMode && detail ? (
                <SharedTaskDetail
                  detail={detail}
                  nav={nav}
                  chatOpen={chatOpen}
                  setChatOpen={setChatOpen}
                  dockPanel={dockPanel}
                  setDockPanel={setDockPanel}
                  chatSearchOpen={chatSearchOpen}
                  setChatSearchOpen={setChatSearchOpen}
                  chatSearch={chatSearch}
                  setChatSearch={setChatSearch}
                  chatInput={chatInput}
                  setChatInput={setChatInput}
                  attachmentName={attachmentName}
                  setAttachmentName={setAttachmentName}
                  attachFile={attachFile}
                  sendChat={sendChat}
                  noteInput={noteInput}
                  setNoteInput={setNoteInput}
                  noteColor={noteColor}
                  setNoteColor={setNoteColor}
                  noteAttachmentName={noteAttachmentName}
                  setNoteAttachmentName={setNoteAttachmentName}
                  attachNoteFile={attachNoteFile}
                  addNote={addNote}
                  todoInput={todoInput}
                  setTodoInput={setTodoInput}
                  addTodo={addTodo}
                  taskChats={taskChats}
                  taskSharedNotes={taskSharedNotes}
                  taskPersonalNotes={taskPersonalNotes}
                  taskTodos={taskTodos}
                  modals={{
                    setShowForceClose, setShowArchive, setShowExempt, setShowReturn,
                    setShowRevise, setShowWithdraw, setShowSubmitResponse, setShowSubmitReport,
                    setShowAddAttachment, setShowSaveTemplate, setShowTemplateList,
                    setShowLinkChatAttachment,
                    setShowCreateNote,
                  }}
                  showDetailMenu={showDetailMenu}
                  setShowDetailMenu={setShowDetailMenu}
                />
              ) : nav.pageView === 'guide' ? (
                <GuidePage
      key={nav.currentUserId}
      nav={nav}
      onCreateShared={() => setShowCreate(true)}
      onCreatePersonal={() => setShowCreatePersonal(true)}
      onCreateTemplate={() => setShowCreateTemplate(true)}
      onDeleteTemplate={(templateId) => void nav.deleteTemplate(templateId)}
    />
              ) : nav.pageView === 'my_tasks' ? (
                <MyTasksPage nav={nav} />
              ) : nav.pageView === 'shared' ? (
                <SharedTasksPage nav={nav} onCreate={() => setShowCreate(true)} />
              ) : nav.pageView === 'personal' ? (
                <PersonalTasksPage nav={nav} onCreate={() => setShowCreatePersonal(true)} />
              ) : nav.pageView === 'notes' ? (
                <NoteListViewSection
                  noteList={nav.noteList}
                  onOpenTask={(taskId) => void nav.openTask(taskId)}
                  onUnfavorite={(noteId) => void nav.toggleNoteFavorite(noteId)}
                />
              ) : nav.pageView === 'archive' ? (
                <ArchivePage nav={nav} />
              ) : null}
            </div>
          </main>
    
          {/* ── Modals ── */}
          {showCreateNote && (
            <NoteCreateModal
              visibility={showCreateNote}
              onClose={() => setShowCreateNote(null)}
              onAdd={async (text) => {
                await nav.addNote(showCreateNote, NOTE_COLORS[0], text, null);
                setShowCreateNote(null);
              }}
            />
          )}
          {isPersonalDetailMode && personalDetail && (
            <PersonalTaskModal
              detail={personalDetail}
              nav={nav}
              onClose={() => {
                setShowPersonalDelete(false);
                setShowPersonalStart(false);
                setShowPersonalComplete(false);
                nav.closeTask();
              }}
              showDelete={showPersonalDelete}
              setShowDelete={setShowPersonalDelete}
              showStart={showPersonalStart}
              setShowStart={setShowPersonalStart}
              showComplete={showPersonalComplete}
              setShowComplete={setShowPersonalComplete}
              personalAttachmentName={personalAttachmentName}
              setPersonalAttachmentName={setPersonalAttachmentName}
            />
          )}
          {showCreate && (
            <CreateModal
      nav={nav}
      onClose={() => setShowCreate(false)}
      projectMembers={nav.projectMembers}
      projectName={nav.currentProject?.name ?? '---'}
    />
          )}
          {showCreatePersonal && (
            <CreatePersonalModal
              nav={nav}
              onClose={() => setShowCreatePersonal(false)}
            />
          )}
          {showForceClose && detail && (
            <ForceCloseModal
              onClose={() => setShowForceClose(false)}
              onConfirm={(reason) => { void nav.forceCloseTask(detail.task.id, reason); setShowForceClose(false); }}
            />
          )}
          {showArchive && detail && (
            <ConfirmModal
              title="アーカイブ"
              message="このタスクをアーカイブします。通常一覧から除外され、アーカイブ一覧で参照できます。"
              confirmLabel="アーカイブする"
              onClose={() => setShowArchive(false)}
              onConfirm={() => { void nav.archiveTask(detail.task.id); setShowArchive(false); }}
            />
          )}
          {showExempt && detail && (
            <ExemptModal
              assignee={showExempt}
              onClose={() => setShowExempt(null)}
              onExempt={(reason) => { void nav.exemptAssignee(showExempt.assignment_id, reason); setShowExempt(null); }}
              onOutOfScope={(reason) => { void nav.outOfScopeAssignee(showExempt.assignment_id, reason); setShowExempt(null); }}
            />
          )}
          {showReturn && (
            <ReturnModal
              submission={showReturn}
              onClose={() => setShowReturn(null)}
              onConfirm={(reason) => { void nav.returnWorkReport(showReturn.id, reason); setShowReturn(null); }}
            />
          )}
          {showRevise && (
            <ReasonModal
              title="資料の改訂"
              label="改訂理由"
              confirmLabel="改訂する"
              onClose={() => setShowRevise(null)}
              onConfirm={(reason) => { void nav.reviseAtt(showRevise, reason); setShowRevise(null); }}
            />
          )}
          {showWithdraw && (
            <ReasonModal
              title="資料の撤回"
              label="撤回理由"
              confirmLabel="撤回する"
              onClose={() => setShowWithdraw(null)}
              onConfirm={(reason) => { void nav.withdrawAtt(showWithdraw, reason); setShowWithdraw(null); }}
            />
          )}
          {showSubmitResponse && (
            <SubmitModal
              title="回答を提出"
              label="回答内容"
              confirmLabel="回答を提出する"
              onClose={() => setShowSubmitResponse(null)}
              onConfirm={(body) => { void nav.submitResponse(showSubmitResponse.assignment_id, body); setShowSubmitResponse(null); }}
            />
          )}
          {showSubmitReport && (
            <SubmitModal
              title="作業報告を提出"
              label="報告内容"
              confirmLabel="作業報告を提出する"
              onClose={() => setShowSubmitReport(null)}
              onConfirm={(body) => { void nav.submitWorkReport(showSubmitReport.assignment_id, body); setShowSubmitReport(null); }}
            />
          )}
          {showAddAttachment && (
            <AddAttachmentModal
              onClose={() => setShowAddAttachment(false)}
              onAdd={(name, type) => { void nav.addAttachment(name, type); setShowAddAttachment(false); }}
            />
          )}
          {showLinkChatAttachment && detail && (
            <LinkChatAttachmentModal
              chats={detail.chats}
              onClose={() => setShowLinkChatAttachment(false)}
              onLink={(chatId) => {
                void nav.addChatAttachmentAsReference(chatId);
                setShowLinkChatAttachment(false);
              }}
            />
          )}
          {showCreateTemplate && (
            <CreateTemplateModal
              onClose={() => setShowCreateTemplate(false)}
              onCreate={async (data) => {
                try {
                  await nav.createTemplate(data);
                  setShowCreateTemplate(false);
                } catch (error) {
                  console.error('テンプレート作成に失敗しました。', error);
    
                  const message = error instanceof Error
                    ? error.message
                    : 'テンプレートの作成に失敗しました。';
    
                  window.alert(message);
                }
              }}
            />
          )}
          {showTemplateList && (
            <TemplateListModal
              nav={nav}
              onClose={() => setShowTemplateList(false)}
            />
          )}
          {showSaveTemplate && detail && (
            <SaveTemplateModal
              onClose={() => setShowSaveTemplate(false)}
              onSave={(name) => { void nav.saveTemplate(detail.task.id, name); setShowSaveTemplate(false); }}
            />
          )}
          {showPersonalDelete && personalDetail && (
            <ConfirmModal
              title={PERSONAL_DELETE_TITLE}
              message={PERSONAL_DELETE_MESSAGE}
              confirmLabel="削除する"
              onClose={() => setShowPersonalDelete(false)}
              onConfirm={() => { void nav.deletePersonalTask(personalDetail.task.id); setShowPersonalDelete(false); }}
            />
          )}
          {showPersonalStart && personalDetail && (
            <ConfirmModal
              title={PERSONAL_START_TITLE}
              message={PERSONAL_START_MESSAGE}
              confirmLabel="開始する"
              onClose={() => setShowPersonalStart(false)}
              onConfirm={() => { void nav.startPersonalTask(personalDetail.task.id); setShowPersonalStart(false); }}
            />
          )}
          {showPersonalComplete && personalDetail && (
            <ConfirmModal
              title={PERSONAL_COMPLETE_TITLE}
              message={PERSONAL_COMPLETE_MESSAGE}
              confirmLabel="完了してアーカイブ"
              onClose={() => setShowPersonalComplete(false)}
              onConfirm={() => { void nav.completePersonalTask(personalDetail.task.id); setShowPersonalComplete(false); }}
            />
          )}
    
          {/* ── Reset confirm ── */}
          {nav.showResetConfirm && (
            <div className="modal-backdrop" onMouseDown={() => nav.setShowResetConfirm(false)}>
              <div className="create-modal" onMouseDown={(e) => e.stopPropagation()}>
                <div className="modal-header">
                  <div><span className="eyebrow">確認</span><h2>検証データを初期状態に戻します</h2></div>
                  <button className="icon-btn" onClick={() => nav.setShowResetConfirm(false)}><X size={19} /></button>
                </div>
                <p style={{ color: '#83909d', fontSize: 12, lineHeight: 1.6, marginBottom: 20 }}>
                  すべてのローカルデータが削除され、初期シードが再投入されます。この操作は取り消せません。よろしいですか？
                </p>
                <div className="modal-actions">
                  <button className="secondary-button" onClick={() => nav.setShowResetConfirm(false)}>キャンセル</button>
                  <button className="primary-button" onClick={() => void nav.handleReset()} style={{ background: '#c2756a' }}>リセットする</button>
                </div>
              </div>
            </div>
          )}
    
          {/* ── Toast ── */}
          {nav.toast && <div className="toast"><Check size={16} />{nav.toast}</div>}
        </div>
      );
    }
    
    // ──────────────────────────────────────────────
    // Helper functions
    // ──────────────────────────────────────────────
    
    function navIconFor(key: PageView): React.ReactNode {
      switch (key) {
        case 'guide': return <LayoutDashboard size={17} />;
        case 'my_tasks': return <Inbox size={17} />;
        case 'shared': return <Users size={17} />;
        case 'personal': return <ListChecks size={17} />;
        case 'notes': return <BookOpen size={17} />;
        case 'archive': return <Archive size={17} />;
      }
    }
    
    function navCountFor(nav: ReturnType<typeof useTaskNavi>, key: PageView): string | undefined {
      switch (key) {
        case 'my_tasks': return String(nav.allTasks.length);
        case 'shared': return String(nav.projectTasks.length);
        case 'archive': return String(nav.archivedTasks.length);
        case 'notes': return String(nav.noteList.length);
        default: return undefined;
      }
    }
    
    function pageDescription(view: PageView): string {
      switch (view) {
        case 'guide': return '共有タスクと個人タスクの使い分けをご確認ください。';
        case 'my_tasks': return 'あなたが対象者・作成者・後継者として関係するタスクをプロジェクト横断で表示します。';
        case 'shared': return 'このプロジェクトであなたが関係者として参加している共有タスクです。';
        case 'personal': return 'プロジェクトに共有されない、あなた専用のタスクです。';
        case 'notes': return 'あなたの個人ノートとお気に入りの共有ノートをタスク横断で表示します。';
        case 'archive': return 'アーカイブされたタスクを表示します。';
      }
    }
    
    // ── Badge rendering: show derived condition badge, not redundant 公開中 ──
    function badgeForTask(task: TaskView): { badge: DisplayBadge | null; label: string } {
      if (task.badge && task.badge !== 'in_progress') {
        return { badge: task.badge, label: BADGE_LABELS[task.badge] };
      }
      // Derive from board column
      const meta = BOARD_COLUMN_META[task.board_column];
      if (task.status === 'open') {
        return { badge: null, label: meta.label };
      }
      return { badge: null, label: STATUS_LABELS[task.status] };
    }
    
    // ── My progress label for current user on shared task ──
    function myProgressLabel(task: TaskView): string | null {
      return task.my_progress_label;
    }
    
    // ──────────────────────────────────────────────
    // Shared Sub-components
    // ──────────────────────────────────────────────
    
    function NavButton({ icon, label, count, active, onClick }: {
      icon: React.ReactNode; label: string; count?: string; active: boolean; onClick: () => void;
    }) {
      return (
        <button className={`nav-button ${active ? 'nav-active' : ''}`} onClick={onClick}>
          {icon}<span>{label}</span>{count && <small>{count}</small>}
        </button>
      );
    }
    
    function SummaryCard({ label, value, hint, tone, icon, onClick }: {
      label: string; value: string; hint: string; tone: string; icon: React.ReactNode; onClick?: () => void;
    }) {
      return (
        <div className={`summary-card ${onClick ? 'summary-card-clickable' : ''}`} onClick={onClick} style={onClick ? { cursor: 'pointer' } : undefined}>
          <div className={`summary-icon ${tone}`}>{icon}</div>
          <div className="summary-copy">
            <span>{label}</span>
            <strong>{value}</strong>
            <small className={tone === 'amber' ? 'warn-text' : ''}>{hint}</small>
          </div>
        </div>
      );
    }
    
    const SHARED_LEGEND_ITEMS = [
      { className: 'draft', label: '下書き' },
      { className: 'in_progress', label: '公開中' },
      { className: 'overdue', label: '期限超過' },
      { className: 'confirm_answer', label: '回答確認中' },
      { className: 'accept_return', label: '受領判断中' },
      { className: 'closed', label: '完了' },
    ];
    
    const PERSONAL_LEGEND_ITEMS = [
      { className: 'draft', label: '下書き' },
      { className: 'in_progress', label: '対応中' },
      { className: 'overdue', label: '期限超過' },
      { className: 'closed', label: 'アーカイブ' },
    ];
    
    const MY_TASKS_LEGEND_ITEMS = [
      { className: 'draft', label: '下書き' },
      { className: 'in_progress', label: '対応中' },
      { className: 'overdue', label: '期限超過' },
      { className: 'closed', label: '完了' },
    ];
    
    function StatusLegend({ type }: { type: 'shared' | 'personal' | 'my_tasks' }) {
      const items = type === 'shared' ? SHARED_LEGEND_ITEMS : type === 'personal' ? PERSONAL_LEGEND_ITEMS : MY_TASKS_LEGEND_ITEMS;
      return (
        <div className="status-legend">
          {items.map((item) => (
            <div key={item.className} className="legend-item">
              <span className={`legend-dot legend-${item.className}`} />
              <span className="legend-label">{item.label}</span>
            </div>
          ))}
        </div>
      );
    }
    
    function ActivityRow({ label, title, user, time, color }: {
      label: string; title: string; user: string; time: string; color: string;
    }) {
      return (
        <div className="activity-row">
          <div className={`activity-icon ${color}`}><Check size={15} /></div>
          <div><strong>{title}</strong><p>{user}が{label}</p></div>
          <time>{time}</time>
        </div>
      );
    }
    
    function HistoryRow({ item }: { item: HistoryView }) {
      return (
        <div className="history-row">
          <div className={`activity-icon ${item.icon_color}`}><Check size={13} /></div>
          <div>
            <strong>{item.label}</strong>
            {item.reason && <p>理由：{item.reason}</p>}
            {item.user_name && <p>{item.user_name}</p>}
          </div>
          <time>{item.time_label}</time>
        </div>
      );
    }
    
    // ── Shared Task Row (list view) ──
    function SharedTaskRow({ task, onClick }: { task: TaskView; onClick: () => void }) {
      const meta = BOARD_COLUMN_META[task.board_column];
      const badgeInfo = badgeForTask(task);
      const overdue = isTaskOverdue(task);
      const visibleAssignees = task.assignees.filter((a) => a.is_eligible_active).slice(0, 5);
      const extraCount = task.assignees.filter((a) => a.is_eligible_active).length - 5;
      return (
        <button className={`task-row ${task.status === 'closed' ? 'task-status-closed' : ''}`} onClick={onClick}>
          <div className="task-badges">
            <span className={`status-badge-lg ${meta.className}`}>{meta.label}</span>
            <span className={`purpose-badge-lg ${PURPOSE_BADGE_CLASS[task.purpose]}`}>{task.purpose}</span>
            {badgeInfo.badge && <span className={`badge-lg ${badgeInfo.badge}`}>{badgeInfo.label}</span>}
            {task.close_type === 'forced' && <span className="badge-lg badge-forced">強制終了</span>}
          </div>
          <div className="task-main">
            <div className="task-title-line">
              <strong>{task.title || '（件名未設定）'}</strong>
            </div>
            <div className="task-subline">
              <span className="task-creator-label">作成者：<strong>{task.created_by_name}</strong></span>
            </div>
          </div>
          <div className="task-progress">
            <div className="task-row-avatars">
              {visibleAssignees.map((a) => (
                <div key={a.assignment_id} className={`avatar ${a.avatar_class}`} title={a.name}>{a.initials}</div>
              ))}
              {extraCount > 0 && <div className="task-row-avatar-more">+{extraCount}</div>}
            </div>
            <span className="progress-count-lg">{task.completed_assignees}/{task.total_assignees}人</span>
            <div className="progress-bar"><span style={{ width: `${task.progress_percent}%` }} /></div>
          </div>
          <div className="task-due">
            <span className={overdue ? 'due-overdue' : ''}>{formatDueAbsolute(task.due_at)}</span>
          </div>
          <ChevronDown size={16} className="row-chevron" />
        </button>
      );
    }
    
    // ── Personal Task Row (list view) ──
    function PersonalTaskRow({ task, onClick }: { task: PersonalTaskView; onClick: () => void }) {
      const meta = PERSONAL_BOARD_COLUMN_META[task.board_column];
      const overdue = task.is_overdue && task.status === 'open';
      return (
        <button className={`task-row ${task.status === 'archived' ? 'task-status-closed' : ''}`} onClick={onClick}>
          <div className="task-badges">
            <span className={`status-badge-lg ${meta.className}`}>{meta.label}</span>
            <span className="purpose-badge-lg purpose-personal">個人</span>
            {overdue && <span className="badge-lg badge-overdue">期限超過</span>}
          </div>
          <div className="task-main">
            <div className="task-title-line">
              <strong>{task.title || '（件名未設定）'}</strong>
            </div>
            <div className="task-subline">
              <span className="task-creator-label">{task.related_project_name ?? PERSONAL_PROJECT_NO_SELECTION}</span>
            </div>
          </div>
          <div className="task-progress">
            <span className="progress-count-lg">{task.status === 'archived' ? '完了' : '—'}</span>
          </div>
          <div className="task-due">
            <span className={overdue ? 'due-overdue' : ''}>{formatDueAbsolute(task.due_at)}</span>
          </div>
          <ChevronDown size={15} className="row-chevron" />
        </button>
      );
    }
    
    // ── Incomplete Assignee Popover ──
    function IncompletePopover({ task, onClose }: { task: TaskView; onClose: () => void }) {
      const incomplete = task.assignees.filter((a) => !a.is_complete && a.is_eligible_active);
      return (
        <div className="incomplete-popover" onClick={(e) => e.stopPropagation()}>
          <div className="incomplete-popover-header">
            <span>未完了の対象者</span>
            <button onClick={onClose}><X size={13} /></button>
          </div>
          <div className="incomplete-popover-list">
            {incomplete.length === 0 ? (
              <span className="incomplete-empty">全員完了済みです</span>
            ) : incomplete.map((a) => (
              <div key={a.assignment_id} className="incomplete-popover-item">
                <div className={`avatar avatar-xs ${a.avatar_class}`}>{a.initials}</div>
                <span>{a.name}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    // ── Shared Kanban Card ──
    function SharedKanbanCard({ task, onClick, onProgressClick }: { task: TaskView; onClick: () => void; onProgressClick?: () => void }) {
      const badgeInfo = badgeForTask(task);
      const overdue = isTaskOverdue(task);
      const dueText = formatDueAbsolute(task.due_at);
      const incompleteAssignees = task.assignees.filter((a) => !a.is_complete && a.is_eligible_active);
      const canClickProgress = task.is_creator && incompleteAssignees.length > 0;
      return (
        <div className="kanban-card" onClick={onClick}>
          <div className="kanban-card-row1">
            <span className={`purpose-badge-lg ${PURPOSE_BADGE_CLASS[task.purpose]}`}>{task.purpose}</span>
            {badgeInfo.badge && <span className={`badge-lg ${badgeInfo.badge}`}>{badgeInfo.label}</span>}
            {task.close_type === 'forced' && <span className="badge-lg badge-forced">強制終了</span>}
          </div>
          <strong className="kanban-card-title">{task.title || '（件名未設定）'}</strong>
          <div className="kanban-card-creator">作成者：{task.created_by_name}</div>
          <div className={`kanban-card-due ${overdue ? 'overdue' : ''}`}><Calendar size={13} />{dueText}</div>
          <div className="kanban-card-progress">
            <span
              className={canClickProgress ? 'progress-count clickable' : 'progress-count'}
              onClick={canClickProgress ? (e) => { e.stopPropagation(); onProgressClick?.(); } : undefined}
            >
              進捗 {task.completed_assignees}/{task.total_assignees}人
            </span>
          </div>
        </div>
      );
    }
    
    // ── Personal Kanban Card ──
    function PersonalKanbanCard({ task, onClick }: { task: PersonalTaskView; onClick: () => void }) {
      return (
        <div
          className={`kanban-card personal-card ${task.is_overdue && task.status === 'open' ? 'overdue' : ''}`}
          onClick={onClick}
        >
          <div className="kanban-card-top">
            <span className="task-type-label personal">{TASK_TYPE_LABELS.personal}</span>
            {task.is_overdue && task.status === 'open' && <span className="badge overdue">期限超過</span>}
          </div>
          <strong className="kanban-card-title">{task.title || '（件名未設定）'}</strong>
          <div className="kanban-card-sub">{task.related_project_name ?? PERSONAL_PROJECT_NO_SELECTION}</div>
          <div className="kanban-card-bottom">
            <span className="kanban-due">{task.due_label || '期限なし'}</span>
            {task.attachments.length > 0 && <small><FileText size={10} /> {task.attachments.length}</small>}
          </div>
        </div>
      );
    }
    
    // ── Kanban column with overflow ──
    function KanbanColumn({ label, className, count, children, limit, overflowCount, onOverflow }: {
      label: string; className: string; count: number; children: React.ReactNode;
      limit: number; overflowCount: number; onOverflow?: () => void;
    }) {
      return (
        <div className={`kanban-column ${className}`}>
          <div className="kanban-column-header">
            <span className={`kanban-dot ${className}`} />
            <strong>{label}</strong>
            <small className="kanban-count-badge">{count}</small>
            <MoreHorizontal size={15} className="kanban-column-more" />
          </div>
          <div className="kanban-cards">
            {children}
            {overflowCount > 0 && (
              <div className="kanban-overflow">
                <button onClick={onOverflow}>他 {overflowCount} 件を表示...</button>
              </div>
            )}
          </div>
        </div>
      );
    }
    
    // ── Pagination ──
    function PaginationBar({ total, page, pageSize, onPageChange, onPageSizeChange }: {
      total: number; page: number; pageSize: number;
      onPageChange: (p: number) => void; onPageSizeChange: (s: number) => void;
    }) {
      const totalPages = Math.max(1, Math.ceil(total / pageSize));
      const start = total === 0 ? 0 : (page - 1) * pageSize + 1;
      const end = Math.min(page * pageSize, total);
    
      const pageNumbers = useMemo(() => {
        const pages: (number | '...')[] = [];
        const maxVisible = 7;
        if (totalPages <= maxVisible) {
          for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
          pages.push(1);
          if (page > 3) pages.push('...');
          const startPage = Math.max(2, page - 1);
          const endPage = Math.min(totalPages - 1, page + 1);
          for (let i = startPage; i <= endPage; i++) pages.push(i);
          if (page < totalPages - 2) pages.push('...');
          pages.push(totalPages);
        }
        return pages;
      }, [totalPages, page]);
    
      return (
        <div className="pagination-bar">
          <div className="pagination-summary">{total === 0 ? EMPTY_LIST_MESSAGE : `全 ${total} 件中 ${start}〜${end} 件を表示`}</div>
          <div className="pagination-controls">
            <select className="page-size-select" value={pageSize} onChange={(e) => onPageSizeChange(Number(e.target.value))}>
              {PAGE_SIZE_OPTIONS.map((s) => <option key={s} value={s}>{s}件</option>)}
            </select>
            <button className="page-btn" disabled={page <= 1} onClick={() => onPageChange(page - 1)}>
              <ChevronLeft size={14} />
            </button>
            {pageNumbers.map((p, i) =>
              p === '...' ? <span key={`e${i}`} className="page-ellipsis">…</span> :
              <button key={p} className={`page-btn ${p === page ? 'active' : ''}`} onClick={() => onPageChange(p)}>{p}</button>
            )}
            <button className="page-btn" disabled={page >= totalPages} onClick={() => onPageChange(page + 1)}>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      );
    }
    
    // ── Filter preset tabs ──
    function FilterPresets<T extends string>({ items, current, onChange }: {
      items: { key: T; label: string }[]; current: T; onChange: (v: T) => void;
    }) {
      return (
        <div className="filter-presets">
          {items.map((item) => (
            <button
              key={item.key}
              className={`filter-preset ${current === item.key ? 'filter-preset-active' : ''}`}
              onClick={() => onChange(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>
      );
    }
    
    // ── Toolbar (search + filters) ──
    function Toolbar({ children }: { children: React.ReactNode }) {
      return <div className="toolbar">{children}</div>;
    }
    
    // ── View toggle ──
    function ViewToggle({ viewMode, setViewMode }: { viewMode: 'list' | 'board'; setViewMode: (v: 'list' | 'board') => void }) {
      return (
        <div className="view-toggle">
          <button className={viewMode === 'list' ? 'view-active' : ''} onClick={() => setViewMode('list')}>
            <ListIcon size={18} /><span>一覧</span>
          </button>
          <button className={viewMode === 'board' ? 'view-active' : ''} onClick={() => setViewMode('board')}>
            <LayoutGrid size={18} /><span>看板</span>
          </button>
        </div>
      );
    }
    
    // ──────────────────────────────────────────────
    // Guide Page
    // ──────────────────────────────────────────────
    
    function GuidePage({ nav, onCreateShared, onCreatePersonal, onCreateTemplate, onDeleteTemplate }: {
      nav: ReturnType<typeof useTaskNavi>;
      onCreateShared: () => void;
      onCreatePersonal: () => void;
      onCreateTemplate: () => void;
      onDeleteTemplate: (templateId: string) => void;
    }) {
      const [selectedTemplateId, setSelectedTemplateId] = useState('');
    
      const selectedTemplate =
        nav.templates.find((template) => template.id === selectedTemplateId)
        ?? nav.templates[0]
        ?? null;
    
      function handleDeleteTemplate() {
        if (!selectedTemplate) return;
    
        const confirmed = window.confirm(
          `テンプレート「${selectedTemplate.name}」を削除します。よろしいですか？`,
        );
    
        if (!confirmed) return;
    
        onDeleteTemplate(selectedTemplate.id);
        setSelectedTemplateId('');
      }
    
      return (
        <>
          {/* 上段：共有タスク・個人タスクの作成 */}
          <section className="guide-cards">
            <div className="guide-card">
              <div className="guide-card-icon shared">
                <Users size={22} />
              </div>
              <h3>{GUIDE_SHARED_TITLE}</h3>
              <p>{GUIDE_SHARED_DESC}</p>
              <div className="guide-card-actions">
                <button className="primary-button" onClick={onCreateShared}>
                  <Plus size={15} />
                  {GUIDE_SHARED_ACTION}
                </button>
              </div>
            </div>
    
            <div className="guide-card">
              <div className="guide-card-icon personal">
                <ListChecks size={22} />
              </div>
              <h3>{GUIDE_PERSONAL_TITLE}</h3>
              <p>{GUIDE_PERSONAL_DESC}</p>
              <div className="guide-card-actions">
                <button className="primary-button" onClick={onCreatePersonal}>
                  <Plus size={15} />
                  {GUIDE_PERSONAL_ACTION}
                </button>
              </div>
            </div>
          </section>
    
          {/* 下段：外側の白枠は維持 */}
          <section className="panel" style={{ padding: 24 }}>
            <div style={{ marginBottom: 18 }}>
              <h2 style={{ margin: 0, fontSize: 18 }}>
                テンプレート 作成・一覧
              </h2>
    
              <p
                style={{
                  margin: '6px 0 0',
                  color: '#607281',
                  fontSize: 12,
                  lineHeight: 1.5,
                }}
              >
                自分が作成したテンプレートのみ表示
              </p>
    
              {/* 説明文の直下に配置 */}
              <button
                type="button"
                className="primary-button"
                onClick={onCreateTemplate}
                style={{ marginTop: 14 }}
              >
                <Plus size={15} />
                テンプレートを作成
              </button>
            </div>
    
            {/* 外側白枠の中で、画面中央を境界にした左右同幅2カラム */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 20,
                alignItems: 'stretch',
              }}
            >
              {/* 左：テンプレート詳細プレビュー */}
              <div
                className="guide-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 360,
                  margin: 0,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    color: '#607281',
                    fontSize: 12,
                    fontWeight: 600,
                    marginBottom: 18,
                  }}
                >
                  <Eye size={15} />
                  テンプレートプレビュー
                </div>
    
                {selectedTemplate ? (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                      <div>
                        <span className="detail-label">テンプレート名</span>
                        <strong style={{ display: 'block', color: '#22384e', marginTop: 5 }}>
                          {selectedTemplate.name}
                        </strong>
                      </div>
    
                      <div>
                        <span className="detail-label">目的</span>
                        <strong style={{ display: 'block', color: '#2c455a', marginTop: 5 }}>
                          {selectedTemplate.purpose}
                        </strong>
                      </div>
    
                      <div>
                        <span className="detail-label">件名</span>
                        <strong style={{ display: 'block', color: '#2c455a', marginTop: 5 }}>
                          {selectedTemplate.title_template || '（件名未設定）'}
                        </strong>
                      </div>
    
                      <div>
                        <span className="detail-label">本文</span>
                        <p
                          style={{
                            whiteSpace: 'pre-wrap',
                            color: '#526675',
                            fontSize: 12,
                            lineHeight: 1.75,
                            margin: '5px 0 0',
                          }}
                        >
                          {selectedTemplate.body_template || '（本文未設定）'}
                        </p>
                      </div>
                    </div>
    
                    <div style={{ marginTop: 'auto', paddingTop: 24 }}>
                      <button
                        type="button"
                        className="action-btn danger"
                        onClick={handleDeleteTemplate}
                        style={{ width: 'auto', padding: '8px 14px' }}
                      >
                        <Trash2 size={14} />
                        削除
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="empty-state">テンプレートがありません。</div>
                )}
              </div>
    
              {/* 右：テンプレート一覧 */}
              <div
                className="guide-card"
                style={{
                  minHeight: 360,
                  padding: 0,
                  overflow: 'hidden',
                  margin: 0,
                }}
              >
                <div
                  style={{
                    padding: '16px 20px',
                    borderBottom: '1px solid #eef1f3',
                    color: '#607281',
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  テンプレート一覧
                </div>
    
                <div style={{ maxHeight: 310, overflowY: 'auto' }}>
                  {nav.templates.map((template) => {
                    const isSelected = selectedTemplate?.id === template.id;
    
                    return (
                      <button
                        key={template.id}
                        type="button"
                        onClick={() => setSelectedTemplateId(template.id)}
                        style={{
                          display: 'block',
                          width: '100%',
                          padding: '14px 20px',
                          textAlign: 'left',
                          border: 'none',
                          borderBottom: '1px solid #eef1f3',
                          background: isSelected ? '#eef6fa' : '#fff',
                          color: '#2c455a',
                          cursor: 'pointer',
                        }}
                      >
                        <strong style={{ display: 'block', fontSize: 12 }}>
                          {template.name}
                        </strong>
                        <small
                          style={{
                            display: 'block',
                            marginTop: 4,
                            color: '#82909b',
                            fontSize: 10,
                          }}
                        >
                          {template.purpose}
                        </small>
                      </button>
                    );
                  })}
    
                  {nav.templates.length === 0 && (
                    <div className="empty-state">テンプレートがありません。</div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
    
    // ──────────────────────────────────────────────
    // My Tasks Page (cross-project)
    // ──────────────────────────────────────────────
    
    function MyTasksPage({ nav }: { nav: ReturnType<typeof useTaskNavi> }) {
      const filteredTasks = useMemo(() => {
        let shared: TaskView[] = nav.allTasks;
        let personal: PersonalTaskView[] = nav.personalTasks;
    
        // MyTasksFilter presets
        switch (nav.myTasksFilter) {
          case 'my_progress':
            shared = shared.filter((t) => t.is_assignee && t.status === 'open');
            personal = personal.filter((t) => t.status === 'open');
            break;
          case 'managing':
            shared = shared.filter((t) => t.is_creator && t.status !== 'archived');
            personal = [];
            break;
          case 'closed':
            shared = shared.filter((t) => t.status === 'closed');
            personal = personal.filter((t) => t.status !== 'archived');
            break;
          default:
            shared = shared.filter((t) => t.status !== 'archived');
            personal = personal.filter((t) => t.status !== 'archived');
        }
    
        // Task type filter
        if (nav.taskTypeFilter === 'shared') personal = [];
        if (nav.taskTypeFilter === 'personal') shared = [];
    
        // Search
        const term = nav.searchQuery.toLowerCase();
        if (term) {
          shared = shared.filter((t) => `${t.title} ${t.body} ${t.project_name}`.toLowerCase().includes(term));
          personal = personal.filter((t) => `${t.title} ${t.body} ${t.related_project_name ?? ''}`.toLowerCase().includes(term));
        }
    
        return { shared: [...shared].sort(compareTasksByDuePriority), personal: [...personal].sort(compareTasksByDuePriority) };
      }, [nav.allTasks, nav.personalTasks, nav.myTasksFilter, nav.taskTypeFilter, nav.searchQuery]);
    
      const total = filteredTasks.shared.length + filteredTasks.personal.length;
      const totalPages = Math.max(1, Math.ceil(total / nav.pageSize));
      const currentPage = Math.min(nav.page, totalPages);
      const start = total === 0 ? 0 : (currentPage - 1) * nav.pageSize;
      const end = Math.min(currentPage * nav.pageSize, total);
    
      const pagedShared = filteredTasks.shared.slice(start, Math.max(start, end));
      const personalStart = Math.max(0, start - filteredTasks.shared.length);
      const personalEnd = Math.max(0, end - filteredTasks.shared.length);
      const pagedPersonal = filteredTasks.personal.slice(personalStart, personalEnd);
    
      const summary = computeMyTasksSummaryCounts(nav.allTasks);
    
      return (
        <>
          <section className="summary-grid">
            <SummaryCard label="下書き" value={String(summary.managing)} hint="自分が作成" tone="slate" icon={<FileText size={18} />} onClick={() => { nav.setMyTasksFilter('managing'); nav.setPage(1); }} />
            <SummaryCard label="自分の対応" value={String(summary.my_progress)} hint="対応が必要" tone="blue" icon={<Inbox size={18} />} onClick={() => { nav.setMyTasksFilter('my_progress'); nav.setPage(1); }} />
            <SummaryCard label="期限超過" value={String(summary.overdue)} hint="要対応" tone="amber" icon={<ShieldCheck size={18} />} onClick={() => { nav.setMyTasksFilter('all'); nav.setPage(1); }} />
            <SummaryCard label="完了" value={String(summary.closed)} hint="完了済み" tone="green" icon={<Check size={18} />} onClick={() => { nav.setMyTasksFilter('all'); nav.setPage(1); }} />
            <SummaryCard label="合計" value={String(summary.all)} hint="アーカイブ除く" tone="slate" icon={<ListIcon size={18} />} onClick={() => { nav.setMyTasksFilter('all'); nav.setPage(1); }} />
          </section>
          <FilterPresets items={MY_TASKS_FILTERS} current={nav.myTasksFilter} onChange={(v) => { nav.setMyTasksFilter(v); nav.setPage(1); }} />
          <section className="work-area">
            <div className="task-panel panel">
              <div className="panel-header">
                <div className="panel-title-group"><h2>タスク一覧</h2><span className="muted-text">全 {total} 件</span></div>
                <div className="panel-header-inline">
                  <div className="search-box">
                    <Search size={16} />
                    <input value={nav.searchQuery} onChange={(e) => { nav.setSearchQuery(e.target.value); nav.setPage(1); }} placeholder={SEARCH_PLACEHOLDER} />
                  </div>
                  <div className="filter-group">
                    <Filter size={15} />
                    <select value={nav.taskTypeFilter} onChange={(e) => { nav.setTaskTypeFilter(e.target.value as TaskTypeFilter); nav.setPage(1); }}>
                      {TASK_TYPE_FILTERS.map((f) => <option key={f.key} value={f.key}>{f.label}</option>)}
                    </select>
                  </div>
                </div>
                <ViewToggle viewMode={nav.viewMode} setViewMode={nav.setViewMode} />
              </div>
              {nav.viewMode === 'list' && <StatusLegend type="my_tasks" />}
    
              {nav.viewMode === 'list' ? (
                <>
                  <div className="task-list">
                    {pagedShared.map((task) => <SharedTaskRow key={task.id} task={task} onClick={() => void nav.openTask(task.id)} />)}
                    {pagedPersonal.map((task) => <PersonalTaskRow key={task.id} task={task} onClick={() => void nav.openPersonalTask(task.id)} />)}
                    {total === 0 && <div className="empty-state">条件に一致するタスクはありません。</div>}
                  </div>
                  <PaginationBar
                    total={total}
                    page={currentPage}
                    pageSize={nav.pageSize}
                    onPageChange={nav.setPage}
                    onPageSizeChange={(s) => { nav.setPageSize(s); nav.setPage(1); }}
                  />
                </>
              ) : (
                <MyTasksBoard nav={nav} shared={filteredTasks.shared} personal={filteredTasks.personal} />
              )}
            </div>
          </section>
        </>
      );
    }
    
    function MyTasksBoard({ nav, shared, personal }: {
      nav: ReturnType<typeof useTaskNavi>;
      shared: TaskView[];
      personal: PersonalTaskView[];
    }) {
      return (
        <div className="kanban-board">
          {BOARD_COLUMN_ORDER.map((col) => {
            const limit = BOARD_COLUMN_LIMITS[col];
            const colShared = shared.filter((t) => t.board_column === col);
            const colPersonal = col === 'draft' ? personal.filter((t) => t.board_column === 'draft')
              : col === 'in_progress' ? personal.filter((t) => t.board_column === 'open')
              : col === 'closed' ? personal.filter((t) => t.board_column === 'overdue' && t.status === 'archived')
              : [];
            const allCards = [...colShared, ...colPersonal].sort(compareTasksByDuePriority);
            const visible = allCards.slice(0, limit);
            const overflow = allCards.length - limit;
            const meta = BOARD_COLUMN_META[col];
            return (
              <KanbanColumn
                key={col}
                label={meta.label}
                className={meta.className}
                count={allCards.length}
                limit={limit}
                overflowCount={Math.max(0, overflow)}
                onOverflow={() => { nav.setViewMode('list'); }}
              >
                {visible.map((item) =>
                  'task_type' in item && item.task_type === 'personal' ? (
                    <PersonalKanbanCard key={item.id} task={item as PersonalTaskView} onClick={() => void nav.openPersonalTask(item.id)} />
                  ) : (
                    <SharedKanbanCard key={item.id} task={item as TaskView} onClick={() => void nav.openTask(item.id)} />
                  )
                )}
                {allCards.length === 0 && <div className="kanban-empty">タスクなし</div>}
              </KanbanColumn>
            );
          })}
        </div>
      );
    }
    
    // ──────────────────────────────────────────────
    // Shared Tasks Page (project-scoped)
    // ──────────────────────────────────────────────
    
    function SharedTasksPage({ nav, onCreate }: { nav: ReturnType<typeof useTaskNavi>; onCreate: () => void }) {
      const [sharedPreset, setSharedPreset] = useState<'all' | 'my_progress' | 'managing'>('all');
      const [popoverTaskId, setPopoverTaskId] = useState<string | null>(null);
      const filtered = useMemo(() => {
        let list = nav.projectTasks.filter((t) => t.status !== 'archived' && t.is_related);
    
        // Preset filter (自分の対応 / 管理中)
        if (sharedPreset === 'my_progress') {
          list = list.filter((t) => t.is_assignee && t.status === 'open');
        } else if (sharedPreset === 'managing') {
          list = list.filter((t) => t.is_creator && t.status !== 'archived');
        }
    
        // Condition filter
        switch (nav.sharedConditionFilter) {
          case 'overdue': list = list.filter((t) => t.badge === 'overdue'); break;
          case 'confirm_answer': list = list.filter((t) => t.board_column === 'confirm_answer'); break;
          case 'accept_pending': list = list.filter((t) => t.badge === 'accept_pending' || t.board_column === 'accept_return'); break;
          case 'returned': list = list.filter((t) => t.badge === 'returned'); break;
          case 'in_progress': list = list.filter((t) => t.board_column === 'in_progress'); break;
        }
    
        // Purpose filter
        if (nav.purposeFilter !== 'all') {
          list = list.filter((t) => t.purpose === nav.purposeFilter);
        }
    
        // Search
        const term = nav.searchQuery.toLowerCase();
        if (term) {
          list = list.filter((t) => `${t.title} ${t.body} ${t.project_name}`.toLowerCase().includes(term));
        }
    
        return [...list].sort(compareTasksByDuePriority);
      }, [nav.projectTasks, nav.sharedConditionFilter, nav.purposeFilter, nav.searchQuery, sharedPreset]);
    
      const total = filtered.length;
      const totalPages = Math.max(1, Math.ceil(total / nav.pageSize));
      const currentPage = Math.min(nav.page, totalPages);
      const start = total === 0 ? 0 : (currentPage - 1) * nav.pageSize;
      const end = Math.min(currentPage * nav.pageSize, total);
      const paged = filtered.slice(start, end);
    
      return (
        <>
          <section className="summary-grid">
            {(() => {
              const counts = computeSharedSummaryCounts(nav.projectTasks);
              return (
                <>
                  <SummaryCard label="下書き" value={String(counts.draft)} hint="未公開" tone="slate" icon={<FileText size={18} />} onClick={() => { nav.setSharedConditionFilter('all'); nav.setPage(1); }} />
                  <SummaryCard label="公開中" value={String(counts.open)} hint="期限超過を除く" tone="blue" icon={<Inbox size={18} />} onClick={() => { nav.setSharedConditionFilter('in_progress'); nav.setPage(1); }} />
                  <SummaryCard label="期限超過" value={String(counts.overdue)} hint="要対応" tone="amber" icon={<ShieldCheck size={18} />} onClick={() => { nav.setSharedConditionFilter('overdue'); nav.setPage(1); }} />
                  <SummaryCard label="完了" value={String(counts.closed)} hint="完了済み" tone="green" icon={<Check size={18} />} onClick={() => { nav.setSharedConditionFilter('all'); nav.setPage(1); }} />
                  <SummaryCard label="合計" value={String(counts.total)} hint="アーカイブ除く" tone="slate" icon={<ListIcon size={18} />} onClick={() => { nav.setSharedConditionFilter('all'); nav.setPage(1); }} />
                </>
              );
            })()}
          </section>
          <FilterPresets items={SHARED_PRESET_FILTERS} current={sharedPreset} onChange={(v) => { setSharedPreset(v); nav.setPage(1); }} />
          <section className="work-area">
            <div className="task-panel panel">
              <div className="panel-header">
                <div className="panel-title-group"><h2>共有タスク一覧</h2><span className="muted-text">全 {total} 件</span></div>
                <div className="panel-header-inline">
                  <div className="search-box">
                    <Search size={16} />
                    <input value={nav.searchQuery} onChange={(e) => { nav.setSearchQuery(e.target.value); nav.setPage(1); }} placeholder={SEARCH_PLACEHOLDER} />
                  </div>
                  <div className="filter-group">
                    <Filter size={15} />
                    <select value={nav.sharedConditionFilter} onChange={(e) => { nav.setSharedConditionFilter(e.target.value as SharedConditionFilter); nav.setPage(1); }}>
                      {SHARED_CONDITION_FILTERS.map((f) => <option key={f.key} value={f.key}>{f.label}</option>)}
                    </select>
                  </div>
                  <div className="filter-group">
                    <Filter size={15} />
                    <select value={nav.purposeFilter} onChange={(e) => { nav.setPurposeFilter(e.target.value as TaskPurpose | 'all'); nav.setPage(1); }}>
                      {PURPOSE_FILTERS.map((f) => <option key={f.key} value={f.key}>{f.label}</option>)}
                    </select>
                  </div>
                </div>
                <ViewToggle viewMode={nav.viewMode} setViewMode={nav.setViewMode} />
              </div>
    
              {nav.viewMode === 'list' ? (
                <>
                  <StatusLegend type="shared" />
                  <div className="task-list">
                    {paged.map((task) => <SharedTaskRow key={task.id} task={task} onClick={() => void nav.openTask(task.id)} />)}
                    {total === 0 && <div className="empty-state">{EMPTY_LIST_MESSAGE}</div>}
                  </div>
                  <PaginationBar
                    total={total}
                    page={currentPage}
                    pageSize={nav.pageSize}
                    onPageChange={nav.setPage}
                    onPageSizeChange={(s) => { nav.setPageSize(s); nav.setPage(1); }}
                  />
                </>
              ) : (
                <SharedBoard nav={nav} tasks={filtered} popoverTaskId={popoverTaskId} setPopoverTaskId={setPopoverTaskId} />
              )}
            </div>
          </section>
        </>
      );
    }
    
    function SharedBoard({ nav, tasks, popoverTaskId, setPopoverTaskId }: {
      nav: ReturnType<typeof useTaskNavi>; tasks: TaskView[];
      popoverTaskId: string | null; setPopoverTaskId: (id: string | null) => void;
    }) {
      return (
        <div className="kanban-board">
          {BOARD_COLUMN_ORDER.map((col) => {
            const limit = BOARD_COLUMN_LIMITS[col];
            const colTasks = tasks.filter((t) => t.board_column === col).sort(compareTasksByDuePriority);
            const visible = colTasks.slice(0, limit);
            const overflow = colTasks.length - limit;
            const meta = BOARD_COLUMN_META[col];
            return (
              <KanbanColumn
                key={col}
                label={meta.label}
                className={meta.className}
                count={colTasks.length}
                limit={limit}
                overflowCount={Math.max(0, overflow)}
                onOverflow={() => { nav.setViewMode('list'); }}
              >
                {visible.map((task) => (
                  <div key={task.id} className="kanban-card-wrapper">
                    {popoverTaskId === task.id && (
                      <IncompletePopover task={task} onClose={() => setPopoverTaskId(null)} />
                    )}
                    <SharedKanbanCard
                      task={task}
                      onClick={() => void nav.openTask(task.id)}
                      onProgressClick={() => setPopoverTaskId(popoverTaskId === task.id ? null : task.id)}
                    />
                  </div>
                ))}
                {colTasks.length === 0 && <div className="kanban-empty">タスクなし</div>}
              </KanbanColumn>
            );
          })}
        </div>
      );
    }
    
    // ──────────────────────────────────────────────
    // Personal Tasks Page
    // ──────────────────────────────────────────────
    
    function PersonalTasksPage({ nav, onCreate }: { nav: ReturnType<typeof useTaskNavi>; onCreate: () => void }) {
      const filtered = useMemo(() => {
        let list = nav.personalTasks;
    
        switch (nav.personalConditionFilter) {
          case 'draft': list = list.filter((t) => t.status === 'draft'); break;
          case 'open': list = list.filter((t) => t.status === 'open'); break;
          case 'overdue': list = list.filter((t) => t.is_overdue && t.status === 'open'); break;
          case 'archived': list = list.filter((t) => t.status === 'archived'); break;
          default: list = list.filter((t) => t.status !== 'archived');
        }
    
        const term = nav.searchQuery.toLowerCase();
        if (term) {
          list = list.filter((t) => `${t.title} ${t.body} ${t.related_project_name ?? ''}`.toLowerCase().includes(term));
        }
    
        return [...list].sort(compareTasksByDuePriority);
      }, [nav.personalTasks, nav.personalConditionFilter, nav.searchQuery]);
    
      const total = filtered.length;
      const totalPages = Math.max(1, Math.ceil(total / nav.pageSize));
      const currentPage = Math.min(nav.page, totalPages);
      const start = total === 0 ? 0 : (currentPage - 1) * nav.pageSize;
      const end = Math.min(currentPage * nav.pageSize, total);
      const paged = filtered.slice(start, end);
    
      const summary = computePersonalSummaryCounts(nav.personalTasks);
    
      return (
        <>
          <section className="summary-grid summary-grid-4">
            <SummaryCard label="下書き" value={String(summary.draft)} hint="未開始" tone="slate" icon={<FileText size={18} />} onClick={() => { nav.setPersonalConditionFilter('draft'); nav.setPage(1); }} />
            <SummaryCard label="対応中" value={String(summary.open)} hint="進行中" tone="blue" icon={<Inbox size={18} />} onClick={() => { nav.setPersonalConditionFilter('open'); nav.setPage(1); }} />
            <SummaryCard label="期限超過" value={String(summary.overdue)} hint="要対応" tone="amber" icon={<ShieldCheck size={18} />} onClick={() => { nav.setPersonalConditionFilter('overdue'); nav.setPage(1); }} />
            <SummaryCard label="合計" value={String(summary.total)} hint="アーカイブ除く" tone="slate" icon={<ListIcon size={18} />} onClick={() => { nav.setPersonalConditionFilter('all'); nav.setPage(1); }} />
          </section>
          <section className="work-area">
          <div className="task-panel panel">
            <div className="panel-header">
              <div className="panel-title-group"><h2>個人タスク一覧</h2><span className="muted-text">全 {total} 件</span></div>
              <div className="panel-header-inline">
                <div className="search-box">
                  <Search size={16} />
                  <input value={nav.searchQuery} onChange={(e) => { nav.setSearchQuery(e.target.value); nav.setPage(1); }} placeholder={SEARCH_PLACEHOLDER} />
                </div>
                <div className="filter-group">
                  <Filter size={15} />
                  <select value={nav.personalConditionFilter} onChange={(e) => { nav.setPersonalConditionFilter(e.target.value as PersonalConditionFilter); nav.setPage(1); }}>
                    {PERSONAL_CONDITION_FILTERS.map((f) => <option key={f.key} value={f.key}>{f.label}</option>)}
                  </select>
                </div>
              </div>
              <ViewToggle viewMode={nav.viewMode} setViewMode={nav.setViewMode} />
            </div>
    
            {nav.viewMode === 'list' ? (
              <>
                <StatusLegend type="personal" />
                <div className="task-list">
                  {paged.map((task) => <PersonalTaskRow key={task.id} task={task} onClick={() => void nav.openPersonalTask(task.id)} />)}
                  {total === 0 && <div className="empty-state">{EMPTY_LIST_MESSAGE}</div>}
                </div>
                <PaginationBar
                  total={total}
                  page={currentPage}
                  pageSize={nav.pageSize}
                  onPageChange={nav.setPage}
                  onPageSizeChange={(s) => { nav.setPageSize(s); nav.setPage(1); }}
                />
              </>
            ) : (
              <PersonalBoard nav={nav} tasks={filtered} />
            )}
          </div>
          </section>
        </>
      );
    }
    
    function PersonalBoard({ nav, tasks }: { nav: ReturnType<typeof useTaskNavi>; tasks: PersonalTaskView[] }) {
      return (
        <div className="kanban-board">
          {PERSONAL_BOARD_COLUMN_ORDER.map((col) => {
            const colTasks = tasks.filter((t) => t.board_column === col).sort(compareTasksByDuePriority);
            const visible = colTasks.slice(0, PERSONAL_BOARD_LIMIT);
            const overflow = colTasks.length - PERSONAL_BOARD_LIMIT;
            const meta = PERSONAL_BOARD_COLUMN_META[col];
            return (
              <KanbanColumn
                key={col}
                label={meta.label}
                className={meta.className}
                count={colTasks.length}
                limit={PERSONAL_BOARD_LIMIT}
                overflowCount={Math.max(0, overflow)}
                onOverflow={() => { nav.setViewMode('list'); }}
              >
                {visible.map((task) => <PersonalKanbanCard key={task.id} task={task} onClick={() => void nav.openPersonalTask(task.id)} />)}
                {colTasks.length === 0 && <div className="kanban-empty">タスクなし</div>}
              </KanbanColumn>
            );
          })}
        </div>
      );
    }
    
    // ──────────────────────────────────────────────
    // Archive Page
    // ──────────────────────────────────────────────
    
    function ArchivePage({ nav }: { nav: ReturnType<typeof useTaskNavi> }) {
      const filtered = useMemo(() => {
        const term = nav.searchQuery.toLowerCase();
        const sharedArchived = nav.archivedTasks.filter((t) =>
          (nav.taskTypeFilter === 'all' || nav.taskTypeFilter === 'shared') &&
          (!term || `${t.title} ${t.body} ${t.project_name}`.toLowerCase().includes(term))
        );
        const personalArchived = nav.personalTasks.filter((t) =>
          t.status === 'archived' &&
          (nav.taskTypeFilter === 'all' || nav.taskTypeFilter === 'personal') &&
          (!term || `${t.title} ${t.body} ${t.related_project_name ?? ''}`.toLowerCase().includes(term))
        );
        return { sharedArchived, personalArchived };
      }, [nav.archivedTasks, nav.personalTasks, nav.taskTypeFilter, nav.searchQuery]);
    
      const total = filtered.sharedArchived.length + filtered.personalArchived.length;
      const totalPages = Math.max(1, Math.ceil(total / nav.pageSize));
      const currentPage = Math.min(nav.page, totalPages);
      const start = total === 0 ? 0 : (currentPage - 1) * nav.pageSize;
      const end = Math.min(currentPage * nav.pageSize, total);
    
      const pagedShared = filtered.sharedArchived.slice(start, Math.max(start, end));
      const personalStart = Math.max(0, start - filtered.sharedArchived.length);
      const personalEnd = Math.max(0, end - filtered.sharedArchived.length);
      const pagedPersonal = filtered.personalArchived.slice(personalStart, personalEnd);
    
      return (
        <section className="work-area">
          <div className="task-panel panel">
            <div className="panel-header">
              <div className="panel-title-group"><h2>アーカイブ一覧</h2><span className="muted-text">全 {total} 件</span></div>
              <div className="panel-header-inline">
                <div className="search-box">
                  <Search size={16} />
                  <input value={nav.searchQuery} onChange={(e) => { nav.setSearchQuery(e.target.value); nav.setPage(1); }} placeholder={SEARCH_PLACEHOLDER} />
                </div>
                <div className="filter-group">
                  <Filter size={15} />
                  <select value={nav.taskTypeFilter} onChange={(e) => { nav.setTaskTypeFilter(e.target.value as TaskTypeFilter); nav.setPage(1); }}>
                    {TASK_TYPE_FILTERS.map((f) => <option key={f.key} value={f.key}>{f.label}</option>)}
                  </select>
                </div>
              </div>
            </div>
            <div className="task-list">
              {pagedShared.map((task) => <SharedTaskRow key={task.id} task={task} onClick={() => void nav.openTask(task.id)} />)}
              {pagedPersonal.map((task) => <PersonalTaskRow key={task.id} task={task} onClick={() => void nav.openPersonalTask(task.id)} />)}
              {total === 0 && <div className="empty-state">アーカイブされたタスクはありません。</div>}
            </div>
            <PaginationBar
              total={total}
              page={currentPage}
              pageSize={nav.pageSize}
              onPageChange={nav.setPage}
              onPageSizeChange={(s) => { nav.setPageSize(s); nav.setPage(1); }}
            />
          </div>
        </section>
      );
    }
    
    // ──────────────────────────────────────────────
    // Note List View Section
    // ──────────────────────────────────────────────
    
    function NoteListViewSection({ noteList, onOpenTask, onUnfavorite }: {
      noteList: NoteListView[];
      onOpenTask: (taskId: string) => void;
      onUnfavorite: (noteId: string) => void;
    }) {
      return (
        <section className="work-area">
          <div className="task-panel panel">
            <div className="panel-header">
              <div><h2>ノート一覧</h2><span className="muted-text">全 {noteList.length} 件</span></div>
            </div>
            <div className="note-list-container">
              {noteList.map((n) => (
                <div key={n.id} className={`note-list-card ${n.color}`} onClick={() => onOpenTask(n.task_id)}>
                  <div className="note-list-card-top">
                    <span className={`note-list-vis-tag ${n.visibility}`}>{n.visibility === 'shared' ? '共有ノート' : '個人ノート'}</span>
                    {n.visibility === 'shared' && (
                      <button className="note-list-unfav" onClick={(e) => { e.stopPropagation(); onUnfavorite(n.id); }} title="お気に入り解除">
                        <Star size={13} />
                      </button>
                    )}
                  </div>
                  <p className="note-list-text">{n.text}</p>
                  <div className="note-list-meta">
                    <span className="note-list-task-name">{n.task_title}</span>
                    <time>{n.time_label}</time>
                  </div>
                </div>
              ))}
              {noteList.length === 0 && <div className="empty-state">表示できるノートはありません。</div>}
            </div>
          </div>
        </section>
      );
    }
    
    // ──────────────────────────────────────────────
    // Shared Task Detail
    // ──────────────────────────────────────────────
    
    function SharedTaskDetail({ detail, nav, chatOpen, setChatOpen, dockPanel, setDockPanel, chatSearchOpen, setChatSearchOpen, chatSearch, setChatSearch, chatInput, setChatInput, attachmentName, setAttachmentName, attachFile, sendChat, noteInput, setNoteInput, noteColor, setNoteColor, noteAttachmentName, setNoteAttachmentName, attachNoteFile, addNote, todoInput, setTodoInput, addTodo, taskChats, taskSharedNotes, taskPersonalNotes, taskTodos, modals, showDetailMenu, setShowDetailMenu }: {
      detail: NonNullable<ReturnType<typeof useTaskNavi>['detail']>;
      nav: ReturnType<typeof useTaskNavi>;
      chatOpen: boolean; setChatOpen: (v: boolean) => void;
      dockPanel: DockPanel; setDockPanel: (v: DockPanel) => void;
      chatSearchOpen: boolean; setChatSearchOpen: (v: boolean) => void;
      chatSearch: string; setChatSearch: (v: string) => void;
      chatInput: string; setChatInput: (v: string) => void;
      attachmentName: string; setAttachmentName: (v: string) => void;
      attachFile: (f: File | undefined) => void;
      sendChat: () => void;
      noteInput: string; setNoteInput: (v: string) => void;
      noteColor: string; setNoteColor: (v: string) => void;
      noteAttachmentName: string; setNoteAttachmentName: (v: string) => void;
      attachNoteFile: (f: File | undefined) => void;
      addNote: () => void;
      todoInput: string; setTodoInput: (v: string) => void;
      addTodo: () => void;
      taskChats: typeof detail.chats;
      taskSharedNotes: typeof detail.shared_notes;
      taskPersonalNotes: typeof detail.personal_notes;
      taskTodos: typeof detail.todos;
      modals: {
        setShowForceClose: (v: boolean) => void;
        setShowArchive: (v: boolean) => void;
        setShowExempt: (v: AssigneeDetailView | null) => void;
        setShowReturn: (v: SubmissionView | null) => void;
        setShowRevise: (v: string | null) => void;
        setShowWithdraw: (v: string | null) => void;
        setShowSubmitResponse: (v: AssigneeDetailView | null) => void;
        setShowSubmitReport: (v: AssigneeDetailView | null) => void;
        setShowAddAttachment: (v: boolean) => void;
        setShowSaveTemplate: (v: boolean) => void;
        setShowTemplateList: (v: boolean) => void;
        setShowLinkChatAttachment: (v: boolean) => void;
        setShowCreateNote: (v: 'shared' | 'personal' | null) => void;
      };
      showDetailMenu: boolean;
      setShowDetailMenu: (v: boolean) => void;
    }) {
      const d = detail;
      const m = modals;
      // チャットメッセージIDをキーに、申請状況を即時に参照する。
      const promotionByChatId = new Map(
        d.chat_attachment_promotions.map((promotion) => [
          promotion.chat_message_id,
          promotion,
        ]),
      );
      async function handleRequirementAccess(
        attachmentId: string,
        accessType: 'view' | 'download',
      ) {
        if (!d.my_assignment) return;
    
        // 資料の閲覧／DL記録を残した後、確認完了も連続で実行する。
        // confirmDoc 内で詳細と一覧が再読込されるため、
        // 必須資料をすべて確認すると完了操作も即時に有効化される。
        await nav.accessAtt(
          d.my_assignment.assignment_id,
          attachmentId,
          accessType,
        );
    
        await nav.confirmDoc(
          d.my_assignment.assignment_id,
          attachmentId,
        );
      }
    
      return (
        <section className="detail-mode">
          <button className="back-button" onClick={nav.closeTask}><ChevronLeft size={16} />一覧に戻る</button>
          <div className="detail-grid">
            {/* Left: task detail */}
            <div className="detail-panel panel">
              <div className="detail-top">
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  <span className="task-type-label shared">{TASK_TYPE_LABELS.shared}</span>
                  <span className={`status-pill ${BOARD_COLUMN_META[d.task.board_column].className}`}>{STATUS_LABELS[d.task.status]}</span>
                  {d.task.close_type && (
                    <span className={`status-pill ${d.task.close_type === 'forced' ? 'status-accept-return' : 'status-closed'}`}>
                      {CLOSE_TYPE_LABELS[d.task.close_type]}
                    </span>
                  )}
                </div>
                <div className="detail-menu-wrapper">
                  <button className="icon-btn" onClick={() => setShowDetailMenu(!showDetailMenu)}><MoreHorizontal size={18} /></button>
                  {showDetailMenu && (
                    <div className="detail-menu" onClick={(e) => e.stopPropagation()}>
                      {d.can_archive && (
                        <button className="detail-menu-item" onClick={() => { m.setShowArchive(true); setShowDetailMenu(false); }}>
                          <Archive size={14} />アーカイブする
                        </button>
                      )}
                      {d.can_save_template && (
                        <button className="detail-menu-item" onClick={() => { m.setShowSaveTemplate(true); setShowDetailMenu(false); }}>
                          <Bookmark size={14} />テンプレートとして保存
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <h2>{d.task.title || '（件名未設定）'}</h2>
              <p className="detail-description">{d.task.body || '（本文未設定）'}</p>
              <div className="detail-block"><span className="detail-label">目的</span><strong>{d.task.purpose}</strong></div>
              <div className="detail-block"><span className="detail-label">期限</span><strong className={d.task.badge === 'overdue' ? 'danger-text' : ''}>{d.task.due_label}</strong></div>
              <div className="detail-block"><span className="detail-label">作成者</span><strong>{d.task.created_by_name}</strong></div>
              {d.task.is_successor && <div className="detail-block"><span className="detail-label">後継者</span><strong>あなたは後継者です</strong></div>}
              <div className="detail-block">
                <span className="detail-label">対象者</span>
                <div className="people">
                  {d.task.assignees.slice(0, 3).map((a) => <div key={a.user_id} className={`avatar ${a.avatar_class}`}>{a.initials}</div>)}
                  {d.task.assignees.length > 3 && <span>+{d.task.assignees.length - 3}</span>}
                  <span>{d.task.completed_assignees}/{d.task.total_assignees}名が完了</span>
                </div>
              </div>
              <div className="detail-divider" />
              <div className="detail-section-title"><span>進捗状況</span><strong>{d.task.progress_percent}%</strong></div>
              <div className="detail-progress"><span style={{ width: `${d.task.progress_percent}%` }} /></div>
    
              {/* Close info */}
              {d.task.status === 'closed' && d.task.close_type === 'forced' && (
                <div className="detail-close-info">
                  <div className="detail-close-row"><span>終了種別</span><strong>強制終了</strong></div>
                  <div className="detail-close-row"><span>理由</span><strong>{d.task.close_reason ?? ''}</strong></div>
                  <div className="detail-close-row"><span>実行者</span><strong>{d.task.closed_by_name ?? ''}</strong></div>
                </div>
              )}
    
              {/* My requirements */}
              {d.my_assignment && d.my_assignment.requirements.length > 0 && (
                <div className="detail-req-list">
                  <p className="ops-label">確認必須資料</p>
                  {d.my_assignment.requirements.map((r) => (
                    <RequirementRow
                      key={r.attachment_id}
                      req={r}
                      onView={() => void handleRequirementAccess(r.attachment_id, 'view')}
                      onDownload={() => void handleRequirementAccess(r.attachment_id, 'download')}
                    />
                  ))}
                </div>
              )}
    
              {/* Creator publish button (draft only) */}
              {d.task.is_creator && d.task.status === 'draft' && (
                <div className="detail-ops">
                  {d.publish_errors.length > 0 && (
                    <div className="publish-errors">
                      <p className="ops-label">公開するために以下が必要です：</p>
                      {d.publish_errors.map((e, i) => <div key={i} className="publish-error-item"><AlertTriangle size={12} />{e}</div>)}
                    </div>
                  )}
                  <button className="action-btn primary" disabled={!d.can_publish} onClick={() => void nav.publishTask(d.task.id)}>
                    <Send size={14} />公開する
                  </button>
                </div>
              )}
    
              {/* Attachments section */}
              <div className="detail-divider" />
              <div className="detail-section-title"><span><FileText size={14} />関連資料</span><strong>{d.attachments.length}件</strong></div>
              <div className="attachment-list">
                {d.attachments.map((att) => (
                  <div key={att.id} className={`attachment-row ${att.is_withdrawn ? 'attachment-withdrawn' : ''}`}>
                    <div className="attachment-info">
                      <FileText size={15} />
                      <div>
                        <strong>{att.name}</strong>
                        <span className="attachment-meta">
                          {att.attachment_type_label} ・ 版{att.current_revision_no} ・ {att.uploaded_by_name} ・ {att.updated_at_label}{att.is_withdrawn ? ' ・ 撤回済み' : ''}
                        </span>
                      </div>
                    </div>
                    {d.task.is_creator && !att.is_withdrawn && (d.task.status === 'draft' || d.task.status === 'open') && (
                      <div className="attachment-actions">
                        <button className="mini-btn" onClick={() => m.setShowRevise(att.id)} title="改訂"><FileCheck size={13} />改訂</button>
                        <button className="mini-btn danger" onClick={() => m.setShowWithdraw(att.id)} title="撤回"><Ban size={13} />撤回</button>
                      </div>
                    )}
                  </div>
                ))}
                {d.attachments.length === 0 && <div className="note-empty">資料はありません</div>}
                {d.task.is_creator && (d.task.status === 'draft' || d.task.status === 'open') && (
                  <button className="action-btn secondary" onClick={() => m.setShowAddAttachment(true)}><Plus size={14} />資料を追加</button>
                )}
                {d.task.is_creator && (d.task.status === 'draft' || d.task.status === 'open') && taskChats.some((c) => c.attachment_filename) && (
                  <button className="link-chat-attachment-btn" onClick={() => m.setShowLinkChatAttachment(true)}><FileText size={12} />チャット添付から関連資料へ追加</button>
                )}
              </div>
    
              {/* History */}
              <div className="detail-divider" />
              <div className="detail-section-title"><span><History size={14} />操作履歴</span></div>
              <div className="history-list">
                {d.history.map((h) => <HistoryRow key={h.id} item={h} />)}
                {d.history.length === 0 && <div className="note-empty">履歴はありません</div>}
              </div>
            </div>
    
            {/* Right: ops panel */}
            <div className="ops-panel panel">
              {/* Upper: participant section */}
              <div className="panel-header">
                <div><h2>【参加者用】あなたの対応</h2><span className="muted-text">このタスクに対するご自身の進捗報告・確認操作を行います</span></div>
              </div>
              <div className="ops-body">
                {d.my_assignment ? (
                  <>
                    <div className="ops-meta">
                      <div className="ops-meta-row"><span>あなたの状況</span><strong>{progressLabel(d.task.purpose, d.my_assignment.progress_status)}</strong></div>
                      {d.my_assignment.eligibility_status !== 'eligible' && (
                        <div className="ops-meta-row"><span>対象状態</span><strong>{d.my_assignment.eligibility_status === 'exempted' ? '免除' : '対象外'}</strong></div>
                      )}
                    </div>
                    <div className="ops-divider" />
                    <p className="ops-label">あなたの操作</p>
                    <MyOperationButtons
                      task={d.task}
                      myAssignment={d.my_assignment}
                      onConfirm={() => void nav.confirmTask(d.my_assignment!.assignment_id)}
                      onSubmitResponse={() => m.setShowSubmitResponse(d.my_assignment!)}
                      onSubmitReport={() => m.setShowSubmitReport(d.my_assignment!)}
                    />
                  </>
                ) : (
                  <p className="ops-hint">あなたはこのタスクの対象者ではありません。</p>
                )}
              </div>
    
              {/* Lower: admin section (creator only) */}
              {d.task.is_creator && (
                <div className="ops-admin-section">
                  <div className="ops-divider" />
                  <div className="panel-header ops-admin-header">
                    <div><h3>【管理者用】審査・管理</h3><span className="muted-text">対象者の作業報告の承認・差戻し、および免除設定を行います</span></div>
                  </div>
                  <div className="ops-admin-body">
                    {d.task.status === 'draft' && (
                      <button className="action-btn primary" disabled={!d.can_publish} onClick={() => void nav.publishTask(d.task.id)}>
                        <Send size={14} />公開する
                      </button>
                    )}
                    {d.all_assignees.length > 0 && (
                      <div className="ops-admin-assignees">
                        {d.all_assignees.map((a) => (
                          <AssigneeProgressRow
                            key={a.assignment_id}
                            assignee={a}
                            purpose={d.task.purpose}
                            taskStatus={d.task.status}
                            isCreator={d.task.is_creator}
                            onAccept={(subId) => void nav.acceptWorkReport(subId)}
                            onReturn={(sub) => m.setShowReturn(sub)}
                            onExempt={() => m.setShowExempt(a)}
                            onOutOfScope={() => m.setShowExempt(a)}
                          />
                        ))}
                      </div>
                    )}
                    {d.chat_attachment_promotions.length > 0 && (
                      <div
                        style={{
                          marginTop: 18,
                          paddingTop: 14,
                          borderTop: '1px solid #eef1f3',
                        }}
                      >
                        <p className="ops-label">関連資料化申請</p>
    
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                          {d.chat_attachment_promotions.map((promotion) => (
                            <div
                              key={promotion.id}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: 10,
                                padding: '9px 10px',
                                background: '#f7f9fa',
                                borderRadius: 6,
                              }}
                            >
                              <div style={{ minWidth: 0 }}>
                                <strong
                                  style={{
                                    display: 'block',
                                    color: '#3a4e5e',
                                    fontSize: 11,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                  }}
                                >
                                  <FileText
                                    size={12}
                                    style={{
                                      verticalAlign: 'text-bottom',
                                      marginRight: 4,
                                    }}
                                  />
                                  {promotion.attachment_filename}
                                </strong>
    
                                <small style={{ color: '#7e8c97', fontSize: 10 }}>
                                  申請者：{promotion.requested_by_name}
                                  {' ・ '}
                                  {promotion.status === 'pending' ? '申請中' : '許可済み'}
                                </small>
                              </div>
    
                              {promotion.status === 'pending' ? (
                                <button
                                  type="button"
                                  className="mini-btn"
                                  onClick={() => void nav.approveChatAttachmentPromotion(promotion.id)}
                                >
                                  <Check size={12} />
                                  許可
                                </button>
                              ) : (
                                <span style={{ color: '#6f8c78', fontSize: 10 }}>
                                  許可済み
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {d.task.status === 'open' && (
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          marginTop: 18,
                          paddingTop: 14,
                          borderTop: '1px solid #eef1f3',
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => m.setShowForceClose(true)}
                          title="未完了の対象者や未確認資料が残っていてもタスクを終了します"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 5,
                            padding: '6px 10px',
                            border: '1px solid #e5cbc7',
                            borderRadius: 5,
                            background: 'transparent',
                            color: '#a86a62',
                            fontSize: 11,
                            cursor: 'pointer',
                          }}
                        >
                          <Lock size={12} />
                          強制終了
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
    
          {/* Dock: 4 tabs */}
          <div className={`chat-dock ${chatOpen ? 'chat-dock-open' : ''}`}>
            <div className="dock-tabs">
              <button className={`dock-tab ${chatOpen && dockPanel === 'chat' ? 'dock-tab-active' : ''}`} onClick={() => { setDockPanel('chat'); setChatOpen(true); }}>
                <MessageSquare size={16} /><span className="chat-dock-tab-label">チャット</span>
                {taskChats.length > 0 && <small className="chat-dock-tab-count">{taskChats.length}</small>}
              </button>
              <button className={`dock-tab ${chatOpen && dockPanel === 'shared_note' ? 'dock-tab-active' : ''}`} onClick={() => { setDockPanel('shared_note'); setChatOpen(true); }}>
                <StickyNote size={16} /><span className="chat-dock-tab-label">共有ノート</span>
                {taskSharedNotes.length > 0 && <small className="chat-dock-tab-count">{taskSharedNotes.length}</small>}
              </button>
              <button className={`dock-tab ${chatOpen && dockPanel === 'personal_note' ? 'dock-tab-active' : ''}`} onClick={() => { setDockPanel('personal_note'); setChatOpen(true); }}>
                <BookOpen size={16} /><span className="chat-dock-tab-label">個人ノート</span>
                {taskPersonalNotes.length > 0 && <small className="chat-dock-tab-count">{taskPersonalNotes.length}</small>}
              </button>
              <button className={`dock-tab ${chatOpen && dockPanel === 'todo' ? 'dock-tab-active' : ''}`} onClick={() => { setDockPanel('todo'); setChatOpen(true); }}>
                <ListChecks size={16} /><span className="chat-dock-tab-label">TODO</span>
                {taskTodos.length > 0 && <small className="chat-dock-tab-count">{taskTodos.length}</small>}
              </button>
            </div>
            <div className="chat-dock-body panel">
              {dockPanel === 'chat' ? (
                <>
                  <div className="chat-header">
                    <div><strong>タスクチャット</strong><span className="muted-text">関係者とのやり取り</span></div>
                    <div className="chat-header-actions">
                      <button className={`icon-btn ${chatSearchOpen ? 'chat-tool-active' : ''}`} onClick={() => setChatSearchOpen(!chatSearchOpen)} aria-label="検索"><Search size={16} /></button>
                      <button className="icon-btn" onClick={() => setChatOpen(false)} aria-label="閉じる"><X size={16} /></button>
                    </div>
                  </div>
                  {chatSearchOpen && <div className="chat-search-row"><Search size={14} /><input autoFocus value={chatSearch} onChange={(e) => setChatSearch(e.target.value)} placeholder="メッセージを検索" /></div>}
                  <div className="chat-messages">
                    {taskChats.length === 0 && <div className="chat-empty">まだメッセージはありません。</div>}
                    {taskChats.filter((msg) => !chatSearch || `${msg.author} ${msg.text}`.toLowerCase().includes(chatSearch.toLowerCase())).map((message) => (
                      <div key={message.id} className={`chat-message ${message.mine ? 'chat-message-mine' : ''}`}>
                        {!message.mine && <div className={`avatar ${message.avatar_class}`}>{message.initials}</div>}
                        <div className="chat-bubble">
                          {!message.mine && <span className="chat-author">{message.author}</span>}
                          <p>{message.text}</p>
                          {message.attachment_filename && (
                            <div className="chat-attachment-display">
                              <FileText size={11} />
                              {message.attachment_filename}
    
                              {(() => {
                                const promotion = promotionByChatId.get(message.id);
    
                                if (d.task.is_creator) {
                                  return (
                                    <button
                                      type="button"
                                      className="mini-btn"
                                      style={{
                                        marginLeft: 8,
                                        padding: '3px 7px',
                                        fontSize: 10,
                                      }}
                                      disabled={promotion?.status === 'approved'}
                                      onClick={() => void nav.addChatAttachmentAsReference(message.id)}
                                    >
                                      <Plus size={11} />
                                      関連資料に追加
                                    </button>
                                  );
                                }
    
                                if (promotion?.status === 'approved') {
                                  return (
                                    <small style={{ marginLeft: 8, color: '#6f8c78' }}>
                                      関連資料化済み
                                    </small>
                                  );
                                }
    
                                if (promotion?.status === 'pending') {
                                  return (
                                    <small style={{ marginLeft: 8, color: '#9a7b3a' }}>
                                      申請中
                                    </small>
                                  );
                                }
    
                                return (
                                  <button
                                    type="button"
                                    className="mini-btn"
                                    style={{
                                      marginLeft: 8,
                                      padding: '3px 7px',
                                      fontSize: 10,
                                    }}
                                    onClick={() => void nav.requestChatAttachmentPromotion(message.id)}
                                  >
                                    <Send size={11} />
                                    関連資料化を申請
                                  </button>
                                );
                              })()}
                            </div>
                          )}
                          <time>{message.time_label}</time>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="chat-input-area">
                    <label className="chat-attach" htmlFor="chat-file-input" aria-label="ファイルを添付"><Plus size={17} /></label>
                    <input id="chat-file-input" className="chat-file-input" type="file" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx" onChange={(e) => attachFile(e.target.files?.[0])} />
                    <div className="chat-compose">
                      {attachmentName && <span className="attachment-chip" title={attachmentName}>{attachmentName}<button type="button" onClick={() => setAttachmentName('')}><X size={11} /></button></span>}
                      <input value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendChat()} placeholder="メッセージを入力..." />
                    </div>
                    <button className="chat-send" onClick={sendChat} disabled={!chatInput.trim()}><Send size={15} /></button>
                  </div>
                </>
              ) : dockPanel === 'shared_note' ? (
                <SharedNotePanel
                  notes={taskSharedNotes}
                  onDelete={(id) => void nav.deleteNote(id)}
                  onToggleFavorite={(id) => void nav.toggleNoteFavorite(id)}
                  onClose={() => setChatOpen(false)}
                  onOpenCreate={() => m.setShowCreateNote('shared')}
                />
              ) : dockPanel === 'personal_note' ? (
                <PersonalNotePanel
                  notes={taskPersonalNotes}
                  onDelete={(id) => void nav.deleteNote(id)}
                  onClose={() => setChatOpen(false)}
                  onOpenCreate={() => m.setShowCreateNote('personal')}
                />
              ) : (
                <>
                  <div className="chat-header">
                    <div><strong>個人TODO</strong><span className="muted-text">このタスクの個人TODO</span></div>
                    <button className="icon-btn" onClick={() => setChatOpen(false)} aria-label="閉じる"><X size={16} /></button>
                  </div>
                  <div className="note-scroll">
                    <div className="note-section">
                      <div className="todo-list">
                        {taskTodos.map((t) => (
                          <div key={t.id} className={`todo-item ${t.done ? 'todo-done' : ''}`}>
                            <button className="todo-check" onClick={() => void nav.toggleTodo(t.id)}>{t.done && <Check size={12} />}</button>
                            <span>{t.text}</span>
                            <button className="todo-delete" onClick={() => void nav.deleteTodo(t.id)}><Trash2 size={12} /></button>
                          </div>
                        ))}
                        {taskTodos.length === 0 && <div className="note-empty">TODOがありません</div>}
                      </div>
                      <div className="note-add-row">
                        <input value={todoInput} onChange={(e) => setTodoInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addTodo()} placeholder="TODOを追加..." />
                        <button className="note-add-btn" onClick={addTodo} disabled={!todoInput.trim()}><Plus size={15} /></button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      );
    }
    
    // ──────────────────────────────────────────────
    // Personal Task Detail
    // ──────────────────────────────────────────────
    
    function PersonalTaskModal({
      detail,
      nav,
      onClose,
      showDelete,
      setShowDelete,
      showStart,
      setShowStart,
      showComplete,
      setShowComplete,
      personalAttachmentName,
      setPersonalAttachmentName,
    }: {
      detail: PersonalTaskDetailView;
      nav: ReturnType<typeof useTaskNavi>;
      onClose: () => void;
      showDelete: boolean;
      setShowDelete: (v: boolean) => void;
      showStart: boolean;
      setShowStart: (v: boolean) => void;
      showComplete: boolean;
      setShowComplete: (v: boolean) => void;
      personalAttachmentName: string;
      setPersonalAttachmentName: (v: string) => void;
    }) {
      const d = detail;
      const [editingTitle, setEditingTitle] = useState(false);
      const [titleDraft, setTitleDraft] = useState(d.task.title);
      const [editingBody, setEditingBody] = useState(false);
      const [bodyDraft, setBodyDraft] = useState(d.task.body);
      const [editingDue, setEditingDue] = useState(false);
      const [dueDraft, setDueDraft] = useState(
        d.task.due_at ? d.task.due_at.slice(0, 10) : '',
      );
    
      function saveTitle() {
        void nav.updatePersonalTask(d.task.id, { title: titleDraft.trim() });
        setEditingTitle(false);
      }
    
      function saveBody() {
        void nav.updatePersonalTask(d.task.id, { body: bodyDraft.trim() });
        setEditingBody(false);
      }
    
      function saveDue() {
        void nav.updatePersonalTask(d.task.id, {
          due_at: dueDraft ? new Date(dueDraft).toISOString() : null,
        });
        setEditingDue(false);
      }
    
      function addAttachment() {
        const name = personalAttachmentName.trim();
        if (!name) return;
    
        void nav.addPersonalAttachment(d.task.id, name);
        setPersonalAttachmentName('');
      }
    
      const projectLabel = d.task.related_project_name
        ? (
          d.task.related_project_accessible
            ? d.task.related_project_name
            : PERSONAL_PROJECT_INACCESSIBLE
        )
        : PERSONAL_PROJECT_NO_SELECTION;
    
      return (
        <div className="modal-backdrop" onMouseDown={onClose}>
          <div
            className="create-modal"
            onMouseDown={(event) => event.stopPropagation()}
            style={{
              width: 'min(760px, calc(100vw - 64px))',
              maxWidth: 760,
              maxHeight: 'calc(100vh - 48px)',
              overflowY: 'auto',
              padding: 0,
            }}
          >
            <div
              className="modal-header"
              style={{
                position: 'sticky',
                top: 0,
                zIndex: 2,
                background: '#fff',
                padding: '20px 24px 16px',
                borderBottom: '1px solid #eef1f3',
              }}
            >
              <div>
                <span className="eyebrow">個人タスク詳細</span>
                <h2 style={{ marginTop: 4 }}>個人タスク</h2>
              </div>
    
              <button className="icon-btn" onClick={onClose} aria-label="閉じる">
                <X size={19} />
              </button>
            </div>
    
            <div
              className="personal-detail-panel"
              style={{
                padding: 24,
                background: '#fff',
              }}
            >
              <div className="personal-detail-top">
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  <span className="task-type-label personal">
                    {TASK_TYPE_LABELS.personal}
                  </span>
    
                  <span
                    className={`status-pill ${
                      PERSONAL_BOARD_COLUMN_META[d.task.board_column].className
                    }`}
                  >
                    {d.task.status_label}
                  </span>
    
                  {d.task.is_overdue && d.task.status === 'open' && (
                    <span className="badge overdue">期限超過</span>
                  )}
                </div>
              </div>
    
              {editingTitle && d.can_edit_title ? (
                <div style={{ margin: '16px 0 10px' }}>
                  <input
                    className="personal-project-select"
                    value={titleDraft}
                    onChange={(event) => setTitleDraft(event.target.value)}
                    autoFocus
                  />
    
                  <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
                    <button
                      className="action-btn primary"
                      style={{ width: 'auto', padding: '6px 14px' }}
                      onClick={saveTitle}
                    >
                      保存
                    </button>
    
                    <button
                      className="action-btn secondary"
                      style={{ width: 'auto', padding: '6px 14px', margin: 0 }}
                      onClick={() => {
                        setEditingTitle(false);
                        setTitleDraft(d.task.title);
                      }}
                    >
                      キャンセル
                    </button>
                  </div>
                </div>
              ) : (
                <h2
                  onClick={() => d.can_edit_title && setEditingTitle(true)}
                  style={{
                    marginTop: 16,
                    cursor: d.can_edit_title ? 'pointer' : 'default',
                  }}
                >
                  {d.task.title || '（件名未設定）'}
                </h2>
              )}
    
              {editingBody && d.can_edit_body ? (
                <div style={{ marginBottom: 16 }}>
                  <textarea
                    className="personal-project-select"
                    style={{ minHeight: 80, resize: 'vertical' }}
                    value={bodyDraft}
                    onChange={(event) => setBodyDraft(event.target.value)}
                    autoFocus
                    rows={4}
                  />
    
                  <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
                    <button
                      className="action-btn primary"
                      style={{ width: 'auto', padding: '6px 14px' }}
                      onClick={saveBody}
                    >
                      保存
                    </button>
    
                    <button
                      className="action-btn secondary"
                      style={{ width: 'auto', padding: '6px 14px', margin: 0 }}
                      onClick={() => {
                        setEditingBody(false);
                        setBodyDraft(d.task.body);
                      }}
                    >
                      キャンセル
                    </button>
                  </div>
                </div>
              ) : (
                <p
                  className="personal-detail-desc"
                  onClick={() => d.can_edit_body && setEditingBody(true)}
                  style={{
                    cursor: d.can_edit_body ? 'pointer' : 'default',
                  }}
                >
                  {d.task.body || '（本文未設定）'}
                </p>
              )}
    
              <div className="detail-block">
                <span className="detail-label">ステータス</span>
                <strong>{d.task.status_label}</strong>
              </div>
    
              <div className="detail-block">
                <span className="detail-label">関連プロジェクト</span>
                <strong>{projectLabel}</strong>
              </div>
    
              <div className="detail-block">
                <span className="detail-label">期限</span>
    
                {editingDue && d.can_edit_due ? (
                  <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                    <input
                      type="date"
                      className="personal-project-select"
                      style={{ width: 'auto' }}
                      value={dueDraft}
                      onChange={(event) => setDueDraft(event.target.value)}
                    />
    
                    <button
                      className="action-btn primary"
                      style={{
                        width: 'auto',
                        padding: '4px 10px',
                        fontSize: 10,
                      }}
                      onClick={saveDue}
                    >
                      保存
                    </button>
    
                    <button
                      className="action-btn secondary"
                      style={{
                        width: 'auto',
                        padding: '4px 10px',
                        margin: 0,
                        fontSize: 10,
                      }}
                      onClick={() => setEditingDue(false)}
                    >
                      キャンセル
                    </button>
                  </div>
                ) : (
                  <strong
                    className={d.task.is_overdue ? 'danger-text' : ''}
                    onClick={() => d.can_edit_due && setEditingDue(true)}
                    style={{
                      cursor: d.can_edit_due ? 'pointer' : 'default',
                    }}
                  >
                    {d.task.due_label || '期限なし'}
                  </strong>
                )}
              </div>
    
              <div className="detail-divider" />
    
              <div className="detail-section-title">
                <span>
                  <FileText size={14} />
                  添付資料
                </span>
                <strong>{d.task.attachments.length}件</strong>
              </div>
    
              <div className="personal-attachment-list">
                {d.task.attachments.map((attachment) => (
                  <div key={attachment.id} className="attachment-row">
                    <div className="attachment-info">
                      <FileText size={15} />
                      <div>
                        <strong>{attachment.display_name}</strong>
                      </div>
                    </div>
    
                    {d.can_delete_attachment && (
                      <div className="attachment-actions">
                        <button
                          className="mini-btn danger"
                          onClick={() => void nav.removePersonalAttachment(attachment.id)}
                        >
                          <Trash2 size={12} />
                          削除
                        </button>
                      </div>
                    )}
                  </div>
                ))}
    
                {d.task.attachments.length === 0 && (
                  <div className="note-empty">資料はありません</div>
                )}
    
                {d.can_add_attachment && (
                  <div className="personal-attachment-add">
                    <input
                      value={personalAttachmentName}
                      onChange={(event) => setPersonalAttachmentName(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter') addAttachment();
                      }}
                      placeholder="資料名を入力..."
                    />
    
                    <button
                      className="action-btn primary"
                      style={{
                        width: 'auto',
                        padding: '8px 14px',
                        margin: 0,
                      }}
                      disabled={!personalAttachmentName.trim()}
                      onClick={addAttachment}
                    >
                      <Plus size={14} />
                      追加
                    </button>
                  </div>
                )}
              </div>
    
              <div className="detail-divider" />
    
              {/* 下部アクションは横並びでコンパクトに表示 */}
              <div
                className="detail-ops"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                {d.task.status === 'draft' && (
                  <>
                    {d.start_errors.length > 0 && (
                      <div
                        className="publish-errors"
                        style={{ width: '100%', marginBottom: 4 }}
                      >
                        {d.start_errors.map((error, index) => (
                          <div key={index} className="publish-error-item">
                            <AlertTriangle size={12} />
                            {error}
                          </div>
                        ))}
                      </div>
                    )}
    
                    <button
                      className="action-btn primary"
                      disabled={!d.can_start || d.start_errors.length > 0}
                      style={{
                        width: 'auto',
                        margin: 0,
                        padding: '8px 14px',
                      }}
                      onClick={() => setShowStart(true)}
                    >
                      <Send size={14} />
                      開始する
                    </button>
                  </>
                )}
    
                {d.task.status === 'open' && d.can_complete && (
                  <button
                    className="action-btn primary"
                    style={{
                      width: 'auto',
                      margin: 0,
                      padding: '8px 14px',
                    }}
                    onClick={() => setShowComplete(true)}
                  >
                    <Check size={14} />
                    完了してアーカイブ
                  </button>
                )}
    
                {d.can_delete && (
                  <button
                    type="button"
                    onClick={() => setShowDelete(true)}
                    style={{
                      width: 'auto',
                      margin: 0,
                      padding: '8px 10px',
                      border: '1px solid transparent',
                      borderRadius: 6,
                      background: 'transparent',
                      color: '#c2756a',
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    <Trash2
                      size={14}
                      style={{ verticalAlign: 'text-bottom', marginRight: 4 }}
                    />
                    削除する
                  </button>
                )}
              </div>
    
              <div className="detail-footer">
                <span>
                  <FileText size={11} />
                  作成日：{new Date(d.task.created_at).toLocaleDateString('ja-JP')}
                </span>
    
                {d.task.started_at && (
                  <span>
                    <Check size={11} />
                    開始日：{new Date(d.task.started_at).toLocaleDateString('ja-JP')}
                  </span>
                )}
    
                {d.task.archived_at && (
                  <span>
                    <Archive size={11} />
                    アーカイブ日：
                    {new Date(d.task.archived_at).toLocaleDateString('ja-JP')}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    // ──────────────────────────────────────────────
    // Assignee Progress Row
    // ──────────────────────────────────────────────
    
    function AssigneeProgressRow({ assignee, purpose, taskStatus, isCreator, onAccept, onReturn, onExempt, onOutOfScope }: {
      assignee: AssigneeDetailView;
      purpose: TaskPurpose;
      taskStatus: string;
      isCreator: boolean;
      onAccept: (subId: string) => void;
      onReturn: (sub: SubmissionView) => void;
      onExempt: () => void;
      onOutOfScope: () => void;
    }) {
      const latestSub = assignee.submissions[assignee.submissions.length - 1];
      return (
        <div className="assignee-progress-row">
          <div className={`avatar ${assignee.avatar_class}`}>{assignee.initials}</div>
          <span>{assignee.name}</span>
          <span className={`progress-pill ${assignee.progress_status}`}>{progressLabel(purpose, assignee.progress_status)}</span>
          {assignee.eligibility_status !== 'eligible' && (
            <span className="progress-pill" style={{ color: '#9aa6b0', background: '#eef2f5' }}>
              {assignee.eligibility_status === 'exempted' ? '免除' : '対象外'}
            </span>
          )}
          {isCreator && taskStatus === 'open' && latestSub && latestSub.submission_status === 'submitted' && latestSub.submission_type === 'work_report' && (
            <div className="assignee-ops">
              <button className="mini-btn" onClick={() => onAccept(latestSub.id)}>受領する</button>
              <button className="mini-btn danger" onClick={() => onReturn(latestSub)}>差戻す</button>
            </div>
          )}
          {isCreator && taskStatus === 'open' && assignee.is_eligible_active && (
            <div className="assignee-ops">
              <button className="mini-btn" onClick={onExempt}><UserX size={11} />免除</button>
              <button className="mini-btn" onClick={onOutOfScope}><UserX size={11} />対象外</button>
            </div>
          )}
        </div>
      );
    }
    
    function RequirementRow({
      req,
      onView,
      onDownload,
    }: {
      req: RequirementView;
      onView: () => void;
      onDownload: () => void;
    }) {
      return (
        <div className="req-row">
          <div className="req-info">
            <FileText size={14} />
    
            <div>
              <strong>{req.attachment_name}</strong>
    
              <span className="req-meta">
                必要版：v{req.required_revision_no}
                {req.accessed_revision_no
                  ? ` ・ 閲覧版：v${req.accessed_revision_no}`
                  : ''}
                {' ・ '}
                {REQUIREMENT_STATUS_LABELS[req.requirement_status]}
              </span>
            </div>
          </div>
    
          {req.requirement_status === 'required' && (
            <div className="req-actions">
              <button className="mini-btn" onClick={onView}>
                <Eye size={12} />
                閲覧
              </button>
    
              <button className="mini-btn" onClick={onDownload}>
                <Download size={12} />
                DL
              </button>
            </div>
          )}
        </div>
      );
    }
    
    function MyOperationButtons({ task, myAssignment, onConfirm, onSubmitResponse, onSubmitReport }: {
      task: { purpose: TaskPurpose; status: string };
      myAssignment: AssigneeDetailView;
      onConfirm: () => void;
      onSubmitResponse: () => void;
      onSubmitReport: () => void;
    }) {
      const purpose = task.purpose;
      const progress = myAssignment.progress_status;
      const hasPendingReqs = myAssignment.requirements.some((r) => r.requirement_status === 'required');
      const hasRequirements = myAssignment.requirements.length > 0;
      const showButtons = (purpose === '確認・判断依頼' || purpose === '周知・意見聴取') && progress === 'pending'
        || purpose === '回答・申込受付' && progress === 'pending'
        || purpose === '作業依頼' && (progress === 'pending' || progress === 'returned');
      return (
        <div className="detail-ops">
          {hasRequirements && showButtons && (
            <div className={`ops-doc-condition ${hasPendingReqs ? '' : 'met'}`}>
              <AlertTriangle size={13} />
              {hasPendingReqs ? '未確認（完了条件を満たしていません）' : '完了条件を満たしています'}
            </div>
          )}
          {(purpose === '確認・判断依頼' || purpose === '周知・意見聴取') && progress === 'pending' && (
            <button className={`action-btn primary ${hasPendingReqs ? 'doc-locked' : ''}`} disabled={hasPendingReqs} onClick={onConfirm} title={hasPendingReqs ? '確認必須資料をすべて確認してください' : ''}>
              <FileCheck size={14} />確認完了にする
            </button>
          )}
          {purpose === '回答・申込受付' && progress === 'pending' && (
            <button className={`action-btn primary ${hasPendingReqs ? 'doc-locked' : ''}`} disabled={hasPendingReqs} onClick={onSubmitResponse} title={hasPendingReqs ? '確認必須資料をすべて確認してください' : ''}>
              <Send size={14} />回答を提出する
            </button>
          )}
          {purpose === '作業依頼' && (progress === 'pending' || progress === 'returned') && (
            <button className={`action-btn primary ${hasPendingReqs ? 'doc-locked' : ''}`} disabled={hasPendingReqs} onClick={onSubmitReport} title={hasPendingReqs ? '確認必須資料をすべて確認してください' : ''}>
              <Send size={14} />作業報告を提出する
            </button>
          )}
          {progress === 'reported' && purpose === '作業依頼' && <span className="ops-hint">受領待ちです。作成者の受領をお待ちください。</span>}
          {progress === 'accepted' && <span className="ops-hint">受領済みです。</span>}
          {progress === 'confirmed' && <span className="ops-hint">確認済みです。</span>}
        </div>
      );
    }
    
    // ──────────────────────────────────────────────
    // Note Panels (shared / personal)
    // ──────────────────────────────────────────────
    
    function SharedNotePanel({
      notes,
      onDelete,
      onToggleFavorite,
      onClose,
      onOpenCreate,
    }: {
      notes: { id: string; text: string; color: string; attachment_filename: string | null; is_favorited: boolean }[];
      onDelete: (id: string) => void;
      onToggleFavorite: (id: string) => void;
      onClose: () => void;
      onOpenCreate: () => void;
    }) {
      return (
        <div className="note-panel">
          <div className="chat-header">
            <div>
              <strong>共有ノート</strong>
              <span className="muted-text">タスクの関係者に共有されます</span>
            </div>
            <button className="icon-btn" onClick={onClose} aria-label="閉じる">
              <X size={16} />
            </button>
          </div>
    
          <div className="note-scroll">
            <div className="note-section">
              <div
                className="note-section-title"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <StickyNote size={14} />
                  共有ノート
                </span>
    
                <button
                  type="button"
                  className="action-btn primary"
                  style={{
                    width: 'auto',
                    margin: 0,
                    padding: '7px 11px',
                    fontSize: 11,
                  }}
                  onClick={onOpenCreate}
                >
                  <Plus size={13} />
                  ノートを追加
                </button>
              </div>
    
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  marginTop: 12,
                }}
              >
                {notes.map((note) => (
                  <div
                    key={note.id}
                    className={`note-card ${note.color}`}
                    style={{ width: '100%' }}
                  >
                    <p>{note.text}</p>
    
                    {note.attachment_filename && (
                      <div className="note-card-attachment">
                        <FileText size={11} />
                        {note.attachment_filename}
                      </div>
                    )}
    
                    <div className="note-card-actions">
                      <button
                        className={`note-card-fav ${note.is_favorited ? 'note-card-fav-active' : ''}`}
                        onClick={() => onToggleFavorite(note.id)}
                        title={note.is_favorited ? 'お気に入り解除' : 'お気に入り登録'}
                      >
                        <Star size={12} />
                      </button>
    
                      <button
                        className="note-card-delete"
                        onClick={() => onDelete(note.id)}
                        title="削除"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </div>
                ))}
    
                {notes.length === 0 && (
                  <div className="note-empty">共有ノートがありません</div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    function PersonalNotePanel({
      notes,
      onDelete,
      onClose,
      onOpenCreate,
    }: {
      notes: { id: string; text: string; color: string; attachment_filename: string | null }[];
      onDelete: (id: string) => void;
      onClose: () => void;
      onOpenCreate: () => void;
    }) {
      return (
        <div className="note-panel">
          <div className="chat-header">
            <div>
              <strong>個人ノート</strong>
              <span className="muted-text">自分だけに表示されます</span>
            </div>
            <button className="icon-btn" onClick={onClose} aria-label="閉じる">
              <X size={16} />
            </button>
          </div>
    
          <div className="note-scroll">
            <div className="note-section">
              <div
                className="note-section-title"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <BookOpen size={14} />
                  個人ノート
                </span>
    
                <button
                  type="button"
                  className="action-btn primary"
                  style={{
                    width: 'auto',
                    margin: 0,
                    padding: '7px 11px',
                    fontSize: 11,
                  }}
                  onClick={onOpenCreate}
                >
                  <Plus size={13} />
                  ノートを追加
                </button>
              </div>
    
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  marginTop: 12,
                }}
              >
                {notes.map((note) => (
                  <div
                    key={note.id}
                    className={`note-card ${note.color}`}
                    style={{ width: '100%' }}
                  >
                    <p>{note.text}</p>
    
                    {note.attachment_filename && (
                      <div className="note-card-attachment">
                        <FileText size={11} />
                        {note.attachment_filename}
                      </div>
                    )}
    
                    <button
                      className="note-card-delete"
                      onClick={() => onDelete(note.id)}
                      title="削除"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                ))}
    
                {notes.length === 0 && (
                  <div className="note-empty">個人ノートがありません</div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    // ──────────────────────────────────────────────
    // Modals
    // ──────────────────────────────────────────────
    
    
    function NoteCreateModal({
      visibility,
      onClose,
      onAdd,
    }: {
      visibility: 'shared' | 'personal';
      onClose: () => void;
      onAdd: (text: string) => Promise<void>;
    }) {
      const [text, setText] = useState('');
      const [saving, setSaving] = useState(false);
      const cannotAdd = !text.trim() || saving;
    
      async function handleAdd() {
        if (cannotAdd) return;
    
        setSaving(true);
    
        try {
          await onAdd(text.trim());
        } finally {
          setSaving(false);
        }
      }
    
      const title = visibility === 'shared'
        ? '共有ノートを追加'
        : '個人ノートを追加';
    
      const helper = visibility === 'shared'
        ? 'このノートはタスクの関係者に共有されます。'
        : 'このノートは自分だけに表示されます。';
    
      return (
        <div className="modal-backdrop" onMouseDown={onClose}>
          <div className="create-modal" onMouseDown={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="eyebrow">ノート</span>
                <h2>{title}</h2>
              </div>
    
              <button className="icon-btn" onClick={onClose} aria-label="閉じる">
                <X size={19} />
              </button>
            </div>
    
            <label className="create-field">
              <span>内容</span>
              <textarea
                autoFocus
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder="ノートを入力してください..."
                rows={5}
              />
            </label>
    
            <div className="modal-note">
              <StickyNote size={16} />
              <span>{helper}</span>
            </div>
    
            <div className="modal-actions">
              <button
                className="secondary-button"
                disabled={saving}
                onClick={onClose}
              >
                キャンセル
              </button>
    
              <button
                className="primary-button"
                disabled={cannotAdd}
                style={executionButtonStyle(cannotAdd)}
                onClick={() => void handleAdd()}
              >
                <Plus size={15} />
                追加
              </button>
            </div>
          </div>
        </div>
      );
    }
    function CreateModal({ nav, onClose, projectMembers, projectName }: {
      nav: ReturnType<typeof useTaskNavi>;
      onClose: () => void;
      projectMembers: UserView[];
      projectName: string;
    }) {
      const [selectedTemplateId, setSelectedTemplateId] = useState('');
      const [purpose, setPurpose] = useState<TaskPurpose>('作業依頼');
      const [title, setTitle] = useState('');
      const [body, setBody] = useState('');
      const [dueDate, setDueDate] = useState('');
      const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
      const [dateError, setDateError] = useState('');
      const today = todayLocalDate();
    
      // 同じIDのプロジェクトメンバーは1人だけ描画する。
      const uniqueProjectMembers = useMemo(
        () => [...new Map(projectMembers.map((member) => [member.id, member])).values()],
        [projectMembers],
      );
    
      const canPublish =
        title.trim().length > 0
        && selectedMembers.length > 0
        && !dateError
        && (!dueDate || dueDate >= today);
    
      function toggleMember(id: string) {
        setSelectedMembers((prev) =>
          prev.includes(id)
            ? prev.filter((memberId) => memberId !== id)
            : [...prev, id],
        );
      }
    
      function handleTemplateChange(templateId: string) {
        setSelectedTemplateId(templateId);
    
        if (!templateId) return;
    
        const template = nav.templates.find((item) => item.id === templateId);
        if (!template) return;
    
        // テンプレートを適用してもモーダルは閉じず、
        // 目的・件名・本文だけを即時上書きする。
        setPurpose(template.purpose);
        setTitle(template.title_template ?? '');
        setBody(template.body_template ?? '');
      }
    
      function handleDateChange(value: string) {
        setDueDate(value);
        setDateError(value && value < today ? '過去の日付は設定できません' : '');
      }
    
      async function handleSubmit(publish: boolean) {
        if (dueDate && dueDate < today) {
          setDateError('過去の日付は設定できません');
          return;
        }
    
        if (publish && !canPublish) return;
    
        await nav.createTask({
          purpose,
          title: title.trim(),
          body: body.trim(),
          due_at: dueDate ? new Date(dueDate).toISOString() : null,
          assignee_user_ids: selectedMembers,
          publish,
          successor_user_id: null,
        });
    
        nav.setMyTasksFilter('all');
        nav.setTaskTypeFilter('all');
        nav.setPage(1);
        nav.setViewMode('list');
        nav.navigateTo('my_tasks');
    
        onClose();
      }
    
      return (
        <div className="modal-backdrop" onMouseDown={onClose}>
          <div className="create-modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="eyebrow">新しい共有タスク</span>
                <h2>共有タスクを作成</h2>
              </div>
              <button className="icon-btn" onClick={onClose}>
                <X size={19} />
              </button>
            </div>
    
            <div className="create-field-group">
              <label className="create-field">
                <span>テンプレートを適用（任意）</span>
                <select value={selectedTemplateId} onChange={(e) => handleTemplateChange(e.target.value)}>
                  <option value="">テンプレートを選択してください</option>
                  {nav.templates.map((template) => (
                    <option key={template.id} value={template.id}>
                      {template.name}
                    </option>
                  ))}
                </select>
              </label>
    
              <label className="create-field">
                <span>対象プロジェクト</span>
                <div className="project-display">{projectName}</div>
              </label>
    
              <label className="create-field">
                <span>目的</span>
                <select value={purpose} onChange={(e) => setPurpose(e.target.value as TaskPurpose)}>
                  {PURPOSE_OPTIONS.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
    
              <label className="create-field">
                <span>件名</span>
                <input
                  autoFocus
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="例：資料の最終確認をする"
                />
              </label>
    
              <label className="create-field">
                <span>本文</span>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="タスクの詳細を入力..."
                  rows={3}
                />
              </label>
    
              <label className="create-field">
                <span>期限</span>
                <input
                  type="date"
                  min={today}
                  value={dueDate}
                  onChange={(e) => handleDateChange(e.target.value)}
                />
              </label>
    
              {dateError && <span className="date-error">{dateError}</span>}
    
              <div className="create-field">
                <span>対象者</span>
                <div className="member-select-grid">
                  {uniqueProjectMembers.map((member) => (
                    <button
                      key={member.id}
                      className={`member-chip ${selectedMembers.includes(member.id) ? 'member-selected' : ''}`}
                      onClick={() => toggleMember(member.id)}
                    >
                      <Check size={12} />
                      {member.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
    
            <div className="modal-note">
              <ShieldCheck size={16} />
              <span>下書き保存は未入力でも可能です。公開には件名および対象者の指定が必要です。</span>
            </div>
    
            <div className="modal-actions">
              <button
                className="primary-button"
                disabled={!canPublish}
                onClick={() => handleSubmit(true)}
              >
                <Send size={15} />
                公開
              </button>
    
              <button
                className="secondary-button"
                disabled={false}
                onClick={() => handleSubmit(false)}
              >
                下書き保存
              </button>
    
              <button className="secondary-button" onClick={onClose}>
                キャンセル
              </button>
            </div>
          </div>
        </div>
      );
    }
    function CreatePersonalModal({ nav, onClose }: {
      nav: ReturnType<typeof useTaskNavi>;
      onClose: () => void;
    }) {
      const [title, setTitle] = useState('');
      const [body, setBody] = useState('');
      const [relatedProjectId, setRelatedProjectId] = useState<string>('');
      const [dueDate, setDueDate] = useState('');
      const [dateError, setDateError] = useState('');
      const today = todayLocalDate();
    
      const availableProjects = nav.projects.filter(
        (project) => nav.availableProjectIds.has(project.id),
      );
    
      // 個人タスクの公開条件は、件名・期限のみ。
      const canPublish =
        title.trim().length > 0
        && dueDate.length > 0
        && !dateError
        && dueDate >= today;
    
      function handleDateChange(value: string) {
        setDueDate(value);
    
        if (value && value < today) {
          setDateError('過去の日付は設定できません');
          return;
        }
    
        setDateError('');
      }
    
      async function handleSubmit(publish: boolean) {
        if (publish && !canPublish) return;
    
        await nav.createPersonalTask({
          title: title.trim(),
          body: body.trim(),
          related_project_id: relatedProjectId || null,
          due_at: dueDate ? new Date(dueDate).toISOString() : null,
          publish,
        });
    
        // 作成後は、作成結果を確認できるマイタスク一覧へ遷移する。
        nav.setMyTasksFilter('all');
        nav.setTaskTypeFilter('all');
        nav.setPage(1);
        nav.setViewMode('list');
        nav.navigateTo('my_tasks');
    
        onClose();
      }
    
      return (
        <div className="modal-backdrop" onMouseDown={onClose}>
          <div className="create-modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="eyebrow">新しい個人タスク</span>
                <h2>個人タスクを作成</h2>
              </div>
              <button className="icon-btn" onClick={onClose}>
                <X size={19} />
              </button>
            </div>
    
            <div className="create-field-group">
              <label className="create-field">
                <span>件名</span>
                <input
                  autoFocus
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="例：週次レポートの準備"
                />
              </label>
    
              <label className="create-field">
                <span>本文（任意）</span>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="タスクの詳細を入力..."
                  rows={3}
                />
              </label>
    
              <label className="create-field">
                <span>関連プロジェクト（任意）</span>
                <select
                  className="personal-project-select"
                  value={relatedProjectId}
                  onChange={(e) => setRelatedProjectId(e.target.value)}
                >
                  <option value="">{PERSONAL_PROJECT_NO_SELECTION}</option>
                  {availableProjects.map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.name}
                    </option>
                  ))}
                </select>
              </label>
    
              <label className="create-field">
                <span>期限</span>
                <input
                  type="date"
                  min={today}
                  value={dueDate}
                  onChange={(e) => handleDateChange(e.target.value)}
                />
              </label>
    
              {dateError && <span className="date-error">{dateError}</span>}
            </div>
    
            <div className="modal-note">
              <ListChecks size={16} />
              <span>
                公開には件名と期限の入力が必要です。下書き保存は未入力でも可能です。
              </span>
            </div>
    
            <div className="modal-actions">
              <button
                className="primary-button"
                disabled={!canPublish}
                style={executionButtonStyle(!canPublish)}
                onClick={() => void handleSubmit(true)}
              >
                <Send size={15} />
                公開
              </button>
    
              <button
                className="secondary-button"
                disabled={false}
                style={executionButtonStyle(false)}
                onClick={() => void handleSubmit(false)}
              >
                下書き保存
              </button>
    
              <button className="secondary-button" onClick={onClose}>
                キャンセル
              </button>
            </div>
          </div>
        </div>
      );
    }
    
    function ForceCloseModal({ onClose, onConfirm }: {
      onClose: () => void;
      onConfirm: (reason: string) => void;
    }) {
      const [reason, setReason] = useState('');
      return (
        <div className="modal-backdrop" onMouseDown={onClose}>
          <div className="create-modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div><span className="eyebrow" style={{ color: '#c25450' }}>警告</span><h2>強制終了</h2></div>
              <button className="icon-btn" onClick={onClose}><X size={19} /></button>
            </div>
            <p style={{ color: '#83909d', fontSize: 12, lineHeight: 1.6, marginBottom: 16 }}>未完了の対象者・未確認資料が残っていても終了します。強制終了理由が履歴に残ります。</p>
            <label className="create-field"><span>強制終了理由（必須）</span><textarea value={reason} onChange={(e) => setReason(e.target.value)} placeholder="理由を入力してください..." rows={3} /></label>
            <div className="modal-actions">
              <button className="secondary-button" onClick={onClose}>キャンセル</button>
              <button className="primary-button" disabled={!reason.trim()} onClick={() => onConfirm(reason.trim())} style={{ background: '#c25450' }}>理由を記録して強制終了</button>
            </div>
          </div>
        </div>
      );
    }
    
    function ConfirmModal({ title, message, confirmLabel, onClose, onConfirm }: {
      title: string; message: string; confirmLabel: string;
      onClose: () => void; onConfirm: () => void;
    }) {
      return (
        <div className="modal-backdrop" onMouseDown={onClose}>
          <div className="create-modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div><span className="eyebrow">確認</span><h2>{title}</h2></div>
              <button className="icon-btn" onClick={onClose}><X size={19} /></button>
            </div>
            <p style={{ color: '#83909d', fontSize: 12, lineHeight: 1.6, marginBottom: 20 }}>{message}</p>
            <div className="modal-actions">
              <button className="secondary-button" onClick={onClose}>キャンセル</button>
              <button className="primary-button" onClick={onConfirm}>{confirmLabel}</button>
            </div>
          </div>
        </div>
      );
    }
    
    function ExemptModal({ assignee, onClose, onExempt, onOutOfScope }: {
      assignee: AssigneeDetailView;
      onClose: () => void;
      onExempt: (reason: string) => void;
      onOutOfScope: (reason: string) => void;
    }) {
      const [reason, setReason] = useState('');
      return (
        <div className="modal-backdrop" onMouseDown={onClose}>
          <div className="create-modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div><span className="eyebrow">対象者管理</span><h2>{assignee.name}</h2></div>
              <button className="icon-btn" onClick={onClose}><X size={19} /></button>
            </div>
            <label className="create-field"><span>理由（必須）</span><textarea value={reason} onChange={(e) => setReason(e.target.value)} placeholder="理由を入力してください..." rows={3} /></label>
            <div className="modal-actions">
              <button className="secondary-button" onClick={onClose}>キャンセル</button>
              <button className="secondary-button" disabled={!reason.trim()} onClick={() => onExempt(reason.trim())}>免除</button>
              <button className="primary-button" disabled={!reason.trim()} onClick={() => onOutOfScope(reason.trim())} style={{ background: '#9a7b3a' }}>対象外にする</button>
            </div>
          </div>
        </div>
      );
    }
    
    function ReturnModal({ submission, onClose, onConfirm }: {
      submission: SubmissionView;
      onClose: () => void;
      onConfirm: (reason: string) => void;
    }) {
      const [reason, setReason] = useState('');
      const cannotReturn = !reason.trim();
    
      return (
        <div className="modal-backdrop" onMouseDown={onClose}>
          <div className="create-modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="eyebrow">差戻し</span>
                <h2>作業報告を差戻す</h2>
              </div>
              <button className="icon-btn" onClick={onClose}>
                <X size={19} />
              </button>
            </div>
    
            <div style={{ background: '#f7f9fa', borderRadius: 6, padding: 12, marginBottom: 16 }}>
              <p style={{ fontSize: 11, color: '#3a4e5e', margin: 0 }}>{submission.body}</p>
            </div>
    
            <label className="create-field">
              <span>差戻し理由（必須）</span>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="差戻し理由を入力してください..."
                rows={3}
              />
            </label>
    
            <div className="modal-actions">
              <button className="secondary-button" onClick={onClose}>
                キャンセル
              </button>
    
              <button
                className="primary-button"
                disabled={cannotReturn}
                style={{ background: '#c2756a' }}
                onClick={() => onConfirm(reason.trim())}
              >
                差戻す
              </button>
            </div>
          </div>
        </div>
      );
    }
    function ReasonModal({ title, label, confirmLabel, onClose, onConfirm }: {
      title: string; label: string; confirmLabel: string;
      onClose: () => void; onConfirm: (reason: string) => void;
    }) {
      const [reason, setReason] = useState('');
      return (
        <div className="modal-backdrop" onMouseDown={onClose}>
          <div className="create-modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div><span className="eyebrow">{title}</span><h2>{title}</h2></div>
              <button className="icon-btn" onClick={onClose}><X size={19} /></button>
            </div>
            <label className="create-field"><span>{label}（必須）</span><textarea value={reason} onChange={(e) => setReason(e.target.value)} placeholder={`${label}を入力してください...`} rows={3} /></label>
            <div className="modal-actions">
              <button className="secondary-button" onClick={onClose}>キャンセル</button>
              <button className="primary-button" disabled={!reason.trim()} onClick={() => onConfirm(reason.trim())}>{confirmLabel}</button>
            </div>
          </div>
        </div>
      );
    }
    
    function SubmitModal({ title, label, confirmLabel, onClose, onConfirm }: {
      title: string; label: string; confirmLabel: string;
      onClose: () => void; onConfirm: (body: string) => void;
    }) {
      const [body, setBody] = useState('');
      return (
        <div className="modal-backdrop" onMouseDown={onClose}>
          <div className="create-modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div><span className="eyebrow">{title}</span><h2>{title}</h2></div>
              <button className="icon-btn" onClick={onClose}><X size={19} /></button>
            </div>
            <label className="create-field"><span>{label}</span><textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder={`${label}を入力してください...`} rows={4} /></label>
            <div className="modal-actions">
              <button className="secondary-button" onClick={onClose}>キャンセル</button>
              <button className="primary-button" disabled={!body.trim()} onClick={() => onConfirm(body.trim())}>{confirmLabel}</button>
            </div>
          </div>
        </div>
      );
    }
    
    function AddAttachmentModal({ onClose, onAdd }: {
      onClose: () => void;
      onAdd: (name: string, type: AttachmentType) => void;
    }) {
      const [name, setName] = useState('');
      const [type, setType] = useState<AttachmentType>('reference');
      return (
        <div className="modal-backdrop" onMouseDown={onClose}>
          <div className="create-modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div><span className="eyebrow">資料追加</span><h2>資料を追加</h2></div>
              <button className="icon-btn" onClick={onClose}><X size={19} /></button>
            </div>
            <label className="create-field"><span>資料名</span><input autoFocus value={name} onChange={(e) => setName(e.target.value)} placeholder="例：契約書.pdf" /></label>
            <label className="create-field"><span>資料区分</span>
              <select value={type} onChange={(e) => setType(e.target.value as AttachmentType)}>
                <option value="reference">参考資料</option>
                <option value="confirmation_required">確認必須資料</option>
              </select>
            </label>
            <div className="modal-actions">
              <button className="secondary-button" onClick={onClose}>キャンセル</button>
              <button className="primary-button" disabled={!name.trim()} onClick={() => onAdd(name.trim(), type)}>追加</button>
            </div>
          </div>
        </div>
      );
    }
    
    function LinkChatAttachmentModal({ chats, onClose, onLink }: {
      chats: { id: string; author: string; attachment_filename: string | null; time_label: string }[];
      onClose: () => void;
      onLink: (chatId: string) => void;
    }) {
      const [selected, setSelected] = useState<string | null>(null);
      const chatWithFiles = chats.filter((c) => c.attachment_filename);
      return (
        <div className="modal-backdrop" onMouseDown={onClose}>
          <div className="create-modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div><span className="eyebrow">チャット添付から関連資料へ追加</span><h2>チャット添付から関連資料へ追加</h2></div>
              <button className="icon-btn" onClick={onClose}><X size={19} /></button>
            </div>
            <p className="muted-text" style={{ marginBottom: 10 }}>チャット内で添付されたファイルから関連資料として登録するものを選択してください。</p>
            <div className="chat-attachment-link-list">
              {chatWithFiles.length === 0 && <div className="chat-attachment-link-empty">チャット添付ファイルはありません</div>}
              {chatWithFiles.map((c) => (
                <div
                  key={c.id}
                  className={`chat-attachment-link-item ${selected === c.id ? 'selected' : ''}`}
                  onClick={() => setSelected(c.id)}
                >
                  <FileText size={16} className="file-icon" />
                  <div style={{ flex: 1 }}>
                    <strong>{c.attachment_filename}</strong>
                    <small>{c.author} ・ {c.time_label}</small>
                  </div>
                  {selected === c.id && <Check size={16} color="#2e638e" />}
                </div>
              ))}
            </div>
            <div className="modal-actions">
              <button className="secondary-button" onClick={onClose}>キャンセル</button>
              <button className="primary-button" disabled={!selected} onClick={() => {
                const chat = chatWithFiles.find((c) => c.id === selected);
                if (chat?.attachment_filename) onLink(chat.id);
              }}>関連資料に追加</button>
            </div>
          </div>
        </div>
      );
    }
    
    // ──────────────────────────────────────────────
    // Template Modals
    // ──────────────────────────────────────────────
    
    function TemplateListModal({ nav, onClose }: {
      nav: ReturnType<typeof useTaskNavi>;
      onClose: () => void;
    }) {
      const [search, setSearch] = useState('');
    
      const sorted = useMemo(() => {
        const filtered = nav.templates.filter((t) =>
          !search || t.name.toLowerCase().includes(search.toLowerCase())
        );
        return [...filtered].sort((a, b) => {
          if (a.is_favorited !== b.is_favorited) return a.is_favorited ? -1 : 1;
          return b.updated_at.localeCompare(a.updated_at);
        });
      }, [nav.templates, search]);
    
      return (
        <div className="modal-backdrop" onMouseDown={onClose}>
          <div className="create-modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div><span className="eyebrow">テンプレート</span><h2>テンプレートから作成</h2></div>
              <button className="icon-btn" onClick={onClose}><X size={19} /></button>
            </div>
            <div className="template-search-row">
              <Search size={14} />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="テンプレート名で検索..." autoFocus />
            </div>
            <div className="template-list">
              {sorted.map((tpl) => (
                <div key={tpl.id} className="template-item" onClick={() => { void nav.createTaskFromTemplate(tpl.id); onClose(); }}>
                  <button
                    className="template-item-fav"
                    onClick={(e) => { e.stopPropagation(); void nav.toggleTemplateFavorite(tpl.id); }}
                    title={tpl.is_favorited ? 'お気に入り解除' : 'お気に入り登録'}
                  >
                    <Star size={16} />
                  </button>
                  <div className="template-item-info">
                    <strong>{tpl.name}</strong>
                    <div className="template-item-meta">
                      <span>{tpl.purpose}</span>
                      {tpl.title_template && <span>・ {tpl.title_template}</span>}
                      <span>・ 作成：{tpl.created_by_name}</span>
                      <span>・ 更新：{tpl.updated_at_label}</span>
                    </div>
                  </div>
                </div>
              ))}
              {sorted.length === 0 && <div className="template-empty">テンプレートがありません</div>}
            </div>
            <div className="modal-actions">
              <button className="secondary-button" onClick={onClose}>キャンセル</button>
            </div>
          </div>
        </div>
      );
    }
    
    function CreateTemplateModal({ onClose, onCreate }: {
      onClose: () => void;
      onCreate: (data: {
        name: string;
        purpose: TaskPurpose;
        title: string;
        body: string;
      }) => void;
    }) {
      const [name, setName] = useState('');
      const [purpose, setPurpose] = useState<TaskPurpose>('作業依頼');
      const [title, setTitle] = useState('');
      const [body, setBody] = useState('');
    
      const cannotCreate = !name.trim();
    
      function handleCreate() {
        if (cannotCreate) return;
    
        onCreate({
          name: name.trim(),
          purpose,
          title,
          body,
        });
      }
    
      return (
        <div className="modal-backdrop" onMouseDown={onClose}>
          <div className="create-modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="eyebrow">新しいテンプレート</span>
                <h2>テンプレートを作成</h2>
              </div>
              <button className="icon-btn" onClick={onClose}>
                <X size={19} />
              </button>
            </div>
    
            <div className="create-field-group">
              <label className="create-field">
                <span>テンプレート名（必須）</span>
                <input
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="例：定期確認タスク"
                />
              </label>
    
              <label className="create-field">
                <span>目的</span>
                <select value={purpose} onChange={(e) => setPurpose(e.target.value as TaskPurpose)}>
                  {PURPOSE_OPTIONS.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </label>
    
              <label className="create-field">
                <span>件名（任意）</span>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="例：資料の最終確認をする"
                />
              </label>
    
              <label className="create-field">
                <span>本文（任意）</span>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="テンプレートの本文を入力..."
                  rows={4}
                />
              </label>
            </div>
    
            <div className="modal-actions">
              <button className="secondary-button" onClick={onClose}>
                キャンセル
              </button>
    
              <button
                className="primary-button"
                disabled={cannotCreate}
                style={executionButtonStyle(cannotCreate)}
                onClick={handleCreate}
              >
                <Plus size={15} />
                作成
              </button>
            </div>
          </div>
        </div>
      );
    }
    function SaveTemplateModal({ onClose, onSave }: {
      onClose: () => void;
      onSave: (name: string) => void;
    }) {
      const [name, setName] = useState('');
      return (
        <div className="modal-backdrop" onMouseDown={onClose}>
          <div className="create-modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div><span className="eyebrow">テンプレート保存</span><h2>テンプレートとして保存</h2></div>
              <button className="icon-btn" onClick={onClose}><X size={19} /></button>
            </div>
            <label className="create-field"><span>テンプレート名</span><input autoFocus value={name} onChange={(e) => setName(e.target.value)} placeholder="例：定期確認タスク" /></label>
            <div className="modal-note"><Bookmark size={16} /><span>タスクの目的・件名・本文・資料をテンプレートとして保存します。</span></div>
            <div className="modal-actions">
              <button className="secondary-button" onClick={onClose}>キャンセル</button>
              <button className="primary-button" disabled={!name.trim()} onClick={() => onSave(name.trim())}><Bookmark size={14} />保存</button>
            </div>
          </div>
        </div>
      );
    }
    
    export default App;
    
    
