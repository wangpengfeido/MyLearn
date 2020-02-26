const path = require("path");

module.exports = {
  entry: {
    one: "./es6/one.js",
    two: "./es6/two.js"
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
  externals: {
    "test/src/common.js": "test/lib/common.js"
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
