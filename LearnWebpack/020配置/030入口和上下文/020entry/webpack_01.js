const path = require('path');

module.exports = {
  // 程序的入口起点
  entry: './src/01.js',
  // 多入口起点
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
