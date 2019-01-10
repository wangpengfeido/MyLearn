import {createApp} from "./app/app";

export default context => {

  return new Promise((resolve, reject) => {
    const {app, router, store} = createApp();

    router.push(context.url);

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      if (!matchedComponents.length) {
        return reject({code: 404});
      }

      // 对所有匹配的路由,如果具有asyncData方法则调用它取数据
      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({store, route: router.currentRoute});
        }
      })).then(() => {

        // 在所有预取钩子resolve后，store已填入应用程序所需的状态。
        // 如果将状态加到上下文，并且renderer使用了template选项，状态会自动序列化为window.__INITIAL_STATE__
        context.state = store.state;

        resolve(app);
      }).catch(reject);
    }, reject);
  });


}






