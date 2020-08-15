const path = require("path");

module.exports = {
  entry: {
    app: "./src/index.js",
    another: "./src/another-module.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    // 代码分割配置
    splitChunks: {
      chunks: "all",
    },
  },
};
