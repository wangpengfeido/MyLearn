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
        commons: {
          name: 'vendor',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  plugins: [],
};

let compiler = webpack(configuration);

compiler.run(function(err, stats) {});
