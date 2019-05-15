import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {AbaAsyncActions} from "./aba-async-actions/aba-async-actions";

export class AbaAdvancedTourial extends Component {
  render() {
    return (
      <div>
        <Route path='/aba-advanced-tourial/aba-async-actions' component={AbaAsyncActions}></Route>
      </div>
    );
  }
}

