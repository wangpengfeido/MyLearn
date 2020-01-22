import path from 'path';
import webpack from 'webpack';

const configuration:webpack.Configuration = {
  entry: {
    main: './src/01.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist_01'),
    publicPath: './',
  },
  mode: 'development',
  plugins: [],
};

export default configuration;
