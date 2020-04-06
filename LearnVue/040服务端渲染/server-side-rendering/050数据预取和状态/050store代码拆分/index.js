const entry = require('./dist/server').default;

const fs = require('fs');
const express = require('express');
const Vue = require('vue');
const VueServerRenderer = require('vue-server-renderer');

const server = express();
server.listen(8123, (err) => {
  console.log(`listening ${8123}`)
});

server.use('/dist',express.static('dist'));


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

  const app = entry(context).then(app => {
    return renderer.renderToString(app, context);
  }).then(html => {
    res.end(html);
  }).catch(err => {
    if (err.code === 404) {
      res.status(404).end('page not found');
    } else {
      res.status(500).end(err);
    }
  });

});