import _ from 'lodash';
import printMe from './print';
import './style.css';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

let element = component();       // 当print.js改变导致页面重新渲染时，重新获取要渲染的元素
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    // 当print.js改变导致页面重新渲染时，重新获取要渲染的元素
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}





