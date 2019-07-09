const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const devConfig = webpackMerge(baseConfig, {
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.resolve(__dirname, '../dev'),
    chunkFilename: '[name].[chunkhash:8].js',
    publicPath: path.resolve(__dirname, '../dev'),
  },
  mode: 'development',
});

module.exports = devConfig;
