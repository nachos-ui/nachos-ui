var path = require("path");
const blacklist = require("metro/src/blacklist");

var config = {
  extraNodeModules: {
    "react-native": path.resolve(__dirname, "node_modules/react-native"),
    react: path.resolve(__dirname, "node_modules/react")
  },
  getProjectRoots() {
    return [
      // Keep your project directory.
      path.resolve(__dirname),
      path.resolve(__dirname, "../")
    ];
  },
  getBlacklistRE: () =>
    blacklist([
      /node_modules\/@storybook\/react-native\/node_modules\/react-native\/.*/,
      /node_modules\/react-native-compat\/node_modules\/react-native\/.*/,
      /node_modules\/react-native-iphone-x-helper\/node_modules\/react-native\/.*/,

      /node_modules\/lottie-react-native\/node_modules\/react-native\/.*/,
      /node_modules\/react-native-branch\/node_modules\/react-native\/.*/,
      /node_modules\/react-native-gesture-handler\/node_modules\/react-native\/.*/,
      /node_modules\/react-native-safe-module\/node_modules\/react-native\/.*/,
      /node_modules\/react-native-svg\/node_modules\/react-native\/.*/
    ])
};
module.exports = config;
