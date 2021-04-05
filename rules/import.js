module.exports = {
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
    },
    plugins: ['import'],
    settings: {
        "import/extensions": [
            ".js",
            ".jsx",
            ".ts",
            ".tsx"
        ],
        'import/ignore': [
            'node_modules',
            '\\.(scss|css|svg|json|jpg|png)$',
        ],
        'import/parsers': {
            '@typescript-eslint/parser': [ '.ts', '.tsx' ]
        }
    },
    rules: {
        // Ensure imports point to a file/module that can be resolved.
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-unresolved.md
        'import/no-unresolved': [2, { commonjs: true, caseSensitive: true }],

        
        // Ensure named imports correspond to a named export in the remote file.
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/named.md
        'import/named': 2,

        
        // Ensure a default export is present, given a default import.
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/default.md
        'import/default': 0,

        
        // Ensure imported namespaces contain dereferenced properties as they are dereferenced.
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/namespace.md
        'import/namespace': 0,

        
        // Restrict which files can be imported in a given folder
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-restricted-paths.md
        'import/no-restricted-paths': 0,

        
        // Forbid import of modules using absolute paths
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-absolute-path.md
        'import/no-absolute-path': 2,

        
        // Forbid require() calls with expressions
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-dynamic-require.md
        'import/no-dynamic-require': 2,

        
        // Prevent importing the submodules of other modules
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-internal-modules.md
        'import/no-internal-modules': [1, {
            allow: []
        }],

        
        // Forbid webpack loader syntax in imports
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-webpack-loader-syntax.md
        'import/no-webpack-loader-syntax': 2,

        
        // Forbid a module from importing itself
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-self-import.md
        'import/no-self-import': 2,

        
        // Forbid a module from importing a module with a dependency path back to itself
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-cycle.md
        'import/no-cycle': 1,

        
        // Prevent unnecessary path segments in import and require statements
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-useless-path-segments.md
        'import/no-useless-path-segments': [2, {
            commonjs: true
        }],

        
        // Forbid importing modules from parent directories
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-relative-parent-imports.md
        'import/no-relative-parent-imports': 0,

        
        // Report any invalid exports, i.e. re-export of the same name
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/export.md
        'import/export': 2,

        
        // Report use of exported name as identifier of default export
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-as-default.md
        'import/no-named-as-default': 2,

        
        // Report use of exported name as property of default export
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-as-default-member.md
        'import/no-named-as-default-member': 2,

        
        // Report imported names marked with @deprecated documentation tag
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-deprecated.md
        'import/no-deprecated': 1,

        
        // Forbid the use of extraneous packages
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-extraneous-dependencies.md
        // List from airbnb https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L71
        'import/no-extraneous-dependencies': [2, {
            devDependencies: [
                'test/**', // tape, common npm pattern
                'tests/**', // also common npm pattern
                'spec/**', // mocha, rspec-like pattern
                '**/__tests__/**', // jest pattern
                '**/__mocks__/**', // jest pattern
                'test.{js,jsx}', // repos with a single test file
                'test-*.{js,jsx}', // repos with multiple top-level test files
                '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
                '**/jest.config.js', // jest config
                '**/jest.setup.js', // jest setup
                '**/vue.config.js', // vue-cli config
                '**/webpack.config.js', // webpack config
                '**/webpack.config.*.js', // webpack config
                '**/rollup.config.js', // rollup config
                '**/rollup.config.*.js', // rollup config
                '**/gulpfile.js', // gulp config
                '**/gulpfile.*.js', // gulp config
                '**/Gruntfile{,.js}', // grunt config
                '**/protractor.conf.js', // protractor config
                '**/protractor.conf.*.js', // protractor config
                '**/karma.conf.js', // karma config
                '**/.eslintrc.js' // eslint config
            ]
        }],

        
        // Forbid the use of mutable exports with var or let.
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-mutable-exports.md
        'import/no-mutable-exports': 2,

        
        // Report modules without exports, or exports without matching import in another module
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-unused-modules.md
        'import/no-unused-modules': [1, {
            missingExports: true,
            unusedExports: true,
        }],

        
        // Report potentially ambiguous parse goal (script vs. module)
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/unambiguous.md
        'import/unambiguous': 0,

        
        // Report CommonJS require calls and module.exports or exports.*.
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-commonjs.md
        'import/no-commonjs': 0,

        
        // Report AMD require and define calls.
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-amd.md
        'import/no-amd': 2,

        
        // No Node.js builtin modules.
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-nodejs-modules.md
        'import/no-nodejs-modules': 0,

        
        // Ensure all imports appear before other statements
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/first.md
        'import/first': 2,

        
        // Ensure all exports appear after other statements
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/exports-last.md
        'import/exports-last': 0,

        
        // Report repeated import of the same module in multiple places
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-duplicates.md
        'import/no-duplicates': 2,

        
        // Forbid namespace (a.k.a. \"wildcard\" *) imports
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-namespace.md
        'import/no-namespace': 0,

        
        // Ensure consistent use of file extension within the import path
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/extensions.md
        'import/extensions': [2, 'always', {
            js: 'never',
            ts: 'never',
            jsx: 'never',
            tsx: 'never'
        }],

        
        // Enforce a convention in module import order
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/order.md
        'import/order': [1, {
            groups: ['builtin', 'external', 'internal'],
            'newlines-between': 'always'
        }],

        
        // Enforce a newline after import statements
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/newline-after-import.md
        'import/newline-after-import': 2,

        
        // Prefer a default export if module exports a single name
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/prefer-default-export.md
        'import/prefer-default-export': 0,

        
        // Limit the maximum number of dependencies a module can have
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/max-dependencies.md
        'import/max-dependencies': [0, { max: 10 }],

        
        // Forbid unassigned imports
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-unassigned-import.md
        'import/no-unassigned-import': 0,

        
        // Forbid named default exports
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-default.md
        'import/no-named-default': 2,

        
        // Forbid default exports
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-default-export.md
        'import/no-default-export': 0,

        
        // Forbid named exports
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-export.md
        'import/no-named-export': 0,

        
        // Forbid anonymous values as default exports
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-anonymous-default-export.md
        'import/no-anonymous-default-export': 0,

        
        // Prefer named exports to be grouped together in a single export declaration
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/group-exports.md
        'import/group-exports': 0,

        
        // Enforce a leading comment with the webpackChunkName for dynamic imports
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/dynamic-import-chunkname.md
        'import/dynamic-import-chunkname': 0
    }
}
