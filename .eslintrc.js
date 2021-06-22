module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        // 解决 Require 类型报错
        '@typescript-eslint/no-var-requires': 0,
        "@typescript-eslint/ban-ts-comment": "off",
        '@typescript-eslint/ban-types': 'off',
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "vue/no-multiple-template-root": 0
    }
};