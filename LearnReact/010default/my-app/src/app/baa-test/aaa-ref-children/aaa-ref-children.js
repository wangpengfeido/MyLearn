import React, {Component} from "react";

// 经试验，react可以直接使用setState设置子组件的state

export class AaaRefChildren extends Component {
  constructor() {
    super();
    this.ref_one = React.createRef();
  }

  handleChick = () => {
    this.ref_one.current.setState((prevState) => ({
      name: 'sam',
    }));
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleChick}>改变name</button>
        </div>
        <One ref={this.ref_one}></One>
      </div>
    );
  }
}

class One extends Component {
  constructor() {
    super();
    this.state = {
      name: 'tom',
    };
  }

  render() {
    return <div>{this.state.name}</div>
  }
}









