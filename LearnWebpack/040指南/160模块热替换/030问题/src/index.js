import _ from 'lodash';
import printMe from './print';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

let element = component();       // 存储 element，以在 print.js 更新时重新渲染
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    // 当 print.js 改变时，重新渲染元素
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}





