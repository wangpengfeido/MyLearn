import React from "react";
import { Route } from "react-router-dom";

import { BbbStart } from "./bbb-start/index.jsx";



export function BbaReduxSaga() {
  return (
    <div>
      <Route path="/bba-redux-saga/bbb-start" component={BbbStart}></Route>
    </div>
  );
}
