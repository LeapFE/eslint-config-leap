module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],

  rules: {
    // OVERRIDE
    // ensure imports point to files/modules that can be resolved
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
    "@typescript-eslint/camelcase": "off",

    // OVERRIDE
    // warn usage of the any type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
    "@typescript-eslint/no-explicit-any": [
      "warn",
      {
        ignoreRestArgs: true,
      },
    ],

    // OVERRIDE
    // Require explicit return types on functions and class methods
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        // if true, only functions which are part of a declaration will be checked
        allowExpressions: true,
        // if true, type annotations are also allowed on the variable of a function expression rather than on the function directly
        allowTypedFunctionExpressions: true,
        // if true, functions immediately returning another function expression will not be checked
        allowHigherOrderFunctions: true,
        // if true, arrow functions immediately returning a `as const` value will not be checked
        allowDirectConstAssertionInArrowFunctions: true,
        // if true, concise arrow functions that start with the void keyword will not be checked
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],

    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
    "@typescript-eslint/no-inferrable-types": [
      "error",
      {
        ignoreParameters: false,
        ignoreProperties: false,
      },
    ],

    // Bans @ts-<directive> comments from being used or requires descriptions after directive
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
    "@typescript-eslint/ban-ts-comment": "error",

    // Bans specific types from being used
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
    "@typescript-eslint/ban-types": "error",

    "@typescript-eslint/class-name-casing": ["error", { allowUnderscorePrefix: true }],

    // @deprecated
    "@typescript-eslint/interface-name-prefix": "off",

    // Enforce consistent indentation
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        // MemberExpression: null,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXFragment",
          "JSXOpeningFragment",
          "JSXClosingFragment",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild",
        ],
        ignoreComments: false,
      },
    ],

    // Disallow generic Array constructors
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    "@typescript-eslint/no-array-constructor": "warn",

    // Disallow empty functions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    "@typescript-eslint/no-empty-function": [
      "error",
      {
        allow: ["arrowFunctions", "functions", "methods"],
      },
    ],

    // 	Disallow unnecessary parentheses
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
    "@typescript-eslint/no-extra-parens": [
      "off",
      "all",
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: "all", // delegate to eslint-plugin-react
        enforceForArrowConditionals: false,
      },
    ],

    // Disallow unused expressions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],

    // 	Disallow unused variables
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "all",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^ignore",
      },
    ],

    // Disallow the use of variables before they are defined
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: true, classes: true, variables: true },
    ],

    // Enforce the consistent use of either backticks, double, or single quotes
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
    "@typescript-eslint/quotes": ["error", "double"],

    // Require or disallow semicolons instead of ASI
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
    "@typescript-eslint/semi": ["error", "always"],
  },
};
