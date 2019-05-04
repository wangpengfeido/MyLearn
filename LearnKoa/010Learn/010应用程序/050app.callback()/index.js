const http = require('http');
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'hello world';
});

// app.callback(...) 返回一个适用于http.createServer()方法的回调函数
// 也可以使用此回调函数将 koa 应用程序挂载到 Connect/Express 应用程序中
http.createServer(app.callback()).listen(3000);


