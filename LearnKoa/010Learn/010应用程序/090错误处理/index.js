const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'hello world';
  // 默认情况下，将所有错误输出到 stderr，除非 app.silent 为 true。
  // ctx.throw(500, 'error!!!');

  // 当 err.status 是 404 或 err.expose 是 true 时默认错误处理程序也不会输出错误。
  ctx.throw(404, 'error!!!');

});


app.listen(3000);


