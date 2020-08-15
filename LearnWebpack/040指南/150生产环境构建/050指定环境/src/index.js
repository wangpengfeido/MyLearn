import {cube} from "./math";

// 这样可以定义一些代码在生产环境下不执行
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5),
  ].join('\n\n');


  return element;
}

document.body.appendChild(component());







