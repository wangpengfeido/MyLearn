Vue.component('component-one', {
  // 使用多个插槽时，可以使用name为插槽命名
  // 不使用name的插槽为默认插槽，未匹配的内容被插入到其中
  template: `<div>
                    <div>this is component one</div>
                    <slot name="one"></slot>
                    <slot name="two"></slot>
                    <slot></slot>
                </div>`,
});

Vue.component('component-two', {
  // 每个具名插槽也可以指定默认值
  template: `<div>
                    <div>this is component two</div>
                    <slot name="one"><div>this is default one content in slot</div></slot>
                    <slot><div>this is default content in slot</div></slot>
                </div>`
});


let app = new Vue({
  el: '#app',
  data: {},
});



