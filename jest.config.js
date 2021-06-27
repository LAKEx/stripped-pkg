module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ["./test-setup.js"],
  testRegex: "/src/.*\\.(test|spec)\\.[jt]sx?$",
  testEnvironment: "jsdom"
};