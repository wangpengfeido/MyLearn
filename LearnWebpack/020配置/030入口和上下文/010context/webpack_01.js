const path = require('path');

module.exports = {
  // 一个绝对路径，用于解析entry和loader
  // 默认为当前目录
  context: path.resolve(__dirname, './src'),
  entry: {
    // 这个变成相对于 ./src
    main: './01.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist_01'),
    publicPath: './',
  },
  mode: 'development',
  plugins: [],
};
