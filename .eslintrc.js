module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    jest: true
  },
  extends: ['@chookslint/eslint-config-typescript'],
  plugins: ['prettier'],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'prettier/prettier': [
      'error',
      { singleQuote: true, jsxSingleQuote: true },
      { usePrettierrc: false }
    ]
  }
}