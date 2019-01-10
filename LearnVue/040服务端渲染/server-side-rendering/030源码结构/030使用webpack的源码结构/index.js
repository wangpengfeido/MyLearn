const createApp = require('./dist/server').default;

const fs = require('fs');
const express = require('express');
const Vue = require('vue');
const VueServerRenderer = require('vue-server-renderer');

const server = express();
server.listen(8123);


server.get('*', (req, res) => {
  const renderer = VueServerRenderer.createRenderer({
    template: fs.readFileSync('./index.template.html', 'utf-8')
  });

  const context = {
    title: 'hello...',
    meta: `
    <meta charset="UTF-8">
    `,
  };

  const app = createApp();

  // 传入一个渲染上下文对象，提供模板插值数据
  renderer.renderToString(app, context).then(html => {
    res.end(`${html}`);
  }).catch(err => {
    res.status(500).end(err);
  });
});