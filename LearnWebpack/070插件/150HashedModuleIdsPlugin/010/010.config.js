const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    main: './src/01.js'
  },
  output: {
    filename: '[name].[id].js',
    path: path.resolve(__dirname, './010dist')
  },
  mode: 'development',
  // plugins: [new webpack.HashedModuleIdsPlugin()],
};

webpack(config).run();
