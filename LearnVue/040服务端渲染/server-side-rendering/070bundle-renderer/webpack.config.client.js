const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const baseConfig = require('./webpack.config.base');

const clientConfig = webpackMerge(baseConfig, {
  entry: {
    client: './entry-client.js',
  },

  output: {
    path: path.resolve(__dirname, './client-dist'),
    chunkFilename: 'client-[id].js',
    publicPath:'/'
  },

  module: {
    rules: [
      {test: /\.css$/, use: [{loader: 'style-loader'}, {loader: 'css-loader'}]},
    ]
  },
});


webpack(clientConfig).run((err, stats) => {
});



