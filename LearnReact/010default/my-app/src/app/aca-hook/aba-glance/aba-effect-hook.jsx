import React, { useState, useEffect } from 'react';

export function AbaEffectHook() {
  return (
    <fieldset>
      <h2>effect hook</h2>
      <p>Effect Hook，给函数组件增加了操作副作用的能力。</p>
      <p>它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途</p>
      <p>默认情况下，React 会在每次渲染后调用副作用函数 —— 包括第一次渲染的时候。</p>
      <p>useEffect 也可以在组件中多次使用</p>
      <p>
        <strong>通过使用 Hook，你可以把组件内相关的副作用组织在一起（例如创建订阅及取消订阅），而不要把它们拆分到不同的生命周期函数里。</strong>
      </p>
      <fieldset>
        <ExampleOne></ExampleOne>
      </fieldset>
    </fieldset>
  );
}

function ExampleOne() {
  const [count, setCount] = useState(0);

  // 相当于 componentDidMount 和 componentDidUpdate
  useEffect(() => {
    // 更新 title
    document.title = `count: ${count}`;
    // 还可以指定一个函数来清除副作用
    // 它会在组件销毁时调用
    return () => {
      document.title = 'react';
    };
  });

  return (
    <div>
      <div>count:{count}</div>
      <button onClick={() => setCount(count + 1)}>add count</button>
    </div>
  );
}
