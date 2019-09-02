const mixin = {
  data() {
    return {
      a: {
        n: 1,
      },
    }
  },
  template: `<button @click="handleAdd()">{{a.n}}</button>`,
  methods: {
    handleAdd() {
      this.a.n++;
    },
  },
};

const One = {
  name: 'one',
  mixins: [mixin],
  created() {
    // 使用$watch
    this.$watch('a.n', function (newValue, oldValue) {
      console.log('=========One', newValue, oldValue);
    })
  }
};

const Two = {
  name: 'one',
  mixins: [mixin],
  created() {
    // immediate 会先执行一次
    this.$watch('a.n', function (newValue, oldValue) {
      console.log('=========Two', newValue, oldValue);
    }, {immediate: true});
  }
};

const Three = {
  name: 'one',
  mixins: [mixin],
  created() {
    // deep 深度监听，观察对象内部变化
    this.$watch('a', function (newValue, oldValue) {
      console.log('=========Three', newValue, oldValue);
    }, {deep: true})
  }
};


let app = new Vue({
  el: '#app',
  components: {One, Two, Three},
});


