const res = Vue.compile('<div><span>msg:</span><span>{{msg}}</span></div>');
console.log(res.render);
console.log(res.staticRenderFns);

const app = new Vue({
  el: '#app',
  data: function () {
    return {
      msg: 'hello',
    }
  },
  render: res.render,
});


