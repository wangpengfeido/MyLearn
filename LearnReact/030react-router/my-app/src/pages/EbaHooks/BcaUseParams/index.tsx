import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import { Aaa } from "./Aaa";

export const BcaUseParams = function () {
  return (
    <div>
      <div>useParams 能拿到url中参数的 key/value 对对象</div>
      <fieldset>
        <div>
          <div>
            <Link to="/bca-use-params/aaa">aaa</Link>
          </div>
          <div>
            <Link to="/bca-use-params/aaa/1">aaa-1</Link>
          </div>
          <div>
            <Link to="/bca-use-params/aaa/2">aaa-2</Link>
          </div>
        </div>
        <div>
          <Switch>
            <Route path="/bca-use-params/aaa/:id" component={Aaa}></Route>
            <Route path="/bca-use-params/aaa" component={Aaa}></Route>
          </Switch>
        </div>
      </fieldset>
    </div>
  );
};
