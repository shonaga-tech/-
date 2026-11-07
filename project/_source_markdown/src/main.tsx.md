# src\main.tsx

- **元ファイル**: src\main.tsx
- **ファイルサイズ**: 234 bytes
- **作成日時**: 2026-09-16 04:39:52

## ソースコード

    import { StrictMode } from 'react';
    import { createRoot } from 'react-dom/client';
    import App from './App.tsx';
    import './index.css';
    
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
