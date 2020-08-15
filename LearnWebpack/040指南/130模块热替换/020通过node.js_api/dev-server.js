const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config');
const options = config.devServer;

// 使用addDevServerEntrypoints方法，使配置对象中包含HMR入口起点
webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
// dev server选项不再放在webpack config中，而是作为第二个参数传递
const server = new webpackDevServer(compiler, options);

server.listen(5000, () => {
  console.log('dev server listening on port 5000');
});









