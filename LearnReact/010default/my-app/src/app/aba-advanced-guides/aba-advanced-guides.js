import React, { Component } from "react";
import { Route } from "react-router-dom";

import { AaaAccessibility } from "./aaa-accessibility/aaa-accessibility";
import { AbaCodeSplitting } from "./aba-code-splitting/aba-code-splitting";
import { AiaJsxInDepth } from "./aia-jsx-in-depth/aia-jsx-in-depth";
import { AjaOptimizingPerformance } from "./aja-optimizing-performance/index.jsx";
import { AsaTypecheckingWithProptypes } from "./asa-typechecking-with-proptypes/asa-typechecking-with-proptypes";
import { AqaStaticTypeChecking } from "./aqa-static-type-checking/aqa-static-type-checking";
import { AoaRefsAndTheDom } from "./aoa-refs-and-the-dom/aoa-refs-and-the-dom";
import { AtaUnControlledComponent } from "./ata-uncontrolled-component/ata-uncontrolled-component";
import { AnaReconciliation } from "./ana-reconciliation/ana-reconciliation";
import { AcaContext } from "./aca-context/aca-context";
import { AcfContextHook } from "./acf-context-hook";
import { AgaHigherOrderComponents } from "./aga-higher-order-components/aga-higher-order-components";
import { AeaForwardingRefs } from "./aea-forwarding-refs/aea-forwarding-refs";
import { AfaFragments } from "./afa-fragments/afa-fragments";
import { AkaProtals } from "./aka-portals/aka-portals";
import { ApaRenderProps } from "./apa-render-props/apa-render-props";

export class AbaAdvancedGuides extends Component {
  render() {
    return (
      <div>
        <Route
          path="/aba-advanced-guides/aaa-accessibility"
          component={AaaAccessibility}
        />
        <Route
          path="/aba-advanced-guides/aba-code-splitting"
          component={AbaCodeSplitting}
        />
        <Route path="/aba-advanced-guides/aca-context" component={AcaContext} />
        <Route
          path="/aba-advanced-guides/aca-context-hook"
          component={AcfContextHook}
        />
        <Route
          path="/aba-advanced-guides/aea-forwarding-refs"
          component={AeaForwardingRefs}
        />
        <Route
          path="/aba-advanced-guides/afa-fragments"
          component={AfaFragments}
        />
        <Route
          path="/aba-advanced-guides/aga-higher-order-components"
          component={AgaHigherOrderComponents}
        />
        <Route
          path="/aba-advanced-guides/aia-jsx-in-depth"
          component={AiaJsxInDepth}
        />
        <Route
          path="/aba-advanced-guides/aja-optimizing-performance"
          component={AjaOptimizingPerformance}
        />
        <Route path="/aba-advanced-guides/aka-protals" component={AkaProtals} />
        <Route
          path="/aba-advanced-guides/ana-reconciliation"
          component={AnaReconciliation}
        />
        <Route
          path="/aba-advanced-guides/aoa-refs-and-the-dom"
          component={AoaRefsAndTheDom}
        />
        <Route
          path="/aba-advanced-guides/apa-render-props"
          component={ApaRenderProps}
        />
        <Route
          path="/aba-advanced-guides/aqa-static-type-checking"
          component={AqaStaticTypeChecking}
        />
        <Route
          path="/aba-advanced-guides/asa-typechecking-with-proptypes"
          component={AsaTypecheckingWithProptypes}
        />
        <Route
          path="/aba-advanced-guides/ata-uncontrolled-component"
          component={AtaUnControlledComponent}
        />
      </div>
    );
  }
}
