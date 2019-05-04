const Koa = require('koa');
const app = new Koa();

// 设置是设置的app实例上的属性

// 默认是NODE_ENV或'development'
console.log(app.env);
// 当proxy头被信任时为 true
console.log(app.proxy);
// .subdomains要忽略的偏移。默认为2
console.log(app.subdomainOffset );


