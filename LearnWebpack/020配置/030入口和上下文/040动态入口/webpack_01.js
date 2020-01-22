const path = require('path');

module.exports = {
  // 函数作为入口时，在 make 事件触发时被计算一次
  // make事件在开始时，和文件监听失效时被触发
  entry() {
    // return {
    //   one: './src/01.js',
    //   two: './src/02.js',
    // };
    // 也可以返回一个promise
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          one: './src/01.js',
          two: './src/02.js',
        });
      }, 3000);
    });
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist_01'),
    publicPath: './',
  },
  mode: 'development',
  plugins: [],
};
