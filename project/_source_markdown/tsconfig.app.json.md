# tsconfig.app.json

- **元ファイル**: tsconfig.app.json
- **ファイルサイズ**: 711 bytes
- **作成日時**: 2026-09-16 04:39:52

## ソースコード

    {
      "compilerOptions": {
        "target": "ES2020",
        "useDefineForClassFields": true,
        "lib": ["ES2020", "DOM", "DOM.Iterable"],
        "module": "ESNext",
        "skipLibCheck": true,
    
        /* Bundler mode */
        "moduleResolution": "bundler",
        "allowImportingTsExtensions": true,
        "isolatedModules": true,
        "moduleDetection": "force",
        "noEmit": true,
        "jsx": "react-jsx",
    
        /* Path alias — depth-invariant imports for src (@/foo === src/foo from any file) */
        "baseUrl": ".",
        "paths": {
          "@/*": ["src/*"]
        },
    
        /* Linting */
        "strict": true,
        "noUnusedLocals": false,
        "noUnusedParameters": false,
        "noFallthroughCasesInSwitch": true
      },
      "include": ["src"]
    }
