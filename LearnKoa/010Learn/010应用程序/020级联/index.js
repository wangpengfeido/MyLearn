const Koa = require('koa');
const app = new Koa();

// 当一个中间件调用 next() 则该函数暂停并将控制传递给定义的下一个中间件。当在下游没有更多的中间件执行后，堆栈将展开并且每个中间件恢复执行其上游行为。

// 请求开始时首先请求流通过 x-response-time 和 logging 中间件，然后继续移交控制给 response 中间件
// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  console.log(1);
  await next();
  console.log(3);
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response
app.use(async ctx => {
  console.log(2);
  ctx.body = 'hello world';
});

app.listen(3000);


