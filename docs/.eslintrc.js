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
    extends: ['airbnb'
    ],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'import/prefer-default-export': 'off',
      'react/require-default-props': 'off',
      'react/jsx-filename-extension': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/destructuring-assignment': 'off',
      'react/forbid-prop-types': 'off',
      'import/no-extraneous-dependencies': 'off',
      'react/prop-types': 'off'
    },
}