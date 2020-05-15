import React from 'react';

import { Cat } from './Cat.jsx';

export class Mouse extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY,
    });
  };

  render() {
    return (
      <div
        onMouseMove={(event) => {
          this.handleMouseMove(event);
        }}
      >
        {this.props.render(this.state)}
      </div>
    );
  }
}

export class ApaAda extends React.Component {
  renderTheCat(mouse) {
    return <Cat mouse={mouse}></Cat>;
  }

  render() {
    return (
      <fieldset>
        <p>render props 与 PureComponent 同时使用时需要小心，它可能抵消 PureComponent 的优势</p>
        <p>因为浅比较 props 的时候总会得到 false，并且在这种情况下每次渲染对于 render prop 将会生成一个新的值</p>
        <p>下面是一个反例。每次渲染都会生成一个新的函数作为prop，抵消了继承 PureComponent 的 Mouse 组件的效果 </p>
        <Mouse render={(mouse) => <Cat mouse={mouse}></Cat>}></Mouse>
        <p>为了绕过这个问题，可以定义一个实例方法</p>
        <Mouse render={this.renderTheCat}></Mouse>
      </fieldset>
    );
  }
}
