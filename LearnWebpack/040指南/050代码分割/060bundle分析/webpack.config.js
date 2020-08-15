const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    chunkFilename: "[name].bundle.js",
  },
  // 使用了 webpack-bundle-analyzer 分析 bundle。它提供了一个交互式树状图
  plugins: [new HtmlWebpackPlugin(), new BundleAnalyzerPlugin()],
};

// 类似的工具还有：
// webpack-chart: 可交互饼图。
// webpack-visualizer: 可视化并分析你的 bundle，检查哪些模块占用空间，哪些可能是重复使用的。
// webpack bundle optimize helper：分析你的 bundle，并提供可操作的改进措施，以减少 bundle 的大小。
// bundle-stats：生成一个 bundle 报告（bundle 大小、资源、模块），并比较不同构建之间的结果。

