const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ]
      },
      // 加载csv|tsv|xml需要的loader
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader',
        ]
      },
      // 加载 xml 需要的 loader
      {
        test: /\.xml$/,
        use: [
          'xml-loader',
        ]
      }
    ]
  }
};






