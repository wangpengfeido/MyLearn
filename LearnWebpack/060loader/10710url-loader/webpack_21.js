const path = require('path');
const webpack = require('webpack');

const configuration = {
  entry: {
    main: './src/21.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist_21'),
    publicPath: './',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        // 使用 resourceQuery 来指定某些文件强制使用 data url
        // 注意，特定 resourceQuery 的必须放在默认的前面，否则将不会被匹配到
        oneOf: [
          {
            loader: 'url-loader',
            resourceQuery: /inline/,
            options: {
              limit: 9999999999999999,
            },
          },
          {
            loader: 'url-loader',
            options: {
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
