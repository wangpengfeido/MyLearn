const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js',
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
    // 修改chunk的引用路径
    publicPath: "/",
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
};






