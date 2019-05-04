const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

// 使用 bodyparser
app.use(bodyParser());

app.use(async ctx => {
  // 解析好的body存在ctx.request.body中
  console.log(ctx.request.body);
  ctx.body = ctx.request.body;
});

app.listen(3000);


