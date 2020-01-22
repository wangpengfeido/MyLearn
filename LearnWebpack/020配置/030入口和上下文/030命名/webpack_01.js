const path = require('path');

module.exports = {
  // 当入口起点为字符串，chunk被命名为main
  entry: './src/01.js',
  // 当设置为对象，chunk被命名为key
  // entry: {
  //   one: './src/01.js',
  //   two: './src/02.js'
  // },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist_01'),
    publicPath: './',
  },
  mode: 'development',
  plugins: [],
};
