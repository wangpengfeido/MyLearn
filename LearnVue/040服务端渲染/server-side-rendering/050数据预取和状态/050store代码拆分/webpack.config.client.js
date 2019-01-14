const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

baseConfig.entry = {
  client: './entry-client.js',
};

baseConfig.output.chunkFilename = 'client-[id].js';

baseConfig.output.publicPath = '/server-side-rendering/050%E6%95%B0%E6%8D%AE%E9%A2%84%E5%8F%96%E5%92%8C%E7%8A%B6%E6%80%81/050store%E4%BB%A3%E7%A0%81%E6%8B%86%E5%88%86/dist/';

baseConfig.module.rules.push(
  {test: /\.css$/, use: [{loader: 'style-loader'}, {loader: 'css-loader'}]}
);

webpack(baseConfig).run((err, stats) => {
});



