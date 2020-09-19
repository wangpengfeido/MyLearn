import { combineReducers } from "redux";

import { UPDATE_TODO_LIST, ADD_TODO, CHANGE_SHOWING_ITEM } from "./actions.js";

function todos(state = [], action) {
  switch (action.type) {
    case UPDATE_TODO_LIST:
      return action.list;
    case ADD_TODO:
      return [...state, { name: action.name }];
    default:
      return state;
  }
}

function showingItem(state = null, action) {
  switch (action.type) {
    case CHANGE_SHOWING_ITEM:
      return action.name;
    default:
      return state;
  }
}

export default combineReducers({
  todos,
  showingItem,
});
