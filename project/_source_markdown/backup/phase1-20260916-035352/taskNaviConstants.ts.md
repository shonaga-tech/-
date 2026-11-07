# backup\phase1-20260916-035352\taskNaviConstants.ts

- **元ファイル**: backup\phase1-20260916-035352\taskNaviConstants.ts
- **ファイルサイズ**: 13378 bytes
- **作成日時**: 2026-09-16 04:39:52

## ソースコード

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
