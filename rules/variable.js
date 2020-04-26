module.exports = {
  extends: ["eslint:recommended"],
  rules: {
    // CHECK
    // disallow declaration of variables that are not used in the code
    "no-unused-vars": [
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

    // CHECK
    // disallow use of variables before they are defined
    "no-use-before-define": ["error", { functions: true, classes: true, variables: true }],
  },
};
