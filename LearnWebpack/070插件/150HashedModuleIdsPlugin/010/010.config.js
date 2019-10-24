const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: {
    main: './src/01.js',
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, './dist'),
  },
  mode: 'development',
  module: {
    rules: [
    ],
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
  ],
};

webpack(config).run();
