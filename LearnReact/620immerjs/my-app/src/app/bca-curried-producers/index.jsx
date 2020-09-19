import React, { useState } from "react";
import { produce } from "immer";

export function BcaCurriedProducers() {
  // produce 函数第一个参数可以接受一个draft处理函数
  // 返回另一个函数，接收被处理的数据（currentState）。
  const addA = produce(
    (draft) => {
      draft.a++;
    },
    // 接收另外一个参数，作为未传入currentState时的默认值
    { a: 1 }
  );

  const [dataOne, updateDataOne] = useState({ a: 1 });

  function handleAddDataOne() {
    updateDataOne(addA(dataOne));
  }

  const [dataTwo, updateDataTwo] = useState({ a: 100 });

  function dataTwoAddFromStart() {
    // 使用默认的currentState
    updateDataTwo(addA());
  }

  return (
    <div>
      <div>
        <button onClick={handleAddDataOne}>addDataOne:{dataOne.a}</button>
      </div>
      <div>
        <button onClick={dataTwoAddFromStart}>dataTwoAddFromStart:{dataTwo.a}</button>
      </div>
    </div>
  );
}
