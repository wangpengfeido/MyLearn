import {createApp} from "./app/app";

export default context => {

  return new Promise((resolve, reject) => {
    const {app, router} = createApp();

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

        context.state = store.state;

        resolve(app);
      }).catch(reject);
    },reject);
  });


}






