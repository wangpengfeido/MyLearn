const Koa = require('koa');
const app = new Koa();

// Koa Context 将 node 的 request 和 response 对象封装到单个对象中
// *每个*请求都将创建一个 Context

app.use(async ctx => {
  ctx.body = 'hello world';
});

app.listen(3000);

// 为方便起见许多上下文的访问器和方法直接委托给它们的 ctx.request或 ctx.response
