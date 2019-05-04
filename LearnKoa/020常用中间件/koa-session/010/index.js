const session = require('koa-session');
const Koa = require('koa');

const app = new Koa();

app.keys = ['some secret hurr'];

// 使用session
app.use(session({}, app));

app.use(ctx => {
  // 使用session
  let n = ctx.session.views || 0;
  ctx.session.views = ++n;
  ctx.body = n + 'views';
});

app.listen(3000);






