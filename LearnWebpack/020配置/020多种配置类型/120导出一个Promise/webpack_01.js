const path = require('path');

// 可以异步加载配置变量
module.exports = function(env, argv) {
  return new Promise(resolve => {
    const configuration = {
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

    setTimeout(() => {
      resolve(configuration);
    }, 2000);
  });
};
