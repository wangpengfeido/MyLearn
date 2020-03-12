import {combineReducers} from 'redux';

import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from "../aaa-action/actions";

const {SHOW_ALL} = VisibilityFilters;

// 首先要设计state结构。
// 尽可能把state范式化。

// reducer就是一个处理action的函数，返回新的state    (previousState, action) => newState

// 应该保持reducer的纯净，所以不要在reducer中：
// 1.修改传入参数(state)；
// 2.执行有副作用的操作，如请求api和路由跳转；
// 3.调用非纯函数，如Data.now(),Math.random().

// note:1、不要修改state；在default时返回原来的state.

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      // 创建新的state而不是修改state(避免突变)
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          // 创建新的state而不是修改state
          return Object.assign({}, todo, {completed: !todo.completed});
        }
        return todo;
      });
    default:
      // 返回原来的state
      return state;
  }
}

// 组合拆分的reducer
// 这就是reducer合成。注意每部分reducer只接收action更新一部分state。

const todoApp = combineReducers({
  visibilityFilter,
  todos,
});
// 它等价于
// const todoApp = function (state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }

export default todoApp;




