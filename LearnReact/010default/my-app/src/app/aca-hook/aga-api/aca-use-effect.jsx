import React, { useState, useEffect } from "react";

export function AcaUseEffect() {
  return (
    <div>
      <Baa></Baa>
      <Caa></Caa>
      <Daa></Daa>
      <Eaa></Eaa>
    </div>
  );
}

function Baa() {
  console.log("baa render");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("baa effect");
  });
  return (
    <fieldset>
      <p>useEffect中可以执行副作用操作。</p>
      <p>
        effect通常在每轮渲染结束后执行，也可以选在在
        <strong>某些依赖变化时</strong>执行。
      </p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        addCount:{count}
      </button>
    </fieldset>
  );
}

function Caa() {
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(true);
  return (
    <fieldset>
      <h3>清除effect</h3>
      <p>effect可以返回一个函数，在组件卸载前，或在下一次effect前执行。</p>
      <p>可以用于实现诸如取消订阅、取消定时器功能。</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        addCount:{count}
      </button>
      <fieldset>
        <div>
          <input
            type="checkbox"
            checked={isShow}
            onChange={(event) => setIsShow(event.target.checked)}
          ></input>
          显示
        </div>
        {isShow && <CaaChild></CaaChild>}
      </fieldset>
    </fieldset>
  );
}

function CaaChild() {
  useEffect(() => {
    console.log("caa effect");
    return () => {
      console.log("caa clear");
    };
  });
  return <fieldset>this is caa child</fieldset>;
}

function Daa() {
  return (
    <fieldset>
      <h3>effect的执行时机</h3>
      <p>
        effect
        是在浏览器布局与绘制之后延迟调用。因此不能在函数中执行阻塞浏览器更新屏幕的操作。
      </p>
      <p>
        如果不想延迟执行，而是需要同步执行，需要使用useLayoutEffect。例如需要立即修改用户可见的dom。
      </p>
    </fieldset>
  );
}

function Eaa() {
  const [eaaTwoIsShow, setEaaTwoIsShow] = useState(true);
  return (
    <fieldset>
      <h3>effect 的条件执行</h3>
      <EaaOne></EaaOne>
      <fieldset>
        <label>
          <input
            type="checkbox"
            checked={eaaTwoIsShow}
            onChange={(event) => {
              setEaaTwoIsShow(event.target.checked);
            }}
          ></input>
          显示
        </label>
        {eaaTwoIsShow && <EaaTwo></EaaTwo>}
      </fieldset>
    </fieldset>
  );
}

function EaaOne() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  useEffect(() => {
    console.log("eaa one effect");
  }, [countTwo]);
  return (
    <fieldset>
      <div>例子：仅在countTwo变化时执行effect</div>
      <button onClick={() => setCountOne((prev) => prev + 1)}>
        addCountOne:{countOne}
      </button>
      <button onClick={() => setCountTwo((prev) => prev + 1)}>
        addCountTwo:{countTwo}
      </button>
    </fieldset>
  );
}

function EaaTwo() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("eaa two effect");
    return () => {
      console.log("eaa two effect clear");
    };
  }, []);
  return (
    <fieldset>
      <div>例子：仅在组件初次渲染时执行effect，仅在组件卸载时清除effect。</div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        addCount:{count}
      </button>
    </fieldset>
  );
}
