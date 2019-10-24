const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const configuration = {
  entry: {
    main: './src/01.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: './',
  },
  mode: 'development',
  plugins: [],
};

let compiler = webpack(configuration);

compiler.run(function(err, stats) {});
