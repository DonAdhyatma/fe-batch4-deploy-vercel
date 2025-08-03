// import type { Config } from "jest";
const nextJest = require("next/jest");
/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(config);
