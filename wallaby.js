module.exports = function(wallaby) {
  return {
    debug: true,
    files: [
      "src/**/*.+(js|json|jpg|jpeg|gif|png|svg)",
      "scripts/*.*",
      `!src/**/*.spec.js`
    ],
    env: {
      type: "node",
      runner: "node"
    },
    tests: ["src/**/*.spec.js"],
    testFramework: "jest",
    compilers: {
      "**/*.js": wallaby.compilers.babel()
    }
  };
};
