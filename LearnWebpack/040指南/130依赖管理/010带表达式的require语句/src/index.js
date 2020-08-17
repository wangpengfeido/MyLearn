import _ from "lodash";
import printMe from "./print";

// 使用带表达式的 require 时，会生成一个 context module （上下文模块），它包含目录下所有符合request正则的模块的引用

// 所以，webpack 可以使用动态 reuqire，但是会导致所有可能用到的 bundle 都会包含在 module 中。

// 会包含 a,b，不包含 c,d。
// 上下文的文件夹是 ./folder1/folder2, 正则是 /^.*\.js$/
const name = 1 + 1 === 2 ? "a" : "b";
const a = require("./folder1/folder2/" + name + ".js");
console.log(a);

// 会包含 a,b,c, 不包含 d。
// 上下文的文件夹是 ./folder1, 正则是 /^.*\.js$/
// const name = 1 + 1 === 2 ? "folder2/a" : "folder2/b";
// const a = require("./folder1/" + name + ".js");
// console.log(a);

// 仅会包含 a, 不包含 b,c,d
// 表达式会提前计算，所以这并不能算动态 require
// const a = require((1 + 1 === 2 ? "./folder1/folder2/a" : "./folder1/folder2/b") + ".js");
// console.log(a);

// 会包含 a,b,c,d
// 上下文的文件夹是 ./, 正则是 /^.*\.js$/
// let c = 10;
// const a = require((c + 1 === 2 ? "./folder1/folder2/a" : "./folder1/folder2/b") + ".js");
// console.log(a);

function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  btn.innerHTML = "click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
