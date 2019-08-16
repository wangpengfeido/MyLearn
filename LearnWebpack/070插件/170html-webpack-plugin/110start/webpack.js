const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const configuration = {
  entry: {
    main: './src/01.js',
    second: './src/02.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './010dist'),
  },
  mode: 'development',
  plugins: [new HtmlWebpackPlugin()],
};

let compiler = webpack(configuration);

compiler.run(function(err, stats) {});
