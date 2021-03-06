module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "next/core-web-vitals",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  plugins: [
    "@typescript-eslint",
    "simple-import-sort",
    "sort-destructure-keys",
    "sort-keys-fix",
    "tailwindcss",
    "typescript-sort-keys",
    "unused-imports",
  ],
  root: true,
  rules: {
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/consistent-indexed-object-style": "error",
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/no-confusing-void-expression": [
      "error",
      { ignoreArrowShorthand: true },
    ],
    "@typescript-eslint/no-dynamic-delete": "error",
    "@typescript-eslint/no-meaningless-void-operator": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/sort-type-union-intersection-members": "error",
    curly: "warn",
    eqeqeq: "error",
    "jsx-a11y/aria-role": "error",
    "jsx-a11y/autocomplete-valid": [
      "error",
      {
        inputComponents: ["Button", "Input"],
      },
    ],
    "jsx-a11y/heading-has-content": [
      "error",
      {
        components: ["Heading"],
      },
    ],
    "jsx-a11y/iframe-has-title": "error",
    "jsx-a11y/mouse-events-have-key-events": "error",
    "jsx-a11y/no-access-key": "error",
    "jsx-a11y/no-noninteractive-tabindex": "error",
    "jsx-a11y/no-redundant-roles": "error",
    "jsx-a11y/no-static-element-interactions": "error",
    "jsx-a11y/tabindex-no-positive": "error",
    "multiline-comment-style": "warn",
    "no-else-return": "error",
    "no-extra-label": "error",
    "no-floating-decimal": "warn",
    "no-implicit-coercion": "error",
    "no-lonely-if": "warn",
    "no-regex-spaces": "error",
    "no-undef-init": "warn",
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    "no-unused-vars": "off",
    "no-useless-computed-key": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "object-shorthand": "warn",
    "operator-assignment": "warn",
    "prefer-arrow-callback": "warn",
    "prefer-const": "error",
    "prefer-destructuring": "warn",
    "prefer-exponentiation-operator": "warn",
    "prefer-numeric-literals": "error",
    "prefer-object-spread": "error",
    "prefer-template": "error",
    "quote-props": ["error", "as-needed"],
    "react/display-name": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-boolean-value": "error",
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/jsx-fragments": ["error", "syntax"],
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: false,
        shorthandFirst: false,
        shorthandLast: false,
      },
    ],
    "simple-import-sort/exports": "warn",
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          [
            "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
          ],
          ["^react"],
          ["^next"],
          ["^@?\\w"],
          ["^(@/components)(/.*|$)"],
          ["^(@/configuration)(/.*|$)"],
          ["^(@/hooks)(/.*|$)"],
          ["^(@/modules)(/.*|$)"],
          ["^(@/pages)(/.*|$)"],
          ["^(@/public)(/.*|$)"],
          ["^(@/root)(/.*|$)"],
          ["^(@/styles)(/.*|$)"],
          ["^(@/types)(/.*|$)"],
          ["^(@/utilities)(/.*|$)"],
          ["^\\u0000"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ["^.+\\.s?css$"],
        ],
      },
    ],
    "sort-destructure-keys/sort-destructure-keys": "warn",
    "sort-keys-fix/sort-keys-fix": [
      "warn",
      "asc",
      {
        caseSensitive: false,
        natural: true,
      },
    ],
    "sort-vars": "warn",
    "spaced-comment": ["warn", "always"],
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/no-contradicting-classname": "error",
    "typescript-sort-keys/interface": [
      "warn",
      "asc",
      {
        caseSensitive: false,
        natural: true,
      },
    ],
    "typescript-sort-keys/string-enum": "warn",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        vars: "all",
        varsIgnorePattern: "^_",
      },
    ],
    yoda: "error",
  },
};
