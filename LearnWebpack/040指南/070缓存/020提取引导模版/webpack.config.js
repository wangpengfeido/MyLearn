const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    // 将 runtime 拆分为单独的 chunk
    runtimeChunk: "single",
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
};
