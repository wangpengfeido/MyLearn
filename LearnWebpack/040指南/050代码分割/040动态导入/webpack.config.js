const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    // 生成的资源路径
    publicPath: "",
    // 非入口 chunk 名称。动态导入时会生成
    chunkFilename: "[name].bundle.js",
  },
  plugins: [new HtmlWebpackPlugin()],
};
