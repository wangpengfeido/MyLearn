import React, { Component, createRef } from "react";
import { connect, Provider } from "react-redux";

import store from "./store.js";
import { addTodo, loadTodoList } from "./actions.js";

class IndexShow extends Component {
  constructor() {
    super();
    this.inputDom = createRef();
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.props.onReload()}>重新加载</button>
        </div>
        <div>
          <input type="text" ref={this.inputDom}></input>
          <button onClick={() => this.props.onAdd(this.inputDom.current.value)}>
            添加
          </button>
        </div>
        <div>
          <ul>
            {this.props.todoList
              ? this.props.todoList.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))
              : []}
          </ul>
        </div>
      </div>
    );
  }
}

const Index = connect(
  function (todos) {
    return {
      todoList: todos.todos,
    };
  },
  function (dispatch) {
    return {
      onReload() {
        dispatch(loadTodoList());
      },
      onAdd(name) {
        if (!name) {
          return;
        }
        dispatch(addTodo(name));
      },
    };
  }
)(IndexShow);

export class BbbStart extends Component {
  render() {
    return (
      <Provider store={store}>
        <Index></Index>
      </Provider>
    );
  }
}
