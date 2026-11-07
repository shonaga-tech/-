# tsconfig.node.json

- **元ファイル**: tsconfig.node.json
- **ファイルサイズ**: 481 bytes
- **作成日時**: 2026-09-16 04:39:52

## ソースコード

    {
      "compilerOptions": {
        "target": "ES2022",
        "lib": ["ES2023"],
        "module": "ESNext",
        "skipLibCheck": true,
    
        /* Bundler mode */
        "moduleResolution": "bundler",
        "allowImportingTsExtensions": true,
        "isolatedModules": true,
        "moduleDetection": "force",
        "noEmit": true,
    
        /* Linting */
        "strict": true,
        "noUnusedLocals": false,
        "noUnusedParameters": false,
        "noFallthroughCasesInSwitch": true
      },
      "include": ["vite.config.ts"]
    }
