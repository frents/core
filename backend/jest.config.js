// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  setupFiles: ['dotenv/config'],
  clearMocks: true,
  coverageDirectory: 'coverage',
  maxWorkers: "80%",
  testEnvironment: 'node',
}
