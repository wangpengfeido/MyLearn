const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const crypto = require('crypto');
function digest(str) {
  return crypto
    .createHash('md5')
    .update(str)
    .digest('hex');
}
function cacheKey(options, request) {
  return `build:cache:${digest(request)}`;
}

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
        test: /\.css$/,
        use: ["cache-loader", "style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
};
