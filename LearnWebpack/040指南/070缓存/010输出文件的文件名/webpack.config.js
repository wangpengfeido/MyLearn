const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  output: {
    // 这里使用了 contenthash。当资源内容变化时，它的值也会变化
    // 然而，当不改变任何内容进行重新编译时，入口 chunk 的 contenthash 也会发生变化。
    // 这是因为入口 chunk 中包含了引导模版，包括 runtime 和 manifest 等。
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
};
