import React from "react";
import { useRouteMatch } from "react-router-dom";

export const BdaUseRouteMatch = () => {
  const match = useRouteMatch();

  return (
    <div>
      <div>
        <button onClick={() => console.log(match)}>打印</button>
      </div>
    </div>
  );
};
