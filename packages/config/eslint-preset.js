module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "next",
    "next/core-web-vitals",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:import/errors",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: [
    "prettier",
    "react",
    "tailwindcss",
    "import",
    "simple-import-sort",
    "@typescript-eslint",
  ],
  rules: {
    "no-unused-vars": "warn",
    "prefer-const": "error",
    "no-irregular-whitespace": "error",
    "no-trailing-spaces": "error",
    semi: "error",
    "no-empty-function": "error",
    "no-duplicate-imports": "error",
    "newline-after-var": "error",
    camelcase: "warn",
    "react/react-in-jsx-scope": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-unused-vars": "off", // Already handled by eslint:recommended
    "@typescript-eslint/no-empty-function": "off", // Already handled by eslint:recommended
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-undef": "off",
      },
    },
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
