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
