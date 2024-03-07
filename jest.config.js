/** @type {import('jest').Config} */
const config = {
  verbose: true,
  collectCoverageFrom: ['lib/**/*.js', '!**/node_modules/**', 'index.js'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  coverageReporters: ['lcov', 'text', 'html'],
  collectCoverage: true,
  reporters: [
    'default',
    [
      'jest-junit',
      {outputDirectory: 'coverage/junit', outputName: 'junit.xml'},
    ],
  ],
  testRunner: 'jest-circus/runner',
  testTimeout: 30000,
};

module.exports = config;
