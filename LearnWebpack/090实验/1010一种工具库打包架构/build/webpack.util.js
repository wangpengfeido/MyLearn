const path = require("path");

module.exports = {
  entry: {
    common: "./src/common.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../lib"),
    libraryTarget: "commonjs2"
  },
  mode: "development",
  resolve: {
    extensions: [".js"],
    alias: {
      test: path.resolve(__dirname, "../")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: "babel-loader" }]
      }
    ]
  }
};
