import { createStore } from 'redux';

// reducer，描述了action如何把state转换为下一个state
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// 存放状态的store
// API:{ subscribe, dispatch, getState }。
export const store = createStore(counter);
