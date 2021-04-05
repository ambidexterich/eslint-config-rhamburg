const restrictedGlobals = require('confusing-browser-globals');
const typescript = require('./typescript');

module.exports = {
    env: {
        browser: true,
        commonjs: true,
        'shared-node-browser': true, 
        es2021: true
    },
    overrides: [typescript],
    extends: [
        './rules/compat',
        './rules/import',
        './rules/react',
        './rules/eslint/best-practice',
        './rules/eslint/errors',
        './rules/eslint/es6',
        './rules/eslint/strict',
        './rules/eslint/style',
        './rules/eslint/variables',
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    rules: {
        'no-restricted-globals': ['error'].concat(restrictedGlobals),
    }
};
