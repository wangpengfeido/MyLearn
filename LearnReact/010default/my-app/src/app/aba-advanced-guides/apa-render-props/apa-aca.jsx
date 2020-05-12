import React from 'react';

import { Cat } from './Cat.jsx';

export class Mouse extends React.Component {
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
    console.log('11111111111', this.props.children);
    return (
      <div
        onMouseMove={(event) => {
          this.handleMouseMove(event);
        }}
      >
        {this.props.children(this.state)}
      </div>
    );
  }
}

export class ApaAca extends React.Component {
  render() {
    return (
      <fieldset>
        <p>使用的prop名是不限制的。 任何被用于告知组件需要渲染什么内容的函数 prop 在技术上都可以被称为 “render prop”</p>
        <p>如果使用 children 为render prop名，可以将其直接放置到元素内部</p>
        <Mouse>
          {(mouse) => {
            return <Cat mouse={mouse}></Cat>;
          }}
        </Mouse>
      </fieldset>
    );
  }
}
