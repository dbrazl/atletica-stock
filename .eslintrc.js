module.exports = {
    env: {
        es6: true,
    },
    extends: ['airbnb', 'prettier', 'prettier/react'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        __DEV__: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'no-param-reassign': 0,
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.jsx', '.js'],
            },
        ],
        camelcase: 'off',
        'import/prefer-default-export': 'off',
        'no-console': ['error', { allow: ['tron', 'log'] }],
    },
};