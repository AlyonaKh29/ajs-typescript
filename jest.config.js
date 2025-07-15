export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        // дополнительные настройки для ts-jest, если нужны
        tsconfig: 'tsconfig.json', // путь к вашему файлу tsconfig
      },
    ],
  },
  globals: {
    'ts-jest': {
      // можно оставить пустым или добавить настройки
    },
  },
};
