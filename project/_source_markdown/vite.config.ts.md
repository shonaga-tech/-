# vite.config.ts

- **元ファイル**: vite.config.ts
- **ファイルサイズ**: 366 bytes
- **作成日時**: 2026-09-16 04:39:52

## ソースコード

    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';
    import { fileURLToPath, URL } from 'node:url';
    
    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
      },
      optimizeDeps: {
        exclude: ['lucide-react'],
      },
    });
