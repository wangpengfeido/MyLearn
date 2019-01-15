const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

baseConfig.entry = {
  client: './entry-client.js',
};

baseConfig.output.chunkFilename = 'client-[id].js';

baseConfig.output.publicPath = 'http://localhost:63342/server-side-rendering/060%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%BF%80%E6%B4%BB/dist/';

baseConfig.module.rules.push(
  {test: /\.css$/, use: [{loader: 'style-loader'}, {loader: 'css-loader'}]}
);

webpack(baseConfig).run((err, stats) => {
});



