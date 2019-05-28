module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "array-element-newline": ["error", "consistent"],
    indent: ["error", 2]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
