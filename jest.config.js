module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json",
    },
  },
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/$1",
  },
};
