const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    shared: "lodash",
    // 多个入口之间通过 dependOn 选项共享模块
    // 但是经过试验，entry 好像不允许配置对象
    app: { import: "./src/index.js", dependOn: "shared" },
    another: { import: "./src/another-module.js", dependOn: "shared" },
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
