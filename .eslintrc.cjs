module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    'plugin:prettier/recommended', // must be last
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
  },
  ignorePatterns: ['node_modules', 'dist', '*.cjs', '*.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier'],
  rules: {
    semi: ['error', 'never', { beforeStatementContinuationChars: 'always' }],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    'prettier/prettier': 'warn',
    'no-console': 'off',
    'prefer-object-spread': 'warn',
    'prefer-spread': 'warn',
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'no-useless-escape': 'off',
    camelcase: ['warn', { properties: 'never' }],
    'no-new': 'warn',
    'new-cap': ['error', { newIsCap: true, capIsNew: false }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    'no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-enum-comparison': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
}