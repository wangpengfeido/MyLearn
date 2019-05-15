import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {AaaAction} from "./aaa-action/aaa-action";
import {AbaReducer} from "./aba-reducer/aba-reducer";
import {AcaStore} from "./aca-store/aca-store";
import {AdaDataFlow} from "./ada-data-flow/ada-data-flow";
import {AeaWithReact} from "./aea-with-react/aea-with-react";

export class AaaBase extends Component {
  render() {
    return (
      <div>
        <Route path='/aaa-base/aaa-action' component={AaaAction}></Route>
        <Route path='/aaa-base/aba-reducer' component={AbaReducer}></Route>
        <Route path='/aaa-base/aca-store' component={AcaStore}></Route>
        <Route path='/aaa-base/ada-data-flow' component={AdaDataFlow}></Route>
        <Route path='/aaa-base/aea-with-react' component={AeaWithReact}></Route>
      </div>
    );
  }
}

