const path = require('path');

module.exports = {
  entry: {
    first: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: './dist/',
    library: {
      // type: 'commonjs',
      // ----------------------------------------------
      name: 'aaaaaaaaaaaaa',
      type: 'var',
    },
  },
  mode: 'development',
  target: 'node',
};
