const path = require('path');

module.exports = {
  // 分离了入口起点
  entry: {
    app: './src/index.js',
    print: './src/print.js',
  },
  output: {
    // 根据入口起点动态生成bundle名称
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },
};






