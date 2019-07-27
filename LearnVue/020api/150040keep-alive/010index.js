const ComponentOne = {
  name: 'ComponentOne',
  template: `<div>
    <div>one</div>
    <div>text:{{text}}</div>
    <div><input></div>
  </div>`,
  props: {
    text: {},
  },
  data: function () {
    return {};
  },
  // keep-alive后created和mounted不会重复调用
  created: function () {
    console.log('created');
  },
  mounted: function () {
    console.log('mounted');
  },
  // 如果props变化，只会在activated时调用一次
  updated: function () {
    console.log('updated');
  }
};

const ComponentTwo = {
  name: 'ComponentTwo',
  template: `<div>two</div>`
};

let app = new Vue({
  el: '#app',
  components: {
    ComponentOne,
    ComponentTwo,
  },
  data: {
    currentComponent: 'component-one',
    text: '',
  },
  methods: {}
});


