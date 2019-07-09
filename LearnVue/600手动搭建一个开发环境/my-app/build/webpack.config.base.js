const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const baseConfig = {
  entry: {
    app: './src/main.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [{ loader: 'html-loader' }],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [autoprefixer()],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.(png|jpg|gif)/,
        exclude: /node_modules/,
        use: [{ loader: 'file-loader' }],
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [{ loader: 'vue-loader' }],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ filename: '../public/index.html' }), new VueLoaderPlugin()],
};

module.exports = baseConfig;
