const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

const baseConfig = require('./webpack.config.base');

const clientConfig = webpackMerge(baseConfig, {
  entry: {
    client: './entry-client.js',
  },

  output: {
    path: path.resolve(__dirname, './client-dist'),
    chunkFilename: 'client-[id].js',
    publicPath: '/'
  },

  module: {
    rules: [
      {test: /\.css$/, use: [{loader: 'style-loader'}, {loader: 'css-loader'}]},
    ]
  },

  plugins: [
    // 这将webpack运行时分离到一个引导chunk中，
    // 以便可以在之后正确注入异步chunk，
    // 也为 应用程序/vendor 代码提供了更好的缓存
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),

    // 在输出目录中生成`vue-ssr-client-manifest.json`
    new VueSSRClientPlugin(),
  ],
});


webpack(clientConfig).run((err, stats) => {
});



