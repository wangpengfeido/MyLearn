// loader 是导出为一个函数的 node 模块。

// 简单的loader，接收一个资源文件内容的字符串，返回模块转化后的值
// module.exports = function (value) {
//   return value;
// };

// 或者使用this.callback(err, content,sourceMap,abstractSyntaxTree) 函数，返回source map等信息。
module.exports = function (value) {
  value = value.replace('??????', '!!!changed by loader1!!!??????');
  this.callback(null, value);
};
