// 严格的单向数据流是 Redux 架构的设计核心。

// Redux 应用中数据的生命周期遵循下面 4 个步骤：
// 1.调用 store.dispatch(action)。
//     Action 就是一个描述“发生了什么”的普通对象。可以在任何地方调用 store.dispatch(action).
// 2.Redux store 调用传入的 reducer 函数。
//     Store 会把两个参数传入 reducer： 当前的 state 树和 action。注意 reducer 是纯函数。
// 3.根 reducer 应该把多个子 reducer 输出合并成一个单一的 state 树。
// 4.Redux store 保存了根 reducer 返回的完整 state 树。
//     所有订阅 store.subscribe(listener) 的监听器都将被调用；监听器里可以调用 store.getState() 获得当前 state。这时可以调用 component.setState(newState) 来更新。






