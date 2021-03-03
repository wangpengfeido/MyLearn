import React from "react";
import ReactDOM from "react-dom";
import { sum } from "lodash";

ReactDOM.render(
  <div>
    <div>HELLO REACT</div>
    <div>1+1={sum([1, 1])}</div>
  </div>,
  document.getElementById("use-react")
);
