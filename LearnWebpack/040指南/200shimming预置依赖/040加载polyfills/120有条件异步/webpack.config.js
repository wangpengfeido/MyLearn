const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
    // 将 polyfill 提取到单独入口
    polyfills: "./src/polyfills.js",
    // 并在 index.html 模版中根据条件动态加载 polyfills.bundle.js
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: require.resolve("./src/global.js"),
        use: [
          {
            loader: "exports-loader",
            options: {
              type: "commonjs",
              exports: [
                {
                  syntax: "multiple",
                  name: "file",
                },
                {
                  syntax: "multiple",
                  name: "helpers.parse",
                  alias: "parse",
                },
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["app"],
    }),
    new webpack.ProvidePlugin({
      join: ["lodash", "join"],
    }),
  ],
};
