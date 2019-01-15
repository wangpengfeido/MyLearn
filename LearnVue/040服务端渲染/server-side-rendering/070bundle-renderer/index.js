const fs = require('fs');
const express = require('express');
const Vue = require('vue');
const VueServerRenderer = require('vue-server-renderer');

const server = express();
server.listen(8123, (err) => {
  console.log(`listening ${8123}`)
});

server.use(express.static('client-dist'));

// 使用bundleRenderer的好处有：
// source map 支持
// 在开发环境甚至部署过程中热重载（通过读取更新后的 bundle，然后重新创建 renderer 实例）
// 关键css注入（在使用 *.vue 文件时）：自动内联在渲染过程中用到的组件所需的CSS。
// 使用 clientManifest 进行资源注入：自动推断出最佳的预加载(preload)和预取(prefetch)指令，以及初始渲染所需的代码分割 chunk。
const renderer = VueServerRenderer.createBundleRenderer('/server-dist/vue-ssr-server-bundle.json',{
  runInNewContext: false,
  template: fs.readFileSync('./index.template.html', 'utf-8'),
});

server.get('*', (req, res) => {
  const context = {
    title: 'hello...',
    meta: `
    <meta charset="UTF-8">
    `,
    url: req.url,
  };

  renderer.renderToString(context).then(html => {
    res.end(html);
  }).catch(err => {
    if (err.code === 404) {
      res.status(404).end('page not found');
    } else {
      res.status(500).end(err);
    }
  });

});