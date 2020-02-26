const path = require("path");
const webpack = require("webpack");

const configuration = {
  entry: "./src/one.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist")
  },
  mode: "development",
  module: {
    // 忽略解析的文件
    // 被忽略的文件中不应该含有import\require\define等导入机制
    // 它能提高构建性能
    noParse: /one-one/
  }
};

module.exports = configuration;
