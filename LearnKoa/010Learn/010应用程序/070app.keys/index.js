const Koa = require('koa');
const app = new Koa();

// 设置签名的Cookie密钥。
app.keys = ['im a newer secret', 'i like turtle'];

// TODO
// 它们被传递给KeyGrip，所以也可以传递自己的KeyGrip实例。例如像下面这样：
// app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');
// https://github.com/crypto-utils/keygrip

app.use(async ctx => {
  // 这些密钥可以倒换，并在使用 { signed: true } 参数签名 Cookie 时使用。
  ctx.cookies.set('name', 'tobi', {signed: true});
  ctx.body = 'hello world';
});

app.listen(3000);


