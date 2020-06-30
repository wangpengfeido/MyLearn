const path = require('path');
const webpack = require('webpack');

const configuration = {
  entry: {
    first: './src/first.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: './',
  },
  mode: 'development',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons1: {
          name: 'vendor1',
          chunks: 'all',
          test: /[\\/]my-libs[\\/](common-29k)/,
        },
        commons2: {
          name: 'vendor2',
          chunks: 'all',
          test: /[\\/]my-libs[\\/](common-31k)/,
        },
      },
    },
  },
  plugins: [],
};

let compiler = webpack(configuration);

compiler.run(function(err, stats) {});
