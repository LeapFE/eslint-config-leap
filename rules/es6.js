module.exports = {
  extends: ["eslint:recommended"],

  env: {
    es6: true,
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },

  /**
   * These rules relate to ES6, also known as ES2015
   * @see https://eslint.org/docs/rules/#ecmascript-6
   */
  rules: {
    // NOTE
    // OVERRIDE
    // require space before/after arrow function's arrow
    // https://eslint.org/docs/rules/arrow-spacing
    "arrow-spacing": ["error", { before: true, after: true }],

    // OVERRIDE
    // disallow arrow functions where they could be confused with comparisons
    // https://eslint.org/docs/rules/no-confusing-arrow
    "no-confusing-arrow": [
      "error",
      {
        allowParens: true,
      },
    ],

    // OVERRIDE
    // disallow importing from the same path more than once
    // https://eslint.org/docs/rules/no-duplicate-imports
    // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    "no-duplicate-imports": ["error", { includeExports: true }],

    // OVERRIDE
    // disallow renaming import, export, and destructured assignments to the same name
    // https://eslint.org/docs/rules/no-useless-rename
    "no-useless-rename": [
      "error",
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],

    // NOTE
    // OVERRIDE
    // require let or const instead of var
    "no-var": "error",

    // OVERRIDE
    // suggest using of const declaration for variables that are never modified after declared
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: true,
      },
    ],

    // OVERRIDE
    // Prefer destructuring from arrays and objects
    // https://eslint.org/docs/rules/prefer-destructuring
    "prefer-destructuring": [
      "warn",
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // OVERRIDE
    // suggest using template literals instead of string concatenation
    // https://eslint.org/docs/rules/prefer-template
    "prefer-template": "error",
  },
};
