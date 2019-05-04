import React, {Component} from 'react';
import {Route} from "react-router";
import {AyaSelect} from "./aya-select/aya-select";

export class Components extends Component {
  render() {
    return (
      <div>
        <Route path='/components/aya-select' component={AyaSelect}></Route>
      </div>
    );
  }
}