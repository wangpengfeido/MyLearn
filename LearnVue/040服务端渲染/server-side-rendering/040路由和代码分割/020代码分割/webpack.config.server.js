const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

baseConfig.target = 'node';

baseConfig.entry = {
  server: './entry-server.js',
};

baseConfig.output.chunkFilename = 'server-[id].js';

baseConfig.output.libraryTarget = 'commonjs2';

baseConfig.module.rules.push(
  {test: /\.css$/, use: [{loader: 'css-loader'}]}
);

webpack(baseConfig).run((err, stats) => {
});

