import React, { Component, PureComponent } from "react";

export class CaaCca extends Component {
  render() {
    return (
      <fieldset>
        <div>
          可以使用 React.PureComponent ，它会自动浅比较 props 和 state ，
          如果没有变化则不进行组件更新。
        </div>
        <Parent></Parent>
      </fieldset>
    );
  }
}

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      parentN: 1,
      childN: 1,
    };
  }

  addParent = () => {
    this.setState((prevState) => {
      return {
        parentN: prevState.parentN + 1,
      };
    });
  };

  addChild = () => {
    this.setState((prevState) => {
      return {
        childN: prevState.childN + 1,
      };
    });
  };

  render() {
    return (
      <div style={{ backgroundColor: "green" }}>
        <div>
          <div>this is parent</div>
          <button onClick={this.addParent}>
            add num of parent: {this.state.parentN}
          </button>
          <button onClick={this.addChild}>add num of child</button>
        </div>
        <Child n={this.state.childN}></Child>
      </div>
    );
  }
}

// 使用了 PureComponent ，自动进行数据浅比较决定是否更新数据
class Child extends PureComponent {
  render() {
    console.log("child rendered");
    return (
      <div style={{ backgroundColor: "yellow" }}>
        <div>this is child</div>
        <div>num:{this.props.n}</div>
      </div>
    );
  }
}
