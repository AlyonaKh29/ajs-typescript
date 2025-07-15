import js from "@eslint/js";
import globals from "globals";
import eslintPluginTS from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';


export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: {
      js,
      '@typescript-eslint': eslintPluginTS,
    },
    rules: {
      // ваши правила
    },
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    ignores: [
      'node_modules/',
      'dist/',
      'coverage/',
      'docs/'
    ],
  },
];