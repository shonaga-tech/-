# src\index.css

- **元ファイル**: src\index.css
- **ファイルサイズ**: 54864 bytes
- **作成日時**: 2026-09-16 04:39:52

## ソースコード

    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;600;700&display=swap');
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    
    :root { font-family: 'DM Sans', 'Noto Sans JP', sans-serif; font-size: 15px; color: #182230; background: #f4f6f8; font-synthesis: none; text-rendering: optimizeLegibility; }
    * { box-sizing: border-box; }
    body { margin: 0; min-width: 320px; }
    button, input, select { font: inherit; }
    button { border: 0; cursor: pointer; }
    .app-shell { height: 100vh; min-height: 0; display: flex; overflow: hidden; background: #f4f6f8; }
    
    /* Sidebar */
    .sidebar { width: 200px; height: 100vh; min-height: 0; background: #172b43; color: #d8e4f1; display: flex; flex-direction: column; padding: 24px 10px 14px; flex-shrink: 0; }
    .brand { display: flex; align-items: center; gap: 8px; padding: 0 8px 22px; color: #fff; font-weight: 700; letter-spacing: .06em; font-size: 14px; }
    .brand-mark { width: 30px; height: 30px; border-radius: 9px; display: grid; place-items: center; background: #e5a45f; color: #172b43; }
    .beta { font-size: 10px; padding: 2px 5px; border-radius: 4px; color: #a3c4e5; background: #2a435f; margin-left: 2px; }
    .workspace-switcher { display: flex; align-items: center; gap: 8px; border: 1px solid #36516d; background: #213b58; padding: 8px; border-radius: 10px; margin: 0 2px 20px; cursor: pointer; position: relative; transition: .2s ease; }
    .workspace-switcher:hover { background: #284865; border-color: #436684; }
    .workspace-switcher > div:nth-child(2) { flex: 1; min-width: 0; }
    .workspace-switcher small, .workspace-switcher strong { display: block; }
    .workspace-switcher small { color: #8fa6be; font-size: 10px; margin-bottom: 2px; }
    .workspace-switcher strong { color: #fff; font-size: 12px; font-weight: 600; }
    .workspace-switcher .chevron-up { transform: rotate(180deg); }
    .project-dropdown { position: absolute; top: calc(100% + 6px); left: 0; right: 0; background: #213b58; border: 1px solid #36516d; border-radius: 10px; padding: 6px; z-index: 50; box-shadow: 0 8px 24px rgba(0,0,0,.3); max-height: 300px; overflow-y: auto; }
    .project-dropdown-item { width: 100%; display: flex; align-items: center; gap: 9px; font-size: 12px; color: #b8c9da; padding: 9px 10px; border-radius: 6px; background: transparent; text-align: left; transition: .15s ease; }
    .project-dropdown-item:hover { background: #2a435f; color: #fff; }
    .project-dropdown-item.selected { background: #2e5275; color: #fff; }
    .workspace-icon { width: 27px; height: 27px; border-radius: 7px; background: #73a9c7; color: #fff; display: grid; place-items: center; font-weight: 700; font-size: 12px; }
    .nav-label { color: #718ba7; font-size: 10px; padding: 0 12px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: .08em; }
    .nav-label-spaced { margin-top: 27px; }
    .nav-button { width: 100%; padding: 9px 10px; display: flex; align-items: center; gap: 9px; color: #abc0d5; background: transparent; border-radius: 8px; text-align: left; font-size: 12px; margin: 2px 0; transition: .2s ease; }
    .nav-button span { flex: 1; }
    .nav-button small { color: #7f9bb8; font-size: 11px; }
    .nav-button:hover, .nav-active { color: #fff; background: #294460; }
    .nav-active small { color: #bad5ee; }
    .sub-nav { display: flex; gap: 2px; margin: 2px 0 4px 8px; padding-left: 24px; }
    .sub-nav-button { padding: 5px 10px; border-radius: 5px; font-size: 11px; color: #829db8; background: transparent; transition: .2s ease; }
    .sub-nav-button:hover { color: #b0cce4; background: #233c55; }
    .sub-nav-active { color: #fff; background: #2a435f; }
    .project-row { display: flex; align-items: center; gap: 9px; font-size: 12px; color: #b8c9da; padding: 9px 12px; }
    .project-row.muted { color: #8098b1; }
    .project-dot { width: 8px; height: 8px; border-radius: 50%; }
    .project-dot.blue { background: #70b1da; }
    .project-dot.orange { background: #e0a16b; }
    .project-more { margin-left: auto; color: #7892ad; letter-spacing: 2px; }
    .sidebar-bottom { margin-top: auto; }
    .user-row { border-top: 1px solid #2e4863; padding: 17px 10px 0; display: flex; align-items: center; gap: 9px; color: #fff; }
    .user-row div:nth-child(2) { flex: 1; }
    .user-row strong, .user-row small { display: block; }
    .user-row strong { font-size: 12px; }
    .user-row small { color: #829ab3; font-size: 10px; margin-top: 2px; }
    
    /* Avatars */
    .avatar { width: 28px; height: 28px; border-radius: 50%; display: grid; place-items: center; font-size: 9px; font-weight: 700; }
    .avatar-sand { color: #805d3c; background: #ebc79f; }
    .avatar-navy { color: #fff; background: #4d7094; }
    .avatar-blue { color: #2e6080; background: #a8d4e7; }
    .avatar-green { color: #3d6b56; background: #b8d7c5; }
    
    /* Main content */
    .main-content { min-width: 0; min-height: 0; flex: 1; display: flex; flex-direction: column; overflow: hidden; }
    .icon-btn { color: #82909e; background: transparent; display: grid; place-items: center; padding: 4px; border-radius: 6px; }
    .icon-btn:hover { color: #274f73; background: #edf2f5; }
    .notification { position: relative; }
    .notification i { position: absolute; right: 1px; top: 1px; width: 5px; height: 5px; background: #de7d69; border: 1px solid #fff; border-radius: 50%; }
    .mobile-menu { display: none; }
    .sidebar-utilities { display: flex; gap: 6px; padding: 4px 10px; margin-bottom: 4px; }
    .sidebar-utilities .icon-btn { color: #829db8; padding: 5px; }
    .sidebar-utilities .icon-btn:hover { color: #b0cce4; background: #233c55; }
    .sidebar-utilities .notification i { border-color: #172b43; }
    
    /* Page content */
    .page-content { width: 100%; max-width: 1500px; height: 100vh; min-height: 0; margin: 0 auto; padding: 24px 32px 20px; overflow: hidden; display: flex; flex-direction: column; }
    .page-heading { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 18px; flex-shrink: 0; }
    .eyebrow { display: flex; align-items: center; gap: 7px; color: #7190aa; text-transform: uppercase; letter-spacing: .1em; font-size: 10px; font-weight: 700; }
    .live-dot { width: 6px; height: 6px; background: #4ca47c; border-radius: 50%; box-shadow: 0 0 0 3px #d8eee3; }
    .page-heading h1 { margin: 4px 0 4px; font-size: 22px; letter-spacing: -.04em; color: #21364d; }
    .page-heading p { margin: 0; color: #83909d; font-size: 11px; }
    .primary-button { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 11px 16px; color: #fff; background: #2e638e; border-radius: 7px; font-size: 12px; font-weight: 600; box-shadow: 0 5px 13px rgba(46,99,142,.17); transition: .2s ease; }
    .primary-button:hover { background: #245475; transform: translateY(-1px); }
    .primary-button:disabled { opacity: .45; cursor: not-allowed; transform: none; }
    
    /* Summary cards */
    .summary-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; margin-bottom: 14px; flex-shrink: 0; }
    .summary-card { display: flex; align-items: center; gap: 10px; min-height: 64px; background: #fff; border: 1px solid #e3e8ec; border-radius: 10px; padding: 10px 14px; box-shadow: 0 3px 12px rgba(35,52,70,.025); transition: .2s ease; }
    .summary-icon { width: 32px; height: 32px; display: grid; place-items: center; border-radius: 8px; }
    .summary-icon.blue { background: #e4f1f8; color: #4384a9; }
    .summary-icon.amber { background: #fff2df; color: #c3873d; }
    .summary-icon.green { background: #e4f3eb; color: #479071; }
    .summary-icon.slate { background: #edf1f4; color: #6e879c; }
    .summary-copy span, .summary-copy strong, .summary-copy small { display: block; }
    .summary-copy span { color: #788896; font-size: 10px; }
    .summary-copy strong { color: #253c53; font-size: 18px; line-height: 1.1; margin: 1px 0 2px; letter-spacing: -.04em; }
    .summary-copy small { font-size: 9px; color: #78a08b; }
    .summary-copy .warn-text { color: #bd8c55; }
    .summary-card-clickable:hover { border-color: #c5d4da; box-shadow: 0 5px 18px rgba(35,52,70,.06); transform: translateY(-1px); }
    .summary-grid-4 { grid-template-columns: repeat(4, 1fr); }
    .compact-button { width: auto; margin-top: 0; padding: 7px 12px; font-size: 11px; }
    .status-legend { display: flex; flex-wrap: wrap; gap: 12px; padding: 6px 11px; margin-bottom: 6px; background: #f8fafb; border: 1px solid #e3e8ec; border-radius: 8px; flex-shrink: 0; }
    .legend-item { display: flex; align-items: center; gap: 5px; }
    .legend-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
    .legend-label { font-size: 11px; color: #6b7785; white-space: nowrap; }
    .legend-draft { background: #94a3b8; }
    .legend-in_progress { background: #3b82f6; }
    .legend-overdue { background: #f59e0b; }
    .legend-confirm_answer { background: #8b5cf6; }
    .legend-accept_return { background: #ec4899; }
    .legend-closed { background: #10b981; }
    .avatar-xs { width: 22px; height: 22px; font-size: 9px; border: 2px solid #fff; transition: transform .2s ease, margin-left .2s ease; }
    .avatar-stack { display: flex; align-items: center; cursor: pointer; }
    .avatar-stack .avatar-xs:not(:first-child) { margin-left: -7px; }
    .avatar-stack:hover .avatar-xs:not(:first-child) { margin-left: -4px; }
    .avatar-stack .avatar-xs:hover { transform: translateY(-3px); z-index: 5; }
    .panel-header-actions { display: flex; align-items: center; gap: 10px; }
    
    /* Work area: full-width list/board */
    .work-area { display: flex; flex-direction: column; flex: 1; min-height: 0; }
    .panel { background: #fff; border: 1px solid #e1e7eb; border-radius: 10px; box-shadow: 0 3px 15px rgba(35,52,70,.025); }
    
    /* Task panel */
    .task-panel { overflow: hidden; display: flex; flex-direction: column; flex: 1; min-height: 0; }
    .panel-header { padding: 10px 16px 8px; display: flex; justify-content: space-between; align-items: center; flex-shrink: 0; gap: 12px; }
    .panel-header-inline { display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0; }
    .panel-header-inline .search-box { flex: 0 1 280px; }
    .panel-header-inline .filter-group { flex: 0 0 auto; }
    .panel-title-group { display: flex; align-items: center; gap: 10px; }
    .project-inline { font-size: 11px; color: #82909e; background: #f0f4f6; padding: 2px 8px; border-radius: 4px; }
    .panel-header h2 { margin: 0; font-size: 14px; color: #243a50; }
    .muted-text { font-size: 10px; color: #9aa6b0; }
    .view-toggle { display: flex; gap: 3px; padding: 4px; border: 1px solid #e4e9ec; background: #eef1f4; border-radius: 24px; }
    .view-toggle button { padding: 8px 16px; border-radius: 20px; color: #82909e; background: transparent; display: flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 600; transition: .2s ease; }
    .view-toggle .view-active { color: #2e638e; background: #fff; box-shadow: 0 2px 8px rgba(35,52,70,.18); }
    .toolbar { display: none; }
    .search-box, .filter-group { display: flex; align-items: center; gap: 7px; background: #f7f9fa; border: 1px solid #e7ecef; border-radius: 6px; color: #99a6b0; padding: 0 10px; }
    .search-box { flex: 0 1 320px; max-width: 320px; }
    .search-box input { width: 100%; border: 0; outline: 0; background: transparent; font-size: 11px; color: #33495b; padding: 8px 0; }
    .filter-group { padding: 0 9px; }
    .filter-group select { border: 0; outline: 0; background: transparent; color: #607180; font-size: 11px; padding: 8px 0; }
    
    /* Task list rows */
    .task-list { min-height: 0; flex: 1; overflow: auto; }
    .task-row { width: 100%; display: grid; grid-template-columns: minmax(140px, auto) minmax(200px, 1fr) minmax(150px, auto) 160px 20px; gap: 12px; align-items: center; text-align: left; border-bottom: 1px solid #eef1f3; padding: 12px 16px; background: #fff; transition: .17s ease; }
    .task-row:hover, .task-selected { background: #f7fbfd; }
    .task-selected { box-shadow: inset 3px 0 #4f8cae; }
    .task-badges { display: flex; align-items: center; gap: 4px; flex-wrap: wrap; }
    .task-main { min-width: 0; }
    .task-title-line { display: flex; align-items: center; gap: 7px; }
    .task-title-line strong { color: #1a2e3e; font-size: 14px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .urgent { color: #bb6955; border: 1px solid #efcfc6; border-radius: 3px; font-size: 8px; padding: 2px 4px; flex-shrink: 0; }
    .task-subline { color: #9aa6b1; display: flex; gap: 4px; font-size: 11px; margin-top: 4px; }
    .task-creator-label { color: #1a2e3e; font-size: 12px; font-weight: 700; }
    .task-creator-label strong { color: #1a2e3e; font-weight: 800; }
    .task-progress { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
    .progress-count-lg { font-size: 15px; font-weight: 900; color: #2c3f50; white-space: nowrap; }
    .task-row-avatars { display: flex; align-items: center; }
    .task-row-avatars .avatar { width: 24px; height: 24px; aspect-ratio: 1/1; border: 2px solid #fff; flex-shrink: 0; }
    .task-row-avatars .avatar:not(:first-child) { margin-left: -10%; }
    .task-row-avatar-more { width: 24px; height: 24px; aspect-ratio: 1/1; border: 2px solid #fff; border-radius: 50%; display: grid; place-items: center; font-size: 8px; font-weight: 700; color: #5a6b78; background: #e8edf0; margin-left: -10%; flex-shrink: 0; }
    .progress-bar { width: 46px; height: 4px; background: #e8edf0; border-radius: 5px; overflow: hidden; }
    .progress-bar span, .detail-progress span { height: 100%; display: block; background: #69a5bd; border-radius: 5px; }
    
    .status-badge-lg { display: inline-flex; align-items: center; justify-content: center; border-radius: 5px; padding: 4px 8px; font-size: 11px; font-weight: 700; white-space: nowrap; }
    .status-pill { display: inline-flex; align-items: center; justify-content: center; border-radius: 4px; padding: 4px 6px; font-size: 9px; white-space: nowrap; }
    .status-open, .status-in_progress { color: #3d7d9c; background: #e6f2f7; }
    .status-badge-lg.status-open, .status-badge-lg.status-in_progress { color: #fff; background: #3b82f6; }
    .status-draft { color: #7a8a9a; background: #eef2f5; }
    .status-badge-lg.status-draft { color: #4b5f6e; background: #cbd5e1; }
    .status-confirm-answer { color: #806b9b; background: #f0ebf7; }
    .status-accept-return { color: #a87635; background: #fff1de; }
    .status-badge-lg.status-accept-return { color: #fff; background: #ea580c; }
    .status-closed { color: #4c8a6a; background: #e8f4ed; }
    .status-badge-lg.status-closed { color: #fff; background: #16a34a; }
    .badge { font-size: 8px; padding: 2px 5px; border-radius: 3px; white-space: nowrap; font-weight: 600; }
    .badge-lg { font-size: 11px; padding: 4px 8px; border-radius: 5px; white-space: nowrap; font-weight: 700; }
    .badge-lg.badge-forced { color: #fff; background: #c25450; }
    .badge-lg.badge-overdue { color: #fff; background: #dc2626; }
    .badge.overdue { color: #c25450; background: #fce8e6; }
    .status-badge-lg.status-overdue { color: #fff; background: #dc2626; }
    .badge.status-closed-badge { color: #4c8a6a; background: #e3f4ec; }
    .badge.returned { color: #b86838; background: #fff0de; }
    .badge.accept_pending { color: #806b9b; background: #f0ebf7; }
    .badge.confirm_pending { color: #a87635; background: #fff1de; }
    .badge.answer_pending { color: #806b9b; background: #f0ebf7; }
    .badge.in_progress { display: none; }
    .creator-tag { font-size: 8px; padding: 2px 5px; border-radius: 3px; color: #527285; background: #edf5f8; font-weight: 600; }
    .task-due span { display: block; font-size: 13px; font-weight: 800; color: #3a4e5e; white-space: nowrap; }
    .due-overdue { color: #dc2626 !important; font-weight: 900 !important; }
    .row-chevron { color: #b6c0c8; transform: rotate(-90deg); }
    .list-footer { color: #9ca8b0; padding: 13px 20px; font-size: 10px; display: flex; justify-content: space-between; }
    .list-footer button, .text-button { color: #367394; background: none; font-size: 10px; font-weight: 600; }
    .list-footer span, .text-button span { margin-left: 5px; font-size: 14px; }
    .empty-state { padding: 65px 20px; text-align: center; color: #94a1aa; font-size: 12px; }
    
    /* Kanban board */
    .kanban-board { display: flex; gap: 10px; padding: 10px 12px 12px; overflow-x: auto; flex: 1; min-height: 0; }
    .kanban-column { flex: 1; min-width: 180px; border-radius: 8px; background: #f6f8f9; border: 1px solid #e8edf0; display: flex; flex-direction: column; max-height: 100%; }
    .kanban-column-header { display: flex; align-items: center; gap: 6px; padding: 10px 11px 8px; }
    .kanban-column-header strong { font-size: 12px; color: #1a2e3e; font-weight: 800; }
    .kanban-column-header small { font-size: 11px; color: #3a4e5e; font-weight: 700; background: #d8dfe4; border-radius: 8px; padding: 1px 7px; }
    .kanban-count-badge { min-width: 18px; text-align: center; font-weight: 600; }
    .kanban-column-more { margin-left: auto; color: #b0bcc6; cursor: pointer; }
    .kanban-column-more:hover { color: #6f8796; }
    .kanban-dot { width: 7px; height: 7px; border-radius: 50%; }
    .kanban-dot.status-open, .kanban-dot.status-in_progress { background: #3d7d9c; }
    .kanban-dot.status-draft { background: #9aa6b0; }
    .kanban-dot.status-confirm-answer { background: #806b9b; }
    .kanban-dot.status-accept-return { background: #c3873d; }
    .kanban-dot.status-closed { background: #4c8a6a; }
    .kanban-cards { display: flex; flex-direction: column; gap: 7px; padding: 0 8px 10px; flex: 1; overflow-y: auto; min-height: 0; }
    .kanban-card { background: #fff; border: 1px solid #e4e9ec; border-radius: 7px; padding: 10px 14px; cursor: pointer; transition: .18s ease; }
    .kanban-card:hover { border-color: #c5d4da; box-shadow: 0 3px 10px rgba(35,52,70,.06); }
    .kanban-card-selected { border-color: #4f8cae; box-shadow: 0 0 0 2px rgba(79,140,174,.15); }
    .kanban-card:active { cursor: grabbing; }
    .kanban-card-row1 { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; flex-wrap: wrap; }
    .kanban-card-row1 .badge { font-size: 9px; padding: 2px 6px; border-radius: 4px; font-weight: 600; white-space: nowrap; }
    .kanban-card-row1 .status-badge-lg { display: none; }
    .kanban-card-row1 .purpose-badge-lg { font-size: 12px; padding: 5px 10px; }
    .kanban-card-id { display: none; }
    .kanban-card-title { display: block; font-size: 15px; font-weight: 800; color: #1a2e3e; line-height: 1.35; margin-bottom: 2px; }
    .kanban-card-creator { font-size: 12px; color: #1a2e3e; font-weight: 700; margin-bottom: 6px; }
    .kanban-card-due { display: flex; align-items: center; gap: 4px; font-size: 13px; font-weight: 800; color: #3a4e5e; margin-bottom: 6px; }
    .kanban-card-due svg { color: #94a3ae; flex-shrink: 0; }
    .kanban-card-due.overdue { color: #dc2626; font-weight: 900; }
    .kanban-card-due.overdue svg { color: #dc2626; }
    .kanban-card-progress { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
    .kanban-card-progress .progress-count { font-size: 13px; font-weight: 800; color: #2c3f50; white-space: nowrap; }
    .kanban-card-progress .progress-count.clickable { cursor: pointer; text-decoration: underline; text-decoration-style: dotted; }
    .kanban-card-progress .progress-count.clickable:hover { color: #2e638e; }
    .kanban-progress { display: none; }
    .kanban-progress span { height: 100%; display: block; background: #69a5bd; border-radius: 4px; }
    .kanban-card-avatars { display: none; }
    .kanban-card-avatars .avatar { width: 28px; height: 28px; aspect-ratio: 1/1; border: 2px solid #fff; flex-shrink: 0; }
    .kanban-card-avatars .avatar:not(:first-child) { margin-left: -10%; }
    .kanban-avatar-more { width: 28px; height: 28px; aspect-ratio: 1/1; border: 2px solid #fff; border-radius: 50%; display: grid; place-items: center; font-size: 9px; font-weight: 700; color: #5a6b78; background: #e8edf0; margin-left: -10%; flex-shrink: 0; }
    
    
    
    .kanban-empty { text-align: center; color: #b5c0c8; font-size: 9px; padding: 30px 10px; border: 1px dashed #dce4e8; border-radius: 6px; margin: 4px 0; }
    
    /* Detail panel */
    .detail-panel { padding: 16px; }
    .detail-top { display: flex; justify-content: space-between; align-items: center; }
    .detail-menu-wrapper { position: relative; }
    .detail-menu { position: absolute; top: 100%; right: 0; margin-top: 4px; background: #fff; border: 1px solid #e1e7eb; border-radius: 8px; box-shadow: 0 4px 16px rgba(35,52,70,.14); z-index: 15; min-width: 180px; padding: 4px; }
    .detail-menu-item { display: flex; align-items: center; gap: 8px; width: 100%; padding: 8px 10px; border: 0; background: transparent; color: #3a4e5e; font-size: 12px; font-weight: 500; text-align: left; cursor: pointer; border-radius: 5px; transition: .15s ease; }
    .detail-menu-item:hover { background: #f0f5f8; }
    .detail-menu-item.danger-text { color: #c25450; }
    .detail-menu-item.danger-text:hover { background: #fdf0ee; }
    .ops-admin-section { margin-top: 0; }
    .ops-admin-header h3 { font-size: 12px; color: #5a6e7e; margin: 0; }
    .ops-admin-header .muted-text { font-size: 10px; }
    .ops-admin-body { padding: 8px 16px 16px; }
    .ops-admin-body .action-btn { font-size: 12px; padding: 6px 12px; }
    .ops-admin-assignees { margin-top: 8px; }
    .detail-id { display: none; }
    .detail-panel h2 { color: #263c52; font-size: 17px; line-height: 1.45; margin: 0 0 10px; }
    .detail-description { color: #71808d; font-size: 11px; line-height: 1.7; margin: 0 0 20px; }
    .detail-block { border-top: 1px solid #eef1f3; padding: 11px 0; display: flex; justify-content: space-between; align-items: center; gap: 10px; }
    .detail-label { color: #97a3ad; font-size: 10px; }
    .detail-block strong { color: #4b5f6e; font-size: 10px; font-weight: 600; }
    .danger-text { color: #bd725e !important; }
    .people { display: flex; align-items: center; }
    .people .avatar { margin-left: -6px; border: 2px solid #fff; transition: transform .2s ease, margin-left .2s ease; }
    .people:hover .avatar { margin-left: -3px; }
    .people:hover .avatar:first-child { margin-left: 0; }
    .people .avatar:hover { transform: translateY(-3px); z-index: 5; }
    .people .avatar:first-child { margin-left: 0; }
    .people span { color: #85939e; font-size: 9px; margin-left: 6px; }
    .detail-divider { height: 1px; background: #eef1f3; margin: 4px 0 15px; }
    .detail-section-title { display: flex; justify-content: space-between; color: #72818d; font-size: 10px; margin-bottom: 8px; }
    .detail-section-title strong { color: #3c7796; font-weight: 600; }
    .detail-progress { height: 6px; border-radius: 5px; background: #edf1f2; overflow: hidden; margin-bottom: 12px; }
    .detail-assignee-list { margin-bottom: 16px; }
    .assignee-progress-row { display: flex; align-items: center; gap: 8px; padding: 7px 0; border-top: 1px solid #eef1f3; font-size: 11px; color: #3a4e5e; }
    .assignee-progress-row span:nth-child(2) { flex: 1; }
    .progress-pill { font-size: 9px; padding: 2px 6px; border-radius: 3px; font-weight: 600; }
    .progress-pill.pending { color: #9aa6b0; background: #eef2f5; }
    .progress-pill.confirmed { color: #4c8a6a; background: #e8f4ed; }
    .progress-pill.reported { color: #3d7d9c; background: #e6f2f7; }
    .progress-pill.accepted { color: #4c8a6a; background: #e8f4ed; }
    .progress-pill.returned { color: #b86838; background: #fff0de; }
    .complete-button, .secondary-button { width: 100%; display: flex; align-items: center; justify-content: center; gap: 7px; border-radius: 6px; padding: 10px; font-size: 11px; font-weight: 600; transition: .2s ease; }
    .complete-button { background: #397d70; color: white; }
    .complete-button:hover { background: #2f695f; }
    .complete-button:disabled { background: #80ac9b; cursor: default; }
    .secondary-button { color: #527285; border: 1px solid #dce5e9; background: #fff; margin-top: 8px; }
    .secondary-button:hover { background: #f4f9fb; }
    .secondary-button:disabled { opacity: .5; cursor: default; }
    .detail-footer { display: flex; gap: 15px; color: #9ca8b0; font-size: 9px; padding-top: 17px; }
    .detail-footer span { display: flex; align-items: center; gap: 5px; }
    
    /* Detail mode: 2-column grid + chat dock */
    .detail-mode { position: relative; }
    .back-button { display: inline-flex; align-items: center; gap: 5px; color: #367394; background: none; font-size: 12px; font-weight: 600; margin-bottom: 16px; padding: 6px 12px 6px 8px; border-radius: 6px; transition: .2s ease; }
    .back-button:hover { background: #eef5f8; }
    .detail-grid { display: grid; grid-template-columns: minmax(0, 1.3fr) minmax(280px, .7fr); gap: 20px; align-items: start; padding-right: 52px; transition: padding-right .3s ease; }
    .detail-mode:has(.chat-dock-open) .detail-grid { padding-right: 280px; transition: padding-right .3s ease; }
    
    /* Ops panel */
    .ops-panel { overflow: hidden; }
    .ops-body { padding: 0 16px 16px; }
    .ops-status-group { margin-top: 16px; }
    .ops-label { color: #97a3ad; font-size: 10px; margin-bottom: 10px; font-weight: 600; }
    .status-option { width: 100%; display: flex; align-items: center; gap: 8px; padding: 9px 12px; border-radius: 6px; border: 1px solid #e4e9ec; background: #fff; font-size: 11px; font-weight: 600; color: #4b5f6e; margin-bottom: 7px; transition: .2s ease; }
    .status-option:hover { background: #f7fbfd; border-color: #c5d4da; }
    .ops-divider { height: 1px; background: #eef1f3; margin: 18px 0; }
    .ops-meta { display: flex; flex-direction: column; gap: 9px; }
    .ops-meta-row { display: flex; justify-content: space-between; font-size: 10px; }
    .ops-meta-row span { color: #97a3ad; }
    .ops-meta-row strong { color: #4b5f6e; font-weight: 600; }
    
    /* Chat dock: slides out from right edge */
    .chat-dock { position: fixed; top: 0; right: 0; bottom: 0; width: 280px; z-index: 10; transform: translateX(248px); transition: transform .3s ease; display: flex; }
    .chat-dock-open { transform: translateX(0); }
    .dock-tabs { position: absolute; left: 0; top: 20px; transform: translateX(-100%); display: flex; flex-direction: column; gap: 0; box-shadow: -3px 3px 12px rgba(35,52,70,.04); }
    .dock-tab { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 10px 6px; background: #fff; border: 1px solid #e1e7eb; border-right: 0; cursor: pointer; font-size: 10px; color: #4b5f6e; font-weight: 600; transition: .2s ease; writing-mode: vertical-rl; text-orientation: mixed; }
    .dock-tab:first-child { border-radius: 8px 0 0 0; }
    .dock-tab:last-child { border-radius: 0 0 0 8px; border-top: 0; }
    .dock-tab:hover { background: #f7fbfd; color: #2e638e; }
    .dock-tab-active { background: #edf5f8; color: #2e638e; }
    .chat-dock-tab-label { writing-mode: vertical-rl; text-orientation: mixed; letter-spacing: .12em; }
    .chat-dock-tab-count { writing-mode: horizontal-tb; background: #e6f2f7; color: #3d7d9c; border-radius: 8px; padding: 1px 6px; font-size: 9px; }
    .chat-dock-body { flex: 1; display: flex; flex-direction: column; margin: 16px 10px 16px 0; border-radius: 10px; min-height: 0; }
    .chat-header { display: flex; justify-content: space-between; align-items: center; padding: 14px 16px; border-bottom: 1px solid #eef1f3; }
    .chat-header strong { font-size: 12px; color: #263c52; display: block; }
    .chat-header .muted-text { margin-top: 2px; display: block; }
    .chat-header-actions { display: flex; align-items: center; gap: 4px; }
    .chat-tool-active { color: #2e638e; background: #edf5f8; }
    .chat-search-row { display: flex; align-items: center; gap: 7px; margin: 10px 14px 0; padding: 0 10px; border: 1px solid #dfe7eb; border-radius: 6px; color: #99a6b0; background: #fbfcfc; }
    .chat-search-row input { width: 100%; border: 0; outline: 0; background: transparent; color: #33495b; font-size: 11px; padding: 8px 0; }
    .chat-messages { flex: 1; overflow-y: auto; padding: 14px 16px; display: flex; flex-direction: column; gap: 12px; }
    .chat-empty { text-align: center; color: #aab4bd; font-size: 10px; padding: 40px 10px; line-height: 1.6; }
    .chat-message { display: flex; gap: 8px; align-items: flex-start; }
    .chat-message-mine { flex-direction: row-reverse; }
    .chat-bubble { max-width: 78%; }
    .chat-author { font-size: 9px; color: #8a98a4; display: block; margin-bottom: 3px; }
    .chat-bubble p { margin: 0; font-size: 11px; color: #3a4e5e; line-height: 1.5; background: #f1f5f7; border-radius: 10px 10px 10px 2px; padding: 8px 12px; }
    .chat-message-mine .chat-bubble p { background: #dceef4; border-radius: 10px 10px 2px 10px; color: #2a4d63; }
    .chat-bubble time { font-size: 8px; color: #a8b3bb; display: block; margin-top: 3px; }
    .chat-message-mine .chat-bubble time { text-align: right; }
    .chat-input-area { display: flex; align-items: flex-end; gap: 7px; padding: 12px 14px; border-top: 1px solid #eef1f3; }
    .chat-attach { display: grid; place-items: center; width: 36px; height: 36px; flex: 0 0 36px; border: 1px solid #dfe7eb; border-radius: 6px; color: #6f8796; background: #fff; cursor: pointer; transition: .2s ease; }
    .chat-attach:hover { color: #2e638e; background: #f4f9fb; border-color: #c5d4da; }
    .chat-file-input { display: none; }
    .chat-compose { min-width: 0; flex: 1; display: flex; flex-direction: column; gap: 4px; }
    .chat-compose input { width: 100%; border: 1px solid #dfe7eb; border-radius: 6px; padding: 9px 11px; outline: none; font-size: 11px; color: #2c455a; background: #fbfcfc; }
    .chat-compose input:focus { border-color: #69a1b9; box-shadow: 0 0 0 3px #e7f2f5; }
    .attachment-chip { display: flex; align-items: center; gap: 5px; max-width: 100%; width: fit-content; color: #527285; background: #edf5f8; border-radius: 5px; padding: 4px 6px 4px 8px; font-size: 9px; }
    .attachment-chip { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .attachment-chip button { display: grid; place-items: center; padding: 1px; color: #6f8796; background: transparent; }
    .chat-send { display: grid; place-items: center; width: 36px; height: 36px; flex: 0 0 36px; border-radius: 6px; background: #2e638e; color: #fff; transition: .2s ease; }
    .chat-send:hover { background: #245475; }
    .chat-send:disabled { opacity: .4; cursor: not-allowed; }
    .chat-attachment-display { display: flex; align-items: center; gap: 4px; font-size: 9px; color: #6f8796; margin-top: 4px; padding: 3px 6px; background: rgba(0,0,0,.04); border-radius: 4px; }
    
    /* Note panel */
    .note-panel { display: flex; flex-direction: column; min-height: 0; flex: 1; }
    .note-scroll { flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 20px; }
    .note-section { display: flex; flex-direction: column; gap: 10px; }
    .note-section-title { display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 600; color: #4b5f6e; }
    .sticky-note { position: relative; padding: 10px 12px; border-radius: 6px; font-size: 10px; line-height: 1.5; color: #3a4e5e; box-shadow: 0 1px 4px rgba(35,52,70,.06); }
    .sticky-note p { margin: 0; padding-right: 18px; }
    .sticky-note button { position: absolute; top: 8px; right: 8px; color: #9aa6b0; background: transparent; padding: 2px; border-radius: 3px; }
    .sticky-note button:hover { color: #c2756a; }
    .note-yellow { background: #fef9e7; border: 1px solid #f5e8b8; }
    .note-green { background: #eef7ee; border: 1px solid #c9e6cf; }
    .note-blue { background: #e9f2fa; border: 1px solid #c2dce9; }
    .note-pink { background: #fce4ec; border: 1px solid #f5c6d3; }
    .note-empty { text-align: center; color: #aab4bd; font-size: 10px; padding: 16px; border: 1px dashed #dce4e8; border-radius: 6px; }
    .note-card-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
    .note-card { position: relative; padding: 10px 12px; border-radius: 6px; font-size: 10px; line-height: 1.5; color: #3a4e5e; box-shadow: 0 1px 4px rgba(35,52,70,.06); word-break: break-word; overflow-wrap: break-word; }
    .note-card p { margin: 0; padding-right: 18px; white-space: pre-wrap; word-break: break-word; }
    .note-card-delete { position: absolute; top: 8px; right: 8px; color: #9aa6b0; background: transparent; padding: 2px; border-radius: 3px; }
    .note-card-delete:hover { color: #c2756a; }
    .note-card-attachment { display: flex; align-items: center; gap: 4px; margin-top: 6px; padding-top: 6px; border-top: 1px solid rgba(0,0,0,.06); font-size: 9px; color: #6f8796; }
    .note-attach-btn { display: grid; place-items: center; width: 28px; height: 28px; flex: 0 0 28px; border: 1px solid #dfe7eb; border-radius: 6px; color: #6f8796; background: #fff; cursor: pointer; transition: .2s ease; }
    .note-attach-btn:hover { color: #2e638e; background: #f4f9fb; border-color: #c5d4da; }
    .note-attachment-chip { display: flex; align-items: center; gap: 4px; margin-top: 6px; color: #527285; background: #edf5f8; border-radius: 5px; padding: 4px 8px; font-size: 9px; width: fit-content; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .note-attachment-chip button { display: grid; place-items: center; padding: 1px; color: #6f8796; background: transparent; margin-left: 4px; }
    .note-add-row { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
    .note-visibility-toggle { display: flex; gap: 4px; margin-bottom: 4px; }
    .note-visibility-toggle button { padding: 5px 10px; border-radius: 5px; font-size: 10px; font-weight: 600; color: #6f8796; border: 1px solid #dfe7eb; background: #fff; transition: .2s ease; }
    .note-vis-active { color: #fff; background: #2e638e; border-color: #2e638e; }
    .note-add-row input { flex: 1; min-width: 0; border: 1px solid #dfe7eb; border-radius: 6px; padding: 8px 10px; outline: none; font-size: 10px; color: #2c455a; background: #fbfcfc; }
    .note-add-row input:focus { border-color: #69a1b9; box-shadow: 0 0 0 3px #e7f2f5; }
    .note-color-picker { display: flex; gap: 3px; }
    .note-color-dot { width: 16px; height: 16px; border-radius: 50%; border: 2px solid #fff; box-shadow: 0 0 0 1px #dfe7eb; cursor: pointer; }
    .note-color-selected { box-shadow: 0 0 0 2px #2e638e; }
    .note-color-dot.note-yellow { background: #fef9e7; }
    .note-color-dot.note-green { background: #eef7ee; }
    .note-color-dot.note-blue { background: #e9f2fa; }
    .note-color-dot.note-pink { background: #fce4ec; }
    .note-add-btn { display: grid; place-items: center; width: 32px; height: 32px; flex: 0 0 32px; border-radius: 6px; background: #2e638e; color: #fff; transition: .2s ease; }
    .note-add-btn:hover { background: #245475; }
    .note-add-btn:disabled { opacity: .4; cursor: not-allowed; }
    .todo-list { display: flex; flex-direction: column; gap: 5px; }
    .todo-item { display: flex; align-items: center; gap: 8px; padding: 7px 10px; border-radius: 6px; background: #f7f9fa; border: 1px solid #e8edf0; }
    .todo-item span { flex: 1; font-size: 10px; color: #3a4e5e; }
    .todo-done span { text-decoration: line-through; color: #aab4bd; }
    .todo-check { width: 18px; height: 18px; flex: 0 0 18px; border: 1px solid #cfdae1; border-radius: 4px; display: grid; place-items: center; color: #fff; background: transparent; }
    .todo-done .todo-check { background: #6faf8d; border-color: #6faf8d; }
    .todo-delete { color: #b6c0c8; background: transparent; padding: 2px; border-radius: 3px; }
    .todo-delete:hover { color: #c2756a; }
    
    /* Lower grid */
    .lower-grid { display: grid; grid-template-columns: 1.66fr .74fr; gap: 20px; margin-top: 20px; }
    .activity-panel { padding-bottom: 5px; }
    .activity-list { max-height: 220px; overflow-y: auto; }
    .activity-panel .panel-header { padding-bottom: 10px; }
    .activity-row { display: flex; align-items: center; gap: 11px; padding: 10px 20px; border-top: 1px solid #eef1f3; }
    .activity-icon { width: 26px; height: 26px; border-radius: 50%; display: grid; place-items: center; flex-shrink: 0; }
    .activity-icon.green { color: #579475; background: #e6f3ec; }
    .activity-icon.blue { color: #5589a8; background: #e7f1f7; }
    .activity-icon.orange { color: #bf8752; background: #fff0de; }
    .activity-row > div:nth-child(2) { flex: 1; min-width: 0; }
    .activity-row strong { color: #405463; font-size: 10px; font-weight: 600; }
    .activity-row p { color: #98a5ae; margin: 4px 0 0; font-size: 9px; }
    .activity-row time { color: #adb6bd; font-size: 9px; white-space: nowrap; }
    .guide-panel { display: flex; gap: 13px; padding: 21px; background: #f0f6f7; border-color: #dce9eb; }
    .guide-icon { width: 32px; height: 32px; display: grid; place-items: center; border-radius: 8px; color: #46819b; background: #d8edf0; flex-shrink: 0; }
    .guide-panel h3 { color: #345e74; font-size: 12px; margin: 0 0 7px; }
    .guide-panel p { color: #75909d; font-size: 10px; line-height: 1.6; margin: 0 0 10px; }
    
    /* Modal */
    .modal-backdrop { position: fixed; inset: 0; z-index: 20; background: rgba(20,37,55,.22); backdrop-filter: blur(2px); display: grid; place-items: center; padding: 20px; animation: fadeIn .2s ease; }
    .create-modal { width: min(100%, 450px); background: #fff; border-radius: 12px; padding: 24px; box-shadow: 0 20px 60px rgba(15,29,44,.22); animation: slideUp .23s ease; }
    .modal-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 25px; }
    .modal-header h2 { color: #22384e; font-size: 20px; margin: 6px 0 0; }
    .create-modal label { color: #607281; display: block; font-size: 11px; font-weight: 600; margin-bottom: 16px; }
    .create-field-group { display: flex; flex-direction: column; gap: 4px; }
    .create-field { color: #607281; display: flex; flex-direction: column; font-size: 11px; font-weight: 600; gap: 6px; margin-bottom: 14px; }
    .create-field input, .create-field select, .create-field textarea { display: block; width: 100%; border: 1px solid #dfe7eb; border-radius: 6px; padding: 11px 12px; outline: none; color: #2c455a; font-size: 12px; background: #fbfcfc; resize: vertical; }
    .create-field input:focus, .create-field select:focus, .create-field textarea:focus { border-color: #69a1b9; box-shadow: 0 0 0 3px #e7f2f5; }
    .project-display { padding: 11px 12px; border: 1px solid #dfe7eb; border-radius: 6px; background: #f0f4f6; color: #2c455a; font-size: 12px; font-weight: 600; }
    .member-select-grid { display: flex; flex-wrap: wrap; gap: 6px; }
    .member-chip { display: inline-flex; align-items: center; gap: 4px; padding: 6px 10px; border-radius: 6px; font-size: 11px; font-weight: 500; color: #4b5f6e; border: 1px solid #dfe7eb; background: #fff; transition: .2s ease; }
    .member-chip svg { opacity: 0; }
    .member-selected { color: #fff; background: #2e638e; border-color: #2e638e; }
    .member-selected svg { opacity: 1; }
    .dev-user-switcher { margin: 8px 0; padding: 8px 10px; border: 1px dashed #3a5872; border-radius: 6px; background: #1a3045; }
    .dev-label { color: #829db8; font-size: 9px; display: block; margin-bottom: 4px; letter-spacing: .04em; }
    .dev-user-switcher select { width: 100%; background: #213b58; color: #d8e4f1; border: 1px solid #36516d; border-radius: 4px; padding: 4px 6px; font-size: 11px; outline: none; }
    .reset-btn { width: 100%; display: flex; align-items: center; gap: 5px; padding: 7px 10px; border-radius: 5px; font-size: 10px; font-weight: 600; color: #c2756a; border: 1px solid #5a3a36; background: #2a1f1d; margin-bottom: 8px; transition: .2s ease; }
    .reset-btn:hover { background: #3a2a26; }
    .create-modal input, .create-modal select { display: block; width: 100%; margin-top: 8px; border: 1px solid #dfe7eb; border-radius: 6px; padding: 11px 12px; outline: none; color: #2c455a; font-size: 12px; background: #fbfcfc; }
    .create-modal input:focus, .create-modal select:focus { border-color: #69a1b9; box-shadow: 0 0 0 3px #e7f2f5; }
    .modal-note { display: flex; gap: 8px; color: #78919d; background: #f1f7f7; border-radius: 6px; padding: 11px; font-size: 10px; line-height: 1.5; }
    .modal-note svg { color: #52917d; flex-shrink: 0; }
    .modal-actions { display: flex; justify-content: flex-end; gap: 8px; margin-top: 24px; }
    .modal-actions .secondary-button { width: auto; padding: 10px 15px; margin: 0; }
    .toast { position: fixed; z-index: 30; right: 26px; bottom: 26px; display: flex; align-items: center; gap: 8px; background: #234d48; color: #fff; padding: 12px 15px; border-radius: 7px; font-size: 11px; box-shadow: 0 8px 24px rgba(28,57,52,.22); animation: slideUp .22s ease; }
    .toast svg { color: #a9dbc1; }
    
    /* Date error in create modal */
    .date-error { color: #c25450; font-size: 10px; font-weight: 600; margin-top: -4px; margin-bottom: 4px; }
    
    /* Note card actions (favorite + delete) */
    .note-card-actions { display: flex; align-items: center; gap: 4px; position: absolute; top: 8px; right: 8px; }
    .note-card-fav { color: #c5c0b8; background: transparent; padding: 2px; border-radius: 3px; display: grid; place-items: center; transition: .2s ease; }
    .note-card-fav:hover { color: #e0a44c; }
    .note-card-fav-active { color: #e0a44c; }
    .note-card-fav-active svg { fill: #e0a44c; }
    
    /* Note list (cross-task note view) */
    .note-list-container { padding: 16px 20px; display: flex; flex-direction: column; gap: 10px; }
    .note-list-card { position: relative; padding: 14px 16px; border-radius: 8px; box-shadow: 0 1px 4px rgba(35,52,70,.06); cursor: pointer; transition: .18s ease; border: 1px solid rgba(0,0,0,.04); }
    .note-list-card:hover { box-shadow: 0 3px 12px rgba(35,52,70,.1); }
    .note-list-card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
    .note-list-vis-tag { font-size: 9px; padding: 2px 7px; border-radius: 3px; font-weight: 600; }
    .note-list-vis-tag.shared { color: #3d7d9c; background: #e6f2f7; }
    .note-list-vis-tag.personal { color: #7a8a9a; background: #eef2f5; }
    .note-list-unfav { color: #e0a44c; background: transparent; padding: 2px; border-radius: 3px; display: grid; place-items: center; }
    .note-list-unfav svg { fill: #e0a44c; }
    .note-list-unfav:hover { color: #c25450; }
    .note-list-text { margin: 0 0 10px; font-size: 11px; line-height: 1.5; color: #3a4e5e; white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
    .note-list-meta { display: flex; justify-content: space-between; align-items: center; }
    .note-list-task-name { font-size: 10px; color: #6f8796; font-weight: 600; }
    .note-list-meta time { font-size: 9px; color: #adb6bd; }
    
    /* Detail: close info */
    .detail-close-info { background: #fce8e6; border: 1px solid #f0ccc8; border-radius: 6px; padding: 12px; margin: 12px 0; }
    .detail-close-row { display: flex; justify-content: space-between; font-size: 10px; margin-bottom: 6px; }
    .detail-close-row span { color: #9a6a60; }
    .detail-close-row strong { color: #c25450; }
    
    /* Detail: operation buttons */
    .detail-ops { margin-top: 16px; display: flex; flex-direction: column; gap: 8px; }
    .action-btn { display: inline-flex; align-items: center; justify-content: center; gap: 7px; border-radius: 6px; padding: 10px 14px; font-size: 11px; font-weight: 600; transition: .2s ease; }
    .action-btn.primary { background: #2e638e; color: #fff; }
    .action-btn.primary:hover { background: #245475; }
    .action-btn.primary:disabled { opacity: .4; cursor: not-allowed; }
    .action-btn.secondary { background: #fff; color: #527285; border: 1px solid #dce5e9; }
    .action-btn.secondary:hover { background: #f4f9fb; }
    .action-btn.danger { background: #c25450; color: #fff; }
    .action-btn.danger:hover { background: #a8463e; }
    .ops-hint { font-size: 10px; color: #83909d; padding: 6px 0; }
    
    /* Publish errors */
    .publish-errors { background: #fff5f0; border: 1px solid #f0d8c8; border-radius: 6px; padding: 10px 12px; margin-bottom: 10px; }
    .publish-error-item { display: flex; align-items: center; gap: 5px; font-size: 10px; color: #c25450; margin-top: 4px; }
    
    /* Assignee operations */
    .assignee-ops { display: flex; gap: 4px; margin-left: auto; }
    .mini-btn { display: inline-flex; align-items: center; gap: 3px; padding: 4px 8px; border-radius: 4px; font-size: 9px; font-weight: 600; color: #527285; border: 1px solid #dce5e9; background: #fff; transition: .2s ease; }
    .mini-btn:hover { background: #f4f9fb; border-color: #c5d4da; }
    .mini-btn:disabled { opacity: .4; cursor: not-allowed; }
    .mini-btn.danger { color: #c25450; border-color: #f0d0c8; }
    .mini-btn.danger:hover { background: #fff5f0; }
    
    /* Requirements */
    .detail-req-list { margin-top: 16px; }
    .req-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-top: 1px solid #eef1f3; }
    .req-info { display: flex; align-items: center; gap: 8px; }
    .req-info strong { font-size: 11px; color: #3a4e5e; display: block; }
    .req-meta { font-size: 9px; color: #9aa6b0; display: block; margin-top: 2px; }
    .req-actions { display: flex; gap: 4px; }
    
    /* Attachments */
    .attachment-list { margin-top: 8px; }
    .attachment-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-top: 1px solid #eef1f3; }
    .attachment-info { display: flex; align-items: center; gap: 8px; }
    .attachment-info strong { font-size: 11px; color: #3a4e5e; display: block; }
    .attachment-meta { font-size: 9px; color: #9aa6b0; display: block; margin-top: 2px; }
    .attachment-actions { display: flex; gap: 4px; }
    .attachment-withdrawn { opacity: .5; }
    .attachment-withdrawn .attachment-info strong { text-decoration: line-through; }
    
    /* History */
    .history-list { margin-top: 8px; }
    .history-row { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-top: 1px solid #eef1f3; }
    .history-row .activity-icon { width: 22px; height: 22px; border-radius: 50%; display: grid; place-items: center; flex-shrink: 0; }
    .history-row > div:nth-child(2) { flex: 1; min-width: 0; }
    .history-row strong { font-size: 10px; color: #405463; font-weight: 600; display: block; }
    .history-row p { font-size: 9px; color: #98a5ae; margin: 2px 0 0; }
    .history-row time { font-size: 9px; color: #adb6bd; white-space: nowrap; }
    
    /* === Phase 3.0 additions === */
    
    /* Task type labels (共有 / 個人) */
    .task-type-label { font-size: 8px; padding: 2px 5px; border-radius: 3px; font-weight: 600; white-space: nowrap; flex-shrink: 0; }
    .task-type-label.shared { color: #3d7d9c; background: #e6f2f7; }
    .task-type-label.personal { color: #7a8a9a; background: #eef2f5; }
    
    .purpose-badge { font-size: 10px; padding: 2px 7px; border-radius: 4px; font-weight: 600; white-space: nowrap; }
    .purpose-badge-sm { font-size: 9px; padding: 1px 6px; border-radius: 3px; font-weight: 600; white-space: nowrap; flex-shrink: 0; }
    .purpose-badge-lg { font-size: 11px; padding: 4px 8px; border-radius: 5px; font-weight: 700; white-space: nowrap; }
    .purpose-work { color: #2e6d9c; background: #dceef7; }
    .purpose-confirm { color: #8a6d2e; background: #fdf5dc; }
    .purpose-notice { color: #c2752e; background: #fdecd8; }
    .purpose-answer { color: #7b5fa0; background: #efe6f8; }
    .purpose-badge-lg.purpose-work { color: #fff; background: #2563eb; }
    .purpose-badge-lg.purpose-confirm { color: #1a1a1a; background: #f59e0b; }
    .purpose-badge-lg.purpose-notice { color: #fff; background: #ea580c; }
    .purpose-badge-lg.purpose-answer { color: #fff; background: #7c3aed; }
    .purpose-personal { color: #4b5f6e; background: #e2e8ee; }
    
    .badge.accept_pending { color: #c25450; background: #fce8e6; }
    .badge.confirm_pending { color: #8a6d2e; background: #fdf5dc; }
    .badge.answer_pending { color: #7b5fa0; background: #efe6f8; }
    .badge.returned { color: #b86838; background: #fff0de; }
    
    .incomplete-popover { position: absolute; bottom: calc(100% + 6px); left: 0; right: 0; z-index: 20; background: #fff; border: 1px solid #dce4e8; border-radius: 8px; box-shadow: 0 4px 16px rgba(35,52,70,.15); padding: 8px; }
    .incomplete-popover-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; font-size: 10px; font-weight: 700; color: #3a4e5e; }
    .incomplete-popover-header button { color: #9aa6b0; background: none; display: grid; place-items: center; padding: 2px; border-radius: 4px; }
    .incomplete-popover-header button:hover { color: #3a4e5e; background: #f0f4f6; }
    .incomplete-popover-list { display: flex; flex-direction: column; gap: 4px; max-height: 160px; overflow-y: auto; }
    .incomplete-popover-item { display: flex; align-items: center; gap: 6px; font-size: 10px; color: #5a6b78; }
    .incomplete-empty { font-size: 10px; color: #9aa6b0; text-align: center; padding: 8px; }
    
    /* My progress label on cards (あなた：未確認 etc.) */
    .my-progress-label { font-size: 8px; padding: 2px 5px; border-radius: 3px; font-weight: 600; white-space: nowrap; color: #527285; background: #edf5f8; }
    
    /* Kanban column overflow link */
    .kanban-overflow { text-align: center; padding: 4px 10px 8px; }
    .kanban-overflow button { color: #367394; background: none; font-size: 9px; font-weight: 600; }
    .kanban-add-task { display: none; }
    .kanban-card-wrapper { position: relative; }
    
    /* Pagination */
    .pagination-bar { display: flex; align-items: center; justify-content: space-between; padding: 12px 20px; border-top: 1px solid #eef1f3; }
    .pagination-summary { font-size: 10px; color: #9ca8b0; }
    .pagination-controls { display: flex; align-items: center; gap: 6px; }
    .page-size-select { border: 1px solid #e4e9ec; border-radius: 5px; background: #f8fafb; color: #607180; font-size: 10px; padding: 4px 6px; outline: none; }
    .page-btn { display: grid; place-items: center; width: 26px; height: 26px; border-radius: 5px; border: 1px solid #e4e9ec; background: #fff; color: #527285; font-size: 10px; font-weight: 600; transition: .2s ease; }
    .page-btn:hover:not(:disabled) { background: #f4f9fb; border-color: #c5d4da; }
    .page-btn:disabled { opacity: .35; cursor: default; }
    .page-btn.active { background: #2e638e; color: #fff; border-color: #2e638e; }
    .page-ellipsis { color: #b6c0c8; font-size: 10px; padding: 0 2px; }
    
    /* Filter preset tabs (MyTasksFilter) */
    .filter-presets { display: flex; gap: 4px; padding: 8px 16px 0; flex-wrap: wrap; }
    .filter-preset { padding: 6px 12px; border-radius: 5px; font-size: 10px; font-weight: 600; color: #6f8796; border: 1px solid #e4e9ec; background: #fff; transition: .2s ease; }
    .filter-preset:hover { background: #f4f9fb; border-color: #c5d4da; }
    .filter-preset-active { color: #fff; background: #2e638e; border-color: #2e638e; }
    
    /* Guide page */
    .guide-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
    .guide-card { background: #fff; border: 1px solid #e1e7eb; border-radius: 10px; padding: 28px; box-shadow: 0 3px 15px rgba(35,52,70,.025); display: flex; flex-direction: column; gap: 14px; }
    .guide-card-icon { width: 44px; height: 44px; display: grid; place-items: center; border-radius: 10px; }
    .guide-card-icon.shared { background: #e4f1f8; color: #4384a9; }
    .guide-card-icon.personal { background: #edf1f4; color: #6e879c; }
    .guide-card h3 { margin: 0; font-size: 16px; color: #21364d; }
    .guide-card p { margin: 0; font-size: 12px; color: #83909d; line-height: 1.7; flex: 1; }
    .guide-card-actions { display: flex; gap: 8px; flex-wrap: wrap; }
    
    /* Personal task detail */
    .personal-detail-panel { padding: 24px; }
    .personal-detail-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
    .personal-detail-panel h2 { color: #263c52; font-size: 18px; line-height: 1.45; margin: 0 0 10px; }
    .personal-detail-desc { color: #71808d; font-size: 11px; line-height: 1.7; margin: 0 0 20px; white-space: pre-wrap; }
    .personal-attachment-list { margin-top: 8px; }
    .personal-attachment-add { display: flex; gap: 6px; margin-top: 10px; }
    .personal-attachment-add input { flex: 1; border: 1px solid #dfe7eb; border-radius: 6px; padding: 8px 10px; font-size: 11px; color: #2c455a; background: #fbfcfc; outline: none; }
    .personal-attachment-add input:focus { border-color: #69a1b9; box-shadow: 0 0 0 3px #e7f2f5; }
    .personal-attachment-add button { padding: 8px 14px; }
    
    /* Template modal */
    .template-list { max-height: 340px; overflow-y: auto; display: flex; flex-direction: column; gap: 8px; margin: 8px 0 12px; }
    .template-item { display: flex; align-items: center; gap: 10px; padding: 12px 14px; border: 1px solid #e4e9ec; border-radius: 8px; background: #fff; cursor: pointer; transition: .2s ease; }
    .template-item:hover { border-color: #c5d4da; box-shadow: 0 2px 8px rgba(35,52,70,.06); }
    .template-item-fav { color: #e0a44c; flex-shrink: 0; display: grid; place-items: center; }
    .template-item-fav svg { fill: #e0a44c; }
    .template-item-info { flex: 1; min-width: 0; }
    .template-item-info strong { font-size: 12px; color: #263c52; display: block; }
    .template-item-meta { font-size: 9px; color: #9aa6b0; margin-top: 3px; display: flex; gap: 6px; flex-wrap: wrap; }
    .template-search-row { display: flex; align-items: center; gap: 7px; margin-bottom: 8px; padding: 0 10px; border: 1px solid #dfe7eb; border-radius: 6px; color: #99a6b0; background: #fbfcfc; }
    .template-search-row input { width: 100%; border: 0; outline: 0; background: transparent; color: #33495b; font-size: 11px; padding: 9px 0; }
    .template-empty { text-align: center; color: #aab4bd; font-size: 11px; padding: 30px 10px; }
    
    /* Personal project select */
    .personal-project-select { border: 1px solid #dfe7eb; border-radius: 6px; padding: 11px 12px; font-size: 12px; color: #2c455a; background: #fbfcfc; outline: none; width: 100%; }
    .personal-project-select:focus { border-color: #69a1b9; box-shadow: 0 0 0 3px #e7f2f5; }
    
    /* Personal task card overdue styling */
    .kanban-card.personal-card { border-left: 3px solid #7a8a9a; }
    .kanban-card.personal-card.overdue { border-left-color: #c25450; }
    
    /* Status overdue pill */
    .status-overdue { color: #c25450; background: #fce8e6; }
    .kanban-dot.status-overdue { background: #c25450; }
    
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
    
    /* Doc condition (参加者用操作パネル) */
    .ops-doc-condition { display: flex; align-items: center; gap: 6px; font-size: 10px; color: #c25450; padding: 8px 10px; background: #fff5f0; border: 1px solid #f0d8c8; border-radius: 6px; margin-bottom: 10px; font-weight: 600; }
    .ops-doc-condition.met { color: #479071; background: #e4f3eb; border-color: #c9e6cf; }
    .action-btn.doc-locked { opacity: 0.5; }
    
    /* Chat attachment link modal */
    .link-chat-attachment-btn { display: inline-flex; align-items: center; gap: 5px; padding: 5px 10px; font-size: 10px; font-weight: 600; color: #527285; border: 1px solid #dce5e9; background: #fff; border-radius: 5px; transition: .2s ease; margin-top: 6px; }
    .link-chat-attachment-btn:hover { background: #f4f9fb; border-color: #c5d4da; }
    .chat-attachment-link-list { max-height: 300px; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; margin: 8px 0 12px; }
    .chat-attachment-link-item { display: flex; align-items: center; gap: 8px; padding: 10px 12px; border: 1px solid #e4e9ec; border-radius: 8px; background: #fff; cursor: pointer; transition: .2s ease; }
    .chat-attachment-link-item:hover { border-color: #c5d4da; background: #f7fbfd; }
    .chat-attachment-link-item.selected { border-color: #2e638e; background: #edf5f8; }
    .chat-attachment-link-item .file-icon { color: #6f8796; flex-shrink: 0; }
    .chat-attachment-link-item strong { font-size: 11px; color: #3a4e5e; font-weight: 600; }
    .chat-attachment-link-item small { font-size: 9px; color: #9aa6b0; }
    .chat-attachment-link-empty { text-align: center; color: #aab4bd; font-size: 11px; padding: 24px 10px; }
    
    /* TASK-NAVI: disabled action button control */
    button.primary-button:disabled,
    button.secondary-button:disabled,
    button.action-btn:disabled,
    button.mini-btn:disabled,
    button.chat-send:disabled,
    button.note-add-btn:disabled {
      opacity: 0.5 !important;
      cursor: not-allowed !important;
    }
