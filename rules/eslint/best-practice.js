module.exports = {
    rules: {
        // Best Practices
        // =====================
        // These rules relate to better ways of doing things to help you avoid problems:

        // enforce getter and setter pairs in objects and classes
        // https://eslint.org/docs/rules/accessor-pairs
        'accessor-pairs': 'off',

        // enforce `return` statements in callbacks of array methods
        // https://eslint.org/docs/rules/array-callback-return
        'array-callback-return': 'warn',

        // enforce the use of variables within the scope they are defined
        // https://eslint.org/docs/rules/block-scoped-var
        'block-scoped-var': 'off',

        // enforce that class methods utilize `this`
        // https://eslint.org/docs/rules/class-methods-use-this
        'class-methods-use-this': 'off',

        // enforce a maximum cyclomatic complexity allowed in a program
        // https://eslint.org/docs/rules/complexity
        'complexity': 'off',

        // require `return` statements to either always or never specify values
        // https://eslint.org/docs/rules/consistent-return
        'consistent-return': 'off',

        // enforce consistent brace style for all control statements
        // https://eslint.org/docs/rules/curly
        'curly': 'off',

        // require `default` cases in `switch` statements
        // https://eslint.org/docs/rules/default-case
        'default-case': ['warn', {
            "commentPattern": '^do\\snothing'
        }],

        // enforce default clauses in switch statements to be last
        // https://eslint.org/docs/rules/default-case-last
        'default-case-last': 'off',

        // enforce default parameters to be last
        // https://eslint.org/docs/rules/default-param-last
        'default-param-last': 'off',

        // enforce consistent newlines before and after dots
        // https://eslint.org/docs/rules/dot-location
        'dot-location': ['error', 'property'],

        // enforce dot notation whenever possible
        // https://eslint.org/docs/rules/dot-notation
        'dot-notation': ['error', { 
            'allowKeywords': false
        }],

        // require the use of `===` and `!==`
        // https://eslint.org/docs/rules/eqeqeq
        eqeqeq: ['warn', 'smart'],

        // require grouped accessor pairs in object literals and classes
        // https://eslint.org/docs/rules/grouped-accessor-pairs
        'grouped-accessor-pairs': 'off',

        // require `for-in` loops to include an `if` statement
        // https://eslint.org/docs/rules/guard-for-in
        'guard-for-in': 'off',

        // enforce a maximum number of classes per file
        // https://eslint.org/docs/rules/max-classes-per-file
        'max-classes-per-file': 'off',

        // disallow the use of `alert`, `confirm`, and `prompt`
        // https://eslint.org/docs/rules/no-alert
        'no-alert': 'error',

        // disallow the use of `arguments.caller` or `arguments.callee`
        // https://eslint.org/docs/rules/no-caller
        'no-caller': 'warn',

        // disallow lexical declarations in case clauses
        // https://eslint.org/docs/rules/no-case-declarations
        'no-case-declarations': 'error',

        // disallow returning value from constructor
        // https://eslint.org/docs/rules/no-constructor-return
        'no-constructor-return': 'off',

        // disallow division operators explicitly at the beginning of regular expressions
        // https://eslint.org/docs/rules/no-div-regex
        'no-div-regex': 'off',

        // disallow `else` blocks after `return` statements in `if` statements
        // https://eslint.org/docs/rules/no-else-return
        'no-else-return': 'off',

        // disallow empty functions
        // https://eslint.org/docs/rules/no-empty-function
        'no-empty-function': 'off',

        // disallow empty destructuring patterns
        // https://eslint.org/docs/rules/no-empty-pattern
        'no-empty-pattern': 'error',

        // disallow `null` comparisons without type-checking operators
        // https://eslint.org/docs/rules/no-eq-null
        'no-eq-null': 'off',

        // disallow the use of `eval()`
        // https://eslint.org/docs/rules/no-eval
        'no-eval': 'error',

        // disallow extending native types
        // https://eslint.org/docs/rules/no-extend-native
        'no-extend-native': 'warn',

        // disallow unnecessary calls to `.bind()`
        // https://eslint.org/docs/rules/no-extra-bind
        'no-extra-bind': 'warn',

        // disallow unnecessary labels
        // https://eslint.org/docs/rules/no-extra-label
        'no-extra-label': 'warn',

        // disallow fallthrough of `case` statements
        // https://eslint.org/docs/rules/no-fallthrough
        'no-fallthrough': 'error',

        // disallow leading or trailing decimal points in numeric literals
        // https://eslint.org/docs/rules/no-floating-decimal
        'no-floating-decimal': 'off',

        // disallow assignments to native objects or read-only global variables
        // https://eslint.org/docs/rules/no-global-assign
        'no-global-assign': 'error',

        // disallow shorthand type conversions
        // https://eslint.org/docs/rules/no-implicit-coercion
        'no-implicit-coercion': 'off',

        // disallow declarations in the global scope
        // https://eslint.org/docs/rules/no-implicit-globals
        'no-implicit-globals': 'error',

        // disallow the use of `eval()`-like methods
        // https://eslint.org/docs/rules/no-implied-eval
        'no-implied-eval': 'error',

        // disallow `this` keywords outside of classes or class-like objects
        // https://eslint.org/docs/rules/no-invalid-this
        'no-invalid-this': 'off',

        // disallow the use of the `__iterator__` property
        // https://eslint.org/docs/rules/no-iterator
        'no-iterator': 'error',

        // disallow labeled statements
        // https://eslint.org/docs/rules/no-labels
        'no-labels': 'error',

        // disallow unnecessary nested blocks
        // https://eslint.org/docs/rules/no-lone-blocks
        'no-lone-blocks': 'warn',

        // disallow function declarations that contain unsafe references inside loop statements
        // https://eslint.org/docs/rules/no-loop-func
        'no-loop-func': 'error',

        // disallow magic numbers
        // https://eslint.org/docs/rules/no-magic-numbers
        'no-magic-numbers': 'off',

        // disallow multiple spaces
        // https://eslint.org/docs/rules/no-multi-spaces
        'no-multi-spaces': 'off',

        // disallow multiline strings
        // https://eslint.org/docs/rules/no-multi-str
        'no-multi-str': 'warn',

        // disallow `new` operators outside of assignments or comparisons
        // https://eslint.org/docs/rules/no-new
        'no-new': 'off',

        // disallow `new` operators with the `Function` object
        // https://eslint.org/docs/rules/no-new-func
        'no-new-func': 'error',

        // disallow `new` operators with the `String`, `Number`, and `Boolean` objects
        // https://eslint.org/docs/rules/no-new-wrappers
        'no-new-wrappers': 'warn',

        // disallow `\8` and `\9` escape sequences in string literals
        // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
        'no-nonoctal-decimal-escape': 'off',

        // disallow octal literals
        // https://eslint.org/docs/rules/no-octal
        'no-octal': 'error', // octal numberic literals has been deprecated

        // disallow octal escape sequences in string literals
        // https://eslint.org/docs/rules/no-octal-escape
        'no-octal-escape': 'error', // octal numberic literals has been deprecated

        // disallow reassigning `function` parameters
        // https://eslint.org/docs/rules/no-param-reassign
        'no-param-reassign': 'off',

        // disallow the use of the `__proto__` property
        // https://eslint.org/docs/rules/no-proto
        'no-proto': 'off',

        // disallow variable redeclaration
        // https://eslint.org/docs/rules/no-redeclare
        'no-redeclare': 'error',

        // disallow certain properties on certain objects
        // https://eslint.org/docs/rules/no-restricted-properties
        'no-restricted-properties': 'off',

        // disallow assignment operators in `return` statements
        // https://eslint.org/docs/rules/no-return-assign
        'no-return-assign': 'off',

        // disallow unnecessary `return await`
        // https://eslint.org/docs/rules/no-return-await
        'no-return-await': 'off',

        // disallow `javascript:` urls
        // https://eslint.org/docs/rules/no-script-url
        'no-script-url': 'warn',

        // disallow assignments where both sides are exactly the same
        // https://eslint.org/docs/rules/no-self-assign
        'no-self-assign': 'error',

        // disallow comparisons where both sides are exactly the same
        // https://eslint.org/docs/rules/no-self-compare
        'no-self-compare': 'warn',

        // disallow comma operators
        // https://eslint.org/docs/rules/no-sequences
        'no-sequences': 'off',

        // disallow throwing literals as exceptions
        // https://eslint.org/docs/rules/no-throw-literal
        'no-throw-literal': 'off',

        // disallow unmodified loop conditions
        // https://eslint.org/docs/rules/no-unmodified-loop-condition
        'no-unmodified-loop-condition': 'off',

        // disallow unused expressions
        // https://eslint.org/docs/rules/no-unused-expressions
        'no-unused-expressions': ['warn', {
            'allowShortCircuit': true,
            'allowTernary': true,
            'allowTaggedTemplates': true
        }
],

        // disallow unused labels
        // https://eslint.org/docs/rules/no-unused-labels
        'no-unused-labels': 'error',

        // disallow unnecessary calls to `.call()` and `.apply()`
        // https://eslint.org/docs/rules/no-useless-call
        'no-useless-call': 'off',

        // disallow unnecessary `catch` clauses
        // https://eslint.org/docs/rules/no-useless-catch
        'no-useless-catch': 'error',

        // disallow unnecessary concatenation of literals or template literals
        // https://eslint.org/docs/rules/no-useless-concat
        'no-useless-concat': 'error',

        // disallow unnecessary escape characters
        // https://eslint.org/docs/rules/no-useless-escape
        'no-useless-escape': 'error',

        // disallow redundant return statements
        // https://eslint.org/docs/rules/no-useless-return
        'no-useless-return': 'off',

        // disallow `void` operators
        // https://eslint.org/docs/rules/no-void
        'no-void': 'off',

        // disallow specified warning terms in comments
        // https://eslint.org/docs/rules/no-warning-comments
        'no-warning-comments': 'off',

        // disallow `with` statements
        // https://eslint.org/docs/rules/no-with
        'no-with': 'error',

        // enforce using named capture group in regular expression
        // https://eslint.org/docs/rules/prefer-named-capture-group
        'prefer-named-capture-group': 'off',

        // require using Error objects as Promise rejection reasons
        // https://eslint.org/docs/rules/prefer-promise-reject-errors
        'prefer-promise-reject-errors': 'off',

        // disallow use of the `RegExp` constructor in favor of regular expression literals
        // https://eslint.org/docs/rules/prefer-regex-literals
        'prefer-regex-literals': 'off',

        // enforce the consistent use of the radix argument when using `parseInt()`
        // https://eslint.org/docs/rules/radix
        'radix': 'off',

        // disallow async functions which have no `await` expression
        // https://eslint.org/docs/rules/require-await
        'require-await': 'off',

        // enforce the use of `u` flag on RegExp
        // https://eslint.org/docs/rules/require-unicode-regexp
        'require-unicode-regexp': 'off',

        // require `var` declarations be placed at the top of their containing scope
        // https://eslint.org/docs/rules/vars-on-top
        'vars-on-top': 'off',

        // require parentheses around immediate `function` invocations
        // https://eslint.org/docs/rules/wrap-iife
        'wrap-iife': 'off',

        // require or disallow "Yoda" conditions
        // https://eslint.org/docs/rules/yoda
        'yoda': ['error', 'never']
    }
}
