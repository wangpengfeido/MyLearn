import React, { Component } from "react";

export class CaaCba extends Component {
  render() {
    return (
      <fieldset>
        <div>
          解决：在shouldComponentUpdate中对比数据，判断是否进行组件更新，从而在适合的情况下阻止协调过程。
        </div>
        <div>在这个例子中看到，父组件的更新不会再导致子组件更新了</div>
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
  // 在 shouldComponentUpdate 中，数据没有变化时阻止组件更新
  shouldComponentUpdate(nextProps) {
    if (this.props.n !== nextProps.n) {
      return true;
    } else {
      return false;
    }
  }

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
