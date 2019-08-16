const http = require('http');

/**
 * http.createServer([options][, requestlistener])
 * 返回http.Server实例
 * requestlistener 绑定到返回的http.Server实例的request事件
 */
const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.end('hello world');
});

server.listen(3000, function() {
  console.log(`server is run at port:3000`);
});
