let app = new Vue({
  el: '#app',
  data() {
    return {
      n: 1
    }
  },
  methods: {
    handleAdd() {
      this.n++;
      // $tick在dom更新后执行
      this.$nextTick().then(() => {
        console.log(document.querySelector('#btn').innerHTML);
      });
    }
  },
});


