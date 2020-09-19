import { all, takeEvery, put, putResolve } from "redux-saga/effects";

import { LOAD_TODO_LIST, updateTodoList } from "./actions";

export function* watchLoadTodoList() {
  yield takeEvery(LOAD_TODO_LIST, function* () {
    const data = yield mockListData();
    yield put(updateTodoList(data));
  });
}

export function* rootSaga() {
  yield all([watchLoadTodoList()]);
}

function mockListData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ name: "a" }, { name: "b" }]);
    }, 2000);
  });
}
