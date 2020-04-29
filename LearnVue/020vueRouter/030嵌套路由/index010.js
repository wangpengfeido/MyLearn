/**
 * Created by dell on 2017/8/27.
 */
const componentOne = {
    template: `
    <div>
      this is component one
      <div>id:{{$route.params.id}}</div>
      <router-view></router-view>
    </div>`
};
const componentOneOne = {
    template: '<div>this is component one one</div>'
};
const componentOneTwo = {
    template: '<div>this is component one two</div>'
};
const componentOneNull = {
    template: '<div>this is component one null</div>'
};
const componentTwo = {
    template: '<div>this is component two</div>'
};

const routes = [
    {
        path: '/one/:id',
        component: componentOne,
        // 使用 children 嵌套路由
        children: [
            {
                path: '',
                component: componentOneNull
            },
            //子路由名字尽量不要与父路由名字相同，虽然这样可行，但在某些情况下会有不可预料的表现
            {
                path: 'one',
                component: componentOneOne
            },
            {
                path: 'two',
                component: componentOneTwo
            },
        ]
    },
    {path: '/two', component: componentTwo},
];
const router = new VueRouter({
    routes
});


const app = new Vue({
    router
}).$mount('#app');


