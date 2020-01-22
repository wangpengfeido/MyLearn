const path = require('path');
const webpack = require('webpack');

const configuration = {
  entry: {
    main: './src/01.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist_01'),
    publicPath: './',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // limit-此大小以下的会生成 data url，此大小以上的会使用file-loader生成文件
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [],
};

module.exports = configuration;
