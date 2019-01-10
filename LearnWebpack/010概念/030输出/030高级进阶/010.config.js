const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './010dist'),
        publicPath: './010dist/',
    },
    mode: 'development',
};
