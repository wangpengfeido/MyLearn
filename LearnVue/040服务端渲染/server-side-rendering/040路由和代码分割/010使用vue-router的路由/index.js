const createApp = require('./dist/server').default;

const fs = require('fs');
const express = require('express');
const Vue = require('vue');
const VueServerRenderer = require('vue-server-renderer');

const server = express();
server.listen(8123);

// 注意这里，我们用*处理程序，把访问服务端的路由直接传给vue
server.get('*', (req, res) => {
  const renderer = VueServerRenderer.createRenderer({
    template: fs.readFileSync('./index.template.html', 'utf-8')
  });

  const context = {
    title: 'hello...',
    meta: `
    <meta charset="UTF-8">
    `,
    url: req.url,
  };

  const app = createApp(context).then(app => {
    return renderer.renderToString(app, context);
  }).then(html => {
    res.end(html);
  }).catch(err => {
    if(err.code===404){
      res.status(404).end('page not found');
    }else{
      res.status(500).end(err);
    }
  });

});