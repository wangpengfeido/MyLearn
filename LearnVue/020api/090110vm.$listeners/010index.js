const Child = {
  name: 'child',
  template: `<div :style="{border:'1px solid black'}">
    <span @click="handleTextClick()">this is child</span>
    <button @click="consoleListeners()">console listeners</button>
  </div>`,
  methods: {
    handleTextClick: function () {
      this.$emit('handle-text-click')
    },
    consoleListeners: function () {
      // 打印vm.$listeners
      // 父作用域中绑定在本组件上的事件监听器
      // 它可以用在创建高层次组件上https://cn.vuejs.org/v2/guide/components-custom-events.html#%E5%B0%86%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%88%B0%E7%BB%84%E4%BB%B6
      console.log(this.$listeners);
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
    <child @handle-text-click="handleChildTextClick()"></child>  
  </div>`,
  methods: {
    handleChildTextClick() {
      console.log('handled child text click at parent.')
    }
  }
};


let app = new Vue({
  el: '#app',
  components: {
    Parent,
  },
});


