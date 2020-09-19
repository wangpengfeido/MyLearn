import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import "./common/common.css";
import { App } from "./app/app.jsx";

ReactDOM.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
