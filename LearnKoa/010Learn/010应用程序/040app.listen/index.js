const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'hello world';
});

// Koa 应用程序不是 HTTP 服务器的1对1展现。
// 可以将同一个应用程序同时作为 HTTP 和 HTTPS 或多个地址

app.listen(3000);
app.listen(3001);


