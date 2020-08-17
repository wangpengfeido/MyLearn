const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  // 使用生产环境中适合的source map
  devtool: 'source-map',
  plugins: [
    // 将uglify-js-plugin的sourceMap选项设置为true
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ]
});



