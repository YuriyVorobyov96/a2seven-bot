module.exports = {
  extends: [
      '@a2seven/eslint-config',
  ],
  rules: {
    'import/prefer-default-export': 'warn',

    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'interface',
        'format': ['StrictPascalCase'],
        'prefix': ['I']
      },
      {
        'selector': 'typeAlias',
        'format': ['StrictPascalCase'],
        'prefix': ['T']
      },
      {
        'selector': 'enum',
        'format': ['StrictPascalCase'],
        'suffix': ['Enum']
      },
      {
        'selector': 'class',
        'format': ['StrictPascalCase'],
      },
      {
        'selector': 'class',
        'modifiers': ['abstract'],
        'format': ['StrictPascalCase'],
        'prefix': ['A']
      },
      {
        'selector': 'classMethod',
        'format': ['strictCamelCase'],
      },

      /* Enforce that all variables are either in camelCase or UPPER_CASE */
      {
        'selector': 'variable',
        'format': ['strictCamelCase', 'UPPER_CASE']
      },

      /* Enforce that boolean variables are prefixed with an allowed verb */
      {
        'selector': 'variable',
        'types': ['boolean'],
        'format': [
          'StrictPascalCase',
          'UPPER_CASE',
        ],
        'prefix': ['is', 'has', 'IS_', 'HAS_'],
      },
    ],
  },
};
