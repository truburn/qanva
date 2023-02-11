const { pathsToModuleNameMapper } = require(`ts-jest`);
const tsconfig = require(`./tsconfig.json`);

module.exports = {
  collectCoverage: true,
  coverageDirectory: `coverage`,
  modulePathIgnorePatterns: [`node_modules`, `.jest-test-results.json`],
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: `<rootDir>/`,
  }),
  preset: "jest-playwright-preset",
  testEnvironmentOptions: {
    "jest-playwright-preset": {
      browsers: ["chromium", "firefox", "webkit"],
    },
  },
};
