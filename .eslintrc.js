module.exports = {
  root: true,
  plugins: ['jest', 'unused-imports'],
  extends: [
    "@react-native-community",
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  rules: {
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  env: {
    'jest/globals': true,
  },
};
