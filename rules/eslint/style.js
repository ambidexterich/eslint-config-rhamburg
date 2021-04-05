module.exports = {
    rules: {
        // These rules relate to style guidelines, and are therefore quite subjective:

        // enforce linebreaks after opening and before closing array brackets
        // https://eslint.org/docs/rules/array-bracket-newline
        'array-bracket-newline': 0,

        // enforce consistent spacing inside array brackets
        // https://eslint.org/docs/rules/array-bracket-spacing
        'array-bracket-spacing': 0,

        // enforce line breaks after each array element
        // https://eslint.org/docs/rules/array-element-newline
        'array-element-newline': 0,

        // disallow or enforce spaces inside of blocks after opening block and before closing block
        // https://eslint.org/docs/rules/block-spacing
        'block-spacing': 0,

        // enforce consistent brace style for blocks
        // https://eslint.org/docs/rules/brace-style
        'brace-style': [2, '1tbs', { 'allowSingleLine': true }],

        // enforce camelcase naming convention
        // https://eslint.org/docs/rules/camelcase
        camelcase: 1,

        // enforce or disallow capitalization of the first letter of a comment
        // https://eslint.org/docs/rules/capitalized-comments
        'capitalized-comments': 0,

        // require or disallow trailing commas
        // https://eslint.org/docs/rules/comma-dangle
        'comma-dangle': [2, 'never'],

        // enforce consistent spacing before and after commas
        // https://eslint.org/docs/rules/comma-spacing
        'comma-spacing': 0,

        // enforce consistent comma style
        // https://eslint.org/docs/rules/comma-style
        'comma-style': 0,

        // enforce consistent spacing inside computed property brackets
        // https://eslint.org/docs/rules/computed-property-spacing
        'computed-property-spacing': 0,

        // enforce consistent naming when capturing the current execution context
        // https://eslint.org/docs/rules/consistent-this
        'consistent-this': 0,

        // require or disallow newline at the end of files
        // https://eslint.org/docs/rules/eol-last
        'eol-last': 0,

        // require or disallow spacing between function identifiers and their invocations
        // https://eslint.org/docs/rules/func-call-spacing
        'func-call-spacing': 0,

        // require function names to match the name of the variable or property to which they are assigned
        // https://eslint.org/docs/rules/func-name-matching
        'func-name-matching': 0,

        // require or disallow named `function` expressions
        // https://eslint.org/docs/rules/func-names
        'func-names': 0,

        // enforce the consistent use of either `function` declarations or expressions
        // https://eslint.org/docs/rules/func-style
        'func-style': 0,

        // enforce line breaks between arguments of a function call
        // https://eslint.org/docs/rules/function-call-argument-newline
        'function-call-argument-newline': 0,

        // enforce consistent line breaks inside function parentheses
        // https://eslint.org/docs/rules/function-paren-newline
        'function-paren-newline': 0,

        // disallow specified identifiers
        // https://eslint.org/docs/rules/id-denylist
        'id-denylist': 0,

        // enforce minimum and maximum identifier lengths
        // https://eslint.org/docs/rules/id-length
        'id-length': 0,

        // require identifiers to match a specified regular expression
        // https://eslint.org/docs/rules/id-match
        'id-match': 0,

        // enforce the location of arrow function bodies
        // https://eslint.org/docs/rules/implicit-arrow-linebreak
        'implicit-arrow-linebreak': 0,

        // enforce consistent indentation
        // https://eslint.org/docs/rules/indent
        'indent': [2, 4, { 
            "SwitchCase": 1 
        }],

        // enforce the consistent use of either double or single quotes in JSX attributes
        // https://eslint.org/docs/rules/jsx-quotes
        'jsx-quotes': [2, 'prefer-double'],

        // enforce consistent spacing between keys and values in object literal properties
        // https://eslint.org/docs/rules/key-spacing
        'key-spacing': 0,

        // enforce consistent spacing before and after keywords
        // https://eslint.org/docs/rules/keyword-spacing
        'keyword-spacing': 0,

        // enforce position of line comments
        // https://eslint.org/docs/rules/line-comment-position
        'line-comment-position': 0,

        // enforce consistent linebreak style
        // https://eslint.org/docs/rules/linebreak-style
        'linebreak-style': [2, 'unix'],

        // require empty lines around comments
        // https://eslint.org/docs/rules/lines-around-comment
        'lines-around-comment': 0,

        // require or disallow an empty line between class members
        // https://eslint.org/docs/rules/lines-between-class-members
        'lines-between-class-members': 0,

        // enforce a maximum depth that blocks can be nested
        // https://eslint.org/docs/rules/max-depth
        'max-depth': 0,

        // enforce a maximum line length
        // https://eslint.org/docs/rules/max-len
        'max-len': 0,

        // enforce a maximum number of lines per file
        // https://eslint.org/docs/rules/max-lines
        'max-lines': 0,

        // enforce a maximum number of lines of code in a function
        // https://eslint.org/docs/rules/max-lines-per-function
        'max-lines-per-function': 0,

        // enforce a maximum depth that callbacks can be nested
        // https://eslint.org/docs/rules/max-nested-callbacks
        'max-nested-callbacks': 0,

        // enforce a maximum number of parameters in function definitions
        // https://eslint.org/docs/rules/max-params
        'max-params': [1, 3],

        // enforce a maximum number of statements allowed in function blocks
        // https://eslint.org/docs/rules/max-statements
        'max-statements': 0,

        // enforce a maximum number of statements allowed per line
        // https://eslint.org/docs/rules/max-statements-per-line
        'max-statements-per-line': 0,

        // enforce a particular style for multiline comments
        // https://eslint.org/docs/rules/multiline-comment-style
        'multiline-comment-style': 0,

        // enforce newlines between operands of ternary expressions
        // https://eslint.org/docs/rules/multiline-ternary
        'multiline-ternary': 0,

        // require constructor names to begin with a capital letter
        // https://eslint.org/docs/rules/new-cap
        'new-cap': 0,

        // enforce or disallow parentheses when invoking a constructor with no arguments
        // https://eslint.org/docs/rules/new-parens
        'new-parens': 2,

        // require a newline after each call in a method chain
        // https://eslint.org/docs/rules/newline-per-chained-call
        'newline-per-chained-call': 0,

        // disallow `Array` constructors
        // https://eslint.org/docs/rules/no-array-constructor
        'no-array-constructor': 1,

        // disallow bitwise operators
        // https://eslint.org/docs/rules/no-bitwise
        'no-bitwise': 0,

        // disallow `continue` statements
        // https://eslint.org/docs/rules/no-continue
        'no-continue': 0,

        // disallow inline comments after code
        // https://eslint.org/docs/rules/no-inline-comments
        'no-inline-comments': 0,

        // disallow `if` statements as the only statement in `else` blocks
        // https://eslint.org/docs/rules/no-lonely-if
        'no-lonely-if': 0,

        // disallow mixed binary operators
        // https://eslint.org/docs/rules/no-mixed-operators
        'no-mixed-operators': [1, {
            "groups": [
                ["+", "-", "*", "/", "%", "**"],
                ["&", "|", "^", "~", "<<", ">>", ">>>"],
                ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                ["&&", "||"],
                ["in", "instanceof"]
            ],
            "allowSamePrecedence": true
        }],

        // disallow mixed spaces and tabs for indentation
        // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
        'no-mixed-spaces-and-tabs': 2,

        // disallow use of chained assignment expressions
        // https://eslint.org/docs/rules/no-multi-assign
        'no-multi-assign': 0,

        // disallow multiple empty lines
        // https://eslint.org/docs/rules/no-multiple-empty-lines
        'no-multiple-empty-lines': 0,

        // disallow negated conditions
        // https://eslint.org/docs/rules/no-negated-condition
        'no-negated-condition': 0,

        // disallow nested ternary expressions
        // https://eslint.org/docs/rules/no-nested-ternary
        'no-nested-ternary': 0,

        // disallow `Object` constructors
        // https://eslint.org/docs/rules/no-new-object
        'no-new-object': 2,

        // disallow the unary operators `++` and `--`
        // https://eslint.org/docs/rules/no-plusplus
        'no-plusplus': 0,

        // disallow specified syntax
        // https://eslint.org/docs/rules/no-restricted-syntax
        'no-restricted-syntax': [2, {
            selector: 'WithStatement',
            message: 'Nobody uses `with`, stop it.'
        }],

        // disallow all tabs
        // https://eslint.org/docs/rules/no-tabs
        'no-tabs': 0,

        // disallow ternary operators
        // https://eslint.org/docs/rules/no-ternary
        'no-ternary': 0,

        // disallow trailing whitespace at the end of lines
        // https://eslint.org/docs/rules/no-trailing-spaces
        'no-trailing-spaces': 0,

        // disallow dangling underscores in identifiers
        // https://eslint.org/docs/rules/no-underscore-dangle
        'no-underscore-dangle': 0,

        // disallow ternary operators when simpler alternatives exist
        // https://eslint.org/docs/rules/no-unneeded-ternary
        'no-unneeded-ternary': 0,

        // disallow whitespace before properties
        // https://eslint.org/docs/rules/no-whitespace-before-property
        'no-whitespace-before-property': 2,

        // enforce the location of single-line statements
        // https://eslint.org/docs/rules/nonblock-statement-body-position
        'nonblock-statement-body-position': 0,

        // enforce consistent line breaks inside braces
        // https://eslint.org/docs/rules/object-curly-newline
        'object-curly-newline': 0,

        // enforce consistent spacing inside braces
        // https://eslint.org/docs/rules/object-curly-spacing
        'object-curly-spacing': 0,

        // enforce placing object properties on separate lines
        // https://eslint.org/docs/rules/object-property-newline
        'object-property-newline': 0,

        // enforce variables to be declared either together or separately in functions
        // https://eslint.org/docs/rules/one-var
        'one-var': 0,

        // require or disallow newlines around variable declarations
        // https://eslint.org/docs/rules/one-var-declaration-per-line
        'one-var-declaration-per-line': 0,

        // require or disallow assignment operator shorthand where possible
        // https://eslint.org/docs/rules/operator-assignment
        'operator-assignment': 0,

        // enforce consistent linebreak style for operators
        // https://eslint.org/docs/rules/operator-linebreak
        'operator-linebreak': 0,

        // require or disallow padding within blocks
        // https://eslint.org/docs/rules/padded-blocks
        'padded-blocks': 0,

        // require or disallow padding lines between statements
        // https://eslint.org/docs/rules/padding-line-between-statements
        'padding-line-between-statements': 0,

        // disallow the use of `Math.pow` in favor of the `**` operator
        // https://eslint.org/docs/rules/prefer-exponentiation-operator
        'prefer-exponentiation-operator': 0,

        // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
        // https://eslint.org/docs/rules/prefer-object-spread
        'prefer-object-spread': 0,

        // require quotes around object literal property names
        // https://eslint.org/docs/rules/quote-props
        'quote-props': 0,

        // enforce the consistent use of either backticks, double, or single quotes
        // https://eslint.org/docs/rules/quotes
        quotes: [1, 'single'],

        // require or disallow semicolons instead of ASI
        // https://eslint.org/docs/rules/semi
        semi: [2, 'always'],

        // enforce consistent spacing before and after semicolons
        // https://eslint.org/docs/rules/semi-spacing
        'semi-spacing': 0,

        // enforce location of semicolons
        // https://eslint.org/docs/rules/semi-style
        'semi-style': 0,

        // require object keys to be sorted
        // https://eslint.org/docs/rules/sort-keys
        'sort-keys': [1, 'asc', {
            caseSensitive: false,
            minKeys: 3,
            natural: true
        }],

        // require variables within the same declaration block to be sorted
        // https://eslint.org/docs/rules/sort-vars
        'sort-vars': 0,

        // enforce consistent spacing before blocks
        // https://eslint.org/docs/rules/space-before-blocks
        'space-before-blocks': 0,

        // enforce consistent spacing before `function` definition opening parenthesis
        // https://eslint.org/docs/rules/space-before-function-paren
        'space-before-function-paren': 0,

        // enforce consistent spacing inside parentheses
        // https://eslint.org/docs/rules/space-in-parens
        'space-in-parens': 0,

        // require spacing around infix operators
        // https://eslint.org/docs/rules/space-infix-ops
        'space-infix-ops': 0,

        // enforce consistent spacing before or after unary operators
        // https://eslint.org/docs/rules/space-unary-ops
        'space-unary-ops': 0,

        // enforce consistent spacing after the `//` or `/*` in a comment
        // https://eslint.org/docs/rules/spaced-comment
        'spaced-comment': 0,

        // enforce spacing around colons of switch statements
        // https://eslint.org/docs/rules/switch-colon-spacing
        'switch-colon-spacing': 0,

        // require or disallow spacing between template tags and their literals
        // https://eslint.org/docs/rules/template-tag-spacing
        'template-tag-spacing': 0,

        // require or disallow Unicode byte order mark (BOM)
        // https://eslint.org/docs/rules/unicode-bom
        'unicode-bom': [2, 'never'],

        // require parenthesis around regex literals
        // https://eslint.org/docs/rules/wrap-regex
        'wrap-regex': 0

    }
}
