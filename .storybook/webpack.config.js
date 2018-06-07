// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const StringReplacePlugin = require("string-replace-webpack-plugin");
const replacement = {
  replacements: [
    {
      pattern: /(?:\/\/\s+WEBPACK)\s*\((\w+)\)([^]*)(?:\/\/\s+WEBPACK)/gm
    }
  ]
};
module.exports = {
  devtool: "eval-source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(react-native-.*)\/).*/,
        loaders: ["babel-loader", StringReplacePlugin.replace(replacement)]
      },
      {
        test: /\.(gif|jpe?g|png|svg|ttf)$/,
        loader: "url-loader",
        query: { name: "[name].[hash:16].[ext]" }
      },
      { test: /\.(json)$/, loader: "json-loader" },
      { test: /\.(md)$/, loader: "raw-loader" }
    ]
  },
  plugins: [new StringReplacePlugin()],
  resolve: { alias: { "react-native": "react-native-web" } }
};
