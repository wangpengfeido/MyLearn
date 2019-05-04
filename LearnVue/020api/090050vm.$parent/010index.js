const Child = {
  name: 'child',
  template: `<div>
    <span>this is child</span>
    <button @click="consoleParent()">console parent</button>
  </div>`,
  methods: {
    consoleParent: function () {
      // vm.$parent
      // 打印出Parent组件的实例
      console.log(this.$parent);
    },
  }
};

const Parent = {
  name: 'parent',
  components: {
    Child
  },
  template: `<div>
    <div>this is parent</div>
    <child></child>  
  </div>`
};


let app = new Vue({
  el: '#app',
  components: {
    Parent,
  },
});


