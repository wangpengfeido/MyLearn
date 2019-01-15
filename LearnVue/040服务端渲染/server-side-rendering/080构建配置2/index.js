const fs = require('fs');
const express = require('express');
const Vue = require('vue');
const VueServerRenderer = require('vue-server-renderer');

const server = express();
server.listen(8123, (err) => {
  console.log(`listening ${8123}`)
});

server.use(express.static('client-dist'));

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