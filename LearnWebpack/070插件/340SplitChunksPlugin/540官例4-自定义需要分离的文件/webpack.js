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
          // 默认： test: /[\\/]node_modules[\\/]/,
          test: /[\\/]my-libs[\\/]/,
        },
      },
    },
  },
  plugins: [],
};

let compiler = webpack(configuration);

compiler.run(function(err, stats) {});
