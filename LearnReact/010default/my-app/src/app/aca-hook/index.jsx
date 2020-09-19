import React, { Component } from "react";
import { Route } from "react-router-dom";

import { AaaIntroducing } from "./aaa-introducing/index.jsx";
import { AbaGlance } from "./aba-glance/index.jsx";
import { AgaApi } from "./aga-api/index.jsx";

export class AcaHook extends Component {
  render() {
    return (
      <div>
        <Route
          path="/aca-hook/aaa-introducing"
          component={AaaIntroducing}
        ></Route>
        <Route path="/aca-hook/aba-glance" component={AbaGlance}></Route>
        <Route path="/aca-hook/aga-api" component={AgaApi}></Route>
      </div>
    );
  }
}
