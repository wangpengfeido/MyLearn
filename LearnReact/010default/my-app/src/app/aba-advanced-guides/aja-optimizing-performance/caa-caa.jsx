import React, { Component } from "react";

export class CaaCaa extends Component {
  render() {
    return (
      <fieldset>
        <div>问题：当父组件数据数据改变时，子组件也会被重新渲染</div>
        <div>
          可以看到此例，当父组件数据变化时，即使子组件没有任何变化，也会重新渲染。而触发子组件的协调过程。
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

class Child extends Component {
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
