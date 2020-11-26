import React from 'react';
import ReactDOM from 'react-dom';

import './style/index.scss';
import { App } from './App';

const render = ({ dom }: { dom: Element | Document }) => {
  console.log('--------', dom);
  ReactDOM.render(
    <React.StrictMode>
      <App></App>
    </React.StrictMode>,
    dom.querySelector('#root')
  );
};

export const provider = () => {
  return {
    render,
    destroy({ dom }: { dom: Element | DocumentFragment }) {
      ReactDOM.unmountComponentAtNode(dom);
    },
  };
};

// 这能够让子应用独立运行起来
if (!(window as any).__GARFISH__) {
  render({ dom: document });
}
