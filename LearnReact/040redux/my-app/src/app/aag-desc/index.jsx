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
    store.subscribe(() => {
      this.setState
    });
  }
  handleAdd = () => {
    store.dispatch('INCREMENT');
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
