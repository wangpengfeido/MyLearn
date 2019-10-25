const path = require('path');

module.exports = {
  entry: {
    first: './src/first.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: './dist/',
    libraryTarget: 'commonjs',
  },
  mode: 'development',
  target: 'node',
};
