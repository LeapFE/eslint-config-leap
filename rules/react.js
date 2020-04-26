module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: ["plugin:react/recommended"],

  // View link below for react rules documentation
  // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
  rules: {
    // CHECK
    // Specify whether double or single quotes should be used in JSX attributes
    // https://eslint.org/docs/rules/jsx-quotes
    "jsx-quotes": ["error", "prefer-double"],

    // CHECK
    // Prevent missing displayName in a React component definition
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    "react/display-name": ["off", { ignoreTranspilerName: false }],

    // CHECK
    // Prevent missing props validation in a React component definition
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    "react/prop-types": "off",

    // CHECK
    // only .tsx files may have JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],

    // CHECK
    // Enforce state initialization style
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
    "react/state-in-constructor": ["error", "always"],
  },

  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "detect",
      flowVersion: "0.53",
    },
    propWrapperFunctions: [
      "forbidExtraProps",
      { property: "freeze", object: "Object" },
      { property: "myFavoriteWrapper" },
    ],
    linkComponents: ["Hyperlink", { name: "Link", linkAttribute: "to" }],
  },
};
