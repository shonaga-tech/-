# プロジェクト ソースコード一覧

- **対象フォルダ**: C:\Users\1140604\Desktop\30project-bolt-sb1-pjo3hodx\project
- **作成日時**: 2026-09-14 15:50:59
- **対象ファイル数**: 24
- **除外フォルダ**: node_modules, .git, dist, build, .next, coverage, .cache, .vite, _source_markdown

## 収録ファイル一覧

- .bolt\config.json
- .gitignore
- eslint.config.js
- index.html
- package.json
- package-lock.json
- postcss.config.js
- src\App.tsx
- src\data\taskNaviDb.ts
- src\data\taskNaviRepository.ts
- src\data\taskNaviSeed.ts
- src\domain\taskNaviConstants.ts
- src\domain\taskNaviTypes.ts
- src\hooks\useTaskNavi.ts
- src\index.css
- src\main.tsx
- src\services\taskNaviSelectors.ts
- src\services\taskNaviService.ts
- src\vite-env.d.ts
- tailwind.config.js
- tsconfig.app.json
- tsconfig.json
- tsconfig.node.json
- vite.config.ts

---

## .bolt\config.json

- **ファイルサイズ**: 39 bytes

### ソースコード

    {
      "template": "bolt-vite-react-ts"
    }

---

## .gitignore

- **ファイルサイズ**: 220 bytes

