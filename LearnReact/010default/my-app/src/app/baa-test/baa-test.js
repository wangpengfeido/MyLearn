import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { AaaHelloWorld } from '../aaa-fast-start/aaa-hello-world/aaa-hello-world';
import { AaaRefChildren } from './aaa-ref-children/aaa-ref-children';
import { AbaShouldComponentUpdate } from './aba-should-component-update/aba-should-component-update';
import { AcaUseState } from './aca-use-state/aca-use-state';

export class BaaTest extends Component {
  render() {
    return (
      <div>
        <Route path="/baa-test/aaa-ref-children" component={AaaRefChildren} />
        <Route path="/baa-test/aba-should-component-update" component={AbaShouldComponentUpdate} />
        <Route path="/baa-test/aba-should-component-update" component={AbaShouldComponentUpdate} />
        <Route path="/baa-test/aca-use-state" component={AcaUseState} />
      </div>
    );
  }
}
