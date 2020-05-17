Vue.use(VueLazyload, {
  lazyComponent: true,
});

const app = new Vue({
  data() {
    return {
      imgList: Array.from({ length: 20 }).map((item, index) => {
        return {
          index,
          url: `../assets/test.jpg?${index}`,
        };
      }),
    };
  },
  methods: {
    handleShow(tag) {
      console.log(('show:', tag));
    },
  },
}).$mount('#app');
