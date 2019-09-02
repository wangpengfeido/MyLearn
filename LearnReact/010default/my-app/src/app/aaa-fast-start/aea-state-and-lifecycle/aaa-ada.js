import React, {Component} from 'react';

class Show extends Component {
  render() {
    console.log('component Show render',this.props.text);
    return (<div>{this.props.text}</div>);
  }
}

export class AaaAda extends Component {
  constructor() {
    super();
    this.state = {
      obj: {
        a: 'aaa',
      },
      arr: [1, 2, 3],
    };
  }

  changeObj = () => {
    this.setState((prevState) => {
      // 这样是可以的
      // 并且不管新的state有没有变化，Show组件都会重新调用render函数
      let obj = prevState.obj;
      obj.a = 'bbb';
      return {
        obj: obj,
      };
    });
  };
  changeArray = () => {
    this.setState((prevState) => {
      let arr = prevState.arr;
      arr.push(4);
      return {
        arr: arr,
      }
    });
  };

  render() {
    return (<div>
      <div>state.obj.a:<Show text={this.state.obj.a}/></div>
      <button onClick={this.changeObj}>changeObj</button>
      <div>state.arr:<Show text={this.state.arr.join(',')}/></div>
      <button onClick={this.changeArray}>changeArray</button>
    </div>);
  }
}

// 而且，可以看到，不论对arr还是obj执行setState，两个Show组件都会调用render。
// 这是因为更新的是其父组件（AaaAda）的state









