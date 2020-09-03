import React, { Component } from 'react';
import { store } from './index.js';

export class AagDesc extends Component {
  constructor() {
    super();
    this.state = {
      num: store.getState(),
    };
  }
  componentDidMount() {
    // 订阅更新
    store.subscribe(() => {
      this.setState({
        num:store.getState()
      })
    });
  }
  handleAdd = () => {
    // dispatch action
    store.dispatch({type:'INCREMENT'});
  };
  render() {
    return (
      <div>
        <h2>简介</h2>
        <div>{this.state.num}</div>
        <div>
          <button
            onClick={() => {
              this.handleAdd();
            }}
          >
            add
          </button>
        </div>
      </div>
    );
  }
}
