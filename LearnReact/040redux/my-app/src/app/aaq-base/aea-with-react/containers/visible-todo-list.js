import { connect } from "react-redux";

import { toggleTodo } from "../../aaa-action/actions";
import TodoList from "../components/todo-list";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter((t) => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter((t) => !t.completed);
    default:
      return "";
  }
};

// 定义store state到props的映射
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};

// 定义事件，在其中进行action分发
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      // 分发action
      dispatch(toggleTodo(id));
    },
  };
};

// connect方法能连接redux store与组件，产生新的组件
const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
