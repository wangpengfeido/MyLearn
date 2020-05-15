import React, { useState } from 'react';

export function AaaIntroducing() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <fieldset>
        <p>hook 可以在不编写 class 的情况下使用 state 以及其他的 React 特性。</p>
      </fieldset>
      <div>
        <div>conut: {count}</div>
        <button onClick={() => setCount(count + 1)}>add count</button>
      </div>
      <fieldset>
        <h3>没有破坏性改动</h3>
        <p>1.完全可选；2.100%向后兼容</p>
      </fieldset>
      <fieldset>
        <h3>动机</h3>
        <fieldset>
          <h4>在组件之间复用逻辑很难。</h4>
          <p>以前的解决方案如 providers\consumers\高阶组件\render props 等抽象层都会形成嵌套地狱，并需要重新组织组件结构，使代码难以理解。</p>
          <p> Hook 从组件中提取状态逻辑，使得这些逻辑可以单独测试并复用。Hook 使你在无需修改组件结构的情况下复用状态逻辑。</p>
        </fieldset>
        <fieldset>
          <h4>复杂组件变得难以理解</h4>
          <p>我们经常维护一些组件，组件起初很简单，但是逐渐会被状态逻辑和副作用充斥。每个生命周期常常包含一些不相关的逻辑。</p>
          <p>在多数情况下，不可能将组件拆分为更小的粒度，因为状态逻辑无处不在。这也给测试带来了一定挑战。同时，这也是很多人将 React 与状态管理库结合使用的原因之一。但是，这往往会引入了很多抽象概念，需要你在不同的文件之间来回切换，使得复用变得更加困难。</p>
          <p>Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据），而并非强制按照生命周期划分。你还可以使用 reducer 来管理组件的内部状态，使其更加可预测。</p>
        </fieldset>
        <fieldset>
          <h4>难以理解的 class</h4>
          <p>class 语法难以学习</p>
          <p>class组件会无意中鼓励开发者使用让优化措施（组件预编译、component folding等）无效的方案</p>
          <p>Hook 使你在非 class 的情况下可以使用更多的 React 特性。</p>
        </fieldset>
      </fieldset>
      <fieldset>
        <h3>渐进方案</h3>
        <p>Hook 和现有代码可以同时工作，你可以渐进式地使用他们。</p>
      </fieldset>
    </div>
  );
}
