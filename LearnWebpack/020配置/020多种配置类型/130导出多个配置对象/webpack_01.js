const path = require('path');

// 所有配置都会被构建
// 这在针对多个构建目标时非常有用
module.exports = [
  {
    entry: {
      main: './src/01.js',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, './dist_01_1'),
      publicPath: './',
    },
    mode: 'development',
    plugins: [],
  },
  {
    entry: {
      main: './src/01.js',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, './dist_01_2'),
      publicPath: './',
    },
    mode: 'production',
    plugins: [],
  },
];
