module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],

  rules: {
    // CHECK
    // ensure imports point to files/modules that can be resolved
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
    "@typescript-eslint/camelcase": "off",

    // CHECK
    // warn usage of the any type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
    "@typescript-eslint/no-explicit-any": [
      "warn",
      {
        ignoreRestArgs: true,
      },
    ],

    // CHECK
    // Require explicit return types on functions and class methods
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    "@typescript-eslint/explicit-function-return-type": "off",

    "@typescript-eslint/no-inferrable-types": [
      "error",
      {
        ignoreParameters: false,
        ignoreProperties: false,
      },
    ],

    "@typescript-eslint/ban-ts-ignore": "off",

    "@typescript-eslint/class-name-casing": "off",

    "@typescript-eslint/interface-name-prefix": "off",

    // Enforce consistent brace style for blocks
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
    "@typescript-eslint/brace-style": "off",

    // Enforces consistent spacing before and after commas
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
    "@typescript-eslint/comma-spacing": "off",

    // Enforce default parameters to be last
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
    "@typescript-eslint/default-param-last": "off",

    // enforce dot notation whenever possible
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
    "@typescript-eslint/dot-notation": "off",

    // Require or disallow spacing between function identifiers and their invocations
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
    "@typescript-eslint/func-call-spacing": "off",

    // Enforce consistent indentation
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    "@typescript-eslint/indent": "off",

    // require or disallow initialization in variable declarations
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
    "@typescript-eslint/init-declarations": "off",

    // Enforce consistent spacing before and after keywords
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
    "@typescript-eslint/keyword-spacing": "off",

    // Disallow generic Array constructors
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    "@typescript-eslint/no-array-constructor": "off",

    // Disallow duplicate class members
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
    "@typescript-eslint/no-dupe-class-members": "off",

    // Disallow empty functions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    "@typescript-eslint/no-empty-function": "off",

    // 	Disallow unnecessary parentheses
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
    "@typescript-eslint/no-extra-parens": "off",

    // Disallow unnecessary semicolon
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
    "@typescript-eslint/no-extra-semi": "off",

    // Disallow magic numbers
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
    "@typescript-eslint/no-magic-numbers": "off",

    // Disallow unused expressions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    "@typescript-eslint/no-unused-expressions": "off",

    // 	Disallow unused variables
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    "@typescript-eslint/no-unused-vars": "off",

    // Disallow the use of variables before they are defined
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    "@typescript-eslint/no-use-before-define": "off",

    // Enforce the consistent use of either backticks, double, or single quotes
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    "@typescript-eslint/quotes": "off",

    // Disallow async functions which have no await expression
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
    "@typescript-eslint/require-await": "off",

    // Enforces consistent returning of awaited values
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
    "@typescript-eslint/return-await": "off",

    // Require or disallow semicolons instead of ASI
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
    "@typescript-eslint/semi": "off",

    // Enforces consistent spacing before function parenthesis
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
    "@typescript-eslint/space-before-function-paren": "off",
  },
};
