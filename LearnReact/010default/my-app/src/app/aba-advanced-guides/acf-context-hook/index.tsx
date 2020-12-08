import React from "react";
import { Link, Route } from "react-router-dom";

import { BaaDinamicContext } from "./baa-dinamic-context";

export const AcfContextHook = () => {
  return (
    <div className="vertical-box" style={{ height: "100vh" }}>
      <div className="vertical-box__header">
        <Link to="/aba-advanced-guides/aca-context-hook/baa-dinamic-context">
          baa-dinamic-context
        </Link>
      </div>
      <div className="vertical-box__content">
        <Route
          path="/aba-advanced-guides/aca-context-hook/baa-dinamic-context"
          component={BaaDinamicContext}
        ></Route>
      </div>
    </div>
  );
};
