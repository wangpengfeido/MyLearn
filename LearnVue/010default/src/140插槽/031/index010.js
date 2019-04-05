Vue.component('component-two', {
  // 将数据绑定到slot元素上，将其传入v-slot:xxx特性中
  template: `<div>
                    <slot :user="user"></slot>
                </div>`,
  data: function () {
    return {
      user: {
        userName: '张三',
        userPhone: '123456',
      },
    };
  },
});


let app = new Vue({
  el: '#app',
  data: {
    value: 1,
  },
});



