// 不加选择地直接同步加载 polyfill
// polyfill 运行于其他所有代码之前
// 这仍然是 polyfill 的最佳实践
import "./polyfills.js";

import { join } from "lodash";
import { file, parse } from "./global.js";

console.log("file:", file);
console.log("parse:", parse);

function component() {
  var element = document.createElement("div");

  element.innerHTML = join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
