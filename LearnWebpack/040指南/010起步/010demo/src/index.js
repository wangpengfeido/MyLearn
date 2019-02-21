function component() {
  var element = document.createElement('div');

  // lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());



// 在此示例中，<script> 标签之间存在隐式依赖关系。index.js依赖于lodash.js
// 缺点：
// * 无法直接体现依赖关系
// * 如果依赖不存在，或者引入顺序错误，应用程序将无法正常运行。
// * 如果依赖被引入但是并没有使用，浏览器将被迫下载无用代码。




