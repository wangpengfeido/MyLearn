const webpack = require('webpack');
const configuration = require('./010.config');

let compiler = webpack(configuration);

compiler.run(function (err, stats) {
});

