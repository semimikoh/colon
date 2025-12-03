// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import prettier from 'eslint-config-prettier';

import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: ['node_modules', 'dist', 'packages/**/dist', 'storybook-static/**'],
  },

  js.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: {
      react: reactPlugin,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      'unused-imports': unusedImports,
      '@typescript-eslint': tsPlugin,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      // React 기본 권장 규칙
      ...reactPlugin.configs.recommended.rules,

      // TS 기본 권장 규칙
      ...tsPlugin.configs.recommended.rules,

      // unused import 제거
      'unused-imports/no-unused-imports': 'error',

      // unused 변수 경고 (앞에 _ 붙이면 무시)
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used' },
      ],

      // import 순서 관련 규칙 등은 필요하면 나중에 추가
    },
  },

  prettier,

  ...storybook.configs['flat/recommended'],
];
