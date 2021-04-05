module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['react', 'react-hooks'],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        // List of supported rules

        // Enforces consistent naming for boolean props
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/boolean-prop-naming.md
        'react/boolean-prop-naming': 'off',

        // Forbid 'button' element without an explicit 'type' attribute
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/button-has-type.md
        'react/button-has-type': 'off',

        // Enforce all defaultProps are defined and not 'required' in propTypes.
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/default-props-match-prop-types.md
        'react/default-props-match-prop-types': 'error',

        // Enforce consistent usage of destructuring assignment of props, state, and context
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/destructuring-assignment.md
        'react/destructuring-assignment': 'off',

        // Prevent missing displayName in a React component definition
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/display-name.md
        'react/display-name': 'off',

        // Forbid certain props on components
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/forbid-component-props.md
        'react/forbid-component-props': 'off',

        // Forbid certain props on DOM Nodes
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/forbid-dom-props.md
        'react/forbid-dom-props': 'off',

        // Forbid certain elements
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/forbid-elements.md
        'react/forbid-elements': 'off',

        // Forbid using another component's propTypes
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/forbid-foreign-prop-types.md
        'react/forbid-foreign-prop-types': 'warn',

        // Forbid certain propTypes
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/forbid-prop-types.md
        'react/forbid-prop-types': 'off',

        // Standardize the way function component get defined (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/function-component-definition.md
        'react/function-component-definition': 'off',

        // Reports when this.state is accessed within setState
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-access-state-in-setstate.md
        'react/no-access-state-in-setstate': 'off',

        // Prevent adjacent inline elements not separated by whitespace.
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-adjacent-inline-elements.md
        'react/no-adjacent-inline-elements': 'off',

        // Prevent usage of Array index in keys
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-array-index-key.md
        'react/no-array-index-key': 'warn',

        // Prevent passing of children as props.
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-children-prop.md
        'react/no-children-prop': 'error',

        // Prevent usage of dangerous JSX props
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-danger.md
        'react/no-danger': 'off',

        // Report when a DOM element is using both children and dangerouslySetInnerHTML
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-danger-with-children.md
        'react/no-danger-with-children': 'error',

        // Prevent usage of deprecated methods
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-deprecated.md
        'react/no-deprecated': 'error',

        // Prevent usage of setState in componentDidMount
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-did-mount-set-state.md
        'react/no-did-mount-set-state': 'error',

        // Prevent usage of setState in componentDidUpdate
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-did-update-set-state.md
        'react/no-did-update-set-state': 'error',

        // Prevent direct mutation of this.state
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-direct-mutation-state.md
        'react/no-direct-mutation-state': 'error',

        // Prevent usage of findDOMNode
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-find-dom-node.md
        'react/no-find-dom-node': 'error',

        // Prevent usage of isMounted
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-is-mounted.md
        'react/no-is-mounted': 'error',

        // Prevent multiple component definition per file
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-multi-comp.md
        'react/no-multi-comp': 'off',

        // Flag shouldComponentUpdate when extending PureComponent
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-redundant-should-component-update.md
        'react/no-redundant-should-component-update': 'off',

        // Prevent usage of the return value of React.render
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-render-return-value.md
        'react/no-render-return-value': 'error',

        // Prevent usage of setState
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-set-state.md
        'react/no-set-state': 'off',

        // Prevent string definitions for references and prevent referencing this.refs
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-string-refs.md
        'react/no-string-refs': 'error',

        // Report 'this' being used in stateless components
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-this-in-sfc.md
        'react/no-this-in-sfc': 'off',

        // Prevent common typos
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-typos.md
        'react/no-typos': 'error',

        // Detect unescaped HTML entities, which might represent malformed tags
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unescaped-entities.md
        'react/no-unescaped-entities': 'error',

        // Prevent usage of unknown DOM property (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unknown-property.md
        'react/no-unknown-property': 'error',

        // Prevent usage of unsafe lifecycle methods
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unsafe.md
        'react/no-unsafe': 'off',

        // Prevent definitions of unused prop types
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unused-prop-types.md
        'react/no-unused-prop-types': 'error',

        // Prevent definition of unused state fields
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unused-state.md
        'react/no-unused-state': 'off',

        // Prevent usage of setState in componentWillUpdate
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-will-update-set-state.md
        'react/no-will-update-set-state': ['error', 'disallow-in-func'],

        // Enforce ES5 or ES6 class for React Components
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/prefer-es6-class.md
        'react/prefer-es6-class': 'off',

        // Require read-only props. (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/prefer-read-only-props.md
        'react/prefer-read-only-props': 'off',

        // Enforce stateless components to be written as a pure function
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/prefer-stateless-function.md
        'react/prefer-stateless-function': 'off',

        // Prevent missing props validation in a React component definition
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/prop-types.md
        'react/prop-types': 'error',

        // Prevent missing React when using JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/react-in-jsx-scope.md
        'react/react-in-jsx-scope': 'error',

        // Enforce a defaultProps definition for every prop that is not a required prop.
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/require-default-props.md
        'react/require-default-props': 'error',

        // Enforce React components to have a shouldComponentUpdate method
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/require-optimization.md
        'react/require-optimization': ['warn', {
            allowDecorators: []
        }],

        // Enforce ES5 or ES6 class for returning value in render function
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/require-render-return.md
        'react/require-render-return': 'error',

        // Prevent extra closing tags for components without children (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/self-closing-comp.md
        'react/self-closing-comp': 'off',

        // Enforce component methods order
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/sort-comp.md
        'react/sort-comp': 'off',

        // Enforce propTypes declarations alphabetical sorting
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/sort-prop-types.md
        'react/sort-prop-types': ['warn', {
            'callbacksLast': true,
            'ignoreCase': true,
            'requiredFirst': false
        }],

        // State initialization in an ES6 class component should be in a constructor
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/state-in-constructor.md
        'react/state-in-constructor': 'off',

        // Defines where React component static properties should be positioned.
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/static-property-placement.md
        'react/static-property-placement': 'off',

        // Enforce style prop value is an object
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/style-prop-object.md
        'react/style-prop-object': 'warn',

        // Prevent passing of children to void DOM elements (e.g. <br />).
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/void-dom-elements-no-children.md
        'react/void-dom-elements-no-children': 'off',


        // JSX-specific rules

        // Enforce boolean attributes notation in JSX (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-boolean-value.md
        'react/jsx-boolean-value': 'off',

        // Ensures inline tags are not rendered without spaces between them
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-child-element-spacing.md
        'react/jsx-child-element-spacing': 'off',

        // Validate closing bracket location in JSX (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-closing-bracket-location.md
        'react/jsx-closing-bracket-location': 'off',

        // Validate closing tag location for multiline JSX (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-closing-tag-location.md
        'react/jsx-closing-tag-location': 'off',

        // Disallow unnecessary JSX expressions when literals alone are sufficient or enfore JSX expressions on literals in JSX children or attributes (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-curly-brace-presence.md
        'react/jsx-curly-brace-presence': 'off',

        // Enforce consistent line breaks inside jsx curly (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-curly-newline.md
        'react/jsx-curly-newline': 'off',

        // Enforce or disallow spaces inside of curly braces in JSX attributes (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-curly-spacing.md
        'react/jsx-curly-spacing': 'off',

        // Disallow or enforce spaces around equal signs in JSX attributes (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-equals-spacing.md
        'react/jsx-equals-spacing': 'off',

        // Restrict file extensions that may contain JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-filename-extension.md
        'react/jsx-filename-extension': 'off',

        // Ensure proper position of the first property in JSX (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-first-prop-new-line.md
        'react/jsx-first-prop-new-line': 'off',

        // Enforce shorthand or standard form for React fragments (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-fragments.md
        'react/jsx-fragments': 'off',

        // Enforce event handler naming conventions in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-handler-names.md
        'react/jsx-handler-names': 'off',

        // Validate JSX indentation (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-indent.md
        'react/jsx-indent': 'off',

        // Validate props indentation in JSX (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-indent-props.md
        'react/jsx-indent-props': ['error', 4],

        // Report missing key props in iterators/collection literals
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-key.md
        'react/jsx-key': 'error',

        // Validate JSX maximum depth
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-max-depth.md
        'react/jsx-max-depth': 'off',

        // Limit maximum of props on a single line in JSX (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-max-props-per-line.md
        'react/jsx-max-props-per-line': 'off',

        // Enforce a new line after jsx elements and expressions (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-newline.md
        'react/jsx-newline': 'off',

        // Prevents usage of Function.prototype.bind and arrow functions in React component props
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-bind.md
        'react/jsx-no-bind': 'off',

        // Comments inside children section of tag should be placed inside braces
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-comment-textnodes.md
        'react/jsx-no-comment-textnodes': 'error',

        // Prevents JSX context provider values from taking values that will cause needless rerenders.
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-constructed-context-values.md
        'react/jsx-no-constructed-context-values': 'off',

        // Enforce no duplicate props
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-duplicate-props.md
        'react/jsx-no-duplicate-props': 'error',

        // Prevent using string literals in React component definition
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-literals.md
        'react/jsx-no-literals': 'off',

        // Forbid javascript: URLs
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-script-url.md
        'react/jsx-no-script-url': 'off',

        // Forbid target='_blank' attribute without rel='noreferrer'
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-target-blank.md
        'react/jsx-no-target-blank': 'warn',

        // Disallow undeclared variables in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-undef.md
        'react/jsx-no-undef': 'error',

        // Disallow unnecessary fragments (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-useless-fragment.md
        'react/jsx-no-useless-fragment': 'off',

        // Limit to one expression per line in JSX (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-one-expression-per-line.md
        'react/jsx-one-expression-per-line': 'off',

        // Enforce PascalCase for user-defined JSX components
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-pascal-case.md
        'react/jsx-pascal-case': ['error', {
            'allowAllCaps': true
        }],

        // Disallow multiple spaces between inline JSX props (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-props-no-multi-spaces.md
        'react/jsx-props-no-multi-spaces': 'off',

        // Prevent JSX prop spreading
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-props-no-spreading.md
        'react/jsx-props-no-spreading': 'off',

        // Enforce default props alphabetical sorting
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-sort-default-props.md
        'react/jsx-sort-default-props': 'error',

        // Enforce props alphabetical sorting (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-sort-props.md
        'react/jsx-sort-props': ['warn', {
            callbacksLast: true,
            ignoreCase: true,
            reservedFirst: true,
            shorthandLast: true,
        }],

        // Validate whitespace in and around the JSX opening and closing brackets (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-tag-spacing.md
        'react/jsx-tag-spacing': 'error',

        // Prevent React to be marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-uses-react.md
        'react/jsx-uses-react': 'error',

        // Prevent variables used in JSX to be marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-uses-vars.md
        'react/jsx-uses-vars': 'error',

        // Prevent missing parentheses around multilines JSX (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-wrap-multilines.md
        'react/jsx-wrap-multilines': 'error',

        // enforce the rule of hooks
        // https://reactjs.org/docs/hooks-rules.html
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'off'
    }
};
