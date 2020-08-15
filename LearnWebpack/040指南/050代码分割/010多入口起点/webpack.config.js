const path = require("path");

module.exports = {
  entry: {
    // 创建了多个入口起点，会生成多个 chunk
    app: "./src/index.js",
    another: "./src/another-module.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
