class MyExampleWebpackPlugin {
  apply(compiler) {
    // apply 方法在安装插件时，会被 webpack compiler 调用一次.
    // apply 方法可以接收一个 webpack compiler 对象的引用，从而可以在回调函数中访问到 compiler 对象。
    compiler.hooks.done.tap('MyExampleWebpackPlugin', (stats) => {
      console.log('hello world');
    })
  }
}

module.exports = MyExampleWebpackPlugin;




