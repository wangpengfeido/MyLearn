// 有些插件 hooks 是异步的。使用异步方式运行的 tapAsync 方法或 tapPromise 方法,来代替 tap 方法。

// class MyExampleWebpackPlugin {
//   apply(compiler) {
//     compiler.hooks.emit.tapAsync('MyExampleWebpackPlugin', (compilation, callback) => {
//       // 使用 tapAsync 时，会传入一个 callback 参数
//       // 异步的事
//       setTimeout(function () {
//         console.log('down with async work');
//         callback();
//       }, 1000);
//     });
//   }
// }

class MyExampleWebpackPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapPromise('MyExampleWebpackPlugin', (compilation) => {
      // 使用 tapPromise 时，需要返回一个Promise
      return new Promise((resolve, reject) => {
        // 异步的事
        setTimeout(function () {
          console.log('down with async work');
          resolve();
        }, 1000);
      });
    });
  }
}

module.exports = MyExampleWebpackPlugin;




