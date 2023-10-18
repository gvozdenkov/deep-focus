module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:typescript-sort-keys/recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier"
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "vite.config.ts",
    ".lintstagedrc.cjs"
  ],
  plugins: [
    "prettier",
    "react",
    "react-hooks",
    "react-refresh",
    "simple-import-sort",
    "typescript-sort-keys",
    "@typescript-eslint"
  ],
  rules: {
    "prettier/prettier": ["error"],
    "react-refresh/only-export-components": [
      "warn",
      { "allowConstantExport": true }
    ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "no-var": "error",
    "semi": "error",
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "no-multi-spaces": "error",
    "space-in-parens": "error",
    "no-multiple-empty-lines": "error",
    "prefer-const": "error",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "no-unused-vars": [
      "off",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": true,
        "argsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "error"
    ],
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/function-component-definition": [
      2,
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": [
          "function-expression",
          "arrow-function"
        ]
      }
    ]
  },
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      fragment: "Fragment",
      version: "detect"
    },
    "import/resolver": {
      "node": {
        "paths": [
          "src"
        ],
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  }
};
