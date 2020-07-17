let app = new Vue({
  el: '#app',
  data: {
    currentComponent: 'component-one',
  },
  components: {
    ComponentOne: function () {
      console.log('component-one', '11111111111111111111111');
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('component-one', '22222222222222222222222222222');

          resolve({
            name: 'component-one',
            template: `<div>
                                  this is component one
                                  <input>
                              </div>`,
          });
        }, 2000);
      });
    },
    ComponentTwo: function () {
      console.log('component-two', '11111111111111111111111');
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('component-two', '22222222222222222222222222222');
          resolve({
            name: 'component-two',
            template: `<div>
                                    this is component two
                                    <input>
                                </div>`,
          });
        }, 2000);
      });
    },
  },
});
