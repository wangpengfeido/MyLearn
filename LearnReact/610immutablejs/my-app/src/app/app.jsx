import React from "react";
import { Link, Route } from "react-router-dom";

import "./app.css";

import { BbbStart } from "./bbb-start/index.jsx";

export function App() {
  return (
    <div className="app">
      <div className="nav">
        <ul>
          <li>
            <Link to="/start">start</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <Route path="/start" component={BbbStart}></Route>
      </div>
    </div>
  );
}
