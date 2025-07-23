import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import astroParser from 'astro-eslint-parser';

export default tseslint.config(
  ...eslintPluginAstro.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {},
  },
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {},
    },
    rules: {
      '@typescript-eslint/quotes': [
        'error',
        'single',
        {
          allowTemplateLiterals: true,
        },
      ],
    },
  },
);
