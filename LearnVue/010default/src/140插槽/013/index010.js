Vue.component('component-one', {
    template: `<div>
                    <div>this is component one</div>
                    <slot></slot>
                </div>`,
    data: function () {
        return {
            value: 100,
        }
    }
});


let app = new Vue({
    el: '#app',
    data: {
        value: 1,
    },
});



