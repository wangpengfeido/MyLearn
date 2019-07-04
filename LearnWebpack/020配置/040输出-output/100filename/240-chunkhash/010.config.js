const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    main: './src/01.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, './010dist'),
    chunkFilename: '[id].[chunkhash].js'
  },
  mode: 'development'
};

webpack(config).run();
