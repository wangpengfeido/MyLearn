import React, { PureComponent, useState, useCallback } from "react";

export function BcaUseCallback() {
  return (
    <div>
      <fieldset>
        <fieldset>
          <div>useCallback 创建一个 memoized 的函数。</div>
          <div>当它依赖的值变化时，返回新的函数，否则返回原来的函数。</div>
          <div>这是为了在重新渲染时，不重新创建新的函数。</div>
          <div>
            <code>useCallback(fn, deps)</code> 相当于{" "}
            <code>useMemo(() =&gt; fn, deps)</code>
          </div>
        </fieldset>
        <fieldset>
          <div>为什么需要在依赖变化时返回新的函数？</div>
          <div>
            这是由闭包的性质决定的。如果依赖变化时不返回新的函数，那么原来的函数的闭包引用的还是原来的那个变量。
          </div>
        </fieldset>
        <fieldset>
          <ExampleOne></ExampleOne>
        </fieldset>
        <fieldset>
          <ExampleTwo></ExampleTwo>
        </fieldset>
      </fieldset>
    </div>
  );
}

class MyPureComponent extends PureComponent {
  render() {
    console.log(`${this.props.title}:rendred`);
    return (
      <div>
        <div>PureComponent:{this.props.title}</div>
        <button onClick={this.props.onClick}>{this.props.btnText}</button>
      </div>
    );
  }
}

function ExampleOne() {
  let [a, setA] = useState(0);
  let [b, setB] = useState(0);

  const addA = function () {
    setA(a + 1);
  };
  const addB = () => {
    setB(b + 1);
  };

  return (
    <div>
      <h3>例一：修改a时，b也会重新渲染。因为addB函数改变了</h3>
      <button onClick={addA}>add a:{a}</button>
      <MyPureComponent
        title={"add b"}
        btnText={`add b:${b}`}
        onClick={addB}
      ></MyPureComponent>
    </div>
  );
}

function ExampleTwo() {
  let [a, setA] = useState(0);
  let [b, setB] = useState(0);

  const addA = function () {
    setA(a + 1);
  };
  const addB = useCallback(() => {
    setB(b + 1);
  }, [b]);

  return (
    <div>
      <h3>例二：修改a时，b不会重新渲染。因为addB函数是存储起来的函数</h3>
      <button onClick={addA}>add a:{a}</button>
      <MyPureComponent
        title={"add b"}
        btnText={`add b:${b}`}
        onClick={addB}
      ></MyPureComponent>
    </div>
  );
}
