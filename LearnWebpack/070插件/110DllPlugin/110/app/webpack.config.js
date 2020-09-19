const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

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
    // mapped 模式
    // 引用时仍然需要按原路径访问，但引用不会被打包到结果中
    // 在本例中可以看到 app.bundle.js 中并不包含 a.js 的内容
    new webpack.DllReferencePlugin({
      manifest: require("../create-dll/dist/a-manifest.json"),
      context: path.join(__dirname, "..", "create-dll"),
    }),
    // scoped 模式
    // 按scope引用
    new webpack.DllReferencePlugin({
      manifest: require("../create-dll/dist/b-manifest.json"),
      scope: "test",
      extensions: [".js"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
};
