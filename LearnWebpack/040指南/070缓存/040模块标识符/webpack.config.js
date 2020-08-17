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
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    // 如果将 moduleIds 设置为 "size"，在仅添加删除对 print.js 的引用时，vendors 的 hash 可能会发生变化，因为 vendor 引用的 moduleId 会变化
    // 将 moduleIds 设置为 hashed，改变其他依赖时，vendors 的 hash 就不会变化，因为它引用的 moduleId 不会变化了
    moduleIds: "hashed",
    // moduleIds: "size",
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
};
