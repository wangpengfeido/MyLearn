import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import "./App.css";

import { BaaUseHistory } from "./pages/EbaHooks/BaaUseHistory";
import { BbaUseLocation } from "./pages/EbaHooks/BbaUseLocation";
import { BcaUseParams } from "./pages/EbaHooks/BcaUseParams";
import { BdaUseRouteMatch } from "./pages/EbaHooks/BdaUseRouteMatch";

function App() {
  return (
    <div className="app">
      <div className="menu">
        <ul>
          <li>
            <div>API</div>
            <ul>
              <li>
                <div>Hooks</div>
                <ul>
                  <li>
                    <Link to="/baa-use-history">useHistory</Link>
                  </li>
                  <li>
                    <Link to="/bca-use-params">useParams</Link>
                  </li>
                  <li>
                    <Link to="/bda-use-route-match">useRouteMatch</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="content">
        <Switch>
          <Route path="/baa-use-history" component={BaaUseHistory}></Route>
          <Route path="/baa-use-location" component={BbaUseLocation}></Route>
          <Route path="/bca-use-params" component={BcaUseParams}></Route>
          <Route path="/bda-use-route-match" component={BdaUseRouteMatch}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
