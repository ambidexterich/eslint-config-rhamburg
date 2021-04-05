module.exports = [
    './rules/compat',
    './rules/import',
    './rules/react',
    './rules/eslint/best-practice',
    './rules/eslint/errors',
    './rules/eslint/es6',
    './rules/eslint/strict',
    './rules/eslint/style',
    './rules/eslint/variables',
].map(require.resolve);
