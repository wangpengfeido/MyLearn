import _ from "lodash";
import printMe from "./print";

// 自定义一个 context
// context 语法： require.context(directory, useSubdirectories = true, regExp = /^\.\/.*$/, mode = 'sync');
const myContext = require.context("./folder1/folder2", true, /^.*\.js$/);
console.log("context require:", myContext);

// require.context 返回一个 require，它接受 request 表达式，来查找导入的模块
const name = 1 + 1 === 2 ? "./a" : "./b";
const a = myContext(name + ".js").default;
console.log("a:", a);

// require.context() 返回的函数还有三个属性：
// resolve: 一个函数，返回 request 被解析后得到的模块 id
// keys: 一个函数，返回所有可能的 request
// id: context module 的模块 id。可能在使用 module.hot.accept 时会用到
console.log("require.resolve:", myContext.resolve(name + ".js"));
console.log("require.keys:", myContext.keys());
console.log("require.id:", myContext.id);

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
