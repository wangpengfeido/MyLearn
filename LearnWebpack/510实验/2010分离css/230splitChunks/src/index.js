import _ from "lodash";

import "./index.css";

import { aaa } from "./aaa";

function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  btn.innerHTML = "click me and check the console!";
  btn.onclick = () => {
    console.log("111111111111111111111111111111111111");
    console.log(aaa);
  };

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
