module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:typescript-sort-keys/recommended",
    // prettier must be the last in extends
    "prettier",
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        //always try to resolve types under `<root>@types` directory
        // even it doesn't contain any source code, like `@types/unist`
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
    },
    react: {
      // Pragma to use, default to "React"
      pragma: "React",
      // Fragment to use (may be a property of <pragma>), default to "Fragment"
      fragment: "Fragment",
      // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // It will default to "latest" and warn if missing, and to "detect" in the future
      version: "detect",
      flowVersion: "0.53",
    },
  },
  ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts", ".lintstagedrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "prettier",
    "react",
    "react-hooks",
    "react-refresh",
    "import",
    "simple-import-sort",
    "typescript-sort-keys",
    "@typescript-eslint",
  ],
  rules: {
    "prettier/prettier": ["error"],
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "no-var": "error",
    semi: "error",
    indent: ["error", 2, { SwitchCase: 1 }],
    "no-multi-spaces": "error",
    "space-in-parens": "error",
    "no-multiple-empty-lines": "error",
    "prefer-const": "error",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "no-unused-vars": [
      "off",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["error"],
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: ["function-expression", "arrow-function"],
      },
    ],

    // Prevent importing from deep nested subfolders, only top level folder index.ts
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["/#feature/*/*"],
            message: "Please use imports only from /feature/{slice} index.ts file",
          },
          {
            group: ["/#pages/*/*"],
            message: "Please use imports only from /pages/{slice} index.ts file",
          },
          {
            group: ["/#shared/*/*"],
            message: "Please use imports only from /shared/{slice} index.ts file",
          },
        ],
      },
    ],
  },
};
