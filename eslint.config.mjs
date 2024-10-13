import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    },
    {
        languageOptions: { globals: globals.browser },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            'react/prop-types': 0,
            'react-hooks/exhaustive-deps': 'off',
            'react/react-in-jsx-scope': 'off',
            'sort-keys': 'off',
            'react/jsx-curly-brace-presence': 2,
            'no-unneeded-ternary': 2,
            'no-use-before-define': 'off',
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            'no-multiple-empty-lines': 'error',
            'no-console': 'warn',
            'react/no-unused-prop-types': 'error',
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'error',
            camelcase: 'off',
            '@typescript-eslint/no-empty-interface': 'off',
            '@typescript-eslint/no-empty-function': 'off',
            'no-undef': 'off',
        },
    },
];
