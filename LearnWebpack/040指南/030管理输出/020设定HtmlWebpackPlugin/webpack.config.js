const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js',
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // 使用 HtmlWebpackPlugin 。它会自动创建一个html，并引用生成的文件。
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
};






