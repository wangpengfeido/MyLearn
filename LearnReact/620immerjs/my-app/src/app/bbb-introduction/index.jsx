import React, { Component } from "react";
import { produce } from "immer";

import { Bbb } from "./bbb.jsx";

export class BbbIntroduction extends Component {
  constructor() {
    super();
    this.state = {
      dataImmutable: { a: 1 },
      dataMutable: { a: 1 },
    };
  }

  addDataImmutable = () => {
    this.setState((prevState) => {
      let newData = produce(prevState.dataImmutable, (draftState) => {
        draftState.a++;
      });
      // 原始数据并没有被变更
      console.log(newData, prevState.dataImmutable);
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
          addDataImmutable:{this.state.dataImmutable.a}
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

// export function Start() {
//   const [dataImmutable, updateDataImmutable] = useState(Map({ a: 1 }));

//   function addDataImmutable() {
//     let newData = dataImmutable.set("a", dataImmutable.get("a") + 1);
//     updateDataImmutable(newData);
//   }

//   const [dataMutable, updateDataMutable] = useState({ a: 2 });

//   function addDataMutable() {
//     dataMutable.a = dataMutable.a + 1;
//     updateDataMutable(dataMutable);
//   }

//   return (
//     <div>
//       <button onClick={addDataImmutable}>
//         addDataImmutable:{dataImmutable.get("a")}
//       </button>
//       <button onClick={addDataMutable}>addDataMutable:{dataMutable.a}</button>
//       <Bbb dataImmutable={dataImmutable}></Bbb>
//     </div>
//   );
// }
