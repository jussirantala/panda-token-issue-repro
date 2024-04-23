// eslint-disable
module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:jest/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:promise/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        // 'plugin:@pandacss/recommended',
        'plugin:react-redux/recommended',
        // MAKE SURE PRETTIER IS LAST
        'plugin:prettier/recommended',
    ],
    plugins: ['@emotion', 'restrict-imports', 'typescript-sort-keys', '@pandacss'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        '@emotion/syntax-preference': ['error', 'object'],
        // TYPESCRIPT: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
        /* inherited from previous eslint config */
        '@typescript-eslint/explicit-function-return-type': 'off',
        // TODO: temporarily, ongoing discussion
        '@typescript-eslint/no-use-before-define': ['error', {functions: false}],
        // prefer explicit prop types
        '@typescript-eslint/ban-types': [
            'error',
            {
                types: {
                    'React.FC': {
                        message:
                            'Define prop types as function param instead: const Foo = (props: Props) => { ... }',
                    },
                    'React.FunctionComponent': {
                        message:
                            'Define prop types as function param instead: const Foo = (props: Props) => { ... }',
                    },
                    FC: {
                        message:
                            'Define prop types as function param instead: const Foo = (props: Props) => { ... }',
                    },
                    FunctionComponent: {
                        message:
                            'Define prop types as function param instead: const Foo = (props: Props) => { ... }',
                    },
                },
            },
        ],
        eqeqeq: 'error',
        'no-console': ['error', {allow: ['info', 'warn', 'error', 'debug', 'dir']}],
        'jest/expect-expect': [
            'warn',
            {assertFunctionNames: ['expect', 'expectObservable', 'expectSubscriptions']},
        ],
        'jest/no-disabled-tests': ['off'],
        'no-restricted-imports': [
            'error',
            {
                patterns: ['@asdasd-social/game-overlay/*', '@asdasd-social/*/src/*'],
                paths: [
                    {
                        name: 'uuid',
                        importNames: ['v1', 'v3', 'v5'],
                        message: "Please import 'v4' from 'uuid' instead.",
                    },
                    /**
                     * Navigable component enforcement
                     *
                     * Require the use of navigable component equivalents, where available, so that
                     * the application navigation experience can be proactively maintained.
                     *
                     * ❌ import {Button} from '@material-ui/core';
                     * ❌ import Button from '@material-ui/core/Button';
                     * ✅ import {Button} from '@asdasd-social/common-ui';
                     * ✅ import {Button} from '../Button';
                     * ✅ import {ButtonProps} from '@material-ui/core';
                     */
                    {
                        name: '@asdasdui/components',
                        importNames: ['Button', 'StatusButton'],
                        message:
                            "Please use the navigable equivalent: import {Button} from '@asdasd-social/common-ui';",
                    },
                    {
                        name: '@material-ui/core',
                        importNames: [
                            'Button',
                            'IconButton',
                            'MenuItem',
                            'Select',
                            'Switch',
                            'Tab',
                        ],
                        message:
                            "Please use the navigable equivalent: import {ComponentName} from '@asdasd-social/common-ui';",
                    },
                    {
                        name: '@material-ui/core/Button',
                        importNames: ['default'],
                        message:
                            "Please use the navigable equivalent: import {Button} from '@asdasd-social/common-ui';",
                    },
                    {
                        name: '@material-ui/core/IconButton',
                        importNames: ['default'],
                        message:
                            "Please use the navigable equivalent: import {IconButton} from '@asdasd-social/common-ui';",
                    },
                    {
                        name: '@material-ui/core/MenuItem',
                        importNames: ['default'],
                        message:
                            "Please use the navigable equivalent: import {MenuItem} from '@asdasd-social/common-ui';",
                    },
                    {
                        name: '@material-ui/core/Select',
                        importNames: ['default'],
                        message:
                            "Please use the navigable equivalent: import {Select} from '@asdasd-social/common-ui';",
                    },
                    {
                        name: '@material-ui/core/Switch',
                        importNames: ['default'],
                        message:
                            "Please use the navigable equivalent: import {Switch} from '@asdasd-social/common-ui';",
                    },
                    {
                        name: '@material-ui/core/Tab',
                        importNames: ['default'],
                        message:
                            "Please use the navigable equivalent: import {Tab} from '@asdasd-social/common-ui';",
                    },
                    {
                        name: 'lodash',
                        message:
                            "Prefer to not use lodash, otherwise please use module specific import: import foo from 'lodash.foo';",
                    },
                    {
                        name: 'reselect',
                        message:
                            "Please replace import with '@reduxjs/toolkit'; 'reselect' is not currently listed as a direct dependency.",
                    },
                    {
                        name: '@testing-library/react',
                        message:
                            'Please import from `@asdasd-social/testing` rather than `@testing-library/react`',
                    },
                ],
            },
        ],
        'restrict-imports/restrict-imports': [
            'error',
            {
                '@asdasd-social/testing': {
                    locations: ['^(?!.*\\.spec\\.).*'],
                    message:
                        'Importing from @asdasd-social/testing is only allowed in test files (e.g. SomeComponent.spec.tsx)',
                },
                '@asdasd-social/shared': {
                    locations: ['.*/packages/common-ui/.*'],
                    message:
                        'Avoid importing from @asdasd-social/shared within common-ui. Move the component to shared instead.',
                },
            },
        ],
        'no-restricted-properties': [
            2,
            {
                object: 'Object',
                property: 'values',
                message:
                    "Please use objectToArray util function `@asdasd-social/utils` as Object.values isn't supported in KITT and is less performant",
            },
            {
                object: 'Object',
                property: 'keys',
                message:
                    "Please use objectKeys util function `@asdasd-social/utils` as Object.keys isn't as type safe and is less performant",
            },
        ],
        'no-return-await': 'error',
        'no-unneeded-ternary': ['error'],
        'react/no-multi-comp': ['warn'],
        // TODO: introduced in @typescript/eslint v4, ignoring for now
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/no-floating-promises': ['off'],
        // Only disabling eslint rules here, prettier pre-commit/CI will still convert/enforce LF line endings.
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'import/no-cycle': [
            'error',
            {
                maxDepth: 4, // this depth is enough to catch most of the errors (from previous errors), could be change at any time
                ignoreExternal: true,
            },
        ],
    },
    overrides: [
        {
            files: ['**/*.tsx', '**/*.ts'],
            rules: {
                // ts/tsx files will be typed, no need for react/prop-types rule.
                'react/prop-types': 'off',
            },
        },
        {
            files: ['**/*.spec.*', '**/*.test.*'],
            rules: {
                'react/no-multi-comp': ['off'],
                'react/display-name': ['off'],
                'no-restricted-properties': ['off'],
            },
        },
    ],
};
