const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

const baseConfig = require('./webpack.config.base');

const serverConfig = webpackMerge(baseConfig, {
  // 指定服务端入口文件
  entry: {
    server: './entry-server.js'
  },

  // 指定构建目标
  target: 'node',

  // 生成source map
  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, './server-dist'),
    chunkFilename: 'server-[id].js',
    // bundle导出风格
    libraryTarget: 'commonjs2',
  },

  // loaders
  module: {
    rules: [
      {test: /\.css$/, use: [{loader: 'css-loader'}]},
    ]
  },

  externals: [
    // 外置化依赖模块。可以加快构建速度并生成更小的bundle文件
    // 详情请见 webpack-node-externals
    nodeExternals(({
      // 不需要外置化的依赖模块
      // 注意：在使用runInNewContext: 'once' 或 runInNewContext: true时，还应该将global的polyfill列入白名单
      whitelist: [/\.css$/, /\.vue$/],
    })),
  ],

  plugins: [
    // 将输出构建为单个json，默认文件名为 `vue-ssr-server-bundle.json`
    // 以适应bundle renderer
    new VueSSRServerPlugin(),
  ],

});

webpack(serverConfig).run((err, stats) => {
});

