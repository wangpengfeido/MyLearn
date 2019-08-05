import React, { Component } from 'react';

export class AbaShouldComponentUpdate extends Component {
  constructor() {
    super();
    this.state = { n: 1 };
  }

  handleClick = () => {
    this.setState(prevState => ({
      n: prevState.n + 1,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}>add{this.state.n}</button>
        <Child text={this.state.n} />
      </div>
    );
  }
}

class Child extends Component {
  constructor() {
    super();
    this.state = { n: 1 };
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('=========', this.props, nextProps);
    console.log('=========', this.state, nextState);
    return true;
  }
  handleClick = () => {
    this.setState(prevState => ({
      n: prevState.n + 1,
    }));
  };

  render() {
    return (
      <div>
        <div>{this.props.text}</div>
        <button onClick={() => this.handleClick()}>add{this.state.n}</button>
      </div>
    );
  }
}
