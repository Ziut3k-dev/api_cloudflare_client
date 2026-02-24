/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverageFrom: ['lib/**/*.ts', '!**/node_modules/**', 'index.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text', 'html'],
  collectCoverage: true,
  reporters: [
    'default',
    [
      'jest-junit',
      { outputDirectory: 'coverage/junit', outputName: 'junit.xml' },
    ],
  ],
  testRunner: 'jest-circus/runner',
  testTimeout: 30000,
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
};

module.exports = config;
