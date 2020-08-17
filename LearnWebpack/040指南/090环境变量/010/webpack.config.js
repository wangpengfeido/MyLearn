const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// 在命令中使用 --env 指定环境变量
// 配置必须导出一个函数，环境变量作为函数参数
module.exports = (env) => {
  console.log("==================", env.myEnv);

  return {
    mode: "development",
    entry: {
      app: "./src/index.js",
      print: "./src/print.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: "Output Management",
      }),
    ],
  };
};
