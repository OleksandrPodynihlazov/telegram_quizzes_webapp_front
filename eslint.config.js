import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default [
  { ignores: ['dist', 'node_modules'] }, // Ignore unnecessary folders
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: 'detect' } }, // Auto-detect React version
    plugins: {
      react,
      prettier,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y, // Accessibility
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      ...prettierConfig.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // 🔹 Improve Code Quality
      'no-console': 'warn', // Warn if console.log is left in production
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignore unused variables starting with _

      // 🔹 React Best Practices
      'react/prop-types': 'off', // Disable prop-types if using TypeScript
      'react/react-in-jsx-scope': 'off', // Not needed in modern React
      'react/jsx-boolean-value': ['warn', 'never'], // Enforce concise JSX boolean values

      // 🔹 Hooks Best Practices
      'react-hooks/rules-of-hooks': 'error', // Prevents bad hook usage
      'react-hooks/exhaustive-deps': 'warn', // Ensures useEffect dependencies are correctly set

      // 🔹 Accessibility Improvements
      'jsx-a11y/alt-text': 'warn', // Ensure images have alt text
      'jsx-a11y/no-noninteractive-element-interactions': 'warn', // Improve accessibility
      'jsx-a11y/anchor-is-valid': 'warn', // Prevent invalid anchor `<a>` usage

      // 🔹 Prettier Compatibility (Avoids Conflicts)
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto',
        },
      ], // Uses Prettier for formatting
    },
  },
]
