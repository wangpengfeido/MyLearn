const Koa = require('koa');
const app = new Koa();

// 将给定的中间件方法添加到此应用程序。
// https://github.com/koajs/koa/wiki#middleware
app.use(async ctx => {
  ctx.body = 'hello world';
});

app.listen(3000);


