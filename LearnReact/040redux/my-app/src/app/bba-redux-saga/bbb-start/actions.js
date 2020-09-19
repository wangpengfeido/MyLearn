export const LOAD_TODO_LIST = "LOAD_TODO_LIST";
export const UPDATE_TODO_LIST = "UPDATE_TODO_LIS";
export const ADD_TODO = "ADD_TODO";
export const CHANGE_SHOWING_ITEM = "CHANGE_SHOWING_ITEM";

// 异步加载
export function loadTodoList() {
  return {
    type: LOAD_TODO_LIST,
  };
}

export function updateTodoList(list) {
  return {
    type: UPDATE_TODO_LIST,
    list,
  };
}

export function addTodo(name) {
  return {
    type: ADD_TODO,
    name,
  };
}

export function changeShowingItem(name) {
  return {
    type: CHANGE_SHOWING_ITEM,
    name,
  };
}
