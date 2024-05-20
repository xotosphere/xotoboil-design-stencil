const esConfig = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    "no-multiple-empty-lines": "warn",

    // typescript rules
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/form/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/ban-ts-comment": "off",

    // general rules
    "newline-per-chained-call": "off",
    "operator-linebreak": "off",
    "max-classes-per-file": "off",
    "prefer-const": "off",
    "getter-return": "off",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "no-new": ["off"],
    "no-unused-vars": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-useless-template-attributes": "off",
    "no-unused-labels": "off",
    "no-useless-constructor": "off",
    "no-inner-declaration": "off",
    "no-dupe-keys": "off",
    "no-use-before-define": "off",
    "no-constant-condition": "off",
    "no-empty-function": "off",
    "operator-linebreak": "off",
    "max-len": [
      "error",
      {
        code: 2000,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
  parserOptions: {
    parser: {
      js: "espree",
      ts: "@typescript-eslint/parser",
      "<template>": "espree",
    },
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: { jsx: true, tsx: true },
  },

  extends: ["eslint:recommended", "plugin:storybook/recommended"],
  plugins: ["prettier", "@typescript-eslint"],
  ignorePatterns: [
    "**/dist/*",
    "**/node_modules/*",
    "**/*.json",
    "**/*.svg",
    "**/*.md",
    "**/*.csv",
    "**/*.lock",
    "**/*.css",
    "**/*.scss",
  ],
};
module.exports = esConfig;
