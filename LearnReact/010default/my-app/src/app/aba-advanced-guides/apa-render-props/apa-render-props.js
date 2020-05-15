import React, { Component } from 'react';

import { ApaAaa } from './apa-aaa.js';
import { ApaAba } from './apa-aba.jsx';
import { ApaAca } from './apa-aca.jsx';
import { ApaAda } from './apa-ada.jsx';

export class ApaRenderProps extends Component {
  render() {
    return (
      <div>
        <fieldset>
          <p>术语 “render prop” 是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术</p>
          <p>具有 render prop 的组件接受一个函数，该函数返回一个 React 元素并调用它而不是实现自己的渲染逻辑。</p>
          <p>render prop 是一个用于告知组件需要渲染什么内容的函数 prop。</p>
        </fieldset>
        <ApaAaa></ApaAaa>
        <ApaAba></ApaAba>
        <ApaAca></ApaAca>
        <ApaAda></ApaAda>
      </div>
    );
  }
}
