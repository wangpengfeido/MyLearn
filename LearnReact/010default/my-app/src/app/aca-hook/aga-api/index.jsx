import React from "react";
import { Link, Route } from "react-router-dom";

import { AbaUseState } from "./aba-use-state.jsx";
import { AcaUseEffect } from "./aca-use-effect.jsx";
import { AdaUseContext } from "./ada-use-context.jsx";
import { BcaUseCallback } from "./bca-use-callback.jsx";
import { BdaUseMemo } from "./bda-use-memo.jsx";

export function AgaApi() {
  const routes = [
    {
      path: "/aca-hook/aga-api/aba-use-state",
      name: "useState",
      component: AbaUseState,
    },
    {
      path: "/aca-hook/aga-api/aca-use-effect",
      name: "useEffect",
      component: AcaUseEffect,
    },
    {
      path: "/aca-hook/aga-api/ada-use-context",
      name: "useContext",
      component: AdaUseContext,
    },
    {
      path: "/aca-hook/aga-api/bca-use-callback",
      name: "useCallback",
      component: BcaUseCallback,
    },
    {
      path: "/aca-hook/aga-api/bda-use-memo",
      name: "BdaUseMemo",
      component: BdaUseMemo,
    },
  ];

  return (
    <div>
      <div style={{ borderBottom: "1px solid" }}>
        {routes.map((route, index) => (
          <Link key={index} style={{ marginRight: "10px" }} to={route.path}>
            {route.name}
          </Link>
        ))}
      </div>
      <div style={{}}>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            component={route.component}
          ></Route>
        ))}
      </div>
    </div>
  );
}
