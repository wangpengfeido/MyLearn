// store把action、reducer、state联系到一起，它有以下作用：
// 维持应用的 state；
// 提供 getState() 方法获取 state；
// 提供 dispatch(action) 方法更新 state；
// 通过 subscribe(listener) 注册监听器;
// 通过 subscribe(listener) 返回的函数注销监听器。

// note：redux应用只有一个单一的store

import { createStore } from "redux";
import todoApp from "../aba-reducer/reducers";

// 使用createStore传入reducers来创建store
// 第二个可选参数可以设置state初始状态。开发服务端客户端同构应用时，客户端可以接受服务端state直接用于本地初始化
export const store = createStore(todoApp);
