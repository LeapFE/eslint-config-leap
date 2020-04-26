module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".json"],
      },
    },
    "import/extensions": [".ts", ".tsx"],
    "import/ignore": ["node_modules", "\\.(scss|css|less|svg|json)$"],
  },
  extends: ["plugin:import/typescript", "plugin:import/warnings", "plugin:import/errors"],

  rules: {
    // CHECK
    // ensure imports point to files/modules that can be resolved
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    "import/no-unresolved": "off",

    // CHECK
    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    // paths are treated both as absolute paths, and relative to process.cwd()
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "test/**", // tape, common npm pattern
          "tests/**", // also common npm pattern
          "spec/**", // mocha, rspec-like pattern
          "**/__tests__/**", // jest pattern
          "**/__mocks__/**", // jest pattern
          "test.{ts,tsx}", // repos with a single test file
          "test-*.{ts,tsx}", // repos with multiple top-level test files
          "**/*{.,_}{test,spec}.{ts,tsx}", // tests where the extension or filename suffix denotes that it is a test
          "**/jest.config.js", // jest config
          "**/jest.setup.js", // jest setup
          "**/webpack.config.js", // webpack config
          "**/webpack.config.*.js", // webpack config
        ],
        optionalDependencies: false,
      },
    ],
  },
};
