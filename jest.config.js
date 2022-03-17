module.exports = {
  testIgnorePatterns: ["/node_modules', '/.next"],
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.svg$": "<rootDir>/svgTransform.js",
    // "^.+\\.svg$": "jest-svg-transformer",
  },
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx",
    "src/**/*.ts",
    "!src/**/*.spec.tsx",
    "!src/**/_app.tsx",
    "!src/**/_document.tsx",
  ],
  coverageReporters: ["lcov", "json"]
};