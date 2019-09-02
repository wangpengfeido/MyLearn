import React, {Component} from 'react';
import {AaaAba} from "./aaa-aba";
import {AaaAca} from "./aaa-aca";
import {AaaAda} from "./aaa-ada";

// 在前面，我们使用ReactDom.render()来改变渲染输出

export class AeaStateAndLifecycle extends Component {
  render() {
    return (
      <div>
        <AaaAba/>
        <br/><br/><br/>
        <AaaAca/>
        <br/><br/><br/>
        <AaaAda/>
      </div>
    );
  }
}

