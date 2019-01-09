import {createApp} from "./app/app";

export default context => {

  // 创建一个promise，因为有可能有异步路由钩子或组件
  return new Promise((resolve, reject) => {
    const {app, router} = createApp();

    // 设置服务端router
    router.push(context.url);

    // 等到 router 将可能的异步组件和钩子函数解析完
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      // 如果匹配不到路由，返回404
      if (!matchedComponents.length) {
        return reject({code: 404});
      }
      resolve(app);
    });

  });


}






