import React from "react";
import ReactDOM from "react-dom";

import "./style/index.scss";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.querySelector("#root")
);
