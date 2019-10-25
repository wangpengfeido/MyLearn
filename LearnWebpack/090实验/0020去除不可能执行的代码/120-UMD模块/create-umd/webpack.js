const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    a: './a.js',
  },
  output: {
    filename: '[name]-umd.js',
    path: path.resolve(__dirname, './'),
    libraryTarget: 'umd'
  },
  mode: 'development',
  module: {
    rules: [],
  },
  plugins: [
  ],
};

webpack(config).run();
