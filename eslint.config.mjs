import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

// The recommended rules for JavaScript, TypeScript, React, React hooks and
// accessibility, with their warnings made errors, plus our own rules (based on
// tslint-react) and Prettier for formatting.

// rule sets' warnings become errors, so problems can't be ignored
function warningsAsErrors(config) {
  if (!config.rules) {
    return config;
  }
  const rules = {};
  for (const [name, value] of Object.entries(config.rules)) {
    if (value === 'warn' || value === 1) {
      rules[name] = 'error';
    } else if (
      Array.isArray(value) &&
      (value[0] === 'warn' || value[0] === 1)
    ) {
      rules[name] = ['error', ...value.slice(1)];
    } else {
      rules[name] = value;
    }
  }
  return { ...config, rules };
}

const recommended = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  // Next.js doesn't need React imported for JSX
  react.configs.flat['jsx-runtime'],
  reactHooks.configs['recommended-latest'],
  jsxA11y.flatConfigs.recommended
].map(warningsAsErrors);

export default tseslint.config(
  {
    ignores: [
      '.next/',
      'out/',
      'node_modules/',
      'public/',
      'packages/*/dist/',
      'coverage/'
    ]
  },
  ...recommended,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    },
    plugins: { import: importPlugin },
    settings: { react: { version: 'detect' } },
    rules: {
      // the import rules Create React App used
      'import/first': 'error',
      'import/no-amd': 'error',
      'import/no-webpack-loader-syntax': 'error',

      'react/jsx-boolean-value': ['error', 'always'],
      'react/jsx-key': 'error',
      'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
      'react/self-closing-comp': 'error',
      'react/no-string-refs': 'error',
      'react/jsx-curly-brace-presence': 'error',
      // TypeScript checks props
      'react/prop-types': 'off',
      // quotes and apostrophes in text are fine in React
      'react/no-unescaped-entities': 'off',
      // property="dct:title" labels the license (RDFa)
      'react/no-unknown-property': ['error', { ignore: ['property'] }],

      'constructor-super': 'error',
      curly: 'error',
      'dot-notation': 'error',
      eqeqeq: ['error', 'smart'],
      'guard-for-in': 'error',
      'new-parens': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-cond-assign': 'error',
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-empty': 'error',
      'no-new-wrappers': 'error',
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-unsafe-finally': 'error',
      'no-unused-labels': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'prefer-const': 'error',
      radix: 'error',
      'use-isnan': 'error',
      quotes: [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: false }
      ],
      'jsx-a11y/aria-role': ['error', { ignoreNonDOM: true }],
      // Next.js's Link renders the <a>
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton']
        }
      ]
    }
  },
  {
    // our TypeScript rules, based on tslint/recommended
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      // the TypeScript-aware versions of these
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': 'error',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { args: 'none', ignoreRestSiblings: true }
      ],

      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      // these three replace the old ban-types rule
      '@typescript-eslint/no-unsafe-function-type': 'error',
      '@typescript-eslint/no-wrapper-object-types': 'error',
      '@typescript-eslint/no-empty-object-type': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['variableLike', 'memberLike'],
          format: ['camelCase']
        },
        {
          selector: ['property', 'variable'],
          format: ['camelCase', 'UPPER_CASE']
        },
        {
          selector: ['function', 'parameter'],
          format: ['camelCase', 'PascalCase']
        },
        { selector: 'typeLike', format: ['PascalCase'] },
        // names that need quotes are fixed by something else, like
        // structured data's "@context"
        {
          selector: 'objectLiteralProperty',
          modifiers: ['requiresQuotes'],
          format: null
        }
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        { overrides: { constructors: 'no-public' } }
      ],
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        { assertionStyle: 'as' }
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/triple-slash-reference': [
        'error',
        { types: 'prefer-import' }
      ],
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/unified-signatures': 'error'
    }
  },
  // formatting problems are reported as errors; last, so it turns off the
  // style rules that would disagree with Prettier
  prettierRecommended,
  {
    // turned back on after Prettier's config: they work alongside it
    rules: {
      curly: 'error',
      quotes: [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: false }
      ]
    }
  }
);
