module.exports = {
  extends: ["eslint:recommended"],

  /**
   * These rules relate to better ways of doing things to help you avoid problems
   * @see https://eslint.org/docs/rules/#best-practices
   */
  rules: {
    // OVERRIDE
    // enforces a style where it requires to have a getter for every property which has a setter defined
    "accessor-pairs": ["error", { setWithoutGet: true }],

    // NOTE
    // OVERRIDE
    // require the use of === and !==
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ["error", "always", { null: "ignore" }],

    // OVERRIDE
    // disallow the use of alert, confirm, and prompt
    "no-alert": "error",

    // OVERRIDE
    // disallow use of arguments.caller or arguments.callee
    "no-caller": "error",

    // OVERRIDE
    // disallow else after a return in an if
    // https://eslint.org/docs/rules/no-else-return
    "no-else-return": ["error", { allowElseIf: false }],

    // OVERRIDE
    // disallow empty functions, except for standalone funcs/arrows
    // https://eslint.org/docs/rules/no-empty-function
    // @see ./typescript `@typescript-eslint/no-empty-function`
    "no-empty-function": "off",

    // OVERRIDE
    // disallow use of eval()
    "no-eval": "error",

    // OVERRIDE
    // disallow use of multiple spaces
    "no-multi-spaces": [
      "error",
      {
        ignoreEOLComments: false,
      },
    ],

    // OVERRIDE
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    // rule: https://eslint.org/docs/rules/no-param-reassign.html
    "no-param-reassign": [
      "warn",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "acc", // for reduce accumulators
          "accumulator", // for reduce accumulators
          "e", // for e.returnvalue
          "event", // for event.returnvalue
        ],
      },
    ],

    // disallow certain object properties
    // https://eslint.org/docs/rules/no-restricted-properties
    "no-restricted-properties": [
      "error",
      {
        object: "global",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "self",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "window",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "global",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        object: "self",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        object: "window",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        property: "__defineGetter__",
        message: "Please use Object.defineProperty instead.",
      },
      {
        property: "__defineSetter__",
        message: "Please use Object.defineProperty instead.",
      },
      {
        object: "Math",
        property: "pow",
        message: "Use the exponentiation operator (**) instead.",
      },
    ],

    // OVERRIDE
    // disallow usage of expressions in statement position
    // @see ./typescript.js `@typescript-eslint/no-unused-expressions`
    "no-unused-expressions": "off",

    // OVERRIDE
    // require immediate function invocation to be wrapped in parentheses
    // https://eslint.org/docs/rules/wrap-iife.html
    "wrap-iife": ["error", "inside"],

    // OVERRIDE
    // ensure that Promises are only rejected with Error objects.
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],

    // OVERRIDE
    // Disallow declarations in the global scope
    // https://eslint.org/docs/rules/no-implicit-globals
    "no-implicit-globals": "error",

    // OVERRIDE
    // disallow shorthand type conversions, expected boolean
    // https://eslint.org/docs/rules/no-implicit-coercion
    "no-implicit-coercion": [
      "error",
      {
        boolean: false,
        number: true,
        string: true,
        allow: [],
      },
    ],
  },
};
