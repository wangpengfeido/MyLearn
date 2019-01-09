const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

baseConfig.entry = {
  server: './entry-server.js',
};

baseConfig.output.libraryTarget = 'commonjs2';

baseConfig.module.rules.push(
  {test: /\.css$/, use: [{loader: 'css-loader'}]}
);

webpack(baseConfig).run((err, stats) => {
});

