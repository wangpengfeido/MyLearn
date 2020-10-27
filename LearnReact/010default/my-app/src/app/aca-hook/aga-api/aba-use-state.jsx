import React, { useState, useEffect } from "react";

export function AbaUseState() {
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
  const [count, setCount] = useState(0);
  return (
    <fieldset>
      <p>useState 返回一个state，和一个更新state的函数</p>
      <p>useState 返回的setState函数是稳定的，不会再重新渲染时发生变化。</p>
      <p>
        <strong>useState使用的是不可变数据。它不会自动更新合并对象。</strong>
      </p>
      <button onClick={() => setCount(count + 1)}>addCount:{count}</button>
    </fieldset>
  );
}

function Caa() {
  const initialCount = 0;
  const [count, setCount] = useState(0);
  return (
    <fieldset>
      <h3>函数式更新</h3>
      <p>
        如果新的state需要通过先前的state计算得出，可以给setState传递一个函数。这个函数接收先前的state，返回更新后的值。
      </p>
      <div>count:{count}</div>
      <div>
        <button onClick={() => setCount(initialCount)}>init</button>
        <button onClick={() => setCount((prevState) => prevState + 1)}>
          +
        </button>
        <button onClick={() => setCount((prevState) => prevState - 1)}>
          -
        </button>
      </div>
    </fieldset>
  );
}

function Daa() {
  const [count, setCount] = useState(() => {
    return Math.pow(3, 3);
  });
  return (
    <fieldset>
      <h3>惰性初始 state</h3>
      <p>
        如果初始state需要通过复杂计算获得，可以传入一个函数，返回初始state。
      </p>
      <p>这个函数只在初始渲染时被调用。</p>
      <button onClick={() => setCount((prev) => prev + 1)}>add:{count}</button>
    </fieldset>
  );
}

function Eaa() {
  console.log("eaa rendered");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("this is eaa effect");
  });
  return (
    <fieldset>
      <h3>跳过state更新</h3>
      <p>在更新函数中传入当前state时，会跳过子组件的渲染以及effect的执行。</p>
      <p>注意：react 仍然可能会进行当前组件的渲染。</p>
      <button onClick={() => setCount((prev) => prev + 1)}>add:{count}</button>
      <button onClick={() => setCount(0)}>set 0</button>
      <Example name={"eaa child"} data={count}></Example>
    </fieldset>
  );
}

function Example(props) {
  console.log(`${props.name} rendered.`);
  useEffect(() => {
    console.log(`this is ${props.name} effect`);
  });
  return (
    <div style={{ border: "1px solid red" }}>
      <div>这是组件：{props.name}</div>
      <div>data:{props.data}</div>
    </div>
  );
}
