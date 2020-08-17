const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack-numbers.js",
    // 将 library 暴露为 umd 模块
    libraryTarget: "umd",
    // 将 library 暴露为 webpackNumbers 全局变量
    library: "webpackNumbers",
  },
  devtool: "source-map",
  externals: {
    lodash: {
      commonjs: "lodash",
      commonjs2: "lodash",
      amd: "lodash",
      root: "_",
    },
  },
};
