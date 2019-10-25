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
  mode: 'development',
  optimization: {
    namedModules: false,
  },
  module: {
    rules: [
    ],
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
  ],
};

webpack(config).run();
