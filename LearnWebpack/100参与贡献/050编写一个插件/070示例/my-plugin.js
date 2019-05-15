// 生成一个fileList.md文件，内容是构建生成的文件的列表
class MyExampleWebpackPlugin {
  apply(compiler) {
    // 使用异步 tap 触及 emit hook
    compiler.hooks.emit.tapAsync('MyExampleWebpackPlugin', (compilation, callback) => {
      let fileList = 'in this build:\n\n';

      // 遍历编译过的资源文件
      for (let fileName in compilation.assets) {
        fileList += `- ${fileName}\n`;
      }

      // 将list作为新的文件资源，插入 webpack 构建中
      compilation.assets['fileList.md'] = {
        source: function () {
          return fileList;
        },
        size: function () {
          return fileList.length;
        }
      };

      callback();
    });
  }
}

module.exports = MyExampleWebpackPlugin;




