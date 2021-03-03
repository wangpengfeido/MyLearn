import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <div>
    <div>HELLO REACT</div>
    <div>
      <App></App>
    </div>
  </div>,
  document.getElementById("root")
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
