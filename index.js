const extendsRules = [
  "./rules/best-practices",
  "./rules/imports",
  "./rules/node",
  "./rules/prettier",
  "./rules/react",
  "./rules/react-hooks",
  "./rules/style",
  "./rules/typescript",
  "./rules/variable",
  "./rules/errors",
  "./rules/es6",
].map(require.resolve);

module.exports = {
  extends: extendsRules,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  env: { browser: true, jest: true },
  globals: {
    precess: true,
  },
};
