// 一个插件由以下构成
//
// 一个具名 JavaScript 函数。
// 在它的原型上定义 apply 方法。
// 指定一个触及到 webpack 本身的 事件钩子。
// 操作 webpack 内部的实例特定数据。
// 在实现功能后调用 webpack 提供的 callback。


class MyExampleWebpackPlugin {
  // 将 `apply` 定义为其原型方法，此方法以 compiler 作为参数
  apply(compiler) {
    // 指定要附加到的事件钩子函数
    compiler.hooks.emit.tapAsync(
      'MyExampleWebpackPlugin',
      (compilation, callback) => {
        console.log('this is an example plugin!');
        console.log(`here's the 'compilation' object which represents a single build of assets;`, compilation);

        // 使用 webpack 提供的 plugin API 操作构建结果
        // compilation.addModule();

        callback();
      },
    );
  }
}

module.exports = MyExampleWebpackPlugin;




