module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json"
  },
  plugins: ["@typescript-eslint"],
  rules: {
    semi: ["error", "always"],
    "quotes": ["error", "double"],
    "quote-props": ["error", "as-needed"],
    'prefer-arrow-callback': ["error"],
    "prettier/prettier": "error"
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ]
};