const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    first: './src/first.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist-remove-no'),
  },
  mode: 'production',
  module: {
    rules: [],
  },
  plugins: [
    new webpack.DefinePlugin({
      REMOVE: '"no"'
    })
  ],
};

webpack(config).run();
