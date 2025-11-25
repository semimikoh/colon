module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["react", "import", "unused-imports", "jsx-a11y"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "unused-imports/no-unused-imports": "error",
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc" },
      },
    ],
  },
  ignorePatterns: ["dist", "node_modules"],
};
