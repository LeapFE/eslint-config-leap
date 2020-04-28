# eslint-config-leap

> Leap specific linting rules for ESLint

Our default export contains all of our ESLint rules, including ECMAScript 6+、 React and TypeScript. It requires eslint, @typescript-eslint/parser, eslint-plugin-import, eslint-plugin-react, eslint-plugin-react-hooks, @typescript-eslint/eslint-plugin, eslint-plugin-promise and eslint-config-prettier.

## Installation

using npm 5+, use this shortcut
```shell
npx install-peerdeps --dev eslint-config-leap
```

Then, add eslint-config-leap to the `extends` array in your .eslintrc.* file.
This rules include typescript rule, so you should specify `parser` and `parserOptions.project` in .eslintrc.* file.

```json
{
  "parser": "@typescript-eslint/parser",
  "extends": [
    "leap"
  ],
  "parserOptions": {
    "project": ["./tsconfig.json"]
  }
}
```


## Rules
all available rules https://github.com/LeapFE/eslint-config-leap/blob/master/rule.json
