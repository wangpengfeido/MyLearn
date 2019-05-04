const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'hello world';
  ctx.throw(500, 'error!!!');
});

//  要执行自定义错误处理逻辑，如集中式日志记录，您可以添加一个 “error” 事件侦听器
app.on('error', (err, ctx) => {
  console.log('server error', err);

  // 如果 req/res 期间出现错误，并且无法响应客户端，ctx仍然被传递
  console.log('ctx:', ctx);
  // 当发生错误并且仍然可以响应客户端时，并且没有数据被写入 socket 中，Koa 将用一个 500 “内部服务器错误” 进行适当的响应。在任一情况下，为了记录目的，都会发出应用级 “错误”。
});

app.listen(3000);


