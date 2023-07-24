export default {
  verbose: true,
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
};
