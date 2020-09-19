import React, { Component } from "react";
import { Map } from "immutable";

import { Bbb } from "./bbb.jsx";

export class BbbStart extends Component {
  constructor() {
    super();
    this.state = {
      dataImmutable: Map({ a: 1 }),
      dataMutable: { a: 1 },
    };
  }

  addDataImmutable = () => {
    this.setState((prevState) => {
      let newData = prevState.dataImmutable.set(
        "a",
        prevState.dataImmutable.get("a") + 1
      );
      // 注意：调用以后，并没有在 prevState.dataImmutable 上做变化，而是返回了一个新的值
      console.log(newData.get("a"), prevState.dataImmutable.get("a"));
      return {
        dataImmutable: newData,
      };
    });
  };

  addDataMutable = () => {
    this.setState((prevState) => {
      let newData = prevState.dataMutable;
      newData.a++;
      return {
        dataMutable: newData,
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addDataImmutable}>
          addDataImmutable:{this.state.dataImmutable.get("a")}
        </button>
        <button onClick={this.addDataMutable}>
          addDataMutable:{this.state.dataMutable.a}
        </button>
        <Bbb
          dataImmutable={this.state.dataImmutable}
          dataMutable={this.state.dataMutable}
        ></Bbb>
      </div>
    );
  }
}
