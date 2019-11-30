const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

class MyPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('MyPlugin', compilation => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync('MyPlugin', (data, cb) => {
        console.log(data);
        cb(null, data);
      });
    });
  }
}

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
  plugins: [
    new HtmlWebpackPlugin(),
    new MyPlugin()
  ],
};

let compiler = webpack(configuration);

compiler.run(function(err, stats) {});
