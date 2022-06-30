/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    // Mock SVGs, loaded by SVGR https://react-svgr.com/docs/jest/
    '\\.svg$': '<rootDir>/src/mocks/svg.js',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(nanoid|lodash-es|jest*)/)',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  resetMocks: false,
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
      // diagnostics: false,
      isolatedModules: true,
    },
  },
}
