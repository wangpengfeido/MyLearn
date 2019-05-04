const path = require('path');
const Koa = require('koa');
const koaStatic = require('koa-static');

const app = new Koa();

// koa-static 的第一个参数是root，静态目录。可以是相对路径或绝对路径
// 第二个参数是选项
app.use(koaStatic(path.resolve(__dirname, '.')));

app.listen(3000)


