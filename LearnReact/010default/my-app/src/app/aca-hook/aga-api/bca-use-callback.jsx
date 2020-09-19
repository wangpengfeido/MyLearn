import React from "react";
import { useState, useCallback } from "react";

export function BcaUseCallback() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const memoizedFn = useCallback(() => {
    console.log("fn is be called.", a);
    return a + 1;
  }, [a]);

  function addA() {
    setA(a + 1);
  }
  function addB() {
    setB(b + 1);
  }

  return (
    <div>
      <div>
        <p>返回一个 memoized 函数，这个函数返回值只有当依赖变化时才会更新</p>
        <p>经试验，虽然返回值不变，但函数仍然会被调用。原理待探究。</p>
      </div>
      <div>
        <button onClick={addA}>add a:{a}</button>
        <button onClick={addB}>add b:{b}</button>
      </div>
      <div>
        <div>{memoizedFn()}</div>
      </div>
    </div>
  );
}
