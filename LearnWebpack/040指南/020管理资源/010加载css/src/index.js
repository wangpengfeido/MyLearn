import _ from 'lodash';
import './style.css';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
console.log('........');
  return element;
}

document.body.appendChild(component());







