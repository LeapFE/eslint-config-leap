const extendsRules = [
  "./rules/best-practices",
  "./rules/imports",
  "./rules/node",
  "./rules/react",
  "./rules/react-hooks",
  "./rules/style",
  "./rules/variable",
  "./rules/errors",
  "./rules/es6",
  "./rules/prettier",
  // NOTE load typescript rules latest
  "./rules/typescript",
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
