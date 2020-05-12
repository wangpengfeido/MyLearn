import React from 'react';

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
