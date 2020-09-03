const path = require("path");

module.exports = {
  entry: {
    main: "./src/main.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./010dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: path.resolve(__dirname, "./my-loader.js"),
            options: {
              replaceStr: "hello",
            },
          },
        ],
      },
    ],
  },
};
