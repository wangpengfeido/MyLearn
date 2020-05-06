import React, { useState } from 'react';

function MultipleState() {
  // 多次调用 useState 来创建多个状态
  const [age] = useState(42);
  const [todos] = useState([{ text: 'learn hooks' }]);

  return (
    <div>
      <div>age:{age}</div>
      <div>
        {todos.map((item, index) => {
          return <div key={index}>{item.text}</div>;
        })}
      </div>
    </div>
  );
}

export function AaaStateHook() {
  // useState 是一个 Hook
  // 通过在函数组件里调用它来给组件添加一些内部 state。React 会在重复渲染时保留这个 state。
  // useState 会返回一对值：当前状态和一个让你更新它的函数
  // 函数类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并。
  // useState 唯一的参数就是初始 state。这里的 state 不一定要是一个对象
  const [count, setCount] = useState(0);

  return (
    <fieldset>
      <h2>state hook</h2>
      <div>count:{count}</div>
      <button onClick={() => setCount(count + 1)}>add count</button>
      <fieldset>
        <h3>multiple state</h3>
        <MultipleState></MultipleState>
      </fieldset>
      <fieldset>
        <h3>什么是 Hook</h3>
        <p>Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。</p>
      </fieldset>
    </fieldset>
  );
}
