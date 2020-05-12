import React from 'react';

export class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <div style={{ width: 100, height: 100, position: 'relative', border: '1px solid black' }}>
        <div style={{ width: 10, height: 10, backgroundColor: 'red', position: 'absolute', left: mouse.x, top: mouse.y }}></div>
      </div>
    );
  }
}
