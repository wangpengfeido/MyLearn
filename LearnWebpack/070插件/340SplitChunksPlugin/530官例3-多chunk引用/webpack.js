const path = require('path');
const webpack = require('webpack');

const configuration = {
  entry: {
    first: './src/first.js',
    second: './src/second.js',
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
          name: 'commons', // chunk名
          chunks: 'initial',
          minChunks: 2,
        },
      },
    },
  },
  plugins: [],
};

let compiler = webpack(configuration);

compiler.run(function(err, stats) {});
