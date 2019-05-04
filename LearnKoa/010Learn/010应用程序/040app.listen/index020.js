const http = require('http');
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'hello world';
});

// app.listen(...) 方法只是以下方法的语法糖:
http.createServer(app.callback()).listen(3000);


