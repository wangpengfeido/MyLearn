const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    first: './src/first.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
  },
  mode: 'production',
  module: {
    rules: [],
  },
  plugins: [
    new webpack.DefinePlugin({
      A: '"aaa"',
      'B.A': '"bbbaaa"',
      'C.A': {
        A: '"cccaaaaaa"',
        B: '"cccaaabbb"',
      },
    }),
  ],
};

webpack(config).run();
