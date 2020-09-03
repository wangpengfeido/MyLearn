import _ from "lodash";

function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  btn.innerHTML = "click me and check the console!";
  btn.onclick = () => {
    // 当点击时，才加载需要的模块
    import("./print.js").then(({ default: printMe }) => {
      printMe();
    });
  };

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
