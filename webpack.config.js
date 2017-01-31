const path = require('path')
const webpack = require('webpack')
const StringReplacePlugin = require('string-replace-webpack-plugin')

const replacement = {
  replacements: [
    {
      pattern: /(?:\/\/\s+WEBPACK)\s*\((\w+)\)([^]*)(?:\/\/\s+WEBPACK)/gm,
      replacement: (match, group1, group2, offset, string) => {
        return `
          ${group2}
          ${group1}.styleguide = {}
          ${group1}.styleguide.code = \`${group2}\`
          ${group1}.styleguide.index = \`${group1}\`
          ${group1}.styleguide.category = 'Showcase'
        `
      },
    },
  ],
}

module.exports = {
  devServer: { contentBase: path.join(__dirname) },
  entry: [path.join(__dirname, 'index.web.js')],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(react-native-.*)\/).*/,
        loaders: [ 'babel-loader', StringReplacePlugin.replace(replacement) ],
      },
      {
        test: /\.(gif|jpe?g|png|svg|ttf)$/,
        loader: 'url-loader',
        query: { name: '[name].[hash:16].[ext]' },
      },
      { test: /\.(json)$/, loader: 'json-loader' },
      { test: /\.(md)$/, loader: 'raw-loader' },
    ],
  },
  output: { filename: 'bundle.js' },
  plugins: [
    new StringReplacePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
  ],
  resolve: { alias: { 'react-native': 'react-native-web' } },
}
