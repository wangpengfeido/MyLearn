import React from "react";
import { Link, Route } from "react-router-dom";

import "./app.css";

import { BbbIntroduction } from "./bbb-introduction/index.jsx";
import { BcaCurriedProducers } from "./bca-curried-producers/index.jsx";

export function App() {
  return (
    <div className="app">
      <div className="nav">
        <ul>
          <li>
            <Link to="/bbb-introduction">介绍</Link>
          </li>
          <li>
            <Link to="/bca-curried-producer">柯里化的producer函数</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <Route path="/bbb-introduction" component={BbbIntroduction}></Route>
        <Route
          path="/bca-curried-producer"
          component={BcaCurriedProducers}
        ></Route>
      </div>
    </div>
  );
}
