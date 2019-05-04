const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
// 创建 router
const router = new Router();

// 创建路由
router.get('/a', (ctx, next) => {
  ctx.body = 'aaa';
});
router.get('/b', (ctx, next) => {
  ctx.body = 'bbb';
});

// 使用router
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);


