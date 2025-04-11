import globals from 'globals';
import ts_eslint from 'typescript-eslint';
import js from '@eslint/js';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintPluginAstro from 'eslint-plugin-astro'; // Make sure this is installed
import path from 'node:path';
import { includeIgnoreFile } from '@eslint/compat';
import { fileURLToPath } from 'node:url';
import pluginInterfaceToType from 'eslint-plugin-interface-to-type';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitIgnorePath = path.resolve(__dirname, '.gitignore');

export default ts_eslint.config(
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'coverage/**',
      '.astro/**',
      '**/.*',
      '**/*.config.{js,ts}',
      '**/*.d.ts',
      'node_modules/@clerk/astro/**',
      'convex/_generated/**',
    ],
  },
  includeIgnoreFile(gitIgnorePath),
  js.configs.recommended,
  ...ts_eslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  eslintPluginUnicorn.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Add node globals if needed
      },
    },
    rules: {
      // General rules applying to JS/TS/Astro script blocks
      "interface-to-type/prefer-type-over-interface": "error",
      'unicorn/filename-case': 'off',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          ignore: [/props/i, /args/i],
        },
      ],
    },
    plugins: {
      ["interface-to-type"]: pluginInterfaceToType,
    }
  },
  {
    files: ['src/convex/{users,snippets}/**/*.ts'],
    rules: {
    },
  },
  {
    files: ['**/components/**', '**/pages/**', '**/layouts/**'],
    rules: {
    },
  },
);
