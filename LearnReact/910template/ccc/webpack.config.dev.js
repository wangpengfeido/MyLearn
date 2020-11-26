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
    publicPath: '/',
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
    stats: 'minimal',
    open: true,
    injectClient: false,
    historyApiFallback: true,
    overlay: true,
    port: 11001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {},
  },
});
