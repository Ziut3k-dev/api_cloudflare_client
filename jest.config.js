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
};

module.exports = config;
