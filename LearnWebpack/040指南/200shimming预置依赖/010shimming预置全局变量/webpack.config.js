const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    // 添加了 ProvidePlugin，当发现有 lodash 使用时自动引入
    // ProvidePlugin 可以使用数组路径，只导入 package 下的子模块
    new webpack.ProvidePlugin({
      // _: "lodash",
      join: ["lodash", "join"],
    }),
  ],
};
