import React, {Component} from 'react';

import {test} from "./store";

export class AbaAsyncActions extends Component {
  componentDidMount() {
    test();
  }

  render() {
    return (
      <div>
        async actions
      </div>
    );
  }
}

