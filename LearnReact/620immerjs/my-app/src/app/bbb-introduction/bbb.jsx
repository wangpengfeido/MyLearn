import React, { PureComponent } from "react";

export class Bbb extends PureComponent {
  render() {
    console.log(`rendered`, this.props.dataImmutable);
    return (
      <div>
        <div>immutable, a:{this.props.dataImmutable.a}</div>
        <div>mutable, a:{this.props.dataMutable.a}</div>
      </div>
    );
  }
}
