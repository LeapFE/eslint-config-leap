module.exports = {
  extends: ["eslint:recommended"],
  rules: {
    // CHECK
    // disallow declaration of variables that are not used in the code
    // @see ./typescript.js `@typescript-eslint/no-unused-vars`
    "no-unused-vars": "off",

    // CHECK
    // disallow use of variables before they are defined
    // @see ./typescript.js `@typescript-eslint/no-use-before-define`
    "no-use-before-define": "off",
  },
};
