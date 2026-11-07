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
  const [archivedTasks, setArchivedTasks] = useState<TaskView[]>([]);
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
  const reloadArchivedTasks = useCallback(async (userId: string) => {
    const list = await service.loadArchivedTasksWithMetadata(userId);
    setArchivedTasks(list);
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
  useEffect(() => {
    if (currentUserId) {
      void reloadArchivedTasks(currentUserId);
    }
  }, [currentUserId, reloadArchivedTasks]);

  const openTask = useCallback(async (taskId: string) => {
    if (!currentUserId) return;
    setSelectedTaskId(taskId);
    setSelectedPersonalTaskId(null);
    setPersonalDetail(null);
    const d = await service.loadTaskDetailWithCompletionReview(taskId, currentUserId);
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
      const d = await service.loadTaskDetailWithCompletionReview(selectedTaskId, currentUserId);
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
    if (currentUserId) await reloadArchivedTasks(currentUserId);
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

  const purpose = detail?.task.purpose;

  await service.confirmTask(selectedTaskId, assignmentId, currentUserId);
  await reloadAll();

  showToast(
    purpose === '回答・申込受付'
      ? '回答・申込・実施の完了を登録しました'
      : purpose === '周知・意見聴取'
        ? '閲覧完了を登録しました'
        : '確認を完了しました',
  );
}, [selectedTaskId, currentUserId, detail?.task.purpose, reloadAll]);

  const submitResponse = useCallback(async (assignmentId: string, body: string) => {
  if (!selectedTaskId || !currentUserId) return;

  const purpose = detail?.task.purpose;

  await service.submitResponse(selectedTaskId, assignmentId, body, currentUserId);
  await reloadAll();

  showToast(
    purpose === '確認・判断依頼'
      ? '確認・判断を回答しました'
      : '回答を提出しました',
  );
}, [selectedTaskId, currentUserId, detail?.task.purpose, reloadAll]);

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
  // === Completed / archived shared task review workflow ===

  const saveTaskCompletionReview = useCallback(async (
    taskId: string,
    data: {
      ai_summary: string | null;
      admin_comment: string | null;
    },
  ) => {
    if (!currentUserId) return;

    await service.saveTaskCompletionReview(
      taskId,
      currentUserId,
      data,
    );

    await reloadAll();
    showToast('AIまとめ・管理者所感を保存しました');
  }, [currentUserId, reloadAll]);

  const generateTaskAiAnalysisOutput = useCallback(async (
    taskId: string,
  ) => {
    if (!currentUserId) return;

    await service.generateTaskAiAnalysisOutput(
      taskId,
      currentUserId,
    );

    await refreshDetail();
    showToast('AI分析用出力を準備しました');
  }, [currentUserId, refreshDetail]);

  const archiveTaskWithCompletionReview = useCallback(async (
    taskId: string,
    data: {
      ai_summary: string | null;
      admin_comment: string | null;
    },
  ) => {
    if (!currentUserId) return;

    await service.archiveTaskWithCompletionReview(
      taskId,
      currentUserId,
      data,
    );

    await reloadAll();
    closeTask();
    showToast('タスクをアーカイブしました');
  }, [currentUserId, reloadAll, closeTask]);

  const deleteSharedTask = useCallback(async (
    taskId: string,
  ) => {
    if (!currentUserId) return;

    await service.deleteClosedSharedTask(taskId, currentUserId);

    await reloadAll();
    closeTask();
    showToast('タスクを削除しました');
  }, [currentUserId, reloadAll, closeTask]);

  const toggleArchivedTaskFavorite = useCallback(async (
    taskId: string,
  ) => {
    if (!currentUserId) return;

    await service.toggleArchivedTaskFavorite(taskId, currentUserId);
    await reloadArchivedTasks(currentUserId);
  }, [currentUserId, reloadArchivedTasks]);
return {
    saveTaskCompletionReview,
    generateTaskAiAnalysisOutput,
    archiveTaskWithCompletionReview,
    deleteSharedTask,
    toggleArchivedTaskFavorite,
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
