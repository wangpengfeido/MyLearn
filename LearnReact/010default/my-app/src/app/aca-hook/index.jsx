import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { AaaIntroducing } from './aaa-introducing/index.jsx';

export class AcaHook extends Component {
  render() {
    return (
      <div>
        <Route path="/aca-hook/aba-advanced-guides" component={AaaIntroducing}></Route>
      </div>
    );
  }
}
