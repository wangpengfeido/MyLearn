// adapter 定义三种状态时的回调
// 可以在其中动态修改 element 属性
Vue.use(VueLazyload, {
  adapter: {
    loaded(listener, options) {
      // { bindType, el, naturalHeight, naturalWidth, $parent, src, loading, error, Init, performanceData, state, rect }
      // el 元素
      // naturalHeight 图片原始高度
      // naturalWidth 图片原始宽度
      // performanceData 图片加载时间性能 如: {init: 1588820920028, loadStart: 1588820920033, loadEnd: 1588820920039}
      // state 加载状态.  如:{loading: false, error: false, loaded: true, rendered: true}
      // rect 图片元素 getBoundingClientRect 值. 如:{bottom: 158, height: 150, left: 8, right: 158, top: 8, width: 150, x: 8, y: 8}
      console.log('loaded', listener, options, listener.options === options);
    },
    loading(listener, options) {
      console.log('loading', listener, options, listener.options === options);
    },
    error(listener, options) {
      console.log('error', listener, options, listener.options === options);
    },
  },
});

const app = new Vue({
  data() {
    return {};
  },
}).$mount('#app');
