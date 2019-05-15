import {Component} from "react";
import {Route} from "react-router-dom";
import React from "react";
import {AaaHelloWorld} from "../aaa-fast-start/aaa-hello-world/aaa-hello-world";
import {AaaRefChildren} from "./aaa-ref-children/aaa-ref-children";

export class BaaTest extends Component {
  render() {
    return (
      <div>
        <Route path='/baa-test/aaa-ref-children' component={AaaRefChildren}></Route>
      </div>
    );
  }
}