module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    "project": ["./tsconfig.json"]
  },
  "settings": {
    "import/extensions": [
      ".js",
      ".jsx"
    ],
    'import/ignore': ['react-native'],
  },
  extends: [
    "@react-native-community",
    "airbnb-typescript",
    "plugin:prettier/recommended",
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  rules: {
    semi: 0,
    'ordered-imports': 0,
    'object-literal-sort-keys': 0,
    'member-ordering': 0,
    'jsx-no-lambda': 0,
    'jsx-boolean-value': 0,
    'no-console': 0,
    'no-empty-interface': 0,
    'interface-name': [0, 'always-prefix'],
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
    "@typescript-eslint/no-use-before-define": "off",
  },
  env: {
    es6: true,
    node: true,
  }
}
