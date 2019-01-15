const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  output: {
    filename: '[name].js',
  },
  mode: 'development',
  module: {
    rules: [
      {test: /\.vue/, use: [{loader: 'vue-loader'}]},
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};