### ソースコード

    logs
    *.log
    npm-debug.log*
    yarn-debug.log*
    yarn-error.log*
    pnpm-debug.log*
    lerna-debug.log*
    
    node_modules
    dist
    dist-ssr
    *.local
    
    .vscode/*
    !.vscode/extensions.json
    .idea
    .DS_Store
    *.suo
    *.ntvs*
    *.njsproj
    *.sln
    *.sw?
    .env

---

## eslint.config.js

- **ファイルサイズ**: 739 bytes

### ソースコード

    import js from '@eslint/js';
    import globals from 'globals';
    import reactHooks from 'eslint-plugin-react-hooks';
    import reactRefresh from 'eslint-plugin-react-refresh';
    import tseslint from 'typescript-eslint';
    
    export default tseslint.config(
      { ignores: ['dist'] },
      {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
          ecmaVersion: 2020,
          globals: globals.browser,
        },
        plugins: {
          'react-hooks': reactHooks,
          'react-refresh': reactRefresh,
        },
        rules: {
          ...reactHooks.configs.recommended.rules,
          'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
          ],
        },
      }
    );

---

## index.html

- **ファイルサイズ**: 604 bytes

### ソースコード

    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bolt News Web App Prototype</title>
        <meta property="og:image" content="https://bolt.new/static/og_default.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://bolt.new/static/og_default.png" />
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>

---

## package.json

- **ファイルサイズ**: 953 bytes

### ソースコード

    {
      "name": "vite-react-typescript-starter",
      "private": true,
      "version": "0.0.0",
      "type": "module",
      "scripts": {
        "dev": "vite",
        "build": "vite build",
        "lint": "eslint .",
        "preview": "vite preview",
        "typecheck": "tsc --noEmit -p tsconfig.app.json"
      },
      "dependencies": {
        "@supabase/supabase-js": "^2.57.4",
        "dexie": "^4.4.5",
        "lucide-react": "^0.446.0",
        "mammoth": "^1.12.2",
        "react": "^18.3.1",
        "react-dom": "^18.3.1"
      },
      "devDependencies": {
        "@eslint/js": "^9.9.1",
        "@types/react": "^18.3.5",
        "@types/react-dom": "^18.3.0",
        "@vitejs/plugin-react": "^4.3.1",
        "autoprefixer": "^10.4.18",
        "eslint": "^9.9.1",
        "eslint-plugin-react-hooks": "^5.1.0-rc.0",
        "eslint-plugin-react-refresh": "^0.4.11",
        "globals": "^15.9.0",
        "postcss": "^8.4.35",
        "tailwindcss": "^3.4.1",
        "typescript": "^5.5.3",
        "typescript-eslint": "^8.3.0",
        "vite": "^5.4.2"
      }
    }

---

## package-lock.json

- **ファイルサイズ**: 157980 bytes

### ソースコード

    {
      "name": "vite-react-typescript-starter",
      "version": "0.0.0",
      "lockfileVersion": 3,
      "requires": true,
      "packages": {
        "": {
          "name": "vite-react-typescript-starter",
          "version": "0.0.0",
          "dependencies": {
            "@supabase/supabase-js": "^2.57.4",
            "dexie": "^4.4.5",
            "lucide-react": "^0.446.0",
            "mammoth": "^1.12.2",
            "react": "^18.3.1",
            "react-dom": "^18.3.1"
          },
          "devDependencies": {
            "@eslint/js": "^9.9.1",
            "@types/react": "^18.3.5",
            "@types/react-dom": "^18.3.0",
            "@vitejs/plugin-react": "^4.3.1",
            "autoprefixer": "^10.4.18",
            "eslint": "^9.9.1",
            "eslint-plugin-react-hooks": "^5.1.0-rc.0",
            "eslint-plugin-react-refresh": "^0.4.11",
            "globals": "^15.9.0",
            "postcss": "^8.4.35",
            "tailwindcss": "^3.4.1",
            "typescript": "^5.5.3",
            "typescript-eslint": "^8.3.0",
            "vite": "^5.4.2"
          }
        },
        "node_modules/@alloc/quick-lru": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
          "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
          "dev": true,
          "engines": {
            "node": ">=10"
          },
          "funding": {
            "url": "https://github.com/sponsors/sindresorhus"
          }
        },
        "node_modules/@ampproject/remapping": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.3.0.tgz",
          "integrity": "sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==",
          "dev": true,
          "dependencies": {
            "@jridgewell/gen-mapping": "^0.3.5",
            "@jridgewell/trace-mapping": "^0.3.24"
          },
          "engines": {
            "node": ">=6.0.0"
          }
        },
        "node_modules/@babel/code-frame": {
          "version": "7.25.7",
          "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.25.7.tgz",
          "integrity": "sha512-0xZJFNE5XMpENsgfHYTw8FbX4kv53mFLn2i3XPoq69LyhYSCBJtitaHx9QnsVTrsogI4Z3+HtEfZ2/GFPOtf5g==",
          "dev": true,
          "dependencies": {
            "@babel/highlight": "^7.25.7",
            "picocolors": "^1.0.0"
          },
          "engines": {
            "node": ">=6.9.0"
          }
        },
        "node_modules/@babel/compat-data": {
          "version": "7.25.7",
          "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.25.7.tgz",
          "integrity": "sha512-9ickoLz+hcXCeh7jrcin+/SLWm+GkxE2kTvoYyp38p4WkdFXfQJxDFGWp/YHjiKLPx06z2A7W8XKuqbReXDzsw==",
          "dev": true,
          "engines": {
            "node": ">=6.9.0"
          }
        },
        "node_modules/@babel/core": {
          "version": "7.25.7",
          "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.25.7.tgz",
          "integrity": "sha512-yJ474Zv3cwiSOO9nXJuqzvwEeM+chDuQ8GJirw+pZ91sCGCyOZ3dJkVE09fTV0VEVzXyLWhh3G/AolYTPX7Mow==",
          "dev": true,
          "dependencies": {
            "@ampproject/remapping": "^2.2.0",
            "@babel/code-frame": "^7.25.7",
            "@babel/generator": "^7.25.7",
            "@babel/helper-compilation-targets": "^7.25.7",
            "@babel/helper-module-transforms": "^7.25.7",
            "@babel/helpers": "^7.25.7",
            "@babel/parser": "^7.25.7",
            "@babel/template": "^7.25.7",
            "@babel/traverse": "^7.25.7",
            "@babel/types": "^7.25.7",
            "convert-source-map": "^2.0.0",
            "debug": "^4.1.0",
            "gensync": "^1.0.0-beta.2",
            "json5": "^2.2.3",
            "semver": "^6.3.1"
          },
          "engines": {
            "node": ">=6.9.0"
          },
          "funding": {
            "type": "opencollective",
            "url": "https://opencollective.com/babel"
          }
        },
        "node_modules/@babel/generator": {
          "version": "7.25.7",
          "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.25.7.tgz",
          "integrity": "sha512-5Dqpl5fyV9pIAD62yK9P7fcA768uVPUyrQmqpqstHWgMma4feF1x/oFysBCVZLY5wJ2GkMUCdsNDnGZrPoR6rA==",
          "dev": true,
          "dependencies": {
            "@babel/types": "^7.25.7",
            "@jridgewell/gen-mapping": "^0.3.5",
            "@jridgewell/trace-mapping": "^0.3.25",
            "jsesc": "^3.0.2"
          },
          "engines": {
            "node": ">=6.9.0"
          }
        },
        "node_modules/@babel/helper-compilation-targets": {
          "version": "7.25.7",
          "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.25.7.tgz",
          "integrity": "sha512-DniTEax0sv6isaw6qSQSfV4gVRNtw2rte8HHM45t9ZR0xILaufBRNkpMifCRiAPyvL4ACD6v0gfCwCmtOQaV4A==",
          "dev": true,
          "dependencies": {
            "@babel/compat-data": "^7.25.7",
            "@babel/helper-validator-option": "^7.25.7",
            "browserslist": "^4.24.0",
            "lru-cache": "^5.1.1",
            "semver": "^6.3.1"
          },
          "engines": {
            "node": ">=6.9.0"
          }
        },
        "node_modules/@babel/helper-module-imports": {
          "version": "7.25.7",
          "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.25.7.tgz",
          "integrity": "sha512-o0xCgpNmRohmnoWKQ0Ij8IdddjyBFE4T2kagL/x6M3+4zUgc+4qTOUBoNe4XxDskt1HPKO007ZPiMgLDq2s7Kw==",
          "dev": true,
          "dependencies": {
            "@babel/traverse": "^7.25.7",
            "@babel/types": "^7.25.7"
          },
          "engines": {
            "node": ">=6.9.0"
          }
        },
        "node_modules/@babel/helper-module-transforms": {
          "version": "7.25.7",
          "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.25.7.tgz",
          "integrity": "sha512-k/6f8dKG3yDz/qCwSM+RKovjMix563SLxQFo0UhRNo239SP6n9u5/eLtKD6EAjwta2JHJ49CsD8pms2HdNiMMQ==",
          "dev": true,
          "dependencies": {
            "@babel/helper-module-imports": "^7.25.7",
            "@babel/helper-simple-access": "^7.25.7",
            "@babel/helper-validator-identifier": "^7.25.7",
            "@babel/traverse": "^7.25.7"
          },
          "engines": {
            "node": ">=6.9.0"
          },
          "peerDependencies": {
            "@babel/core": "^7.0.0"
          }
        },
        "node_modules/@babel/helper-plugin-utils": {
          "version": "7.25.7",
          "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.25.7.tgz",
          "integrity": "sha512-eaPZai0PiqCi09pPs3pAFfl/zYgGaE6IdXtYvmf0qlcDTd3WCtO7JWCcRd64e0EQrcYgiHibEZnOGsSY4QSgaw==",
          "dev": true,
          "engines": {
            "node": ">=6.9.0"
          }
        },
        "node_modules/@babel/helper-simple-access": {
          "version": "7.25.7",
          "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.25.7.tgz",
          "integrity": "sha512-FPGAkJmyoChQeM+ruBGIDyrT2tKfZJO8NcxdC+CWNJi7N8/rZpSxK7yvBJ5O/nF1gfu5KzN7VKG3YVSLFfRSxQ==",
          "dev": true,
          "dependencies": {
            "@babel/traverse": "^7.25.7",
            "@babel/types": "^7.25.7"
          },
          "engines": {
            "node": ">=6.9.0"
          }
        },
        "node_modules/@babel/helper-string-parser": {
          "version": "7.25.7",
          "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.25.7.tgz",
          "integrity": "sha512-CbkjYdsJNHFk8uqpEkpCvRs3YRp9tY6FmFY7wLMSYuGYkrdUi7r2lc4/wqsvlHoMznX3WJ9IP8giGPq68T/Y6g==",
          "dev": true,
          "engines": {
            "node": ">=6.9.0"
          }
        },
        "node_modules/@babel/helper-validator-identifier": {
          "version": "7.25.7",
          "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.25.7.tgz",
          "integrity": "sha512-AM6TzwYqGChO45oiuPqwL2t20/HdMC1rTPAesnBCgPCSF1x3oN9MVUwQV2iyz4xqWrctwK5RNC8LV22kaQCNYg==",
          "dev": true,
          "engines": {
            "node": ">=6.9.0"
          }
        },
        "node_modules/@babel/helper-validator-option": {
          "version": "7.25.7",
          "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.25.7.tgz",
          "integrity": "sha512-ytbPLsm+GjArDYXJ8Ydr1c/KJuutjF2besPNbIZnZ6MKUxi/uTA22t2ymmA4WFjZFpjiAMO0xuuJPqK2nvDVfQ==",
          "dev": true,
          "engines": {
            "node": ">=6.9.0"
          }
        },
        "node_modules/@babel/helpers": {
          "version": "7.25.7",
          "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.25.7.tgz",
          "integrity": "sha512-Sv6pASx7Esm38KQpF/U/OXLwPPrdGHNKoeblRxgZRLXnAtnkEe4ptJPDtAZM7fBLadbc1Q07kQpSiGQ0Jg6tRA==",
          "dev": true,
          "dependencies": {
            "@babel/template": "^7.25.7",
            "@babel/types": "^7.25.7"
          },
          "engines": {
            "node": ">=6.9.0"
          }
        },
        "node_modules/@babel/highlight": {
          "version": "7.25.7",
          "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.25.7.tgz",
          "integrity": "sha512-iYyACpW3iW8Fw+ZybQK+drQre+ns/tKpXbNESfrhNnPLIklLbXr7MYJ6gPEd0iETGLOK+SxMjVvKb/ffmk+FEw==",
          "dev": true,
          "dependencies": {
            "@babel/helper-validator-identifier": "^7.25.7",
            "chalk": "^2.4.2",
            "js-tokens": "^4.0.0",
            "picocolors": "^1.0.0"
          },
          "engines": {
            "node": ">=6.9.0"
          }
        },
        "node_modules/@babel/parser": {
          "version": "7.25.7",
          "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.25.7.tgz",
          "integrity": "sha512-aZn7ETtQsjjGG5HruveUK06cU3Hljuhd9Iojm4M8WWv3wLE6OkE5PWbDUkItmMgegmccaITudyuW5RPYrYlgWw==",
          "dev": true,
          "dependencies": {
            "@babel/types": "^7.25.7"
          },
          "bin": {
            "parser": "bin/babel-parser.js"
          },
          "engines": {
            "node": ">=6.0.0"
          }
        },
        "node_modules/@babel/plugin-transform-react-jsx-self": {
          "version": "7.25.7",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.25.7.tgz",
          "integrity": "sha512-JD9MUnLbPL0WdVK8AWC7F7tTG2OS6u/AKKnsK+NdRhUiVdnzyR1S3kKQCaRLOiaULvUiqK6Z4JQE635VgtCFeg==",
          "dev": true,
          "dependencies": {
            "@babel/helper-plugin-utils": "^7.25.7"
          },
          "engines": {
            "node": ">=6.9.0"
          },
          "peerDependencies": {
            "@babel/core": "^7.0.0-0"
          }
        },
        "node_modules/@babel/plugin-transform-react-jsx-source": {
          "version": "7.25.7",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.25.7.tgz",
          "integrity": "sha512-S/JXG/KrbIY06iyJPKfxr0qRxnhNOdkNXYBl/rmwgDd72cQLH9tEGkDm/yJPGvcSIUoikzfjMios9i+xT/uv9w==",
          "dev": true,
          "dependencies": {
            "@babel/helper-plugin-utils": "^7.25.7"
          },
          "engines": {
            "node": ">=6.9.0"
          },
          "peerDependencies": {
            "@babel/core": "^7.0.0-0"
          }
        },
        "node_modules/@babel/template": {
          "version": "7.25.7",
          "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.25.7.tgz",
          "integrity": "sha512-wRwtAgI3bAS+JGU2upWNL9lSlDcRCqD05BZ1n3X2ONLH1WilFP6O1otQjeMK/1g0pvYcXC7b/qVUB1keofjtZA==",
          "dev": true,
          "dependencies": {
            "@babel/code-frame": "^7.25.7",
            "@babel/parser": "^7.25.7",
            "@babel/types": "^7.25.7"
          },
          "engines": {
            "node": ">=6.9.0"
          }
        },
        "node_modules/@babel/traverse": {
          "version": "7.25.7",
          "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.25.7.tgz",
          "integrity": "sha512-jatJPT1Zjqvh/1FyJs6qAHL+Dzb7sTb+xr7Q+gM1b+1oBsMsQQ4FkVKb6dFlJvLlVssqkRzV05Jzervt9yhnzg==",
          "dev": true,
          "dependencies": {
            "@babel/code-frame": "^7.25.7",
            "@babel/generator": "^7.25.7",
            "@babel/parser": "^7.25.7",
            "@babel/template": "^7.25.7",
            "@babel/types": "^7.25.7",
            "debug": "^4.3.1",
            "globals": "^11.1.0"
          },
          "engines": {
            "node": ">=6.9.0"
          }
        },
        "node_modules/@babel/traverse/node_modules/globals": {
          "version": "11.12.0",
          "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
          "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==",
          "dev": true,
          "engines": {
            "node": ">=4"
          }
        },
        "node_modules/@babel/types": {
          "version": "7.25.7",
          "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.25.7.tgz",
          "integrity": "sha512-vwIVdXG+j+FOpkwqHRcBgHLYNL7XMkufrlaFvL9o6Ai9sJn9+PdyIL5qa0XzTZw084c+u9LOls53eoZWP/W5WQ==",
          "dev": true,
          "dependencies": {
            "@babel/helper-string-parser": "^7.25.7",
            "@babel/helper-validator-identifier": "^7.25.7",
            "to-fast-properties": "^2.0.0"
          },
          "engines": {
            "node": ">=6.9.0"
          }
        },
        "node_modules/@esbuild/aix-ppc64": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.21.5.tgz",
          "integrity": "sha512-1SDgH6ZSPTlggy1yI6+Dbkiz8xzpHJEVAlF/AM1tHPLsf5STom9rwtjE4hKAF20FfXXNTFqEYXyJNWh1GiZedQ==",
          "cpu": [
            "ppc64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "aix"
          ],
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@esbuild/android-arm": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.21.5.tgz",
          "integrity": "sha512-vCPvzSjpPHEi1siZdlvAlsPxXl7WbOVUBBAowWug4rJHb68Ox8KualB+1ocNvT5fjv6wpkX6o/iEpbDrf68zcg==",
          "cpu": [
            "arm"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "android"
          ],
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@esbuild/android-arm64": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.21.5.tgz",
          "integrity": "sha512-c0uX9VAUBQ7dTDCjq+wdyGLowMdtR/GoC2U5IYk/7D1H1JYC0qseD7+11iMP2mRLN9RcCMRcjC4YMclCzGwS/A==",
          "cpu": [
            "arm64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "android"
          ],
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@esbuild/android-x64": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.21.5.tgz",
          "integrity": "sha512-D7aPRUUNHRBwHxzxRvp856rjUHRFW1SdQATKXH2hqA0kAZb1hKmi02OpYRacl0TxIGz/ZmXWlbZgjwWYaCakTA==",
          "cpu": [
            "x64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "android"
          ],
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@esbuild/darwin-arm64": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.21.5.tgz",
          "integrity": "sha512-DwqXqZyuk5AiWWf3UfLiRDJ5EDd49zg6O9wclZ7kUMv2WRFr4HKjXp/5t8JZ11QbQfUS6/cRCKGwYhtNAY88kQ==",
          "cpu": [
            "arm64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "darwin"
          ],
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@esbuild/darwin-x64": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.21.5.tgz",
          "integrity": "sha512-se/JjF8NlmKVG4kNIuyWMV/22ZaerB+qaSi5MdrXtd6R08kvs2qCN4C09miupktDitvh8jRFflwGFBQcxZRjbw==",
          "cpu": [
            "x64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "darwin"
          ],
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@esbuild/freebsd-arm64": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.21.5.tgz",
          "integrity": "sha512-5JcRxxRDUJLX8JXp/wcBCy3pENnCgBR9bN6JsY4OmhfUtIHe3ZW0mawA7+RDAcMLrMIZaf03NlQiX9DGyB8h4g==",
          "cpu": [
            "arm64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "freebsd"
          ],
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@esbuild/freebsd-x64": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.21.5.tgz",
          "integrity": "sha512-J95kNBj1zkbMXtHVH29bBriQygMXqoVQOQYA+ISs0/2l3T9/kj42ow2mpqerRBxDJnmkUDCaQT/dfNXWX/ZZCQ==",
          "cpu": [
            "x64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "freebsd"
          ],
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@esbuild/linux-arm": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.21.5.tgz",
          "integrity": "sha512-bPb5AHZtbeNGjCKVZ9UGqGwo8EUu4cLq68E95A53KlxAPRmUyYv2D6F0uUI65XisGOL1hBP5mTronbgo+0bFcA==",
          "cpu": [
            "arm"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "linux"
          ],
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@esbuild/linux-arm64": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.21.5.tgz",
          "integrity": "sha512-ibKvmyYzKsBeX8d8I7MH/TMfWDXBF3db4qM6sy+7re0YXya+K1cem3on9XgdT2EQGMu4hQyZhan7TeQ8XkGp4Q==",
          "cpu": [
            "arm64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "linux"
          ],
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@esbuild/linux-ia32": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.21.5.tgz",
          "integrity": "sha512-YvjXDqLRqPDl2dvRODYmmhz4rPeVKYvppfGYKSNGdyZkA01046pLWyRKKI3ax8fbJoK5QbxblURkwK/MWY18Tg==",
          "cpu": [
            "ia32"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "linux"
          ],
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@esbuild/linux-loong64": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.21.5.tgz",
          "integrity": "sha512-uHf1BmMG8qEvzdrzAqg2SIG/02+4/DHB6a9Kbya0XDvwDEKCoC8ZRWI5JJvNdUjtciBGFQ5PuBlpEOXQj+JQSg==",
          "cpu": [
            "loong64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "linux"
          ],
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@esbuild/linux-mips64el": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.21.5.tgz",
          "integrity": "sha512-IajOmO+KJK23bj52dFSNCMsz1QP1DqM6cwLUv3W1QwyxkyIWecfafnI555fvSGqEKwjMXVLokcV5ygHW5b3Jbg==",
          "cpu": [
            "mips64el"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "linux"
          ],
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@esbuild/linux-ppc64": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.21.5.tgz",
          "integrity": "sha512-1hHV/Z4OEfMwpLO8rp7CvlhBDnjsC3CttJXIhBi+5Aj5r+MBvy4egg7wCbe//hSsT+RvDAG7s81tAvpL2XAE4w==",
          "cpu": [
            "ppc64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "linux"
          ],
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@esbuild/linux-riscv64": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.21.5.tgz",
          "integrity": "sha512-2HdXDMd9GMgTGrPWnJzP2ALSokE/0O5HhTUvWIbD3YdjME8JwvSCnNGBnTThKGEB91OZhzrJ4qIIxk/SBmyDDA==",
          "cpu": [
            "riscv64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "linux"
          ],
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@esbuild/linux-s390x": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.21.5.tgz",
          "integrity": "sha512-zus5sxzqBJD3eXxwvjN1yQkRepANgxE9lgOW2qLnmr8ikMTphkjgXu1HR01K4FJg8h1kEEDAqDcZQtbrRnB41A==",
          "cpu": [
            "s390x"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "linux"
          ],
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@esbuild/linux-x64": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.21.5.tgz",
          "integrity": "sha512-1rYdTpyv03iycF1+BhzrzQJCdOuAOtaqHTWJZCWvijKD2N5Xu0TtVC8/+1faWqcP9iBCWOmjmhoH94dH82BxPQ==",
          "cpu": [
            "x64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "linux"
          ],
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@esbuild/netbsd-x64": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.21.5.tgz",
          "integrity": "sha512-Woi2MXzXjMULccIwMnLciyZH4nCIMpWQAs049KEeMvOcNADVxo0UBIQPfSmxB3CWKedngg7sWZdLvLczpe0tLg==",
          "cpu": [
            "x64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "netbsd"
          ],
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@esbuild/openbsd-x64": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.21.5.tgz",
          "integrity": "sha512-HLNNw99xsvx12lFBUwoT8EVCsSvRNDVxNpjZ7bPn947b8gJPzeHWyNVhFsaerc0n3TsbOINvRP2byTZ5LKezow==",
          "cpu": [
            "x64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "openbsd"
          ],
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@esbuild/sunos-x64": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.21.5.tgz",
          "integrity": "sha512-6+gjmFpfy0BHU5Tpptkuh8+uw3mnrvgs+dSPQXQOv3ekbordwnzTVEb4qnIvQcYXq6gzkyTnoZ9dZG+D4garKg==",
          "cpu": [
            "x64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "sunos"
          ],
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@esbuild/win32-arm64": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.21.5.tgz",
          "integrity": "sha512-Z0gOTd75VvXqyq7nsl93zwahcTROgqvuAcYDUr+vOv8uHhNSKROyU961kgtCD1e95IqPKSQKH7tBTslnS3tA8A==",
          "cpu": [
            "arm64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "win32"
          ],
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@esbuild/win32-ia32": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.21.5.tgz",
          "integrity": "sha512-SWXFF1CL2RVNMaVs+BBClwtfZSvDgtL//G/smwAc5oVK/UPu2Gu9tIaRgFmYFFKrmg3SyAjSrElf0TiJ1v8fYA==",
          "cpu": [
            "ia32"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "win32"
          ],
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@esbuild/win32-x64": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.21.5.tgz",
          "integrity": "sha512-tQd/1efJuzPC6rCFwEvLtci/xNFcTZknmXs98FYDfGE4wP9ClFV98nyKrzJKVPMhdDnjzLhdUyMX4PsQAPjwIw==",
          "cpu": [
            "x64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "win32"
          ],
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@eslint-community/eslint-utils": {
          "version": "4.4.0",
          "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.4.0.tgz",
          "integrity": "sha512-1/sA4dwrzBAyeUoQ6oxahHKmrZvsnLCg4RfxW3ZFGGmQkSNQPFNLV9CUEFQP1x9EYXHTo5p6xdhZM1Ne9p/AfA==",
          "dev": true,
          "dependencies": {
            "eslint-visitor-keys": "^3.3.0"
          },
          "engines": {
            "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
          },
          "peerDependencies": {
            "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
          }
        },
        "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": {
          "version": "3.4.3",
          "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
          "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
          "dev": true,
          "engines": {
            "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
          },
          "funding": {
            "url": "https://opencollective.com/eslint"
          }
        },
        "node_modules/@eslint-community/regexpp": {
          "version": "4.11.1",
          "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.11.1.tgz",
          "integrity": "sha512-m4DVN9ZqskZoLU5GlWZadwDnYo3vAEydiUayB9widCl9ffWx2IvPnp6n3on5rJmziJSw9Bv+Z3ChDVdMwXCY8Q==",
          "dev": true,
          "engines": {
            "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
          }
        },
        "node_modules/@eslint/config-array": {
          "version": "0.18.0",
          "resolved": "https://registry.npmjs.org/@eslint/config-array/-/config-array-0.18.0.tgz",
          "integrity": "sha512-fTxvnS1sRMu3+JjXwJG0j/i4RT9u4qJ+lqS/yCGap4lH4zZGzQ7tu+xZqQmcMZq5OBZDL4QRxQzRjkWcGt8IVw==",
          "dev": true,
          "dependencies": {
            "@eslint/object-schema": "^2.1.4",
            "debug": "^4.3.1",
            "minimatch": "^3.1.2"
          },
          "engines": {
            "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
          }
        },
        "node_modules/@eslint/core": {
          "version": "0.6.0",
          "resolved": "https://registry.npmjs.org/@eslint/core/-/core-0.6.0.tgz",
          "integrity": "sha512-8I2Q8ykA4J0x0o7cg67FPVnehcqWTBehu/lmY+bolPFHGjh49YzGBMXTvpqVgEbBdvNCSxj6iFgiIyHzf03lzg==",
          "dev": true,
          "engines": {
            "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
          }
        },
        "node_modules/@eslint/eslintrc": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-3.1.0.tgz",
          "integrity": "sha512-4Bfj15dVJdoy3RfZmmo86RK1Fwzn6SstsvK9JS+BaVKqC6QQQQyXekNaC+g+LKNgkQ+2VhGAzm6hO40AhMR3zQ==",
          "dev": true,
          "dependencies": {
            "ajv": "^6.12.4",
            "debug": "^4.3.2",
            "espree": "^10.0.1",
            "globals": "^14.0.0",
            "ignore": "^5.2.0",
            "import-fresh": "^3.2.1",
            "js-yaml": "^4.1.0",
            "minimatch": "^3.1.2",
            "strip-json-comments": "^3.1.1"
          },
          "engines": {
            "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
          },
          "funding": {
            "url": "https://opencollective.com/eslint"
          }
        },
        "node_modules/@eslint/eslintrc/node_modules/globals": {
          "version": "14.0.0",
          "resolved": "https://registry.npmjs.org/globals/-/globals-14.0.0.tgz",
          "integrity": "sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ==",
          "dev": true,
          "engines": {
            "node": ">=18"
          },
          "funding": {
            "url": "https://github.com/sponsors/sindresorhus"
          }
        },
        "node_modules/@eslint/js": {
          "version": "9.12.0",
          "resolved": "https://registry.npmjs.org/@eslint/js/-/js-9.12.0.tgz",
          "integrity": "sha512-eohesHH8WFRUprDNyEREgqP6beG6htMeUYeCpkEgBCieCMme5r9zFWjzAJp//9S+Kub4rqE+jXe9Cp1a7IYIIA==",
          "dev": true,
          "engines": {
            "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
          }
        },
        "node_modules/@eslint/object-schema": {
          "version": "2.1.4",
          "resolved": "https://registry.npmjs.org/@eslint/object-schema/-/object-schema-2.1.4.tgz",
          "integrity": "sha512-BsWiH1yFGjXXS2yvrf5LyuoSIIbPrGUWob917o+BTKuZ7qJdxX8aJLRxs1fS9n6r7vESrq1OUqb68dANcFXuQQ==",
          "dev": true,
          "engines": {
            "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
          }
        },
        "node_modules/@eslint/plugin-kit": {
          "version": "0.2.0",
          "resolved": "https://registry.npmjs.org/@eslint/plugin-kit/-/plugin-kit-0.2.0.tgz",
          "integrity": "sha512-vH9PiIMMwvhCx31Af3HiGzsVNULDbyVkHXwlemn/B0TFj/00ho3y55efXrUZTfQipxoHC5u4xq6zblww1zm1Ig==",
          "dev": true,
          "dependencies": {
            "levn": "^0.4.1"
          },
          "engines": {
            "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
          }
        },
        "node_modules/@humanfs/core": {
          "version": "0.19.0",
          "resolved": "https://registry.npmjs.org/@humanfs/core/-/core-0.19.0.tgz",
          "integrity": "sha512-2cbWIHbZVEweE853g8jymffCA+NCMiuqeECeBBLm8dg2oFdjuGJhgN4UAbI+6v0CKbbhvtXA4qV8YR5Ji86nmw==",
          "dev": true,
          "engines": {
            "node": ">=18.18.0"
          }
        },
        "node_modules/@humanfs/node": {
          "version": "0.16.5",
          "resolved": "https://registry.npmjs.org/@humanfs/node/-/node-0.16.5.tgz",
          "integrity": "sha512-KSPA4umqSG4LHYRodq31VDwKAvaTF4xmVlzM8Aeh4PlU1JQ3IG0wiA8C25d3RQ9nJyM3mBHyI53K06VVL/oFFg==",
          "dev": true,
          "dependencies": {
            "@humanfs/core": "^0.19.0",
            "@humanwhocodes/retry": "^0.3.0"
          },
          "engines": {
            "node": ">=18.18.0"
          }
        },
        "node_modules/@humanwhocodes/module-importer": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
          "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
          "dev": true,
          "engines": {
            "node": ">=12.22"
          },
          "funding": {
            "type": "github",
            "url": "https://github.com/sponsors/nzakas"
          }
        },
        "node_modules/@humanwhocodes/retry": {
          "version": "0.3.1",
          "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.3.1.tgz",
          "integrity": "sha512-JBxkERygn7Bv/GbN5Rv8Ul6LVknS+5Bp6RgDC/O8gEBU/yeH5Ui5C/OlWrTb6qct7LjjfT6Re2NxB0ln0yYybA==",
          "dev": true,
          "engines": {
            "node": ">=18.18"
          },
          "funding": {
            "type": "github",
            "url": "https://github.com/sponsors/nzakas"
          }
        },
        "node_modules/@isaacs/cliui": {
          "version": "8.0.2",
          "resolved": "https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz",
          "integrity": "sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==",
          "dev": true,
          "dependencies": {
            "string-width": "^5.1.2",
            "string-width-cjs": "npm:string-width@^4.2.0",
            "strip-ansi": "^7.0.1",
            "strip-ansi-cjs": "npm:strip-ansi@^6.0.1",
            "wrap-ansi": "^8.1.0",
            "wrap-ansi-cjs": "npm:wrap-ansi@^7.0.0"
          },
          "engines": {
            "node": ">=12"
          }
        },
        "node_modules/@jridgewell/gen-mapping": {
          "version": "0.3.5",
          "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.5.tgz",
          "integrity": "sha512-IzL8ZoEDIBRWEzlCcRhOaCupYyN5gdIK+Q6fbFdPDg6HqX6jpkItn7DFIpW9LQzXG6Df9sA7+OKnq0qlz/GaQg==",
          "dev": true,
          "dependencies": {
            "@jridgewell/set-array": "^1.2.1",
            "@jridgewell/sourcemap-codec": "^1.4.10",
            "@jridgewell/trace-mapping": "^0.3.24"
          },
          "engines": {
            "node": ">=6.0.0"
          }
        },
        "node_modules/@jridgewell/resolve-uri": {
          "version": "3.1.2",
          "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
          "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
          "dev": true,
          "engines": {
            "node": ">=6.0.0"
          }
        },
        "node_modules/@jridgewell/set-array": {
          "version": "1.2.1",
          "resolved": "https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.2.1.tgz",
          "integrity": "sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==",
          "dev": true,
          "engines": {
            "node": ">=6.0.0"
          }
        },
        "node_modules/@jridgewell/sourcemap-codec": {
          "version": "1.5.0",
          "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz",
          "integrity": "sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==",
          "dev": true
        },
        "node_modules/@jridgewell/trace-mapping": {
          "version": "0.3.25",
          "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.25.tgz",
          "integrity": "sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==",
          "dev": true,
          "dependencies": {
            "@jridgewell/resolve-uri": "^3.1.0",
            "@jridgewell/sourcemap-codec": "^1.4.14"
          }
        },
        "node_modules/@nodelib/fs.scandir": {
          "version": "2.1.5",
          "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
          "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
          "dev": true,
          "dependencies": {
            "@nodelib/fs.stat": "2.0.5",
            "run-parallel": "^1.1.9"
          },
          "engines": {
            "node": ">= 8"
          }
        },
        "node_modules/@nodelib/fs.stat": {
          "version": "2.0.5",
          "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
          "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
          "dev": true,
          "engines": {
            "node": ">= 8"
          }
        },
        "node_modules/@nodelib/fs.walk": {
          "version": "1.2.8",
          "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
          "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
          "dev": true,
          "dependencies": {
            "@nodelib/fs.scandir": "2.1.5",
            "fastq": "^1.6.0"
          },
          "engines": {
            "node": ">= 8"
          }
        },
        "node_modules/@pkgjs/parseargs": {
          "version": "0.11.0",
          "resolved": "https://registry.npmjs.org/@pkgjs/parseargs/-/parseargs-0.11.0.tgz",
          "integrity": "sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==",
          "dev": true,
          "optional": true,
          "engines": {
            "node": ">=14"
          }
        },
        "node_modules/@rollup/rollup-android-arm-eabi": {
          "version": "4.24.0",
          "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.24.0.tgz",
          "integrity": "sha512-Q6HJd7Y6xdB48x8ZNVDOqsbh2uByBhgK8PiQgPhwkIw/HC/YX5Ghq2mQY5sRMZWHb3VsFkWooUVOZHKr7DmDIA==",
          "cpu": [
            "arm"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "android"
          ]
        },
        "node_modules/@rollup/rollup-android-arm64": {
          "version": "4.24.0",
          "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.24.0.tgz",
          "integrity": "sha512-ijLnS1qFId8xhKjT81uBHuuJp2lU4x2yxa4ctFPtG+MqEE6+C5f/+X/bStmxapgmwLwiL3ih122xv8kVARNAZA==",
          "cpu": [
            "arm64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "android"
          ]
        },
        "node_modules/@rollup/rollup-darwin-arm64": {
          "version": "4.24.0",
          "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.24.0.tgz",
          "integrity": "sha512-bIv+X9xeSs1XCk6DVvkO+S/z8/2AMt/2lMqdQbMrmVpgFvXlmde9mLcbQpztXm1tajC3raFDqegsH18HQPMYtA==",
          "cpu": [
            "arm64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "darwin"
          ]
        },
        "node_modules/@rollup/rollup-darwin-x64": {
          "version": "4.24.0",
          "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.24.0.tgz",
          "integrity": "sha512-X6/nOwoFN7RT2svEQWUsW/5C/fYMBe4fnLK9DQk4SX4mgVBiTA9h64kjUYPvGQ0F/9xwJ5U5UfTbl6BEjaQdBQ==",
          "cpu": [
            "x64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "darwin"
          ]
        },
        "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
          "version": "4.24.0",
          "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.24.0.tgz",
          "integrity": "sha512-0KXvIJQMOImLCVCz9uvvdPgfyWo93aHHp8ui3FrtOP57svqrF/roSSR5pjqL2hcMp0ljeGlU4q9o/rQaAQ3AYA==",
          "cpu": [
            "arm"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "linux"
          ]
        },
        "node_modules/@rollup/rollup-linux-arm-musleabihf": {
          "version": "4.24.0",
          "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.24.0.tgz",
          "integrity": "sha512-it2BW6kKFVh8xk/BnHfakEeoLPv8STIISekpoF+nBgWM4d55CZKc7T4Dx1pEbTnYm/xEKMgy1MNtYuoA8RFIWw==",
          "cpu": [
            "arm"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "linux"
          ]
        },
        "node_modules/@rollup/rollup-linux-arm64-gnu": {
          "version": "4.24.0",
          "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.24.0.tgz",
          "integrity": "sha512-i0xTLXjqap2eRfulFVlSnM5dEbTVque/3Pi4g2y7cxrs7+a9De42z4XxKLYJ7+OhE3IgxvfQM7vQc43bwTgPwA==",
          "cpu": [
            "arm64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "linux"
          ]
        },
        "node_modules/@rollup/rollup-linux-arm64-musl": {
          "version": "4.24.0",
          "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.24.0.tgz",
          "integrity": "sha512-9E6MKUJhDuDh604Qco5yP/3qn3y7SLXYuiC0Rpr89aMScS2UAmK1wHP2b7KAa1nSjWJc/f/Lc0Wl1L47qjiyQw==",
          "cpu": [
            "arm64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "linux"
          ]
        },
        "node_modules/@rollup/rollup-linux-powerpc64le-gnu": {
          "version": "4.24.0",
          "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-powerpc64le-gnu/-/rollup-linux-powerpc64le-gnu-4.24.0.tgz",
          "integrity": "sha512-2XFFPJ2XMEiF5Zi2EBf4h73oR1V/lycirxZxHZNc93SqDN/IWhYYSYj8I9381ikUFXZrz2v7r2tOVk2NBwxrWw==",
          "cpu": [
            "ppc64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "linux"
          ]
        },
        "node_modules/@rollup/rollup-linux-riscv64-gnu": {
          "version": "4.24.0",
          "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.24.0.tgz",
          "integrity": "sha512-M3Dg4hlwuntUCdzU7KjYqbbd+BLq3JMAOhCKdBE3TcMGMZbKkDdJ5ivNdehOssMCIokNHFOsv7DO4rlEOfyKpg==",
          "cpu": [
            "riscv64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "linux"
          ]
        },
        "node_modules/@rollup/rollup-linux-s390x-gnu": {
          "version": "4.24.0",
          "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.24.0.tgz",
          "integrity": "sha512-mjBaoo4ocxJppTorZVKWFpy1bfFj9FeCMJqzlMQGjpNPY9JwQi7OuS1axzNIk0nMX6jSgy6ZURDZ2w0QW6D56g==",
          "cpu": [
            "s390x"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "linux"
          ]
        },
        "node_modules/@rollup/rollup-linux-x64-gnu": {
          "version": "4.24.0",
          "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.24.0.tgz",
          "integrity": "sha512-ZXFk7M72R0YYFN5q13niV0B7G8/5dcQ9JDp8keJSfr3GoZeXEoMHP/HlvqROA3OMbMdfr19IjCeNAnPUG93b6A==",
          "cpu": [
            "x64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "linux"
          ]
        },
        "node_modules/@rollup/rollup-linux-x64-musl": {
          "version": "4.24.0",
          "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.24.0.tgz",
          "integrity": "sha512-w1i+L7kAXZNdYl+vFvzSZy8Y1arS7vMgIy8wusXJzRrPyof5LAb02KGr1PD2EkRcl73kHulIID0M501lN+vobQ==",
          "cpu": [
            "x64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "linux"
          ]
        },
        "node_modules/@rollup/rollup-win32-arm64-msvc": {
          "version": "4.24.0",
          "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.24.0.tgz",
          "integrity": "sha512-VXBrnPWgBpVDCVY6XF3LEW0pOU51KbaHhccHw6AS6vBWIC60eqsH19DAeeObl+g8nKAz04QFdl/Cefta0xQtUQ==",
          "cpu": [
            "arm64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "win32"
          ]
        },
        "node_modules/@rollup/rollup-win32-ia32-msvc": {
          "version": "4.24.0",
          "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.24.0.tgz",
          "integrity": "sha512-xrNcGDU0OxVcPTH/8n/ShH4UevZxKIO6HJFK0e15XItZP2UcaiLFd5kiX7hJnqCbSztUF8Qot+JWBC/QXRPYWQ==",
          "cpu": [
            "ia32"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "win32"
          ]
        },
        "node_modules/@rollup/rollup-win32-x64-msvc": {
          "version": "4.24.0",
          "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.24.0.tgz",
          "integrity": "sha512-fbMkAF7fufku0N2dE5TBXcNlg0pt0cJue4xBRE2Qc5Vqikxr4VCgKj/ht6SMdFcOacVA9rqF70APJ8RN/4vMJw==",
          "cpu": [
            "x64"
          ],
          "dev": true,
          "optional": true,
          "os": [
            "win32"
          ]
        },
        "node_modules/@supabase/auth-js": {
          "version": "2.71.1",
          "resolved": "https://registry.npmjs.org/@supabase/auth-js/-/auth-js-2.71.1.tgz",
          "integrity": "sha512-mMIQHBRc+SKpZFRB2qtupuzulaUhFYupNyxqDj5Jp/LyPvcWvjaJzZzObv6URtL/O6lPxkanASnotGtNpS3H2Q==",
          "dependencies": {
            "@supabase/node-fetch": "^2.6.14"
          }
        },
        "node_modules/@supabase/functions-js": {
          "version": "2.4.6",
          "resolved": "https://registry.npmjs.org/@supabase/functions-js/-/functions-js-2.4.6.tgz",
          "integrity": "sha512-bhjZ7rmxAibjgmzTmQBxJU6ZIBCCJTc3Uwgvdi4FewueUTAGO5hxZT1Sj6tiD+0dSXf9XI87BDdJrg12z8Uaew==",
          "dependencies": {
            "@supabase/node-fetch": "^2.6.14"
          }
        },
        "node_modules/@supabase/node-fetch": {
          "version": "2.6.15",
          "resolved": "https://registry.npmjs.org/@supabase/node-fetch/-/node-fetch-2.6.15.tgz",
          "integrity": "sha512-1ibVeYUacxWYi9i0cf5efil6adJ9WRyZBLivgjs+AUpewx1F3xPi7gLgaASI2SmIQxPoCEjAsLAzKPgMJVgOUQ==",
          "dependencies": {
            "whatwg-url": "^5.0.0"
          },
          "engines": {
            "node": "4.x || >=6.0.0"
          }
        },
        "node_modules/@supabase/postgrest-js": {
          "version": "1.21.4",
          "resolved": "https://registry.npmjs.org/@supabase/postgrest-js/-/postgrest-js-1.21.4.tgz",
          "integrity": "sha512-TxZCIjxk6/dP9abAi89VQbWWMBbybpGWyvmIzTd79OeravM13OjR/YEYeyUOPcM1C3QyvXkvPZhUfItvmhY1IQ==",
          "dependencies": {
            "@supabase/node-fetch": "^2.6.14"
          }
        },
        "node_modules/@supabase/realtime-js": {
          "version": "2.15.5",
          "resolved": "https://registry.npmjs.org/@supabase/realtime-js/-/realtime-js-2.15.5.tgz",
          "integrity": "sha512-/Rs5Vqu9jejRD8ZeuaWXebdkH+J7V6VySbCZ/zQM93Ta5y3mAmocjioa/nzlB6qvFmyylUgKVS1KpE212t30OA==",
          "dependencies": {
            "@supabase/node-fetch": "^2.6.13",
            "@types/phoenix": "^1.6.6",
            "@types/ws": "^8.18.1",
            "ws": "^8.18.2"
          }
        },
        "node_modules/@supabase/storage-js": {
          "version": "2.12.1",
          "resolved": "https://registry.npmjs.org/@supabase/storage-js/-/storage-js-2.12.1.tgz",
          "integrity": "sha512-QWg3HV6Db2J81VQx0PqLq0JDBn4Q8B1FYn1kYcbla8+d5WDmTdwwMr+EJAxNOSs9W4mhKMv+EYCpCrTFlTj4VQ==",
          "dependencies": {
            "@supabase/node-fetch": "^2.6.14"
          }
        },
        "node_modules/@supabase/supabase-js": {
          "version": "2.57.4",
          "resolved": "https://registry.npmjs.org/@supabase/supabase-js/-/supabase-js-2.57.4.tgz",
          "integrity": "sha512-LcbTzFhHYdwfQ7TRPfol0z04rLEyHabpGYANME6wkQ/kLtKNmI+Vy+WEM8HxeOZAtByUFxoUTTLwhXmrh+CcVw==",
          "dependencies": {
            "@supabase/auth-js": "2.71.1",
            "@supabase/functions-js": "2.4.6",
            "@supabase/node-fetch": "2.6.15",
            "@supabase/postgrest-js": "1.21.4",
            "@supabase/realtime-js": "2.15.5",
            "@supabase/storage-js": "2.12.1"
          }
        },
        "node_modules/@types/babel__core": {
          "version": "7.20.5",
          "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz",
          "integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
          "dev": true,
          "dependencies": {
            "@babel/parser": "^7.20.7",
            "@babel/types": "^7.20.7",
            "@types/babel__generator": "*",
            "@types/babel__template": "*",
            "@types/babel__traverse": "*"
          }
        },
        "node_modules/@types/babel__generator": {
          "version": "7.6.8",
          "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.6.8.tgz",
          "integrity": "sha512-ASsj+tpEDsEiFr1arWrlN6V3mdfjRMZt6LtK/Vp/kreFLnr5QH5+DhvD5nINYZXzwJvXeGq+05iUXcAzVrqWtw==",
          "dev": true,
          "dependencies": {
            "@babel/types": "^7.0.0"
          }
        },
        "node_modules/@types/babel__template": {
          "version": "7.4.4",
          "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
          "integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
          "dev": true,
          "dependencies": {
            "@babel/parser": "^7.1.0",
            "@babel/types": "^7.0.0"
          }
        },
        "node_modules/@types/babel__traverse": {
          "version": "7.20.6",
          "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.20.6.tgz",
          "integrity": "sha512-r1bzfrm0tomOI8g1SzvCaQHo6Lcv6zu0EA+W2kHrt8dyrHQxGzBBL4kdkzIS+jBMV+EYcMAEAqXqYaLJq5rOZg==",
          "dev": true,
          "dependencies": {
            "@babel/types": "^7.20.7"
          }
        },
        "node_modules/@types/estree": {
          "version": "1.0.6",
          "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.6.tgz",
          "integrity": "sha512-AYnb1nQyY49te+VRAVgmzfcgjYS91mY5P0TKUDCLEM+gNnA+3T6rWITXRLYCpahpqSQbN5cE+gHpnPyXjHWxcw==",
          "dev": true
        },
        "node_modules/@types/json-schema": {
          "version": "7.0.15",
          "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
          "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
          "dev": true
        },
        "node_modules/@types/node": {
          "version": "24.3.1",
          "resolved": "https://registry.npmjs.org/@types/node/-/node-24.3.1.tgz",
          "integrity": "sha512-3vXmQDXy+woz+gnrTvuvNrPzekOi+Ds0ReMxw0LzBiK3a+1k0kQn9f2NWk+lgD4rJehFUmYy2gMhJ2ZI+7YP9g==",
          "dependencies": {
            "undici-types": "~7.10.0"
          }
        },
        "node_modules/@types/phoenix": {
          "version": "1.6.6",
          "resolved": "https://registry.npmjs.org/@types/phoenix/-/phoenix-1.6.6.tgz",
          "integrity": "sha512-PIzZZlEppgrpoT2QgbnDU+MMzuR6BbCjllj0bM70lWoejMeNJAxCchxnv7J3XFkI8MpygtRpzXrIlmWUBclP5A=="
        },
        "node_modules/@types/prop-types": {
          "version": "15.7.13",
          "resolved": "https://registry.npmjs.org/@types/prop-types/-/prop-types-15.7.13.tgz",
          "integrity": "sha512-hCZTSvwbzWGvhqxp/RqVqwU999pBf2vp7hzIjiYOsl8wqOmUxkQ6ddw1cV3l8811+kdUFus/q4d1Y3E3SyEifA==",
          "dev": true
        },
        "node_modules/@types/react": {
          "version": "18.3.11",
          "resolved": "https://registry.npmjs.org/@types/react/-/react-18.3.11.tgz",
          "integrity": "sha512-r6QZ069rFTjrEYgFdOck1gK7FLVsgJE7tTz0pQBczlBNUhBNk0MQH4UbnFSwjpQLMkLzgqvBBa+qGpLje16eTQ==",
          "dev": true,
          "dependencies": {
            "@types/prop-types": "*",
            "csstype": "^3.0.2"
          }
        },
        "node_modules/@types/react-dom": {
          "version": "18.3.0",
          "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-18.3.0.tgz",
          "integrity": "sha512-EhwApuTmMBmXuFOikhQLIBUn6uFg81SwLMOAUgodJF14SOBOCMdU04gDoYi0WOJJHD144TL32z4yDqCW3dnkQg==",
          "dev": true,
          "dependencies": {
            "@types/react": "*"
          }
        },
        "node_modules/@types/ws": {
          "version": "8.18.1",
          "resolved": "https://registry.npmjs.org/@types/ws/-/ws-8.18.1.tgz",
          "integrity": "sha512-ThVF6DCVhA8kUGy+aazFQ4kXQ7E1Ty7A3ypFOe0IcJV8O/M511G99AW24irKrW56Wt44yG9+ij8FaqoBGkuBXg==",
          "dependencies": {
            "@types/node": "*"
          }
        },
        "node_modules/@typescript-eslint/eslint-plugin": {
          "version": "8.8.1",
          "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-8.8.1.tgz",
          "integrity": "sha512-xfvdgA8AP/vxHgtgU310+WBnLB4uJQ9XdyP17RebG26rLtDrQJV3ZYrcopX91GrHmMoH8bdSwMRh2a//TiJ1jQ==",
          "dev": true,
          "dependencies": {
            "@eslint-community/regexpp": "^4.10.0",
            "@typescript-eslint/scope-manager": "8.8.1",
            "@typescript-eslint/type-utils": "8.8.1",
            "@typescript-eslint/utils": "8.8.1",
            "@typescript-eslint/visitor-keys": "8.8.1",
            "graphemer": "^1.4.0",
            "ignore": "^5.3.1",
            "natural-compare": "^1.4.0",
            "ts-api-utils": "^1.3.0"
          },
          "engines": {
            "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
          },
          "funding": {
            "type": "opencollective",
            "url": "https://opencollective.com/typescript-eslint"
          },
          "peerDependencies": {
            "@typescript-eslint/parser": "^8.0.0 || ^8.0.0-alpha.0",
            "eslint": "^8.57.0 || ^9.0.0"
          },
          "peerDependenciesMeta": {
            "typescript": {
              "optional": true
            }
          }
        },
        "node_modules/@typescript-eslint/parser": {
          "version": "8.8.1",
          "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-8.8.1.tgz",
          "integrity": "sha512-hQUVn2Lij2NAxVFEdvIGxT9gP1tq2yM83m+by3whWFsWC+1y8pxxxHUFE1UqDu2VsGi2i6RLcv4QvouM84U+ow==",
          "dev": true,
          "dependencies": {
            "@typescript-eslint/scope-manager": "8.8.1",
            "@typescript-eslint/types": "8.8.1",
            "@typescript-eslint/typescript-estree": "8.8.1",
            "@typescript-eslint/visitor-keys": "8.8.1",
            "debug": "^4.3.4"
          },
          "engines": {
            "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
          },
          "funding": {
            "type": "opencollective",
            "url": "https://opencollective.com/typescript-eslint"
          },
          "peerDependencies": {
            "eslint": "^8.57.0 || ^9.0.0"
          },
          "peerDependenciesMeta": {
            "typescript": {
              "optional": true
            }
          }
        },
        "node_modules/@typescript-eslint/scope-manager": {
          "version": "8.8.1",
          "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-8.8.1.tgz",
          "integrity": "sha512-X4JdU+66Mazev/J0gfXlcC/dV6JI37h+93W9BRYXrSn0hrE64IoWgVkO9MSJgEzoWkxONgaQpICWg8vAN74wlA==",
          "dev": true,
          "dependencies": {
            "@typescript-eslint/types": "8.8.1",
            "@typescript-eslint/visitor-keys": "8.8.1"
          },
          "engines": {
            "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
          },
          "funding": {
            "type": "opencollective",
            "url": "https://opencollective.com/typescript-eslint"
          }
        },
        "node_modules/@typescript-eslint/type-utils": {
          "version": "8.8.1",
          "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-8.8.1.tgz",
          "integrity": "sha512-qSVnpcbLP8CALORf0za+vjLYj1Wp8HSoiI8zYU5tHxRVj30702Z1Yw4cLwfNKhTPWp5+P+k1pjmD5Zd1nhxiZA==",
          "dev": true,
          "dependencies": {
            "@typescript-eslint/typescript-estree": "8.8.1",
            "@typescript-eslint/utils": "8.8.1",
            "debug": "^4.3.4",
            "ts-api-utils": "^1.3.0"
          },
          "engines": {
            "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
          },
          "funding": {
            "type": "opencollective",
            "url": "https://opencollective.com/typescript-eslint"
          },
          "peerDependenciesMeta": {
            "typescript": {
              "optional": true
            }
          }
        },
        "node_modules/@typescript-eslint/types": {
          "version": "8.8.1",
          "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-8.8.1.tgz",
          "integrity": "sha512-WCcTP4SDXzMd23N27u66zTKMuEevH4uzU8C9jf0RO4E04yVHgQgW+r+TeVTNnO1KIfrL8ebgVVYYMMO3+jC55Q==",
          "dev": true,
          "engines": {
            "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
          },
          "funding": {
            "type": "opencollective",
            "url": "https://opencollective.com/typescript-eslint"
          }
        },
        "node_modules/@typescript-eslint/typescript-estree": {
          "version": "8.8.1",
          "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-8.8.1.tgz",
          "integrity": "sha512-A5d1R9p+X+1js4JogdNilDuuq+EHZdsH9MjTVxXOdVFfTJXunKJR/v+fNNyO4TnoOn5HqobzfRlc70NC6HTcdg==",
          "dev": true,
          "dependencies": {
            "@typescript-eslint/types": "8.8.1",
            "@typescript-eslint/visitor-keys": "8.8.1",
            "debug": "^4.3.4",
            "fast-glob": "^3.3.2",
            "is-glob": "^4.0.3",
            "minimatch": "^9.0.4",
            "semver": "^7.6.0",
            "ts-api-utils": "^1.3.0"
          },
          "engines": {
            "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
          },
          "funding": {
            "type": "opencollective",
            "url": "https://opencollective.com/typescript-eslint"
          },
          "peerDependenciesMeta": {
            "typescript": {
              "optional": true
            }
          }
        },
        "node_modules/@typescript-eslint/typescript-estree/node_modules/brace-expansion": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
          "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
          "dev": true,
          "dependencies": {
            "balanced-match": "^1.0.0"
          }
        },
        "node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch": {
          "version": "9.0.5",
          "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
          "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
          "dev": true,
          "dependencies": {
            "brace-expansion": "^2.0.1"
          },
          "engines": {
            "node": ">=16 || 14 >=14.17"
          },
          "funding": {
            "url": "https://github.com/sponsors/isaacs"
          }
        },
        "node_modules/@typescript-eslint/typescript-estree/node_modules/semver": {
          "version": "7.6.3",
          "resolved": "https://registry.npmjs.org/semver/-/semver-7.6.3.tgz",
          "integrity": "sha512-oVekP1cKtI+CTDvHWYFUcMtsK/00wmAEfyqKfNdARm8u1wNVhSgaX7A8d4UuIlUI5e84iEwOhs7ZPYRmzU9U6A==",
          "dev": true,
          "bin": {
            "semver": "bin/semver.js"
          },
          "engines": {
            "node": ">=10"
          }
        },
        "node_modules/@typescript-eslint/utils": {
          "version": "8.8.1",
          "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-8.8.1.tgz",
          "integrity": "sha512-/QkNJDbV0bdL7H7d0/y0qBbV2HTtf0TIyjSDTvvmQEzeVx8jEImEbLuOA4EsvE8gIgqMitns0ifb5uQhMj8d9w==",
          "dev": true,
          "dependencies": {
            "@eslint-community/eslint-utils": "^4.4.0",
            "@typescript-eslint/scope-manager": "8.8.1",
            "@typescript-eslint/types": "8.8.1",
            "@typescript-eslint/typescript-estree": "8.8.1"
          },
          "engines": {
            "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
          },
          "funding": {
            "type": "opencollective",
            "url": "https://opencollective.com/typescript-eslint"
          },
          "peerDependencies": {
            "eslint": "^8.57.0 || ^9.0.0"
          }
        },
        "node_modules/@typescript-eslint/visitor-keys": {
          "version": "8.8.1",
          "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-8.8.1.tgz",
          "integrity": "sha512-0/TdC3aeRAsW7MDvYRwEc1Uwm0TIBfzjPFgg60UU2Haj5qsCs9cc3zNgY71edqE3LbWfF/WoZQd3lJoDXFQpag==",
          "dev": true,
          "dependencies": {
            "@typescript-eslint/types": "8.8.1",
            "eslint-visitor-keys": "^3.4.3"
          },
          "engines": {
            "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
          },
          "funding": {
            "type": "opencollective",
            "url": "https://opencollective.com/typescript-eslint"
          }
        },
        "node_modules/@typescript-eslint/visitor-keys/node_modules/eslint-visitor-keys": {
          "version": "3.4.3",
          "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
          "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
          "dev": true,
          "engines": {
            "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
          },
          "funding": {
            "url": "https://opencollective.com/eslint"
          }
        },
        "node_modules/@vitejs/plugin-react": {
          "version": "4.3.2",
          "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-4.3.2.tgz",
          "integrity": "sha512-hieu+o05v4glEBucTcKMK3dlES0OeJlD9YVOAPraVMOInBCwzumaIFiUjr4bHK7NPgnAHgiskUoceKercrN8vg==",
          "dev": true,
          "dependencies": {
            "@babel/core": "^7.25.2",
            "@babel/plugin-transform-react-jsx-self": "^7.24.7",
            "@babel/plugin-transform-react-jsx-source": "^7.24.7",
            "@types/babel__core": "^7.20.5",
            "react-refresh": "^0.14.2"
          },
          "engines": {
            "node": "^14.18.0 || >=16.0.0"
          },
          "peerDependencies": {
            "vite": "^4.2.0 || ^5.0.0"
          }
        },
        "node_modules/@xmldom/xmldom": {
          "version": "0.8.15",
          "resolved": "https://registry.npmjs.org/@xmldom/xmldom/-/xmldom-0.8.15.tgz",
          "integrity": "sha512-/5NV/vDALVFDXgLmfsy9TRCBlKwO2LNBFzpzvb9iIj+jR+eSc6DLYYvVOdivT/jm7MtU6TebYuRmzEOI7w40UA==",
          "license": "MIT",
          "engines": {
            "node": ">=10.0.0"
          }
        },
        "node_modules/acorn": {
          "version": "8.12.1",
          "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.12.1.tgz",
          "integrity": "sha512-tcpGyI9zbizT9JbV6oYE477V6mTlXvvi0T0G3SNIYE2apm/G5huBa1+K89VGeovbg+jycCrfhl3ADxErOuO6Jg==",
          "dev": true,
          "bin": {
            "acorn": "bin/acorn"
          },
          "engines": {
            "node": ">=0.4.0"
          }
        },
        "node_modules/acorn-jsx": {
          "version": "5.3.2",
          "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
          "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
          "dev": true,
          "peerDependencies": {
            "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
          }
        },
        "node_modules/ajv": {
          "version": "6.12.6",
          "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
          "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
          "dev": true,
          "dependencies": {
            "fast-deep-equal": "^3.1.1",
            "fast-json-stable-stringify": "^2.0.0",
            "json-schema-traverse": "^0.4.1",
            "uri-js": "^4.2.2"
          },
          "funding": {
            "type": "github",
            "url": "https://github.com/sponsors/epoberezkin"
          }
        },
        "node_modules/ansi-regex": {
          "version": "6.1.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.1.0.tgz",
          "integrity": "sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==",
          "dev": true,
          "engines": {
            "node": ">=12"
          },
          "funding": {
            "url": "https://github.com/chalk/ansi-regex?sponsor=1"
          }
        },
        "node_modules/ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "dependencies": {
            "color-convert": "^1.9.0"
          },
          "engines": {
            "node": ">=4"
          }
        },
        "node_modules/any-promise": {
          "version": "1.3.0",
          "resolved": "https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz",
          "integrity": "sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==",
          "dev": true
        },
        "node_modules/anymatch": {
          "version": "3.1.3",
          "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
          "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
          "dev": true,
          "dependencies": {
            "normalize-path": "^3.0.0",
            "picomatch": "^2.0.4"
          },
          "engines": {
            "node": ">= 8"
          }
        },
        "node_modules/arg": {
          "version": "5.0.2",
          "resolved": "https://registry.npmjs.org/arg/-/arg-5.0.2.tgz",
          "integrity": "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==",
          "dev": true
        },
        "node_modules/argparse": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
          "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
          "dev": true
        },
        "node_modules/autoprefixer": {
          "version": "10.4.20",
          "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.20.tgz",
          "integrity": "sha512-XY25y5xSv/wEoqzDyXXME4AFfkZI0P23z6Fs3YgymDnKJkCGOnkL0iTxCa85UTqaSgfcqyf3UA6+c7wUvx/16g==",
          "dev": true,
          "funding": [
            {
              "type": "opencollective",
              "url": "https://opencollective.com/postcss/"
            },
            {
              "type": "tidelift",
              "url": "https://tidelift.com/funding/github/npm/autoprefixer"
            },
            {
              "type": "github",
              "url": "https://github.com/sponsors/ai"
            }
          ],
          "dependencies": {
            "browserslist": "^4.23.3",
            "caniuse-lite": "^1.0.30001646",
            "fraction.js": "^4.3.7",
            "normalize-range": "^0.1.2",
            "picocolors": "^1.0.1",
            "postcss-value-parser": "^4.2.0"
          },
          "bin": {
            "autoprefixer": "bin/autoprefixer"
          },
          "engines": {
            "node": "^10 || ^12 || >=14"
          },
          "peerDependencies": {
            "postcss": "^8.1.0"
          }
        },
        "node_modules/balanced-match": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
          "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
          "dev": true
        },
        "node_modules/base64-js": {
          "version": "1.5.1",
          "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
          "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
          "funding": [
            {
              "type": "github",
              "url": "https://github.com/sponsors/feross"
            },
            {
              "type": "patreon",
              "url": "https://www.patreon.com/feross"
            },
            {
              "type": "consulting",
              "url": "https://feross.org/support"
            }
          ],
          "license": "MIT"
        },
        "node_modules/binary-extensions": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
          "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
          "dev": true,
          "engines": {
            "node": ">=8"
          },
          "funding": {
            "url": "https://github.com/sponsors/sindresorhus"
          }
        },
        "node_modules/bluebird": {
          "version": "3.4.7",
          "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-3.4.7.tgz",
          "integrity": "sha512-iD3898SR7sWVRHbiQv+sHUtHnMvC1o3nW5rAcqnq3uOn07DSAppZYUkIGslDz6gXC7HfunPe7YVBgoEJASPcHA==",
          "license": "MIT"
        },
        "node_modules/brace-expansion": {
          "version": "1.1.11",
          "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
          "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
          "dev": true,
          "dependencies": {
            "balanced-match": "^1.0.0",
            "concat-map": "0.0.1"
          }
        },
        "node_modules/braces": {
          "version": "3.0.3",
          "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
          "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
          "dev": true,
          "dependencies": {
            "fill-range": "^7.1.1"
          },
          "engines": {
            "node": ">=8"
          }
        },
        "node_modules/browserslist": {
          "version": "4.24.0",
          "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.24.0.tgz",
          "integrity": "sha512-Rmb62sR1Zpjql25eSanFGEhAxcFwfA1K0GuQcLoaJBAcENegrQut3hYdhXFF1obQfiDyqIW/cLM5HSJ/9k884A==",
          "dev": true,
          "funding": [
            {
              "type": "opencollective",
              "url": "https://opencollective.com/browserslist"
            },
            {
              "type": "tidelift",
              "url": "https://tidelift.com/funding/github/npm/browserslist"
            },
            {
              "type": "github",
              "url": "https://github.com/sponsors/ai"
            }
          ],
          "dependencies": {
            "caniuse-lite": "^1.0.30001663",
            "electron-to-chromium": "^1.5.28",
            "node-releases": "^2.0.18",
            "update-browserslist-db": "^1.1.0"
          },
          "bin": {
            "browserslist": "cli.js"
          },
          "engines": {
            "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
          }
        },
        "node_modules/callsites": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
          "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
          "dev": true,
          "engines": {
            "node": ">=6"
          }
        },
        "node_modules/camelcase-css": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/camelcase-css/-/camelcase-css-2.0.1.tgz",
          "integrity": "sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==",
          "dev": true,
          "engines": {
            "node": ">= 6"
          }
        },
        "node_modules/caniuse-lite": {
          "version": "1.0.30001667",
          "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001667.tgz",
          "integrity": "sha512-7LTwJjcRkzKFmtqGsibMeuXmvFDfZq/nzIjnmgCGzKKRVzjD72selLDK1oPF/Oxzmt4fNcPvTDvGqSDG4tCALw==",
          "dev": true,
          "funding": [
            {
              "type": "opencollective",
              "url": "https://opencollective.com/browserslist"
            },
            {
              "type": "tidelift",
              "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
            },
            {
              "type": "github",
              "url": "https://github.com/sponsors/ai"
            }
          ]
        },
        "node_modules/chalk": {
          "version": "2.4.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
          "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
          "dev": true,
          "dependencies": {
            "ansi-styles": "^3.2.1",
            "escape-string-regexp": "^1.0.5",
            "supports-color": "^5.3.0"
          },
          "engines": {
            "node": ">=4"
          }
        },
        "node_modules/chokidar": {
          "version": "3.6.0",
          "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
          "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
          "dev": true,
          "dependencies": {
            "anymatch": "~3.1.2",
            "braces": "~3.0.2",
            "glob-parent": "~5.1.2",
            "is-binary-path": "~2.1.0",
            "is-glob": "~4.0.1",
            "normalize-path": "~3.0.0",
            "readdirp": "~3.6.0"
          },
          "engines": {
            "node": ">= 8.10.0"
          },
          "funding": {
            "url": "https://paulmillr.com/funding/"
          },
          "optionalDependencies": {
            "fsevents": "~2.3.2"
          }
        },
        "node_modules/chokidar/node_modules/glob-parent": {
          "version": "5.1.2",
          "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
          "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
          "dev": true,
          "dependencies": {
            "is-glob": "^4.0.1"
          },
          "engines": {
            "node": ">= 6"
          }
        },
        "node_modules/color-convert": {
          "version": "1.9.3",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
          "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
          "dev": true,
          "dependencies": {
            "color-name": "1.1.3"
          }
        },
        "node_modules/color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha512-72fSenhMw2HZMTVHeCA9KCmpEIbzWiQsjN+BHcBbS9vr1mtt+vJjPdksIBNUmKAW8TFUDPJK5SUU3QhE9NEXDw==",
          "dev": true
        },
        "node_modules/commander": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
          "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
          "dev": true,
          "engines": {
            "node": ">= 6"
          }
        },
        "node_modules/concat-map": {
          "version": "0.0.1",
          "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
          "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
          "dev": true
        },
        "node_modules/convert-source-map": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
          "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
          "dev": true
        },
        "node_modules/core-util-is": {
          "version": "1.0.3",
          "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz",
          "integrity": "sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ==",
          "license": "MIT"
        },
        "node_modules/cross-spawn": {
          "version": "7.0.3",
          "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz",
          "integrity": "sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==",
          "dev": true,
          "dependencies": {
            "path-key": "^3.1.0",
            "shebang-command": "^2.0.0",
            "which": "^2.0.1"
          },
          "engines": {
            "node": ">= 8"
          }
        },
        "node_modules/cssesc": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
          "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
          "dev": true,
          "bin": {
            "cssesc": "bin/cssesc"
          },
          "engines": {
            "node": ">=4"
          }
        },
        "node_modules/csstype": {
          "version": "3.1.3",
          "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.1.3.tgz",
          "integrity": "sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==",
          "dev": true
        },
        "node_modules/debug": {
          "version": "4.3.7",
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.7.tgz",
          "integrity": "sha512-Er2nc/H7RrMXZBFCEim6TCmMk02Z8vLC2Rbi1KEBggpo0fS6l0S1nnapwmIi3yW/+GOJap1Krg4w0Hg80oCqgQ==",
          "dev": true,
          "dependencies": {
            "ms": "^2.1.3"
          },
          "engines": {
            "node": ">=6.0"
          },
          "peerDependenciesMeta": {
            "supports-color": {
              "optional": true
            }
          }
        },
        "node_modules/deep-is": {
          "version": "0.1.4",
          "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
          "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
          "dev": true
        },
        "node_modules/dexie": {
          "version": "4.4.5",
          "resolved": "https://registry.npmjs.org/dexie/-/dexie-4.4.5.tgz",
          "integrity": "sha512-wWCHdihT3dmlUSuNhn5mMZDWSpG0suxjAni7YjjiZdzabZcKmy3uNZGZ7AeYYXBoLbpSXX35fikPLkPC44Osiw==",
          "license": "Apache-2.0"
        },
        "node_modules/didyoumean": {
          "version": "1.2.2",
          "resolved": "https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz",
          "integrity": "sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==",
          "dev": true
        },
        "node_modules/dingbat-to-unicode": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/dingbat-to-unicode/-/dingbat-to-unicode-1.0.1.tgz",
          "integrity": "sha512-98l0sW87ZT58pU4i61wa2OHwxbiYSbuxsCBozaVnYX2iCnr3bLM3fIes1/ej7h1YdOKuKt/MLs706TVnALA65w==",
          "license": "BSD-2-Clause"
        },
        "node_modules/dlv": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz",
          "integrity": "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==",
          "dev": true
        },
        "node_modules/duck": {
          "version": "0.1.12",
          "resolved": "https://registry.npmjs.org/duck/-/duck-0.1.12.tgz",
          "integrity": "sha512-wkctla1O6VfP89gQ+J/yDesM0S7B7XLXjKGzXxMDVFg7uEn706niAtyYovKbyq1oT9YwDcly721/iUWoc8MVRg==",
          "license": "BSD",
          "dependencies": {
            "underscore": "^1.13.1"
          }
        },
        "node_modules/eastasianwidth": {
          "version": "0.2.0",
          "resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
          "integrity": "sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==",
          "dev": true
        },
        "node_modules/electron-to-chromium": {
          "version": "1.5.33",
          "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.33.tgz",
          "integrity": "sha512-+cYTcFB1QqD4j4LegwLfpCNxifb6dDFUAwk6RsLusCwIaZI6or2f+q8rs5tTB2YC53HhOlIbEaqHMAAC8IOIwA==",
          "dev": true
        },
        "node_modules/emoji-regex": {
          "version": "9.2.2",
          "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
          "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
          "dev": true
        },
        "node_modules/esbuild": {
          "version": "0.21.5",
          "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.21.5.tgz",
          "integrity": "sha512-mg3OPMV4hXywwpoDxu3Qda5xCKQi+vCTZq8S9J/EpkhB2HzKXq4SNFZE3+NK93JYxc8VMSep+lOUSC/RVKaBqw==",
          "dev": true,
          "hasInstallScript": true,
          "bin": {
            "esbuild": "bin/esbuild"
          },
          "engines": {
            "node": ">=12"
          },
          "optionalDependencies": {
            "@esbuild/aix-ppc64": "0.21.5",
            "@esbuild/android-arm": "0.21.5",
            "@esbuild/android-arm64": "0.21.5",
            "@esbuild/android-x64": "0.21.5",
            "@esbuild/darwin-arm64": "0.21.5",
            "@esbuild/darwin-x64": "0.21.5",
            "@esbuild/freebsd-arm64": "0.21.5",
            "@esbuild/freebsd-x64": "0.21.5",
            "@esbuild/linux-arm": "0.21.5",
            "@esbuild/linux-arm64": "0.21.5",
            "@esbuild/linux-ia32": "0.21.5",
            "@esbuild/linux-loong64": "0.21.5",
            "@esbuild/linux-mips64el": "0.21.5",
            "@esbuild/linux-ppc64": "0.21.5",
            "@esbuild/linux-riscv64": "0.21.5",
            "@esbuild/linux-s390x": "0.21.5",
            "@esbuild/linux-x64": "0.21.5",
            "@esbuild/netbsd-x64": "0.21.5",
            "@esbuild/openbsd-x64": "0.21.5",
            "@esbuild/sunos-x64": "0.21.5",
            "@esbuild/win32-arm64": "0.21.5",
            "@esbuild/win32-ia32": "0.21.5",
            "@esbuild/win32-x64": "0.21.5"
          }
        },
        "node_modules/escalade": {
          "version": "3.2.0",
          "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
          "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
          "dev": true,
          "engines": {
            "node": ">=6"
          }
        },
        "node_modules/escape-string-regexp": {
          "version": "1.0.5",
          "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
          "integrity": "sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==",
          "dev": true,
          "engines": {
            "node": ">=0.8.0"
          }
        },
        "node_modules/eslint": {
          "version": "9.12.0",
          "resolved": "https://registry.npmjs.org/eslint/-/eslint-9.12.0.tgz",
          "integrity": "sha512-UVIOlTEWxwIopRL1wgSQYdnVDcEvs2wyaO6DGo5mXqe3r16IoCNWkR29iHhyaP4cICWjbgbmFUGAhh0GJRuGZw==",
          "dev": true,
          "dependencies": {
            "@eslint-community/eslint-utils": "^4.2.0",
            "@eslint-community/regexpp": "^4.11.0",
            "@eslint/config-array": "^0.18.0",
            "@eslint/core": "^0.6.0",
            "@eslint/eslintrc": "^3.1.0",
            "@eslint/js": "9.12.0",
            "@eslint/plugin-kit": "^0.2.0",
            "@humanfs/node": "^0.16.5",
            "@humanwhocodes/module-importer": "^1.0.1",
            "@humanwhocodes/retry": "^0.3.1",
            "@types/estree": "^1.0.6",
            "@types/json-schema": "^7.0.15",
            "ajv": "^6.12.4",
            "chalk": "^4.0.0",
            "cross-spawn": "^7.0.2",
            "debug": "^4.3.2",
            "escape-string-regexp": "^4.0.0",
            "eslint-scope": "^8.1.0",
            "eslint-visitor-keys": "^4.1.0",
            "espree": "^10.2.0",
            "esquery": "^1.5.0",
            "esutils": "^2.0.2",
            "fast-deep-equal": "^3.1.3",
            "file-entry-cache": "^8.0.0",
            "find-up": "^5.0.0",
            "glob-parent": "^6.0.2",
            "ignore": "^5.2.0",
            "imurmurhash": "^0.1.4",
            "is-glob": "^4.0.0",
            "json-stable-stringify-without-jsonify": "^1.0.1",
            "lodash.merge": "^4.6.2",
            "minimatch": "^3.1.2",
            "natural-compare": "^1.4.0",
            "optionator": "^0.9.3",
            "text-table": "^0.2.0"
          },
          "bin": {
            "eslint": "bin/eslint.js"
          },
          "engines": {
            "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
          },
          "funding": {
            "url": "https://eslint.org/donate"
          },
          "peerDependencies": {
            "jiti": "*"
          },
          "peerDependenciesMeta": {
            "jiti": {
              "optional": true
            }
          }
        },
        "node_modules/eslint-plugin-react-hooks": {
          "version": "5.1.0-rc-fb9a90fa48-20240614",
          "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-5.1.0-rc-fb9a90fa48-20240614.tgz",
          "integrity": "sha512-xsiRwaDNF5wWNC4ZHLut+x/YcAxksUd9Rizt7LaEn3bV8VyYRpXnRJQlLOfYaVy9esk4DFP4zPPnoNVjq5Gc0w==",
          "dev": true,
          "engines": {
            "node": ">=10"
          },
          "peerDependencies": {
            "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0"
          }
        },
        "node_modules/eslint-plugin-react-refresh": {
          "version": "0.4.12",
          "resolved": "https://registry.npmjs.org/eslint-plugin-react-refresh/-/eslint-plugin-react-refresh-0.4.12.tgz",
          "integrity": "sha512-9neVjoGv20FwYtCP6CB1dzR1vr57ZDNOXst21wd2xJ/cTlM2xLq0GWVlSNTdMn/4BtP6cHYBMCSp1wFBJ9jBsg==",
          "dev": true,
          "peerDependencies": {
            "eslint": ">=7"
          }
        },
        "node_modules/eslint-scope": {
          "version": "8.1.0",
          "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-8.1.0.tgz",
          "integrity": "sha512-14dSvlhaVhKKsa9Fx1l8A17s7ah7Ef7wCakJ10LYk6+GYmP9yDti2oq2SEwcyndt6knfcZyhyxwY3i9yL78EQw==",
          "dev": true,
          "dependencies": {
            "esrecurse": "^4.3.0",
            "estraverse": "^5.2.0"
          },
          "engines": {
            "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
          },
          "funding": {
            "url": "https://opencollective.com/eslint"
          }
        },
        "node_modules/eslint-visitor-keys": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-4.1.0.tgz",
          "integrity": "sha512-Q7lok0mqMUSf5a/AdAZkA5a/gHcO6snwQClVNNvFKCAVlxXucdU8pKydU5ZVZjBx5xr37vGbFFWtLQYreLzrZg==",
          "dev": true,
          "engines": {
            "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
          },
          "funding": {
            "url": "https://opencollective.com/eslint"
          }
        },
        "node_modules/eslint/node_modules/ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "dev": true,
          "dependencies": {
            "color-convert": "^2.0.1"
          },
          "engines": {
            "node": ">=8"
          },
          "funding": {
            "url": "https://github.com/chalk/ansi-styles?sponsor=1"
          }
        },
        "node_modules/eslint/node_modules/chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "dev": true,
          "dependencies": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          },
          "engines": {
            "node": ">=10"
          },
          "funding": {
            "url": "https://github.com/chalk/chalk?sponsor=1"
          }
        },
        "node_modules/eslint/node_modules/color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "dev": true,
          "dependencies": {
            "color-name": "~1.1.4"
          },
          "engines": {
            "node": ">=7.0.0"
          }
        },
        "node_modules/eslint/node_modules/color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
          "dev": true
        },
        "node_modules/eslint/node_modules/escape-string-regexp": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
          "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
          "dev": true,
          "engines": {
            "node": ">=10"
          },
          "funding": {
            "url": "https://github.com/sponsors/sindresorhus"
          }
        },
        "node_modules/eslint/node_modules/has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
          "dev": true,
          "engines": {
            "node": ">=8"
          }
        },
        "node_modules/eslint/node_modules/supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "dev": true,
          "dependencies": {
            "has-flag": "^4.0.0"
          },
          "engines": {
            "node": ">=8"
          }
        },
        "node_modules/espree": {
          "version": "10.2.0",
          "resolved": "https://registry.npmjs.org/espree/-/espree-10.2.0.tgz",
          "integrity": "sha512-upbkBJbckcCNBDBDXEbuhjbP68n+scUd3k/U2EkyM9nw+I/jPiL4cLF/Al06CF96wRltFda16sxDFrxsI1v0/g==",
          "dev": true,
          "dependencies": {
            "acorn": "^8.12.0",
            "acorn-jsx": "^5.3.2",
            "eslint-visitor-keys": "^4.1.0"
          },
          "engines": {
            "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
          },
          "funding": {
            "url": "https://opencollective.com/eslint"
          }
        },
        "node_modules/esquery": {
          "version": "1.6.0",
          "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.6.0.tgz",
          "integrity": "sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==",
          "dev": true,
          "dependencies": {
            "estraverse": "^5.1.0"
          },
          "engines": {
            "node": ">=0.10"
          }
        },
        "node_modules/esrecurse": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
          "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
          "dev": true,
          "dependencies": {
            "estraverse": "^5.2.0"
          },
          "engines": {
            "node": ">=4.0"
          }
        },
        "node_modules/estraverse": {
          "version": "5.3.0",
          "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
          "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
          "dev": true,
          "engines": {
            "node": ">=4.0"
          }
        },
        "node_modules/esutils": {
          "version": "2.0.3",
          "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
          "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
          "dev": true,
          "engines": {
            "node": ">=0.10.0"
          }
        },
        "node_modules/fast-deep-equal": {
          "version": "3.1.3",
          "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
          "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
          "dev": true
        },
        "node_modules/fast-glob": {
          "version": "3.3.2",
          "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.2.tgz",
          "integrity": "sha512-oX2ruAFQwf/Orj8m737Y5adxDQO0LAB7/S5MnxCdTNDd4p6BsyIVsv9JQsATbTSq8KHRpLwIHbVlUNatxd+1Ow==",
          "dev": true,
          "dependencies": {
            "@nodelib/fs.stat": "^2.0.2",
            "@nodelib/fs.walk": "^1.2.3",
            "glob-parent": "^5.1.2",
            "merge2": "^1.3.0",
            "micromatch": "^4.0.4"
          },
          "engines": {
            "node": ">=8.6.0"
          }
        },
        "node_modules/fast-glob/node_modules/glob-parent": {
          "version": "5.1.2",
          "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
          "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
          "dev": true,
          "dependencies": {
            "is-glob": "^4.0.1"
          },
          "engines": {
            "node": ">= 6"
          }
        },
        "node_modules/fast-json-stable-stringify": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
          "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
          "dev": true
        },
        "node_modules/fast-levenshtein": {
          "version": "2.0.6",
          "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
          "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
          "dev": true
        },
        "node_modules/fastq": {
          "version": "1.17.1",
          "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.17.1.tgz",
          "integrity": "sha512-sRVD3lWVIXWg6By68ZN7vho9a1pQcN/WBFaAAsDDFzlJjvoGx0P8z7V1t72grFJfJhu3YPZBuu25f7Kaw2jN1w==",
          "dev": true,
          "dependencies": {
            "reusify": "^1.0.4"
          }
        },
        "node_modules/file-entry-cache": {
          "version": "8.0.0",
          "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-8.0.0.tgz",
          "integrity": "sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==",
          "dev": true,
          "dependencies": {
            "flat-cache": "^4.0.0"
          },
          "engines": {
            "node": ">=16.0.0"
          }
        },
        "node_modules/fill-range": {
          "version": "7.1.1",
          "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
          "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
          "dev": true,
          "dependencies": {
            "to-regex-range": "^5.0.1"
          },
          "engines": {
            "node": ">=8"
          }
        },
        "node_modules/find-up": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
          "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
          "dev": true,
          "dependencies": {
            "locate-path": "^6.0.0",
            "path-exists": "^4.0.0"
          },
          "engines": {
            "node": ">=10"
          },
          "funding": {
            "url": "https://github.com/sponsors/sindresorhus"
          }
        },
        "node_modules/flat-cache": {
          "version": "4.0.1",
          "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-4.0.1.tgz",
          "integrity": "sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==",
          "dev": true,
          "dependencies": {
            "flatted": "^3.2.9",
            "keyv": "^4.5.4"
          },
          "engines": {
            "node": ">=16"
          }
        },
        "node_modules/flatted": {
          "version": "3.3.1",
          "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.3.1.tgz",
          "integrity": "sha512-X8cqMLLie7KsNUDSdzeN8FYK9rEt4Dt67OsG/DNGnYTSDBG4uFAJFBnUeiV+zCVAvwFy56IjM9sH51jVaEhNxw==",
          "dev": true
        },
        "node_modules/foreground-child": {
          "version": "3.3.0",
          "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.0.tgz",
          "integrity": "sha512-Ld2g8rrAyMYFXBhEqMz8ZAHBi4J4uS1i/CxGMDnjyFWddMXLVcDp051DZfu+t7+ab7Wv6SMqpWmyFIj5UbfFvg==",
          "dev": true,
          "dependencies": {
            "cross-spawn": "^7.0.0",
            "signal-exit": "^4.0.1"
          },
          "engines": {
            "node": ">=14"
          },
          "funding": {
            "url": "https://github.com/sponsors/isaacs"
          }
        },
        "node_modules/fraction.js": {
          "version": "4.3.7",
          "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-4.3.7.tgz",
          "integrity": "sha512-ZsDfxO51wGAXREY55a7la9LScWpwv9RxIrYABrlvOFBlH/ShPnrtsXeuUIfXKKOVicNxQ+o8JTbJvjS4M89yew==",
          "dev": true,
          "engines": {
            "node": "*"
          },
          "funding": {
            "type": "patreon",
            "url": "https://github.com/sponsors/rawify"
          }
        },
        "node_modules/fsevents": {
          "version": "2.3.3",
          "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
          "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
          "dev": true,
          "hasInstallScript": true,
          "optional": true,
          "os": [
            "darwin"
          ],
          "engines": {
            "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
          }
        },
        "node_modules/function-bind": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
          "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
          "dev": true,
          "funding": {
            "url": "https://github.com/sponsors/ljharb"
          }
        },
        "node_modules/gensync": {
          "version": "1.0.0-beta.2",
          "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
          "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
          "dev": true,
          "engines": {
            "node": ">=6.9.0"
          }
        },
        "node_modules/glob": {
          "version": "10.4.5",
          "resolved": "https://registry.npmjs.org/glob/-/glob-10.4.5.tgz",
          "integrity": "sha512-7Bv8RF0k6xjo7d4A/PxYLbUCfb6c+Vpd2/mB2yRDlew7Jb5hEXiCD9ibfO7wpk8i4sevK6DFny9h7EYbM3/sHg==",
          "dev": true,
          "dependencies": {
            "foreground-child": "^3.1.0",
            "jackspeak": "^3.1.2",
            "minimatch": "^9.0.4",
            "minipass": "^7.1.2",
            "package-json-from-dist": "^1.0.0",
            "path-scurry": "^1.11.1"
          },
          "bin": {
            "glob": "dist/esm/bin.mjs"
          },
          "funding": {
            "url": "https://github.com/sponsors/isaacs"
          }
        },
        "node_modules/glob-parent": {
          "version": "6.0.2",
          "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
          "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
          "dev": true,
          "dependencies": {
            "is-glob": "^4.0.3"
          },
          "engines": {
            "node": ">=10.13.0"
          }
        },
        "node_modules/glob/node_modules/brace-expansion": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
          "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
          "dev": true,
          "dependencies": {
            "balanced-match": "^1.0.0"
          }
        },
        "node_modules/glob/node_modules/minimatch": {
          "version": "9.0.5",
          "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
          "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
          "dev": true,
          "dependencies": {
            "brace-expansion": "^2.0.1"
          },
          "engines": {
            "node": ">=16 || 14 >=14.17"
          },
          "funding": {
            "url": "https://github.com/sponsors/isaacs"
          }
        },
        "node_modules/globals": {
          "version": "15.11.0",
          "resolved": "https://registry.npmjs.org/globals/-/globals-15.11.0.tgz",
          "integrity": "sha512-yeyNSjdbyVaWurlwCpcA6XNBrHTMIeDdj0/hnvX/OLJ9ekOXYbLsLinH/MucQyGvNnXhidTdNhTtJaffL2sMfw==",
          "dev": true,
          "engines": {
            "node": ">=18"
          },
          "funding": {
            "url": "https://github.com/sponsors/sindresorhus"
          }
        },
        "node_modules/graphemer": {
          "version": "1.4.0",
          "resolved": "https://registry.npmjs.org/graphemer/-/graphemer-1.4.0.tgz",
          "integrity": "sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==",
          "dev": true
        },
        "node_modules/has-flag": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
          "integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
          "dev": true,
          "engines": {
            "node": ">=4"
          }
        },
        "node_modules/hasown": {
          "version": "2.0.2",
          "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
          "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
          "dev": true,
          "dependencies": {
            "function-bind": "^1.1.2"
          },
          "engines": {
            "node": ">= 0.4"
          }
        },
        "node_modules/ignore": {
          "version": "5.3.2",
          "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
          "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
          "dev": true,
          "engines": {
            "node": ">= 4"
          }
        },
        "node_modules/immediate": {
          "version": "3.0.6",
          "resolved": "https://registry.npmjs.org/immediate/-/immediate-3.0.6.tgz",
          "integrity": "sha512-XXOFtyqDjNDAQxVfYxuF7g9Il/IbWmmlQg2MYKOH8ExIT1qg6xc4zyS3HaEEATgs1btfzxq15ciUiY7gjSXRGQ==",
          "license": "MIT"
        },
        "node_modules/import-fresh": {
          "version": "3.3.0",
          "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz",
          "integrity": "sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==",
          "dev": true,
          "dependencies": {
            "parent-module": "^1.0.0",
            "resolve-from": "^4.0.0"
          },
          "engines": {
            "node": ">=6"
          },
          "funding": {
            "url": "https://github.com/sponsors/sindresorhus"
          }
        },
        "node_modules/imurmurhash": {
          "version": "0.1.4",
          "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
          "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
          "dev": true,
          "engines": {
            "node": ">=0.8.19"
          }
        },
        "node_modules/inherits": {
          "version": "2.0.4",
          "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
          "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
          "license": "ISC"
        },
        "node_modules/is-binary-path": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
          "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
          "dev": true,
          "dependencies": {
            "binary-extensions": "^2.0.0"
          },
          "engines": {
            "node": ">=8"
          }
        },
        "node_modules/is-core-module": {
          "version": "2.15.1",
          "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.15.1.tgz",
          "integrity": "sha512-z0vtXSwucUJtANQWldhbtbt7BnL0vxiFjIdDLAatwhDYty2bad6s+rijD6Ri4YuYJubLzIJLUidCh09e1djEVQ==",
          "dev": true,
          "dependencies": {
            "hasown": "^2.0.2"
          },
          "engines": {
            "node": ">= 0.4"
          },
          "funding": {
            "url": "https://github.com/sponsors/ljharb"
          }
        },
        "node_modules/is-extglob": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
          "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
          "dev": true,
          "engines": {
            "node": ">=0.10.0"
          }
        },
        "node_modules/is-fullwidth-code-point": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
          "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
          "dev": true,
          "engines": {
            "node": ">=8"
          }
        },
        "node_modules/is-glob": {
          "version": "4.0.3",
          "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
          "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
          "dev": true,
          "dependencies": {
            "is-extglob": "^2.1.1"
          },
          "engines": {
            "node": ">=0.10.0"
          }
        },
        "node_modules/is-number": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
          "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
          "dev": true,
          "engines": {
            "node": ">=0.12.0"
          }
        },
        "node_modules/isarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
          "integrity": "sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ==",
          "license": "MIT"
        },
        "node_modules/isexe": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
          "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
          "dev": true
        },
        "node_modules/jackspeak": {
          "version": "3.4.3",
          "resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-3.4.3.tgz",
          "integrity": "sha512-OGlZQpz2yfahA/Rd1Y8Cd9SIEsqvXkLVoSw/cgwhnhFMDbsQFeZYoJJ7bIZBS9BcamUW96asq/npPWugM+RQBw==",
          "dev": true,
          "dependencies": {
            "@isaacs/cliui": "^8.0.2"
          },
          "funding": {
            "url": "https://github.com/sponsors/isaacs"
          },
          "optionalDependencies": {
            "@pkgjs/parseargs": "^0.11.0"
          }
        },
        "node_modules/jiti": {
          "version": "1.21.6",
          "resolved": "https://registry.npmjs.org/jiti/-/jiti-1.21.6.tgz",
          "integrity": "sha512-2yTgeWTWzMWkHu6Jp9NKgePDaYHbntiwvYuuJLbbN9vl7DC9DvXKOB2BC3ZZ92D3cvV/aflH0osDfwpHepQ53w==",
          "dev": true,
          "bin": {
            "jiti": "bin/jiti.js"
          }
        },
        "node_modules/js-tokens": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
          "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ=="
        },
        "node_modules/js-yaml": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
          "integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
          "dev": true,
          "dependencies": {
            "argparse": "^2.0.1"
          },
          "bin": {
            "js-yaml": "bin/js-yaml.js"
          }
        },
        "node_modules/jsesc": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.0.2.tgz",
          "integrity": "sha512-xKqzzWXDttJuOcawBt4KnKHHIf5oQ/Cxax+0PWFG+DFDgHNAdi+TXECADI+RYiFUMmx8792xsMbbgXj4CwnP4g==",
          "dev": true,
          "bin": {
            "jsesc": "bin/jsesc"
          },
          "engines": {
            "node": ">=6"
          }
        },
        "node_modules/json-buffer": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
          "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
          "dev": true
        },
        "node_modules/json-schema-traverse": {
          "version": "0.4.1",
          "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
          "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
          "dev": true
        },
        "node_modules/json-stable-stringify-without-jsonify": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
          "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
          "dev": true
        },
        "node_modules/json5": {
          "version": "2.2.3",
          "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
          "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
          "dev": true,
          "bin": {
            "json5": "lib/cli.js"
          },
          "engines": {
            "node": ">=6"
          }
        },
        "node_modules/jszip": {
          "version": "3.10.2",
          "resolved": "https://registry.npmjs.org/jszip/-/jszip-3.10.2.tgz",
          "integrity": "sha512-3l+rb15IOWtUhU0H5MFqES/T6Kh7abYwjosBey/vD6hDt8zoEffkSC5Ws5SGtgVw3gBx2NEbhTeSW1+kWkpyTQ==",
          "license": "(MIT OR GPL-3.0-or-later)",
          "dependencies": {
            "lie": "~3.3.0",
            "pako": "~1.0.2",
            "readable-stream": "~2.3.6",
            "setimmediate": "^1.0.5"
          }
        },
        "node_modules/keyv": {
          "version": "4.5.4",
          "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
          "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
          "dev": true,
          "dependencies": {
            "json-buffer": "3.0.1"
          }
        },
        "node_modules/levn": {
          "version": "0.4.1",
          "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
          "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
          "dev": true,
          "dependencies": {
            "prelude-ls": "^1.2.1",
            "type-check": "~0.4.0"
          },
          "engines": {
            "node": ">= 0.8.0"
          }
        },
        "node_modules/lie": {
          "version": "3.3.0",
          "resolved": "https://registry.npmjs.org/lie/-/lie-3.3.0.tgz",
          "integrity": "sha512-UaiMJzeWRlEujzAuw5LokY1L5ecNQYZKfmyZ9L7wDHb/p5etKaxXhohBcrw0EYby+G/NA52vRSN4N39dxHAIwQ==",
          "license": "MIT",
          "dependencies": {
            "immediate": "~3.0.5"
          }
        },
        "node_modules/lilconfig": {
          "version": "3.1.3",
          "resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-3.1.3.tgz",
          "integrity": "sha512-/vlFKAoH5Cgt3Ie+JLhRbwOsCQePABiU3tJ1egGvyQ+33R/vcwM2Zl2QR/LzjsBeItPt3oSVXapn+m4nQDvpzw==",
          "dev": true,
          "engines": {
            "node": ">=14"
          },
          "funding": {
            "url": "https://github.com/sponsors/antonk52"
          }
        },
        "node_modules/lines-and-columns": {
          "version": "1.2.4",
          "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
          "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
          "dev": true
        },
        "node_modules/locate-path": {
          "version": "6.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
          "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
          "dev": true,
          "dependencies": {
            "p-locate": "^5.0.0"
          },
          "engines": {
            "node": ">=10"
          },
          "funding": {
            "url": "https://github.com/sponsors/sindresorhus"
          }
        },
        "node_modules/lodash.merge": {
          "version": "4.6.2",
          "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
          "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
          "dev": true
        },
        "node_modules/loose-envify": {
          "version": "1.4.0",
          "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
          "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
          "dependencies": {
            "js-tokens": "^3.0.0 || ^4.0.0"
          },
          "bin": {
            "loose-envify": "cli.js"
          }
        },
        "node_modules/lop": {
          "version": "0.4.2",
          "resolved": "https://registry.npmjs.org/lop/-/lop-0.4.2.tgz",
          "integrity": "sha512-RefILVDQ4DKoRZsJ4Pj22TxE3omDO47yFpkIBoDKzkqPRISs5U1cnAdg/5583YPkWPaLIYHOKRMQSvjFsO26cw==",
          "license": "BSD-2-Clause",
          "dependencies": {
            "duck": "^0.1.12",
            "option": "~0.2.1",
            "underscore": "^1.13.1"
          }
        },
        "node_modules/lru-cache": {
          "version": "5.1.1",
          "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
          "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
          "dev": true,
          "dependencies": {
            "yallist": "^3.0.2"
          }
        },
        "node_modules/lucide-react": {
          "version": "0.446.0",
          "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-0.446.0.tgz",
          "integrity": "sha512-BU7gy8MfBMqvEdDPH79VhOXSEgyG8TSPOKWaExWGCQVqnGH7wGgDngPbofu+KdtVjPQBWbEmnfMTq90CTiiDRg==",
          "license": "ISC",
          "peerDependencies": {
            "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0-rc"
          }
        },
        "node_modules/mammoth": {
          "version": "1.12.2",
          "resolved": "https://registry.npmjs.org/mammoth/-/mammoth-1.12.2.tgz",
          "integrity": "sha512-MH2vkgafD/2MYUaEOtoXLKrHQZ7yLYTHGQgyLNtYZHiUxU1K1QQ+8qMFquDAfhBm06wSGSws3J+Q9QTsKtR44g==",
          "license": "BSD-2-Clause",
          "dependencies": {
            "@xmldom/xmldom": "^0.8.6",
            "argparse": "~1.0.3",
            "base64-js": "^1.5.1",
            "bluebird": "~3.4.0",
            "dingbat-to-unicode": "^1.0.1",
            "jszip": "^3.7.1",
            "lop": "^0.4.2",
            "path-is-absolute": "^1.0.0",
            "underscore": "^1.13.1",
            "xmlbuilder": "^10.0.0"
          },
          "bin": {
            "mammoth": "bin/mammoth"
          },
          "engines": {
            "node": ">=12.0.0"
          }
        },
        "node_modules/mammoth/node_modules/argparse": {
          "version": "1.0.10",
          "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
          "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
          "license": "MIT",
          "dependencies": {
            "sprintf-js": "~1.0.2"
          }
        },
        "node_modules/merge2": {
          "version": "1.4.1",
          "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
          "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
          "dev": true,
          "engines": {
            "node": ">= 8"
          }
        },
        "node_modules/micromatch": {
          "version": "4.0.8",
          "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
          "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
          "dev": true,
          "dependencies": {
            "braces": "^3.0.3",
            "picomatch": "^2.3.1"
          },
          "engines": {
            "node": ">=8.6"
          }
        },
        "node_modules/minimatch": {
          "version": "3.1.2",
          "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
          "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
          "dev": true,
          "dependencies": {
            "brace-expansion": "^1.1.7"
          },
          "engines": {
            "node": "*"
          }
        },
        "node_modules/minipass": {
          "version": "7.1.2",
          "resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.2.tgz",
          "integrity": "sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==",
          "dev": true,
          "engines": {
            "node": ">=16 || 14 >=14.17"
          }
        },
        "node_modules/ms": {
          "version": "2.1.3",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
          "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
          "dev": true
        },
        "node_modules/mz": {
          "version": "2.7.0",
          "resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",
          "integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
          "dev": true,
          "dependencies": {
            "any-promise": "^1.0.0",
            "object-assign": "^4.0.1",
            "thenify-all": "^1.0.0"
          }
        },
        "node_modules/nanoid": {
          "version": "3.3.7",
          "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.7.tgz",
          "integrity": "sha512-eSRppjcPIatRIMC1U6UngP8XFcz8MQWGQdt1MTBQ7NaAmvXDfvNxbvWV3x2y6CdEUciCSsDHDQZbhYaB8QEo2g==",
          "dev": true,
          "funding": [
            {
              "type": "github",
              "url": "https://github.com/sponsors/ai"
            }
          ],
          "bin": {
            "nanoid": "bin/nanoid.cjs"
          },
          "engines": {
            "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
          }
        },
        "node_modules/natural-compare": {
          "version": "1.4.0",
          "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
          "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
          "dev": true
        },
        "node_modules/node-releases": {
          "version": "2.0.18",
          "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.18.tgz",
          "integrity": "sha512-d9VeXT4SJ7ZeOqGX6R5EM022wpL+eWPooLI+5UpWn2jCT1aosUQEhQP214x33Wkwx3JQMvIm+tIoVOdodFS40g==",
          "dev": true
        },
        "node_modules/normalize-path": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
          "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
          "dev": true,
          "engines": {
            "node": ">=0.10.0"
          }
        },
        "node_modules/normalize-range": {
          "version": "0.1.2",
          "resolved": "https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz",
          "integrity": "sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==",
          "dev": true,
          "engines": {
            "node": ">=0.10.0"
          }
        },
        "node_modules/object-assign": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
          "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
          "dev": true,
          "engines": {
            "node": ">=0.10.0"
          }
        },
        "node_modules/object-hash": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-3.0.0.tgz",
          "integrity": "sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==",
          "dev": true,
          "engines": {
            "node": ">= 6"
          }
        },
        "node_modules/option": {
          "version": "0.2.4",
          "resolved": "https://registry.npmjs.org/option/-/option-0.2.4.tgz",
          "integrity": "sha512-pkEqbDyl8ou5cpq+VsnQbe/WlEy5qS7xPzMS1U55OCG9KPvwFD46zDbxQIj3egJSFc3D+XhYOPUzz49zQAVy7A==",
          "license": "BSD-2-Clause"
        },
        "node_modules/optionator": {
          "version": "0.9.4",
          "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
          "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
          "dev": true,
          "dependencies": {
            "deep-is": "^0.1.3",
            "fast-levenshtein": "^2.0.6",
            "levn": "^0.4.1",
            "prelude-ls": "^1.2.1",
            "type-check": "^0.4.0",
            "word-wrap": "^1.2.5"
          },
          "engines": {
            "node": ">= 0.8.0"
          }
        },
        "node_modules/p-limit": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
          "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
          "dev": true,
          "dependencies": {
            "yocto-queue": "^0.1.0"
          },
          "engines": {
            "node": ">=10"
          },
          "funding": {
            "url": "https://github.com/sponsors/sindresorhus"
          }
        },
        "node_modules/p-locate": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
          "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
          "dev": true,
          "dependencies": {
            "p-limit": "^3.0.2"
          },
          "engines": {
            "node": ">=10"
          },
          "funding": {
            "url": "https://github.com/sponsors/sindresorhus"
          }
        },
        "node_modules/package-json-from-dist": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/package-json-from-dist/-/package-json-from-dist-1.0.1.tgz",
          "integrity": "sha512-UEZIS3/by4OC8vL3P2dTXRETpebLI2NiI5vIrjaD/5UtrkFX/tNbwjTSRAGC/+7CAo2pIcBaRgWmcBBHcsaCIw==",
          "dev": true
        },
        "node_modules/pako": {
          "version": "1.0.11",
          "resolved": "https://registry.npmjs.org/pako/-/pako-1.0.11.tgz",
          "integrity": "sha512-4hLB8Py4zZce5s4yd9XzopqwVv/yGNhV1Bl8NTmCq1763HeK2+EwVTv+leGeL13Dnh2wfbqowVPXCIO0z4taYw==",
          "license": "(MIT AND Zlib)"
        },
        "node_modules/parent-module": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
          "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
          "dev": true,
          "dependencies": {
            "callsites": "^3.0.0"
          },
          "engines": {
            "node": ">=6"
          }
        },
        "node_modules/path-exists": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
          "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
          "dev": true,
          "engines": {
            "node": ">=8"
          }
        },
        "node_modules/path-is-absolute": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
          "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
          "license": "MIT",
          "engines": {
            "node": ">=0.10.0"
          }
        },
        "node_modules/path-key": {
          "version": "3.1.1",
          "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
          "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
          "dev": true,
          "engines": {
            "node": ">=8"
          }
        },
        "node_modules/path-parse": {
          "version": "1.0.7",
          "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
          "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
          "dev": true
        },
        "node_modules/path-scurry": {
          "version": "1.11.1",
          "resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-1.11.1.tgz",
          "integrity": "sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==",
          "dev": true,
          "dependencies": {
            "lru-cache": "^10.2.0",
            "minipass": "^5.0.0 || ^6.0.2 || ^7.0.0"
          },
          "engines": {
            "node": ">=16 || 14 >=14.18"
          },
          "funding": {
            "url": "https://github.com/sponsors/isaacs"
          }
        },
        "node_modules/path-scurry/node_modules/lru-cache": {
          "version": "10.4.3",
          "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
          "integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
          "dev": true
        },
        "node_modules/picocolors": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
          "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
          "dev": true
        },
        "node_modules/picomatch": {
          "version": "2.3.1",
          "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
          "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
          "dev": true,
          "engines": {
            "node": ">=8.6"
          },
          "funding": {
            "url": "https://github.com/sponsors/jonschlinkert"
          }
        },
        "node_modules/pify": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
          "integrity": "sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==",
          "dev": true,
          "engines": {
            "node": ">=0.10.0"
          }
        },
        "node_modules/pirates": {
          "version": "4.0.6",
          "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.6.tgz",
          "integrity": "sha512-saLsH7WeYYPiD25LDuLRRY/i+6HaPYr6G1OUlN39otzkSTxKnubR9RTxS3/Kk50s1g2JTgFwWQDQyplC5/SHZg==",
          "dev": true,
          "engines": {
            "node": ">= 6"
          }
        },
        "node_modules/postcss": {
          "version": "8.4.47",
          "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.47.tgz",
          "integrity": "sha512-56rxCq7G/XfB4EkXq9Egn5GCqugWvDFjafDOThIdMBsI15iqPqR5r15TfSr1YPYeEI19YeaXMCbY6u88Y76GLQ==",
          "dev": true,
          "funding": [
            {
              "type": "opencollective",
              "url": "https://opencollective.com/postcss/"
            },
            {
              "type": "tidelift",
              "url": "https://tidelift.com/funding/github/npm/postcss"
            },
            {
              "type": "github",
              "url": "https://github.com/sponsors/ai"
            }
          ],
          "dependencies": {
            "nanoid": "^3.3.7",
            "picocolors": "^1.1.0",
            "source-map-js": "^1.2.1"
          },
          "engines": {
            "node": "^10 || ^12 || >=14"
          }
        },
        "node_modules/postcss-import": {
          "version": "15.1.0",
          "resolved": "https://registry.npmjs.org/postcss-import/-/postcss-import-15.1.0.tgz",
          "integrity": "sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==",
          "dev": true,
          "dependencies": {
            "postcss-value-parser": "^4.0.0",
            "read-cache": "^1.0.0",
            "resolve": "^1.1.7"
          },
          "engines": {
            "node": ">=14.0.0"
          },
          "peerDependencies": {
            "postcss": "^8.0.0"
          }
        },
        "node_modules/postcss-js": {
          "version": "4.0.1",
          "resolved": "https://registry.npmjs.org/postcss-js/-/postcss-js-4.0.1.tgz",
          "integrity": "sha512-dDLF8pEO191hJMtlHFPRa8xsizHaM82MLfNkUHdUtVEV3tgTp5oj+8qbEqYM57SLfc74KSbw//4SeJma2LRVIw==",
          "dev": true,
          "dependencies": {
            "camelcase-css": "^2.0.1"
          },
          "engines": {
            "node": "^12 || ^14 || >= 16"
          },
          "funding": {
            "type": "opencollective",
            "url": "https://opencollective.com/postcss/"
          },
          "peerDependencies": {
            "postcss": "^8.4.21"
          }
        },
        "node_modules/postcss-load-config": {
          "version": "4.0.2",
          "resolved": "https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-4.0.2.tgz",
          "integrity": "sha512-bSVhyJGL00wMVoPUzAVAnbEoWyqRxkjv64tUl427SKnPrENtq6hJwUojroMz2VB+Q1edmi4IfrAPpami5VVgMQ==",
          "dev": true,
          "funding": [
            {
              "type": "opencollective",
              "url": "https://opencollective.com/postcss/"
            },
            {
              "type": "github",
              "url": "https://github.com/sponsors/ai"
            }
          ],
          "dependencies": {
            "lilconfig": "^3.0.0",
            "yaml": "^2.3.4"
          },
          "engines": {
            "node": ">= 14"
          },
          "peerDependencies": {
            "postcss": ">=8.0.9",
            "ts-node": ">=9.0.0"
          },
          "peerDependenciesMeta": {
            "postcss": {
              "optional": true
            },
            "ts-node": {
              "optional": true
            }
          }
        },
        "node_modules/postcss-nested": {
          "version": "6.2.0",
          "resolved": "https://registry.npmjs.org/postcss-nested/-/postcss-nested-6.2.0.tgz",
          "integrity": "sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ==",
          "dev": true,
          "funding": [
            {
              "type": "opencollective",
              "url": "https://opencollective.com/postcss/"
            },
            {
              "type": "github",
              "url": "https://github.com/sponsors/ai"
            }
          ],
          "dependencies": {
            "postcss-selector-parser": "^6.1.1"
          },
          "engines": {
            "node": ">=12.0"
          },
          "peerDependencies": {
            "postcss": "^8.2.14"
          }
        },
        "node_modules/postcss-selector-parser": {
          "version": "6.1.2",
          "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.1.2.tgz",
          "integrity": "sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==",
          "dev": true,
          "dependencies": {
            "cssesc": "^3.0.0",
            "util-deprecate": "^1.0.2"
          },
          "engines": {
            "node": ">=4"
          }
        },
        "node_modules/postcss-value-parser": {
          "version": "4.2.0",
          "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
          "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
          "dev": true
        },
        "node_modules/prelude-ls": {
          "version": "1.2.1",
          "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
          "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
          "dev": true,
          "engines": {
            "node": ">= 0.8.0"
          }
        },
        "node_modules/process-nextick-args": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
          "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==",
          "license": "MIT"
        },
        "node_modules/punycode": {
          "version": "2.3.1",
          "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
          "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
          "dev": true,
          "engines": {
            "node": ">=6"
          }
        },
        "node_modules/queue-microtask": {
          "version": "1.2.3",
          "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
          "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
          "dev": true,
          "funding": [
            {
              "type": "github",
              "url": "https://github.com/sponsors/feross"
            },
            {
              "type": "patreon",
              "url": "https://www.patreon.com/feross"
            },
            {
              "type": "consulting",
              "url": "https://feross.org/support"
            }
          ]
        },
        "node_modules/react": {
          "version": "18.3.1",
          "resolved": "https://registry.npmjs.org/react/-/react-18.3.1.tgz",
          "integrity": "sha512-wS+hAgJShR0KhEvPJArfuPVN1+Hz1t0Y6n5jLrGQbkb4urgPE/0Rve+1kMB1v/oWgHgm4WIcV+i7F2pTVj+2iQ==",
          "dependencies": {
            "loose-envify": "^1.1.0"
          },
          "engines": {
            "node": ">=0.10.0"
          }
        },
        "node_modules/react-dom": {
          "version": "18.3.1",
          "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-18.3.1.tgz",
          "integrity": "sha512-5m4nQKp+rZRb09LNH59GM4BxTh9251/ylbKIbpe7TpGxfJ+9kv6BLkLBXIjjspbgbnIBNqlI23tRnTWT0snUIw==",
          "dependencies": {
            "loose-envify": "^1.1.0",
            "scheduler": "^0.23.2"
          },
          "peerDependencies": {
            "react": "^18.3.1"
          }
        },
        "node_modules/react-refresh": {
          "version": "0.14.2",
          "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.14.2.tgz",
          "integrity": "sha512-jCvmsr+1IUSMUyzOkRcvnVbX3ZYC6g9TDrDbFuFmRDq7PD4yaGbLKNQL6k2jnArV8hjYxh7hVhAZB6s9HDGpZA==",
          "dev": true,
          "engines": {
            "node": ">=0.10.0"
          }
        },
        "node_modules/read-cache": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz",
          "integrity": "sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==",
          "dev": true,
          "dependencies": {
            "pify": "^2.3.0"
          }
        },
        "node_modules/readable-stream": {
          "version": "2.3.8",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.8.tgz",
          "integrity": "sha512-8p0AUk4XODgIewSi0l8Epjs+EVnWiK7NoDIEGU0HhE7+ZyY8D1IMY7odu5lRrFXGg71L15KG8QrPmum45RTtdA==",
          "license": "MIT",
          "dependencies": {
            "core-util-is": "~1.0.0",
            "inherits": "~2.0.3",
            "isarray": "~1.0.0",
            "process-nextick-args": "~2.0.0",
            "safe-buffer": "~5.1.1",
            "string_decoder": "~1.1.1",
            "util-deprecate": "~1.0.1"
          }
        },
        "node_modules/readdirp": {
          "version": "3.6.0",
          "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
          "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
          "dev": true,
          "dependencies": {
            "picomatch": "^2.2.1"
          },
          "engines": {
            "node": ">=8.10.0"
          }
        },
        "node_modules/resolve": {
          "version": "1.22.8",
          "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.8.tgz",
          "integrity": "sha512-oKWePCxqpd6FlLvGV1VU0x7bkPmmCNolxzjMf4NczoDnQcIWrAF+cPtZn5i6n+RfD2d9i0tzpKnG6Yk168yIyw==",
          "dev": true,
          "dependencies": {
            "is-core-module": "^2.13.0",
            "path-parse": "^1.0.7",
            "supports-preserve-symlinks-flag": "^1.0.0"
          },
          "bin": {
            "resolve": "bin/resolve"
          },
          "funding": {
            "url": "https://github.com/sponsors/ljharb"
          }
        },
        "node_modules/resolve-from": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
          "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
          "dev": true,
          "engines": {
            "node": ">=4"
          }
        },
        "node_modules/reusify": {
          "version": "1.0.4",
          "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
          "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
          "dev": true,
          "engines": {
            "iojs": ">=1.0.0",
            "node": ">=0.10.0"
          }
        },
        "node_modules/rollup": {
          "version": "4.24.0",
          "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.24.0.tgz",
          "integrity": "sha512-DOmrlGSXNk1DM0ljiQA+i+o0rSLhtii1je5wgk60j49d1jHT5YYttBv1iWOnYSTG+fZZESUOSNiAl89SIet+Cg==",
          "dev": true,
          "dependencies": {
            "@types/estree": "1.0.6"
          },
          "bin": {
            "rollup": "dist/bin/rollup"
          },
          "engines": {
            "node": ">=18.0.0",
            "npm": ">=8.0.0"
          },
          "optionalDependencies": {
            "@rollup/rollup-android-arm-eabi": "4.24.0",
            "@rollup/rollup-android-arm64": "4.24.0",
            "@rollup/rollup-darwin-arm64": "4.24.0",
            "@rollup/rollup-darwin-x64": "4.24.0",
            "@rollup/rollup-linux-arm-gnueabihf": "4.24.0",
            "@rollup/rollup-linux-arm-musleabihf": "4.24.0",
            "@rollup/rollup-linux-arm64-gnu": "4.24.0",
            "@rollup/rollup-linux-arm64-musl": "4.24.0",
            "@rollup/rollup-linux-powerpc64le-gnu": "4.24.0",
            "@rollup/rollup-linux-riscv64-gnu": "4.24.0",
            "@rollup/rollup-linux-s390x-gnu": "4.24.0",
            "@rollup/rollup-linux-x64-gnu": "4.24.0",
            "@rollup/rollup-linux-x64-musl": "4.24.0",
            "@rollup/rollup-win32-arm64-msvc": "4.24.0",
            "@rollup/rollup-win32-ia32-msvc": "4.24.0",
            "@rollup/rollup-win32-x64-msvc": "4.24.0",
            "fsevents": "~2.3.2"
          }
        },
        "node_modules/run-parallel": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
          "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
          "dev": true,
          "funding": [
            {
              "type": "github",
              "url": "https://github.com/sponsors/feross"
            },
            {
              "type": "patreon",
              "url": "https://www.patreon.com/feross"
            },
            {
              "type": "consulting",
              "url": "https://feross.org/support"
            }
          ],
          "dependencies": {
            "queue-microtask": "^1.2.2"
          }
        },
        "node_modules/safe-buffer": {
          "version": "5.1.2",
          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
          "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
          "license": "MIT"
        },
        "node_modules/scheduler": {
          "version": "0.23.2",
          "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.23.2.tgz",
          "integrity": "sha512-UOShsPwz7NrMUqhR6t0hWjFduvOzbtv7toDH1/hIrfRNIDBnnBWd0CwJTGvTpngVlmwGCdP9/Zl/tVrDqcuYzQ==",
          "dependencies": {
            "loose-envify": "^1.1.0"
          }
        },
        "node_modules/semver": {
          "version": "6.3.1",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
          "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
          "dev": true,
          "bin": {
            "semver": "bin/semver.js"
          }
        },
        "node_modules/setimmediate": {
          "version": "1.0.5",
          "resolved": "https://registry.npmjs.org/setimmediate/-/setimmediate-1.0.5.tgz",
          "integrity": "sha512-MATJdZp8sLqDl/68LfQmbP8zKPLQNV6BIZoIgrscFDQ+RsvK/BxeDQOgyxKKoh0y/8h3BqVFnCqQ/gd+reiIXA==",
          "license": "MIT"
        },
        "node_modules/shebang-command": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
          "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
          "dev": true,
          "dependencies": {
            "shebang-regex": "^3.0.0"
          },
          "engines": {
            "node": ">=8"
          }
        },
        "node_modules/shebang-regex": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
          "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
          "dev": true,
          "engines": {
            "node": ">=8"
          }
        },
        "node_modules/signal-exit": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
          "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
          "dev": true,
          "engines": {
            "node": ">=14"
          },
          "funding": {
            "url": "https://github.com/sponsors/isaacs"
          }
        },
        "node_modules/source-map-js": {
          "version": "1.2.1",
          "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
          "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
          "dev": true,
          "engines": {
            "node": ">=0.10.0"
          }
        },
        "node_modules/sprintf-js": {
          "version": "1.0.3",
          "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
          "integrity": "sha512-D9cPgkvLlV3t3IzL0D0YLvGA9Ahk4PcvVwUbN0dSGr1aP0Nrt4AEnTUbuGvquEC0mA64Gqt1fzirlRs5ibXx8g==",
          "license": "BSD-3-Clause"
        },
        "node_modules/string_decoder": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
          "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
          "license": "MIT",
          "dependencies": {
            "safe-buffer": "~5.1.0"
          }
        },
        "node_modules/string-width": {
          "version": "5.1.2",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz",
          "integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
          "dev": true,
          "dependencies": {
            "eastasianwidth": "^0.2.0",
            "emoji-regex": "^9.2.2",
            "strip-ansi": "^7.0.1"
          },
          "engines": {
            "node": ">=12"
          },
          "funding": {
            "url": "https://github.com/sponsors/sindresorhus"
          }
        },
        "node_modules/string-width-cjs": {
          "name": "string-width",
          "version": "4.2.3",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
          "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
          "dev": true,
          "dependencies": {
            "emoji-regex": "^8.0.0",
            "is-fullwidth-code-point": "^3.0.0",
            "strip-ansi": "^6.0.1"
          },
          "engines": {
            "node": ">=8"
          }
        },
        "node_modules/string-width-cjs/node_modules/ansi-regex": {
          "version": "5.0.1",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
          "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
          "dev": true,
          "engines": {
            "node": ">=8"
          }
        },
        "node_modules/string-width-cjs/node_modules/emoji-regex": {
          "version": "8.0.0",
          "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
          "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
          "dev": true
        },
        "node_modules/string-width-cjs/node_modules/strip-ansi": {
          "version": "6.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
          "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
          "dev": true,
          "dependencies": {
            "ansi-regex": "^5.0.1"
          },
          "engines": {
            "node": ">=8"
          }
        },
        "node_modules/strip-ansi": {
          "version": "7.1.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",
          "integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",
          "dev": true,
          "dependencies": {
            "ansi-regex": "^6.0.1"
          },
          "engines": {
            "node": ">=12"
          },
          "funding": {
            "url": "https://github.com/chalk/strip-ansi?sponsor=1"
          }
        },
        "node_modules/strip-ansi-cjs": {
          "name": "strip-ansi",
          "version": "6.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
          "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
          "dev": true,
          "dependencies": {
            "ansi-regex": "^5.0.1"
          },
          "engines": {
            "node": ">=8"
          }
        },
        "node_modules/strip-ansi-cjs/node_modules/ansi-regex": {
          "version": "5.0.1",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
          "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
          "dev": true,
          "engines": {
            "node": ">=8"
          }
        },
        "node_modules/strip-json-comments": {
          "version": "3.1.1",
          "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
          "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
          "dev": true,
          "engines": {
            "node": ">=8"
          },
          "funding": {
            "url": "https://github.com/sponsors/sindresorhus"
          }
        },
        "node_modules/sucrase": {
          "version": "3.35.0",
          "resolved": "https://registry.npmjs.org/sucrase/-/sucrase-3.35.0.tgz",
          "integrity": "sha512-8EbVDiu9iN/nESwxeSxDKe0dunta1GOlHufmSSXxMD2z2/tMZpDMpvXQGsc+ajGo8y2uYUmixaSRUc/QPoQ0GA==",
          "dev": true,
          "dependencies": {
            "@jridgewell/gen-mapping": "^0.3.2",
            "commander": "^4.0.0",
            "glob": "^10.3.10",
            "lines-and-columns": "^1.1.6",
            "mz": "^2.7.0",
            "pirates": "^4.0.1",
            "ts-interface-checker": "^0.1.9"
          },
          "bin": {
            "sucrase": "bin/sucrase",
            "sucrase-node": "bin/sucrase-node"
          },
          "engines": {
            "node": ">=16 || 14 >=14.17"
          }
        },
        "node_modules/supports-color": {
          "version": "5.5.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
          "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
          "dev": true,
          "dependencies": {
            "has-flag": "^3.0.0"
          },
          "engines": {
            "node": ">=4"
          }
        },
        "node_modules/supports-preserve-symlinks-flag": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
          "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
          "dev": true,
          "engines": {
            "node": ">= 0.4"
          },
          "funding": {
            "url": "https://github.com/sponsors/ljharb"
          }
        },
        "node_modules/tailwindcss": {
          "version": "3.4.17",
          "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.4.17.tgz",
          "integrity": "sha512-w33E2aCvSDP0tW9RZuNXadXlkHXqFzSkQew/aIa2i/Sj8fThxwovwlXHSPXTbAHwEIhBFXAedUhP2tueAKP8Og==",
          "dev": true,
          "dependencies": {
            "@alloc/quick-lru": "^5.2.0",
            "arg": "^5.0.2",
            "chokidar": "^3.6.0",
            "didyoumean": "^1.2.2",
            "dlv": "^1.1.3",
            "fast-glob": "^3.3.2",
            "glob-parent": "^6.0.2",
            "is-glob": "^4.0.3",
            "jiti": "^1.21.6",
            "lilconfig": "^3.1.3",
            "micromatch": "^4.0.8",
            "normalize-path": "^3.0.0",
            "object-hash": "^3.0.0",
            "picocolors": "^1.1.1",
            "postcss": "^8.4.47",
            "postcss-import": "^15.1.0",
            "postcss-js": "^4.0.1",
            "postcss-load-config": "^4.0.2",
            "postcss-nested": "^6.2.0",
            "postcss-selector-parser": "^6.1.2",
            "resolve": "^1.22.8",
            "sucrase": "^3.35.0"
          },
          "bin": {
            "tailwind": "lib/cli.js",
            "tailwindcss": "lib/cli.js"
          },
          "engines": {
            "node": ">=14.0.0"
          }
        },
        "node_modules/text-table": {
          "version": "0.2.0",
          "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
          "integrity": "sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==",
          "dev": true
        },
        "node_modules/thenify": {
          "version": "3.3.1",
          "resolved": "https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz",
          "integrity": "sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==",
          "dev": true,
          "dependencies": {
            "any-promise": "^1.0.0"
          }
        },
        "node_modules/thenify-all": {
          "version": "1.6.0",
          "resolved": "https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz",
          "integrity": "sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==",
          "dev": true,
          "dependencies": {
            "thenify": ">= 3.1.0 < 4"
          },
          "engines": {
            "node": ">=0.8"
          }
        },
        "node_modules/to-fast-properties": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
          "integrity": "sha512-/OaKK0xYrs3DmxRYqL/yDc+FxFUVYhDlXMhRmv3z915w2HF1tnN1omB354j8VUGO/hbRzyD6Y3sA7v7GS/ceog==",
          "dev": true,
          "engines": {
            "node": ">=4"
          }
        },
        "node_modules/to-regex-range": {
          "version": "5.0.1",
          "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
          "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
          "dev": true,
          "dependencies": {
            "is-number": "^7.0.0"
          },
          "engines": {
            "node": ">=8.0"
          }
        },
        "node_modules/tr46": {
          "version": "0.0.3",
          "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
          "integrity": "sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw=="
        },
        "node_modules/ts-api-utils": {
          "version": "1.3.0",
          "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-1.3.0.tgz",
          "integrity": "sha512-UQMIo7pb8WRomKR1/+MFVLTroIvDVtMX3K6OUir8ynLyzB8Jeriont2bTAtmNPa1ekAgN7YPDyf6V+ygrdU+eQ==",
          "dev": true,
          "engines": {
            "node": ">=16"
          },
          "peerDependencies": {
            "typescript": ">=4.2.0"
          }
        },
        "node_modules/ts-interface-checker": {
          "version": "0.1.13",
          "resolved": "https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz",
          "integrity": "sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==",
          "dev": true
        },
        "node_modules/type-check": {
          "version": "0.4.0",
          "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
          "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
          "dev": true,
          "dependencies": {
            "prelude-ls": "^1.2.1"
          },
          "engines": {
            "node": ">= 0.8.0"
          }
        },
        "node_modules/typescript": {
          "version": "5.6.3",
          "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.6.3.tgz",
          "integrity": "sha512-hjcS1mhfuyi4WW8IWtjP7brDrG2cuDZukyrYrSauoXGNgx0S7zceP07adYkJycEr56BOUTNPzbInooiN3fn1qw==",
          "dev": true,
          "bin": {
            "tsc": "bin/tsc",
            "tsserver": "bin/tsserver"
          },
          "engines": {
            "node": ">=14.17"
          }
        },
        "node_modules/typescript-eslint": {
          "version": "8.8.1",
          "resolved": "https://registry.npmjs.org/typescript-eslint/-/typescript-eslint-8.8.1.tgz",
          "integrity": "sha512-R0dsXFt6t4SAFjUSKFjMh4pXDtq04SsFKCVGDP3ZOzNP7itF0jBcZYU4fMsZr4y7O7V7Nc751dDeESbe4PbQMQ==",
          "dev": true,
          "dependencies": {
            "@typescript-eslint/eslint-plugin": "8.8.1",
            "@typescript-eslint/parser": "8.8.1",
            "@typescript-eslint/utils": "8.8.1"
          },
          "engines": {
            "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
          },
          "funding": {
            "type": "opencollective",
            "url": "https://opencollective.com/typescript-eslint"
          },
          "peerDependenciesMeta": {
            "typescript": {
              "optional": true
            }
          }
        },
        "node_modules/underscore": {
          "version": "1.13.8",
          "resolved": "https://registry.npmjs.org/underscore/-/underscore-1.13.8.tgz",
          "integrity": "sha512-DXtD3ZtEQzc7M8m4cXotyHR+FAS18C64asBYY5vqZexfYryNNnDc02W4hKg3rdQuqOYas1jkseX0+nZXjTXnvQ==",
          "license": "MIT"
        },
        "node_modules/undici-types": {
          "version": "7.10.0",
          "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-7.10.0.tgz",
          "integrity": "sha512-t5Fy/nfn+14LuOc2KNYg75vZqClpAiqscVvMygNnlsHBFpSXdJaYtXMcdNLpl/Qvc3P2cB3s6lOV51nqsFq4ag=="
        },
        "node_modules/update-browserslist-db": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.1.1.tgz",
          "integrity": "sha512-R8UzCaa9Az+38REPiJ1tXlImTJXlVfgHZsglwBD/k6nj76ctsH1E3q4doGrukiLQd3sGQYu56r5+lo5r94l29A==",
          "dev": true,
          "funding": [
            {
              "type": "opencollective",
              "url": "https://opencollective.com/browserslist"
            },
            {
              "type": "tidelift",
              "url": "https://tidelift.com/funding/github/npm/browserslist"
            },
            {
              "type": "github",
              "url": "https://github.com/sponsors/ai"
            }
          ],
          "dependencies": {
            "escalade": "^3.2.0",
            "picocolors": "^1.1.0"
          },
          "bin": {
            "update-browserslist-db": "cli.js"
          },
          "peerDependencies": {
            "browserslist": ">= 4.21.0"
          }
        },
        "node_modules/uri-js": {
          "version": "4.4.1",
          "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
          "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
          "dev": true,
          "dependencies": {
            "punycode": "^2.1.0"
          }
        },
        "node_modules/util-deprecate": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
          "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw=="
        },
        "node_modules/vite": {
          "version": "5.4.8",
          "resolved": "https://registry.npmjs.org/vite/-/vite-5.4.8.tgz",
          "integrity": "sha512-FqrItQ4DT1NC4zCUqMB4c4AZORMKIa0m8/URVCZ77OZ/QSNeJ54bU1vrFADbDsuwfIPcgknRkmqakQcgnL4GiQ==",
          "dev": true,
          "dependencies": {
            "esbuild": "^0.21.3",
            "postcss": "^8.4.43",
            "rollup": "^4.20.0"
          },
          "bin": {
            "vite": "bin/vite.js"
          },
          "engines": {
            "node": "^18.0.0 || >=20.0.0"
          },
          "funding": {
            "url": "https://github.com/vitejs/vite?sponsor=1"
          },
          "optionalDependencies": {
            "fsevents": "~2.3.3"
          },
          "peerDependencies": {
            "@types/node": "^18.0.0 || >=20.0.0",
            "less": "*",
            "lightningcss": "^1.21.0",
            "sass": "*",
            "sass-embedded": "*",
            "stylus": "*",
            "sugarss": "*",
            "terser": "^5.4.0"
          },
          "peerDependenciesMeta": {
            "@types/node": {
              "optional": true
            },
            "less": {
              "optional": true
            },
            "lightningcss": {
              "optional": true
            },
            "sass": {
              "optional": true
            },
            "sass-embedded": {
              "optional": true
            },
            "stylus": {
              "optional": true
            },
            "sugarss": {
              "optional": true
            },
            "terser": {
              "optional": true
            }
          }
        },
        "node_modules/webidl-conversions": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
          "integrity": "sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ=="
        },
        "node_modules/whatwg-url": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",
          "integrity": "sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==",
          "dependencies": {
            "tr46": "~0.0.3",
            "webidl-conversions": "^3.0.0"
          }
        },
        "node_modules/which": {
          "version": "2.0.2",
          "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
          "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
          "dev": true,
          "dependencies": {
            "isexe": "^2.0.0"
          },
          "bin": {
            "node-which": "bin/node-which"
          },
          "engines": {
            "node": ">= 8"
          }
        },
        "node_modules/word-wrap": {
          "version": "1.2.5",
          "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
          "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
          "dev": true,
          "engines": {
            "node": ">=0.10.0"
          }
        },
        "node_modules/wrap-ansi": {
          "version": "8.1.0",
          "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz",
          "integrity": "sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==",
          "dev": true,
          "dependencies": {
            "ansi-styles": "^6.1.0",
            "string-width": "^5.0.1",
            "strip-ansi": "^7.0.1"
          },
          "engines": {
            "node": ">=12"
          },
          "funding": {
            "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
          }
        },
        "node_modules/wrap-ansi-cjs": {
          "name": "wrap-ansi",
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
          "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
          "dev": true,
          "dependencies": {
            "ansi-styles": "^4.0.0",
            "string-width": "^4.1.0",
            "strip-ansi": "^6.0.0"
          },
          "engines": {
            "node": ">=10"
          },
          "funding": {
            "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
          }
        },
        "node_modules/wrap-ansi-cjs/node_modules/ansi-regex": {
          "version": "5.0.1",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
          "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
          "dev": true,
          "engines": {
            "node": ">=8"
          }
        },
        "node_modules/wrap-ansi-cjs/node_modules/ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "dev": true,
          "dependencies": {
            "color-convert": "^2.0.1"
          },
          "engines": {
            "node": ">=8"
          },
          "funding": {
            "url": "https://github.com/chalk/ansi-styles?sponsor=1"
          }
        },
        "node_modules/wrap-ansi-cjs/node_modules/color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "dev": true,
          "dependencies": {
            "color-name": "~1.1.4"
          },
          "engines": {
            "node": ">=7.0.0"
          }
        },
        "node_modules/wrap-ansi-cjs/node_modules/color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
          "dev": true
        },
        "node_modules/wrap-ansi-cjs/node_modules/emoji-regex": {
          "version": "8.0.0",
          "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
          "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
          "dev": true
        },
        "node_modules/wrap-ansi-cjs/node_modules/string-width": {
          "version": "4.2.3",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
          "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
          "dev": true,
          "dependencies": {
            "emoji-regex": "^8.0.0",
            "is-fullwidth-code-point": "^3.0.0",
            "strip-ansi": "^6.0.1"
          },
          "engines": {
            "node": ">=8"
          }
        },
        "node_modules/wrap-ansi-cjs/node_modules/strip-ansi": {
          "version": "6.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
          "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
          "dev": true,
          "dependencies": {
            "ansi-regex": "^5.0.1"
          },
          "engines": {
            "node": ">=8"
          }
        },
        "node_modules/wrap-ansi/node_modules/ansi-styles": {
          "version": "6.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.1.tgz",
          "integrity": "sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==",
          "dev": true,
          "engines": {
            "node": ">=12"
          },
          "funding": {
            "url": "https://github.com/chalk/ansi-styles?sponsor=1"
          }
        },
        "node_modules/ws": {
          "version": "8.18.3",
          "resolved": "https://registry.npmjs.org/ws/-/ws-8.18.3.tgz",
          "integrity": "sha512-PEIGCY5tSlUt50cqyMXfCzX+oOPqN0vuGqWzbcJ2xvnkzkq46oOpz7dQaTDBdfICb4N14+GARUDw2XV2N4tvzg==",
          "engines": {
            "node": ">=10.0.0"
          },
          "peerDependencies": {
            "bufferutil": "^4.0.1",
            "utf-8-validate": ">=5.0.2"
          },
          "peerDependenciesMeta": {
            "bufferutil": {
              "optional": true
            },
            "utf-8-validate": {
              "optional": true
            }
          }
        },
        "node_modules/xmlbuilder": {
          "version": "10.1.1",
          "resolved": "https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-10.1.1.tgz",
          "integrity": "sha512-OyzrcFLL/nb6fMGHbiRDuPup9ljBycsdCypwuyg5AAHvyWzGfChJpCXMG88AGTIMFhGZ9RccFN1e6lhg3hkwKg==",
          "license": "MIT",
          "engines": {
            "node": ">=4.0"
          }
        },
        "node_modules/yallist": {
          "version": "3.1.1",
          "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
          "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
          "dev": true
        },
        "node_modules/yaml": {
          "version": "2.5.1",
          "resolved": "https://registry.npmjs.org/yaml/-/yaml-2.5.1.tgz",
          "integrity": "sha512-bLQOjaX/ADgQ20isPJRvF0iRUHIxVhYvr53Of7wGcWlO2jvtUlH5m87DsmulFVxRpNLOnI4tB6p/oh8D7kpn9Q==",
          "dev": true,
          "bin": {
            "yaml": "bin.mjs"
          },
          "engines": {
            "node": ">= 14"
          }
        },
        "node_modules/yocto-queue": {
          "version": "0.1.0",
          "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
          "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
          "dev": true,
          "engines": {
            "node": ">=10"
          },
          "funding": {
            "url": "https://github.com/sponsors/sindresorhus"
          }
        }
      }
    }

---

## postcss.config.js

- **ファイルサイズ**: 81 bytes

### ソースコード

    export default {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    };

---

## src\App.tsx

- **ファイルサイズ**: 134553 bytes

### ソースコード

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
    
    // ──────────────────────────────────────────────
    // Main App
    // ──────────────────────────────────────────────
    
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
      const [showSaveTemplate, setShowSaveTemplate] = useState(false);
      const [showPersonalDelete, setShowPersonalDelete] = useState(false);
      const [showPersonalStart, setShowPersonalStart] = useState(false);
      const [showPersonalComplete, setShowPersonalComplete] = useState(false);
      const [personalAttachmentName, setPersonalAttachmentName] = useState('');
      const [showProjectDropdown, setShowProjectDropdown] = useState(false);
      const [showDetailMenu, setShowDetailMenu] = useState(false);
      const [showLinkChatAttachment, setShowLinkChatAttachment] = useState(false);
    
      const isSharedDetailMode = nav.selectedTaskId !== null && nav.detail !== null;
      const isPersonalDetailMode = nav.selectedPersonalTaskId !== null && nav.personalDetail !== null;
      const isDetailMode = isSharedDetailMode || isPersonalDetailMode;
    
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
                  }}
                  showDetailMenu={showDetailMenu}
                  setShowDetailMenu={setShowDetailMenu}
                />
              ) : isPersonalDetailMode && personalDetail ? (
                <PersonalTaskDetailView
                  detail={personalDetail}
                  nav={nav}
                  onBack={nav.closeTask}
                  showDelete={showPersonalDelete}
                  setShowDelete={setShowPersonalDelete}
                  showStart={showPersonalStart}
                  setShowStart={setShowPersonalStart}
                  showComplete={showPersonalComplete}
                  setShowComplete={setShowPersonalComplete}
                  personalAttachmentName={personalAttachmentName}
                  setPersonalAttachmentName={setPersonalAttachmentName}
                />
              ) : nav.pageView === 'guide' ? (
                <GuidePage nav={nav} onCreateShared={() => setShowCreate(true)} onCreatePersonal={() => setShowCreatePersonal(true)} />
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
          {showCreate && (
            <CreateModal
              nav={nav}
              onClose={() => setShowCreate(false)}
              projectMembers={nav.projectMembers}
              projectName={nav.currentProject?.name ?? '---'}
              onShowTemplateList={() => { setShowCreate(false); setShowTemplateList(true); }}
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
              onLink={(name) => { void nav.addAttachment(name, 'reference'); setShowLinkChatAttachment(false); }}
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
    
    function GuidePage({ nav, onCreateShared, onCreatePersonal }: {
      nav: ReturnType<typeof useTaskNavi>;
      onCreateShared: () => void;
      onCreatePersonal: () => void;
    }) {
      return (
        <>
          <section className="guide-cards">
            <div className="guide-card">
              <div className="guide-card-icon shared"><Users size={22} /></div>
              <h3>{GUIDE_SHARED_TITLE}</h3>
              <p>{GUIDE_SHARED_DESC}</p>
              <div className="guide-card-actions">
                <button className="primary-button" onClick={onCreateShared}><Plus size={15} />{GUIDE_SHARED_ACTION}</button>
              </div>
            </div>
            <div className="guide-card">
              <div className="guide-card-icon personal"><ListChecks size={22} /></div>
              <h3>{GUIDE_PERSONAL_TITLE}</h3>
              <p>{GUIDE_PERSONAL_DESC}</p>
              <div className="guide-card-actions">
                <button className="primary-button" onClick={onCreatePersonal}><Plus size={15} />{GUIDE_PERSONAL_ACTION}</button>
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
    
        return { shared, personal };
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
            const allCards = [...colShared, ...colPersonal];
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
    
        return list;
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
            const colTasks = tasks.filter((t) => t.board_column === col);
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
    
        return list;
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
            const colTasks = tasks.filter((t) => t.board_column === col);
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
      };
      showDetailMenu: boolean;
      setShowDetailMenu: (v: boolean) => void;
    }) {
      const d = detail;
      const m = modals;
    
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
                      {d.task.is_creator && d.task.status === 'open' && (
                        <button className="detail-menu-item danger-text" onClick={() => { m.setShowForceClose(true); setShowDetailMenu(false); }}>
                          <Lock size={14} />強制終了する
                        </button>
                      )}
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
                      onView={() => void nav.accessAtt(d.my_assignment!.assignment_id, r.attachment_id, 'view')}
                      onDownload={() => void nav.accessAtt(d.my_assignment!.assignment_id, r.attachment_id, 'download')}
                      onConfirm={() => void nav.confirmDoc(d.my_assignment!.assignment_id, r.attachment_id)}
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
                          {message.attachment_filename && <div className="chat-attachment-display"><FileText size={11} />{message.attachment_filename}</div>}
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
                  noteInput={noteInput} setNoteInput={setNoteInput}
                  noteColor={noteColor} setNoteColor={setNoteColor}
                  noteAttachmentName={noteAttachmentName} setNoteAttachmentName={setNoteAttachmentName}
                  attachNoteFile={attachNoteFile} addNote={addNote}
                  onDelete={(id) => void nav.deleteNote(id)}
                  onToggleFavorite={(id) => void nav.toggleNoteFavorite(id)}
                  onClose={() => setChatOpen(false)}
                />
              ) : dockPanel === 'personal_note' ? (
                <PersonalNotePanel
                  notes={taskPersonalNotes}
                  noteInput={noteInput} setNoteInput={setNoteInput}
                  noteColor={noteColor} setNoteColor={setNoteColor}
                  noteAttachmentName={noteAttachmentName} setNoteAttachmentName={setNoteAttachmentName}
                  attachNoteFile={attachNoteFile} addNote={addNote}
                  onDelete={(id) => void nav.deleteNote(id)}
                  onClose={() => setChatOpen(false)}
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
    
    function PersonalTaskDetailView({ detail, nav, onBack, showDelete, setShowDelete, showStart, setShowStart, showComplete, setShowComplete, personalAttachmentName, setPersonalAttachmentName }: {
      detail: PersonalTaskDetailView;
      nav: ReturnType<typeof useTaskNavi>;
      onBack: () => void;
      showDelete: boolean; setShowDelete: (v: boolean) => void;
      showStart: boolean; setShowStart: (v: boolean) => void;
      showComplete: boolean; setShowComplete: (v: boolean) => void;
      personalAttachmentName: string; setPersonalAttachmentName: (v: string) => void;
    }) {
      const d = detail;
      const [editingTitle, setEditingTitle] = useState(false);
      const [titleDraft, setTitleDraft] = useState(d.task.title);
      const [editingBody, setEditingBody] = useState(false);
      const [bodyDraft, setBodyDraft] = useState(d.task.body);
      const [editingDue, setEditingDue] = useState(false);
      const [dueDraft, setDueDraft] = useState(d.task.due_at ? d.task.due_at.slice(0, 10) : '');
    
      function saveTitle() {
        void nav.updatePersonalTask(d.task.id, { title: titleDraft.trim() });
        setEditingTitle(false);
      }
      function saveBody() {
        void nav.updatePersonalTask(d.task.id, { body: bodyDraft.trim() });
        setEditingBody(false);
      }
      function saveDue() {
        void nav.updatePersonalTask(d.task.id, { due_at: dueDraft ? new Date(dueDraft).toISOString() : null });
        setEditingDue(false);
      }
      function addAttachment() {
        const name = personalAttachmentName.trim();
        if (!name) return;
        void nav.addPersonalAttachment(d.task.id, name);
        setPersonalAttachmentName('');
      }
    
      const projectLabel = d.task.related_project_name
        ? (d.task.related_project_accessible ? d.task.related_project_name : PERSONAL_PROJECT_INACCESSIBLE)
        : PERSONAL_PROJECT_NO_SELECTION;
    
      return (
        <section className="detail-mode">
          <button className="back-button" onClick={onBack}><ChevronLeft size={16} />一覧に戻る</button>
          <div style={{ maxWidth: 700 }}>
            <div className="panel personal-detail-panel">
              <div className="personal-detail-top">
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  <span className="task-type-label personal">{TASK_TYPE_LABELS.personal}</span>
                  <span className={`status-pill ${PERSONAL_BOARD_COLUMN_META[d.task.board_column].className}`}>{d.task.status_label}</span>
                  {d.task.is_overdue && d.task.status === 'open' && <span className="badge overdue">期限超過</span>}
                </div>
              </div>
    
              {/* Title */}
              {editingTitle && d.can_edit_title ? (
                <div style={{ marginBottom: 10 }}>
                  <input className="personal-project-select" value={titleDraft} onChange={(e) => setTitleDraft(e.target.value)} autoFocus />
                  <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
                    <button className="action-btn primary" style={{ width: 'auto', padding: '6px 14px' }} onClick={saveTitle}>保存</button>
                    <button className="action-btn secondary" style={{ width: 'auto', padding: '6px 14px', margin: 0 }} onClick={() => { setEditingTitle(false); setTitleDraft(d.task.title); }}>キャンセル</button>
                  </div>
                </div>
              ) : (
                <h2 onClick={() => d.can_edit_title && setEditingTitle(true)} style={{ cursor: d.can_edit_title ? 'pointer' : 'default' }}>
                  {d.task.title || '（件名未設定）'}
                </h2>
              )}
    
              {/* Body */}
              {editingBody && d.can_edit_body ? (
                <div style={{ marginBottom: 16 }}>
                  <textarea className="personal-project-select" style={{ minHeight: 80, resize: 'vertical' }} value={bodyDraft} onChange={(e) => setBodyDraft(e.target.value)} autoFocus rows={4} />
                  <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
                    <button className="action-btn primary" style={{ width: 'auto', padding: '6px 14px' }} onClick={saveBody}>保存</button>
                    <button className="action-btn secondary" style={{ width: 'auto', padding: '6px 14px', margin: 0 }} onClick={() => { setEditingBody(false); setBodyDraft(d.task.body); }}>キャンセル</button>
                  </div>
                </div>
              ) : (
                <p className="personal-detail-desc" onClick={() => d.can_edit_body && setEditingBody(true)} style={{ cursor: d.can_edit_body ? 'pointer' : 'default' }}>
                  {d.task.body || '（本文未設定）'}
                </p>
              )}
    
              <div className="detail-block"><span className="detail-label">ステータス</span><strong>{d.task.status_label}</strong></div>
              <div className="detail-block"><span className="detail-label">関連プロジェクト</span><strong>{projectLabel}</strong></div>
    
              {/* Due date */}
              <div className="detail-block">
                <span className="detail-label">期限</span>
                {editingDue && d.can_edit_due ? (
                  <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                    <input type="date" className="personal-project-select" style={{ width: 'auto' }} value={dueDraft} onChange={(e) => setDueDraft(e.target.value)} />
                    <button className="action-btn primary" style={{ width: 'auto', padding: '4px 10px', fontSize: 10 }} onClick={saveDue}>保存</button>
                    <button className="action-btn secondary" style={{ width: 'auto', padding: '4px 10px', margin: 0, fontSize: 10 }} onClick={() => { setEditingDue(false); }}>キャンセル</button>
                  </div>
                ) : (
                  <strong
                    className={d.task.is_overdue ? 'danger-text' : ''}
                    onClick={() => d.can_edit_due && setEditingDue(true)}
                    style={{ cursor: d.can_edit_due ? 'pointer' : 'default' }}
                  >
                    {d.task.due_label || '期限なし'}
                  </strong>
                )}
              </div>
    
              {/* Attachments */}
              <div className="detail-divider" />
              <div className="detail-section-title"><span><FileText size={14} />添付資料</span><strong>{d.task.attachments.length}件</strong></div>
              <div className="personal-attachment-list">
                {d.task.attachments.map((att) => (
                  <div key={att.id} className="attachment-row">
                    <div className="attachment-info">
                      <FileText size={15} />
                      <div>
                        <strong>{att.display_name}</strong>
                      </div>
                    </div>
                    {d.can_delete_attachment && (
                      <div className="attachment-actions">
                        <button className="mini-btn danger" onClick={() => void nav.removePersonalAttachment(att.id)}><Trash2 size={12} />削除</button>
                      </div>
                    )}
                  </div>
                ))}
                {d.task.attachments.length === 0 && <div className="note-empty">資料はありません</div>}
                {d.can_add_attachment && (
                  <div className="personal-attachment-add">
                    <input
                      value={personalAttachmentName}
                      onChange={(e) => setPersonalAttachmentName(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && addAttachment()}
                      placeholder="資料名を入力..."
                    />
                    <button className="action-btn primary" style={{ width: 'auto', padding: '8px 14px', margin: 0 }} disabled={!personalAttachmentName.trim()} onClick={addAttachment}>
                      <Plus size={14} />追加
                    </button>
                  </div>
                )}
              </div>
    
              {/* Action buttons */}
              <div className="detail-divider" />
              <div className="detail-ops">
                {d.task.status === 'draft' && d.can_start && (
                  <>
                    {d.start_errors.length > 0 && (
                      <div className="publish-errors">
                        {d.start_errors.map((e, i) => <div key={i} className="publish-error-item"><AlertTriangle size={12} />{e}</div>)}
                      </div>
                    )}
                    <button className="action-btn primary" onClick={() => setShowStart(true)}><Send size={14} />開始する</button>
                  </>
                )}
                {d.task.status === 'open' && d.can_complete && (
                  <button className="action-btn primary" onClick={() => setShowComplete(true)}><Check size={14} />完了してアーカイブ</button>
                )}
                {d.can_delete && (
                  <button className="action-btn danger" onClick={() => setShowDelete(true)}><Trash2 size={14} />削除する</button>
                )}
              </div>
    
              {/* Footer info */}
              <div className="detail-footer">
                <span><FileText size={11} />作成日：{new Date(d.task.created_at).toLocaleDateString('ja-JP')}</span>
                {d.task.started_at && <span><Check size={11} />開始日：{new Date(d.task.started_at).toLocaleDateString('ja-JP')}</span>}
                {d.task.archived_at && <span><Archive size={11} />アーカイブ日：{new Date(d.task.archived_at).toLocaleDateString('ja-JP')}</span>}
              </div>
            </div>
          </div>
        </section>
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
    
    function RequirementRow({ req, onView, onDownload, onConfirm }: {
      req: RequirementView;
      onView: () => void;
      onDownload: () => void;
      onConfirm: () => void;
    }) {
      return (
        <div className="req-row">
          <div className="req-info">
            <FileText size={14} />
            <div>
              <strong>{req.attachment_name}</strong>
              <span className="req-meta">
                必要版：v{req.required_revision_no}{req.accessed_revision_no ? ` ・ 閲覧版：v${req.accessed_revision_no}` : ''} ・ {REQUIREMENT_STATUS_LABELS[req.requirement_status]}
              </span>
            </div>
          </div>
          {req.requirement_status === 'required' && (
            <div className="req-actions">
              <button className="mini-btn" onClick={onView}><Eye size={12} />閲覧</button>
              <button className="mini-btn" onClick={onDownload}><Download size={12} />DL</button>
              <button className="mini-btn" disabled={!req.can_confirm} onClick={onConfirm} title={!req.can_confirm ? '資料を閲覧またはダウンロードしてから確認完了にしてください' : ''}>
                <FileCheck size={12} />確認完了
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
    
    function SharedNotePanel({ notes, noteInput, setNoteInput, noteColor, setNoteColor, noteAttachmentName, setNoteAttachmentName, attachNoteFile, addNote, onDelete, onToggleFavorite, onClose }: {
      notes: { id: string; text: string; color: string; attachment_filename: string | null; is_favorited: boolean }[];
      noteInput: string; setNoteInput: (v: string) => void;
      noteColor: string; setNoteColor: (v: string) => void;
      noteAttachmentName: string; setNoteAttachmentName: (v: string) => void;
      attachNoteFile: (f: File | undefined) => void;
      addNote: () => void;
      onDelete: (id: string) => void;
      onToggleFavorite: (id: string) => void;
      onClose: () => void;
    }) {
      return (
        <div className="note-panel">
          <div className="chat-header">
            <div><strong>共有ノート</strong><span className="muted-text">タスクの関係者に共有されます</span></div>
            <button className="icon-btn" onClick={onClose} aria-label="閉じる"><X size={16} /></button>
          </div>
          <div className="note-scroll">
            <div className="note-section">
              <div className="note-section-title"><StickyNote size={14} />共有ノート</div>
              <div className="note-card-grid">
                {notes.map((n) => (
                  <div key={n.id} className={`note-card ${n.color}`}>
                    <p>{n.text}</p>
                    {n.attachment_filename && <div className="note-card-attachment"><FileText size={11} />{n.attachment_filename}</div>}
                    <div className="note-card-actions">
                      <button className={`note-card-fav ${n.is_favorited ? 'note-card-fav-active' : ''}`} onClick={() => onToggleFavorite(n.id)} title={n.is_favorited ? 'お気に入り解除' : 'お気に入り登録'}>
                        <Star size={12} />
                      </button>
                      <button className="note-card-delete" onClick={() => onDelete(n.id)}><Trash2 size={12} /></button>
                    </div>
                  </div>
                ))}
                {notes.length === 0 && <div className="note-empty">共有ノートがありません</div>}
              </div>
            </div>
            <div className="note-section">
              <div className="note-section-title"><Plus size={14} />共有ノートを追加</div>
              <div className="note-add-row">
                <input value={noteInput} onChange={(e) => setNoteInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addNote()} placeholder="共有ノートを入力..." />
                <label className="note-attach-btn" htmlFor="note-file-input-shared"><Plus size={14} /></label>
                <input id="note-file-input-shared" className="chat-file-input" type="file" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx" onChange={(e) => attachNoteFile(e.target.files?.[0])} />
                <div className="note-color-picker">
                  {NOTE_COLORS.map((c) => <button key={c} className={`note-color-dot ${c} ${noteColor === c ? 'note-color-selected' : ''}`} onClick={() => setNoteColor(c)} />)}
                </div>
                <button className="note-add-btn" onClick={addNote} disabled={!noteInput.trim()}><Plus size={15} /></button>
              </div>
              {noteAttachmentName && <div className="note-attachment-chip"><FileText size={11} />{noteAttachmentName}<button onClick={() => setNoteAttachmentName('')}><X size={11} /></button></div>}
            </div>
          </div>
        </div>
      );
    }
    
    function PersonalNotePanel({ notes, noteInput, setNoteInput, noteColor, setNoteColor, noteAttachmentName, setNoteAttachmentName, attachNoteFile, addNote, onDelete, onClose }: {
      notes: { id: string; text: string; color: string; attachment_filename: string | null }[];
      noteInput: string; setNoteInput: (v: string) => void;
      noteColor: string; setNoteColor: (v: string) => void;
      noteAttachmentName: string; setNoteAttachmentName: (v: string) => void;
      attachNoteFile: (f: File | undefined) => void;
      addNote: () => void;
      onDelete: (id: string) => void;
      onClose: () => void;
    }) {
      return (
        <div className="note-panel">
          <div className="chat-header">
            <div><strong>個人ノート</strong><span className="muted-text">自分だけに表示されます</span></div>
            <button className="icon-btn" onClick={onClose} aria-label="閉じる"><X size={16} /></button>
          </div>
          <div className="note-scroll">
            <div className="note-section">
              <div className="note-section-title"><BookOpen size={14} />個人ノート</div>
              <div className="note-card-grid">
                {notes.map((n) => (
                  <div key={n.id} className={`note-card ${n.color}`}>
                    <p>{n.text}</p>
                    {n.attachment_filename && <div className="note-card-attachment"><FileText size={11} />{n.attachment_filename}</div>}
                    <button className="note-card-delete" onClick={() => onDelete(n.id)}><Trash2 size={12} /></button>
                  </div>
                ))}
                {notes.length === 0 && <div className="note-empty">個人ノートがありません</div>}
              </div>
            </div>
            <div className="note-section">
              <div className="note-section-title"><Plus size={14} />個人ノートを追加</div>
              <div className="note-add-row">
                <input value={noteInput} onChange={(e) => setNoteInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addNote()} placeholder="個人ノートを入力..." />
                <label className="note-attach-btn" htmlFor="note-file-input-personal"><Plus size={14} /></label>
                <input id="note-file-input-personal" className="chat-file-input" type="file" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx" onChange={(e) => attachNoteFile(e.target.files?.[0])} />
                <div className="note-color-picker">
                  {NOTE_COLORS.map((c) => <button key={c} className={`note-color-dot ${c} ${noteColor === c ? 'note-color-selected' : ''}`} onClick={() => setNoteColor(c)} />)}
                </div>
                <button className="note-add-btn" onClick={addNote} disabled={!noteInput.trim()}><Plus size={15} /></button>
              </div>
              {noteAttachmentName && <div className="note-attachment-chip"><FileText size={11} />{noteAttachmentName}<button onClick={() => setNoteAttachmentName('')}><X size={11} /></button></div>}
            </div>
          </div>
        </div>
      );
    }
    
    // ──────────────────────────────────────────────
    // Modals
    // ──────────────────────────────────────────────
    
    function CreateModal({ nav, onClose, projectMembers, projectName, onShowTemplateList }: {
      nav: ReturnType<typeof useTaskNavi>;
      onClose: () => void;
      projectMembers: UserView[];
      projectName: string;
      onShowTemplateList: () => void;
    }) {
      const [purpose, setPurpose] = useState<TaskPurpose>('作業依頼');
      const [title, setTitle] = useState('');
      const [body, setBody] = useState('');
      const [dueDate, setDueDate] = useState('');
      const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
      const [dateError, setDateError] = useState('');
      const today = todayLocalDate();
    
      function toggleMember(id: string) {
        setSelectedMembers((prev) => prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]);
      }
      function handleDateChange(val: string) {
        setDueDate(val);
        setDateError(val && val < today ? '過去の日付は設定できません' : '');
      }
      function handleSubmit(publish: boolean) {
        if (dueDate && dueDate < today) { setDateError('過去の日付は設定できません'); return; }
        void nav.createTask({
          purpose, title: title.trim(), body: body.trim(),
          due_at: dueDate ? new Date(dueDate).toISOString() : null,
          assignee_user_ids: selectedMembers, publish, successor_user_id: null,
        });
        onClose();
      }
    
      return (
        <div className="modal-backdrop" onMouseDown={onClose}>
          <div className="create-modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div><span className="eyebrow">新しい共有タスク</span><h2>共有タスクを作成</h2></div>
              <button className="icon-btn" onClick={onClose}><X size={19} /></button>
            </div>
            <div className="create-field-group">
              <label className="create-field"><span>対象プロジェクト</span><div className="project-display">{projectName}</div></label>
              <label className="create-field"><span>目的</span>
                <select value={purpose} onChange={(e) => setPurpose(e.target.value as TaskPurpose)}>
                  {PURPOSE_OPTIONS.map((p) => <option key={p}>{p}</option>)}
                </select>
              </label>
              <label className="create-field"><span>件名</span><input autoFocus value={title} onChange={(e) => setTitle(e.target.value)} placeholder="例：資料の最終確認をする" /></label>
              <label className="create-field"><span>本文</span><textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="タスクの詳細を入力..." rows={3} /></label>
              <label className="create-field"><span>期限</span><input type="date" min={today} value={dueDate} onChange={(e) => handleDateChange(e.target.value)} /></label>
              {dateError && <span className="date-error">{dateError}</span>}
              <div className="create-field"><span>対象者</span>
                <div className="member-select-grid">
                  {projectMembers.map((m) => (
                    <button key={m.id} className={`member-chip ${selectedMembers.includes(m.id) ? 'member-selected' : ''}`} onClick={() => toggleMember(m.id)}>
                      <Check size={12} />{m.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-note"><ShieldCheck size={16} /><span>下書き保存は未入力でも可能です。公開すると対象者に通知されます。</span></div>
            <div className="modal-actions">
              <button className="secondary-button" onClick={onShowTemplateList}><Bookmark size={14} />テンプレートから作成</button>
              <button className="primary-button" onClick={() => handleSubmit(true)}><Send size={15} />公開</button>
              <button className="secondary-button" onClick={() => handleSubmit(false)}>下書き保存</button>
              <button className="secondary-button" onClick={onClose}>キャンセル</button>
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
      const today = todayLocalDate();
    
      const availableProjects = nav.projects.filter((p) => nav.availableProjectIds.has(p.id));
    
      function handleSubmit() {
        void nav.createPersonalTask({
          title: title.trim(),
          body: body.trim(),
          related_project_id: relatedProjectId || null,
          due_at: dueDate ? new Date(dueDate).toISOString() : null,
        });
        onClose();
      }
    
      return (
        <div className="modal-backdrop" onMouseDown={onClose}>
          <div className="create-modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div><span className="eyebrow">新しい個人タスク</span><h2>個人タスクを作成</h2></div>
              <button className="icon-btn" onClick={onClose}><X size={19} /></button>
            </div>
            <div className="create-field-group">
              <label className="create-field"><span>件名</span><input autoFocus value={title} onChange={(e) => setTitle(e.target.value)} placeholder="例：週次レポートの準備" /></label>
              <label className="create-field"><span>本文</span><textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="タスクの詳細を入力..." rows={3} /></label>
              <label className="create-field">
                <span>関連プロジェクト（任意）</span>
                <select className="personal-project-select" value={relatedProjectId} onChange={(e) => setRelatedProjectId(e.target.value)}>
                  <option value="">{PERSONAL_PROJECT_NO_SELECTION}</option>
                  {availableProjects.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </label>
              <label className="create-field"><span>期限（任意）</span><input type="date" min={today} value={dueDate} onChange={(e) => setDueDate(e.target.value)} /></label>
            </div>
            <div className="modal-note"><ListChecks size={16} /><span>個人タスクはあなた専用のタスクで、プロジェクトには共有されません。下書きとして保存されます。</span></div>
            <div className="modal-actions">
              <button className="secondary-button" onClick={onClose}>キャンセル</button>
              <button className="primary-button" disabled={!title.trim()} onClick={handleSubmit}><Plus size={15} />下書き保存</button>
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
      return (
        <div className="modal-backdrop" onMouseDown={onClose}>
          <div className="create-modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div><span className="eyebrow">差戻し</span><h2>作業報告を差戻す</h2></div>
              <button className="icon-btn" onClick={onClose}><X size={19} /></button>
            </div>
            <div style={{ background: '#f7f9fa', borderRadius: 6, padding: 12, marginBottom: 16 }}>
              <p style={{ fontSize: 11, color: '#3a4e5e', margin: 0 }}>{submission.body}</p>
            </div>
            <label className="create-field"><span>差戻し理由（必須）</span><textarea value={reason} onChange={(e) => setReason(e.target.value)} placeholder="差戻し理由を入力してください..." rows={3} /></label>
            <div className="modal-actions">
              <button className="secondary-button" onClick={onClose}>キャンセル</button>
              <button className="primary-button" disabled={!reason.trim()} onClick={() => onConfirm(reason.trim())} style={{ background: '#c2756a' }}>差戻す</button>
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
      onLink: (name: string) => void;
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
                if (chat?.attachment_filename) onLink(chat.attachment_filename);
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

---

## src\data\taskNaviDb.ts

- **ファイルサイズ**: 4111 bytes

### ソースコード

    import Dexie, { type Table } from 'dexie';
    import type {
      Project, User, ProjectMember, Task, TaskAssignment,
      AssignmentSubmission, TaskAttachment, AttachmentRevision,
      AssignmentDocumentRequirement, TaskChatMessage, TaskNote, TaskNoteFavorite,
      TaskTodo, TaskActivityEvent,
      PersonalTask, PersonalTaskAttachment, PersonalTaskDeletionEvent,
      TaskTemplate, TaskTemplateAttachment, TaskTemplateFavorite,
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
      }
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

---

## src\data\taskNaviRepository.ts

- **ファイルサイズ**: 21868 bytes

### ソースコード

    import { getDb } from './taskNaviDb';
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

---

## src\data\taskNaviSeed.ts

- **ファイルサイズ**: 22001 bytes

### ソースコード

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
        db.task_templates, db.task_template_attachments, db.task_template_favorites];
      await db.transaction('rw', tables, async () => {
        await Promise.all(tables.map((t) => t.clear()));
      });
      await seedDatabase();
    }

---

## src\domain\taskNaviConstants.ts

- **ファイルサイズ**: 13378 bytes

### ソースコード

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

---

## src\domain\taskNaviTypes.ts

- **ファイルサイズ**: 12457 bytes

### ソースコード

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

---

## src\hooks\useTaskNavi.ts

- **ファイルサイズ**: 22360 bytes

### ソースコード

    import { useCallback, useEffect, useState } from 'react';
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
    import { getProjectMembers, getAllProjectMembers } from '../data/taskNaviRepository';
    
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
        const list = await service.loadTemplates(userId);
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
    
      // === Personal Task operations ===
      const createPersonalTask = useCallback(async (input: PersonalTaskCreateInput) => {
        if (!currentUserId) return;
        await service.createPersonalTaskItem({
          owner_user_id: currentUserId,
          title: input.title, body: input.body,
          related_project_id: input.related_project_id,
          due_at: input.due_at,
        });
        await reloadPersonalTasks(currentUserId);
        showToast('下書きとして保存しました');
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
        confirmTask, submitResponse, submitWorkReport, acceptWorkReport, returnWorkReport,
        exemptAssignee, outOfScopeAssignee, forceCloseTask, archiveTask,
        sendChat, addNote, deleteNote, toggleNoteFavorite, addTodo, toggleTodo, deleteTodo,
        handleReset,
        // Phase 3.0
        pageView, navigateTo,
        personalTasks, personalDetail, selectedPersonalTaskId,
        openPersonalTask, createPersonalTask, startPersonalTask, completePersonalTask,
        deletePersonalTask, updatePersonalTask, addPersonalAttachment, removePersonalAttachment,
        templates, saveTemplate, createTaskFromTemplate, toggleTemplateFavorite,
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

---

## src\index.css

- **ファイルサイズ**: 54575 bytes

### ソースコード

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

---

## src\main.tsx

- **ファイルサイズ**: 234 bytes

### ソースコード

    import { StrictMode } from 'react';
    import { createRoot } from 'react-dom/client';
    import App from './App.tsx';
    import './index.css';
    
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <App />
      </StrictMode>
    );

---

## src\services\taskNaviSelectors.ts

- **ファイルサイズ**: 25869 bytes

### ソースコード

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
      return submissions.map((s) => {
        const submitter = users.get(s.submitted_by);
        const reviewer = s.reviewed_by_user_id ? users.get(s.reviewed_by_user_id) : null;
        return {
          id: s.id, assignment_id: s.assignment_id,
          submission_type: s.submission_type, submission_no: s.submission_no,
          body: s.body, submission_status: s.submission_status,
          submitted_by_name: submitter?.name ?? '不明',
          submitted_at: s.submitted_at,
          reviewed_by_name: reviewer?.name ?? null,
          reviewed_at: s.reviewed_at, review_comment: s.review_comment,
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

---

## src\services\taskNaviService.ts

- **ファイルサイズ**: 33515 bytes

### ソースコード

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
    
      const [users, projects, assignments, favorites, attachmentsRaw, allRequirements, allSubmissions, chats, notes, todos, history] = await Promise.all([
        getUsers(), getProjects(), getAssignmentsByTask(taskId), getNoteFavorites(currentUserId),
        getAttachmentsByTask(taskId), getAllRequirementsForTask(taskId),
        getAllSubmissionsByTask(taskId), getChatMessages(taskId), getNotes(taskId),
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
      const [templates, users, favorites] = await Promise.all([
        getAllTemplates(), getUsers(), getTemplateFavorites(userId),
      ]);
      const userMap = new Map(users.map((u) => [u.id, u]));
      const favoriteIds = new Set(favorites.map((f) => f.template_id));
      const allAttachments = await Promise.all(templates.map((t) => getTemplateAttachments(t.id)));
      const attMap = new Map(allAttachments.map((a, i) => [templates[i].id, a]));
      return templates.map((t) => buildTemplateView(t, attMap.get(t.id) ?? [], userMap, favoriteIds));
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

---

## src\vite-env.d.ts

- **ファイルサイズ**: 38 bytes

### ソースコード

    /// <reference types="vite/client" />

---

## tailwind.config.js

- **ファイルサイズ**: 170 bytes

### ソースコード

    /** @type {import('tailwindcss').Config} */
    export default {
      content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
      theme: {
        extend: {},
      },
      plugins: [],
    };

---

## tsconfig.app.json

- **ファイルサイズ**: 711 bytes

### ソースコード

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

---

## tsconfig.json

- **ファイルサイズ**: 119 bytes

### ソースコード

    {
      "files": [],
      "references": [
        { "path": "./tsconfig.app.json" },
        { "path": "./tsconfig.node.json" }
      ]
    }

---

## tsconfig.node.json

- **ファイルサイズ**: 481 bytes

### ソースコード

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

---

## vite.config.ts

- **ファイルサイズ**: 366 bytes

### ソースコード

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
