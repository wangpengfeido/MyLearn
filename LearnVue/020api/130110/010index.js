const ComponentOne = {
  name: 'ComponentOne',
  template: `<div>
    <div>this is component one</div>
    <div>
      <slot>no slot</slot> 
    </div>
  </div>`,
};


let app = new Vue({
  el: '#app',
  components: {
    ComponentOne,
  },
});


