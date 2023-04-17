module.exports = {
  env: {
    browser: true,
    es2022: true
  },
  extends: ["plugin:react/recommended", "standard"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    // indent: ["error", 2],
    indent: "off",
    // Отступ количество пробелов
    semi: [2, "always"],
    // Точка с запятой в конце строки
    "space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never" }
    ],
    // Ошибка при наличии пробела при обозначении функции, уберём её
    quotes: ["error", "double", { allowTemplateLiterals: true }]
    // Использование двойных кавычек
  }
};
