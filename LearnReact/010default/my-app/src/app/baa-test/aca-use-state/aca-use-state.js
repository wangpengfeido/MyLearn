import React, { Component, useState } from 'react';

export class AcaUseState extends Component {
  constructor() {
    super();
    this.state = { n: 0 };
  }
  handleClick = () => {
    this.setState(prevState => ({ n: prevState.n + 1 }));
  };
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}>add{this.state.n}</button>
        <One n={this.state.n} />
      </div>
    );
  }
}

function One(props) {
  const [isOdd, setIsOdd] = useState(false);
  // 不可在渲染过程中改变state，它会导致渲染死循环
  // setIsOdd(props.n % 2 === 1);
  console.log('===============', isOdd);
  return (
    <div>
      <div>{props.n}</div>
      <div>{String(isOdd)}</div>
    </div>
  );
}
