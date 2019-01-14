// 这种策略是，等待视图所需数据全部解析之后，再传入数据处理视图
// 好处是可以直接渲染完整内容
// 坏处是可能等待时间过长，这时可以显示一个数据加载指示器


import {createApp} from './app/app'

const {app, router, store} = createApp();

router.onReady(() => {

  // 添加路由钩子处理asyncData.
  // 在路由就绪后执行，确保不会二次预取数据。
  // 使用router.beforeResolve确保所有异步数据都resolve.
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to);
    const prevMatched = router.getMatchedComponents(from);

    // 对比现在和以前的路由组件，找出差异组件
    let diffed = false;
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = (prevMatched[i] !== c));
    });

    if (!activated.length) {
      return next();
    }

    // 在这里触发加载指示器

    // 加载数据
    Promise.all(activated.map(c => {
      if (c.asyncData) {
        return c.asyncData({store, route: to})
      }
    })).then(() => {

      // 在这里停止加载指示器

      next();
    }).catch(next);

  });

  app.$mount('#app');
});



