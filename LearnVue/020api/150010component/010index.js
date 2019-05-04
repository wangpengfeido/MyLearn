const ComponentOne = {
  name: 'ComponentOne',
  template: `<div>
    <div>this is component one</div>
    <div>{{dots}}</div>
  </div>`,
  data: function () {
    return {
      dots: '...',
    }
  }
};

let app = new Vue({
  el: '#app',
  components: {
    ComponentOne,
  },
  data: function () {
    return {
      n: 0,
    }
  },
  methods: {
    addN: function () {
      this.n++;
    }
  }
});


