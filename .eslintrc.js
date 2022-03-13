module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'arrow-body-style': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': 'off',
    'forbid-prop-types': 'off',
    'class-methods-use-this': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-props-no-spreading': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/prop-types': 'off',
    'consistent-return': 'off',
  },

};
