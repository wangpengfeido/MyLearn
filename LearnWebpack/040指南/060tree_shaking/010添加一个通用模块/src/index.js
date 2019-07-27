import {cube} from "./math";

// 并未引用square方法
// 但从打包好的bundle中可以看出，square仍然被打包在其中，如果不启用tree shaking

function component() {
  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5),
  ].join('\n\n');


  return element;
}

document.body.appendChild(component());







