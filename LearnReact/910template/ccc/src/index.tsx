import React, { ComponentType } from "react";
import ReactDOM from "react-dom";

import "./style/index.scss";
import App from "./App";

const render = (App: ComponentType) => {
  ReactDOM.render(
    <React.StrictMode>
      <App></App>
    </React.StrictMode>,
    document.querySelector("#root")
  );
};

render(App);

if (module.hot) {
  console.log("1111111111111111");
  module.hot.accept("./App.tsx", () => {
    console.log("222222222222222222222222");
    render(require("./App").default);
  });
}
