import React, { Component } from 'react';

import { Cat } from './Cat.jsx';
import { Mouse } from './Mouse.jsx';

export class ApaAaa extends Component {
  render() {
    return (
      <fieldset>
        <Mouse
          render={(mouse) => {
            return <Cat mouse={mouse}></Cat>;
          }}
        ></Mouse>
      </fieldset>
    );
  }
}
