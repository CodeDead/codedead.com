import mantine from 'eslint-config-mantine';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  ...mantine,
  { ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}', '.next'] },
  {
    files: ['**/*.story.tsx'],
    rules: { 'no-console': 'off' },
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: '19.0' },
    },
    rules: {
      'no-multi-spaces': ['error', { ignoreEOLComments: false }],
      'no-trailing-spaces': ['error', { skipBlankLines: false }],
      'no-use-before-define': ['error', { functions: true }],
      'react/function-component-definition': [
        2,
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/prop-types': 0,
      'react/jsx-uses-vars': 'error',
      'react/jsx-uses-react': 'error',
      semi: [2, 'always'],
      quotes: [2, 'single'],
    },
  }
);
