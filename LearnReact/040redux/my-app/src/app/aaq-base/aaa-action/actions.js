// Action 是把数据从应用传到 store 的有效载荷。它是 store 数据的唯一来源。

// 约定，action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作。可以是字符串或定义的常量
// action类型
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// note:我们应该尽量减少在 action 中传递的数据

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};


let nextTodoId = 0;

// 可以使用action创建函数
export function addTodo(text) {
  // action type
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export function toggleTodo(id) {
  return {type: TOGGLE_TODO, id}
}

export function setVisibilityFilter(filter) {
  return {type: SET_VISIBILITY_FILTER, filter}
}

// 有时可以创建一个自动dispatch的函数
// const boundAddTodo = text => store.dispatch(addTodo(text));






