const path = require('path');

// 函数有两个参数
// 第一个是环境变量，第二个是命令参数
module.exports = function(env, argv) {
  console.log(env, argv);
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

  return configuration;
};
