import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {AaaAction} from "./aaa-action/aaa-action";
import {AbaReducer} from "./aba-reducer/aba-reducer";
import {AcaStore} from "./aca-store/aca-store";
import {AdaDataFlow} from "./ada-data-flow/ada-data-flow";
import {AeaWithReact} from "./aea-with-react/aea-with-react";

export class AaqBase extends Component {
  render() {
    return (
      <div>
        <Route path='/aaq-base/aaa-action' component={AaaAction}></Route>
        <Route path='/aaq-base/aba-reducer' component={AbaReducer}></Route>
        <Route path='/aaq-base/aca-store' component={AcaStore}></Route>
        <Route path='/aaq-base/ada-data-flow' component={AdaDataFlow}></Route>
        <Route path='/aaq-base/aea-with-react' component={AeaWithReact}></Route>
      </div>
    );
  }
}

