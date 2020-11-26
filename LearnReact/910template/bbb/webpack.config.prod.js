const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const commonWebpackConfig = require('./webpack.config.common');

module.exports = merge(commonWebpackConfig, {
  mode: 'production',
  devtool: false,
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: '[name].[chunkhash:8].js',
    publicPath: '//sf6-scmcdn-tos.pstatp.com/goofy/toutiao/oort-main/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});
