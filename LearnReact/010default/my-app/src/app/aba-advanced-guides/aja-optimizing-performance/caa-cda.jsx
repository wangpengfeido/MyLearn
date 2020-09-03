import React, { Component, PureComponent } from "react";

export class CaaCda extends Component {
  render() {
    return (
      <fieldset>
        <div>问题：因为 PureComponent 执行的是浅比较，所以当数据为可变数据时，它不能被检测到。例如数组或对象的某些修改</div>
        <div>解决：使用不可变数据。即修改数据时不是在原数据上修改，而是创建新的数据</div>
        <Parent></Parent>
      </fieldset>
    );
  }
}

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  mutableAdd = () => {
    this.setState((prevState) => {
      prevState.list.push(Math.random());
      return {
        list: prevState.list,
      };
    });
  };

  immutableAdd = () => {
    this.setState((prevState) => {
      const newList = prevState.list.concat([Math.random()]);
      return {
        list: newList,
      };
    });
  };

  render() {
    return (
      <div style={{ backgroundColor: "green" }}>
        <div>
          <div>this is parent</div>
          <button onClick={this.mutableAdd}>可变修改：变化不会被PureComponent检测到</button>
          <button onClick={this.immutableAdd}>不可变修改</button>
        </div>
        <Child list={this.state.list}></Child>
      </div>
    );
  }
}

class Child extends PureComponent {
  render() {
    return (
      <div style={{ backgroundColor: "yellow" }}>
        <div>this is child</div>
        {this.props.list.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    );
  }
}
