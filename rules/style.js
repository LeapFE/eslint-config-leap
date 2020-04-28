module.exports = {
  extends: ["eslint:recommended"],
  rules: {
    // OVERRIDE
    // require trailing commas in multiline object literals
    "comma-dangle": ["error", "always-multiline"],

    // OVERRIDE
    // this option sets a specific tab width for your code
    // https://eslint.org/docs/rules/indent
    // @see ./typescript.js `@typescript-eslint/indent`
    indent: "off",

    // OVERRIDE
    // specify whether double or single quotes should be used in JSX attributes
    // https://eslint.org/docs/rules/jsx-quotes
    "jsx-quotes": ["error", "prefer-double"],

    // OVERRIDE
    // disallow mixed 'LF' and 'CRLF' as linebreaks
    // https://eslint.org/docs/rules/linebreak-style
    "linebreak-style": ["error", "unix"],

    // OVERRIDE
    // specify the maximum depth that blocks can be nested
    "max-depth": ["off", 4],

    // NOTE
    // OVERRIDE
    // specify the maximum length of a line in your program
    // https://eslint.org/docs/rules/max-len
    "max-len": [
      "error",
      {
        code: 100,
        tabWidth: 2,
        comments: 120,
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // OVERRIDE
    // specify the max number of lines in a file
    // https://eslint.org/docs/rules/max-lines
    "max-lines": [
      "off",
      {
        max: 400,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    // OVERRIDE
    // limits the number of parameters that can be used in the function declaration.
    "max-params": ["error", 5],

    // OVERRIDE
    // disallow use of the Array constructor
    // @see ./typescript.js `@typescript-eslint/no-array-constructor`
    "no-array-constructor": "off",

    // OVERRIDE
    // disallow continue statements
    // https://eslint.org/docs/rules/no-continue
    "no-continue": "error",

    // OVERRIDE
    // disallow if as the only statement in an else block
    // https://eslint.org/docs/rules/no-lonely-if
    "no-lonely-if": "error",

    // OVERRIDE
    // disallow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    "no-multi-assign": ["error"],

    // OVERRIDE
    // disallow use of the Object constructor
    // https://eslint.org/docs/rules/no-new-object
    "no-new-object": "error",

    // OVERRIDE
    // disallow tab characters entirely
    "no-tabs": "error",

    // OVERRIDE
    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": [
      "error",
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],

    // OVERRIDE
    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // https://eslint.org/docs/rules/no-unneeded-ternary
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],

    // OVERRIDE
    // disallow whitespace before properties
    // https://eslint.org/docs/rules/no-whitespace-before-property
    "no-whitespace-before-property": "error",

    // OVERRIDE
    // require padding inside curly braces
    "object-curly-spacing": ["error", "always"],

    // OVERRIDE
    // enforce "same line" or "multiple line" on object properties.
    // https://eslint.org/docs/rules/object-property-newline
    "object-property-newline": [
      "error",
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],

    // OVERRIDE
    // require a newline around variable declaration
    // https://eslint.org/docs/rules/one-var-declaration-per-line
    "one-var-declaration-per-line": ["error", "always"],

    // OVERRIDE
    // see ./typescript.js `@typescript-eslint/quotes`
    quotes: "off",

    // OVERRIDE
    // require or disallow use of semicolons instead of ASI
    // see ./typescript.js @typescript-eslint/semi
    semi: "off",
  },
};
