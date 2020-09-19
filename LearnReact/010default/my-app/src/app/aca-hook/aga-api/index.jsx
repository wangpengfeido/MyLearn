import React from "react";
import { Link, Route } from "react-router-dom";

import { BcaUseCallback } from "./bca-use-callback.jsx";

export function AgaApi() {
  return (
    <div>
      <div style={{ borderBottom: "1px solid" }}>
        <Link to="/aca-hook/aga-api">useCallback</Link>
      </div>
      <div style={{}}>
        <Route path="/aca-hook/aga-api" component={BcaUseCallback}></Route>
      </div>
    </div>
  );
}
