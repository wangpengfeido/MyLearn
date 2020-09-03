import * as _ from "lodash";

import data from "./data.json";

console.log(data);

function component() {
  var element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
