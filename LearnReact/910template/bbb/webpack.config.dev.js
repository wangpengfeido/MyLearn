const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const commonWebpackConfig = require('./webpack.config.common');

module.exports = merge(commonWebpackConfig, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '//localhost:8090/',
  },
  optimization: {
    runtimeChunk: true,
    moduleIds: 'natural',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          minChunks: 1,
          priority: 5,
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  devServer: {
    open: true,
    historyApiFallback: true,
    overlay: true,
    port: 11000,
    contentBase: './mock',
    transportMode: 'ws',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {},
  },
});
