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
  module: {
    rules: [
      {
        test: require.resolve("./src/index.js"),
        use: [
          // 使用 imports-loader，更改了全局 this 为 window，这在 commonjs 环境下是有用的
          {
            loader: "imports-loader",
            options: {
              wrapper: "window",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.ProvidePlugin({
      join: ["lodash", "join"],
    }),
  ],
};
