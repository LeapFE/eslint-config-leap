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
  },
};
