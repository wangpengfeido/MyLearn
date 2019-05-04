const path = require('path');
const views = require('koa-views');
const Koa = require('koa');

const app = new Koa();

// 使用koa-views
app.use(views(path.resolve(__dirname, './views',), {
  map: {html: 'nunjucks'},
}));

app.use(async ctx => {
  // 渲染页面
  await ctx.render('./test.html', {userName: 'tom'});
});

app.listen(3000);



