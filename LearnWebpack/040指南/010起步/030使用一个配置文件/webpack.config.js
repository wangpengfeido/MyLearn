// 使用一个配置文件

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },
};






