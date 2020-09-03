import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {selectSubreddit, fetchPostsIfNeeded} from "./actions";
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  // 使用中间件
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ),
);

export function test() {
  store.dispatch(selectSubreddit('test-reactjs'));
  store
    .dispatch(fetchPostsIfNeeded('test-reactjs'))
    .then(() => console.log(store.getState()));
}


