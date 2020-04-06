const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

baseConfig.entry = {
  client: './entry-client.js',
};

baseConfig.output.chunkFilename = 'client-[id].js';
baseConfig.output.publicPath="/dist/";


baseConfig.module.rules.push(
  {test: /\.css$/, use: [{loader: 'style-loader'}, {loader: 'css-loader'}]}
);

webpack(baseConfig).run((err, stats) => {
});



