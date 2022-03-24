console.log(`读取了: ${__filename.slice(__dirname.length + 1)}`);

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {},
  plugins: ['import'],
  overrides: [
    {
      files: ['*.ts'],
      // parser: '@typescript-eslint/parser',
      parserOptions: {},
      plugins: ['@typescript-eslint', 'import'],
      extends: ['airbnb-base'],
      rules: {
        'no-console': 0, // 此规则不允许调用console对象的方法。
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              ['sibling', 'parent'],
              'index',
              'object',
              'type',
            ],
            'newlines-between': 'always', // 强制或禁止导入组之间的新行：
            // 根据导入路径按字母顺序对每个组内的顺序进行排序
            alphabetize: {
              order: 'asc' /* 按升序排序。选项：['ignore', 'asc', 'desc'] */,
              caseInsensitive: true /* 忽略大小写。选项：[true, false] */,
            },
          },
        ],
      },
    },
  ],
  // rules优先级最高，会覆盖上面的
  rules: {
    // 0 => off
    // 1 => warn
    // 2 => error
    'no-console': 0,
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent'],
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always', // 强制或禁止导入组之间的新行：
        // 根据导入路径按字母顺序对每个组内的顺序进行排序
        alphabetize: {
          order: 'asc' /* 按升序排序。选项：['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* 忽略大小写。选项：[true, false] */,
        },
      },
    ],
  },
};
