import React, { Component } from "react";
import { Provider } from "react-redux";

import AddTodo from "./other/add-todo";
import VisibleTodoList from "./containers/visible-todo-list";
import Footer from "./components/footer";

import { store } from "../aca-store/store";

// Redux 的 React 绑定库是基于 容器组件和展示组件相分离 的开发思想。
// 展示组件：描述如何展现（骨架、样式）
// 容器组件：猫叔如何运行（数据获取、状态更新）
// 其他组件：展示组件和容器组件的混合型组件

export class AeaWithReact extends Component {
  render() {
    return (
      // 使用provider注入store
      <Provider store={store}>
        <div>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </Provider>
    );
  }
}
