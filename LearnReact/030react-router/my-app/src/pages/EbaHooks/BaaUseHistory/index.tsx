import React from "react";
import { useHistory } from "react-router-dom";

export const BaaUseHistory = function () {
  const history = useHistory();

  return (
    <div>
      <div>useHistory 可以拿到 histroy 对象</div>
      <div>
        <button onClick={() => console.log(history)}>打印</button>
      </div>
    </div>
  );
};
