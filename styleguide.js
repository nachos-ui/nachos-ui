const webpackConfig = require('./webpack.config')
const pkg = require('./package.json')

// NOTE: remove entry as it's not meant to be a part of the documentation
delete webpackConfig.entry

module.exports = {
  title: pkg.humanName,
  files: [
    './docs/assets/main.css',
    '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/default.min.css',
    '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/highlight.min.js',
    './docs/assets/main.js',
    './node_modules/react-native-vector-icons/Fonts/Ionicons.ttf',
  ],
  webpackConfig,
}
