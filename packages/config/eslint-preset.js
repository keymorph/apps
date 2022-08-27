module.exports = {
  extends: [
    "next",
    "next/core-web-vitals",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:tailwindcss/recommended"
  ],
  plugins: ["prettier", "react", "tailwindcss"],
  rules: {
    "no-unused-vars": "warn",
    "prefer-const": "error",
    "no-irregular-whitespace": "error",
    "no-trailing-spaces": "error",
    "semi": "error",
    "no-empty-function": "error",
    "no-duplicate-imports": "error",
    "newline-after-var": "error",
    "camelcase": "error",
    "react/react-in-jsx-scope": "off",
  },
};
