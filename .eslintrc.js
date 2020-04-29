module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  parserOptions: {
    ecmaFeatures: {
      modules: true,
      jsx: true
    },
    sourceType: 'module',
  },
  extends: ['airbnb'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off'
  },
}