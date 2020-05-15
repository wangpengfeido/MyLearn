// filter 在图片加载之前执行
// 可以在其中动态修改 listener 选项.例如修改图片src
Vue.use(VueLazyload, {
  filter: {
    sdf(listener, options) {
      // { bindType, el, naturalHeight, naturalWidth, $parent, src, loading, error, Init, performanceData, state, rect }
      console.log('sdf', listener, options, listener.options === options);
      // 修改el属性
      listener.el.setAttribute('dynamic-attr', '1');
      // 修改图片src
      listener.src = `${listener.src}?sdf`;
    },
  },
});

const app = new Vue({
  data() {
    return {};
  },
}).$mount('#app');
