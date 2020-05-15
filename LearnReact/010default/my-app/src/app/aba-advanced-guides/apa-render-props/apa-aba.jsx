import React from 'react';

import { Cat } from './Cat.jsx';
import { Mouse } from './Mouse.jsx';

// 使用 render prop 实现高阶组件
function withMouse(Component) {
  return class extends React.Component {
    render() {
      return <Mouse render={(mouse) => <Component {...this.props} mouse={mouse}></Component>}></Mouse>;
    }
  };
}

export class ApaAba extends React.Component {
  render() {
    const CatWithMouse = withMouse(Cat);
    return (
      <fieldset>
        <p>你可以使用带有 render prop 的常规组件来实现大多数高阶组件 (HOC)</p>
        <CatWithMouse></CatWithMouse>
      </fieldset>
    );
  }
}
