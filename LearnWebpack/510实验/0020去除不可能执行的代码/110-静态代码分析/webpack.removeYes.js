const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    first: './src/first.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist-remove-yes'),
  },
  mode: 'production',
  module: {
    rules: [],
  },
  plugins: [
    new webpack.DefinePlugin({
      REMOVE: '"yes"'
    })
  ],
};

webpack(config).run();
