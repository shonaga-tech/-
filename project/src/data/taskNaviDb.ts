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

import type { TaskCompletionReview, TaskFavorite } from '../domain/taskNaviTypes';
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

    task_completion_reviews!: Table<TaskCompletionReview, string>;
  task_favorites!: Table<TaskFavorite, string>;
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
      });
    // 完了後レビュー、AI分析用出力の実行状態、アーカイブお気に入り
    this.version(DB_VERSION + 2).stores({
      task_completion_reviews: 'id, task_id, updated_at',
      task_favorites: 'id, task_id, user_id, &[task_id+user_id]',
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
