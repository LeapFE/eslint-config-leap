module.exports = {
  extends: ["eslint:recommended"],

  /**
   * These rules relate to possible syntax or logic errors in JavaScript code
   * @see https://eslint.org/docs/rules/#possible-errors
   */
  rules: {
    // OVERRIDE
    // Enforces that a return statement is present in property getters
    // https://eslint.org/docs/rules/getter-return
    "getter-return": ["error", { allowImplicit: true }],

    // OVERRIDE
    // Disallow await inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    "no-await-in-loop": "error",

    // NOTE
    // OVERRIDE
    // disallow use of console
    "no-console": ["error", { allow: ["warn", "error", "info"] }],

    // OVERRIDE
    // disallow use of constant expressions in conditions
    "no-constant-condition": ["warn", { checkLoops: false }],

    // OVERRIDE
    // disallow empty statements
    "no-empty": ["error", { allowEmptyCatch: true }],

    // OVERRIDE
    // disallow unnecessary parentheses
    // https://eslint.org/docs/rules/no-extra-parens
    // @see ./typescript `@typescript-eslint/no-extra-parens`
    "no-extra-parens": "off",

    // OVERRIDE
    // Disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/rules/no-template-curly-in-string
    "no-template-curly-in-string": "error",

    // OVERRIDE
    // ensure that the results of typeof are compared against a valid string
    // https://eslint.org/docs/rules/valid-typeof
    "valid-typeof": ["error", { requireStringLiterals: true }],
  },
};
