const http = require('http');

const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.end('hello world');
});

/**
 * server.listen()
 * 开启http服务。此方法与net.Server中的server.listen方法完全相同
 */
server.listen(3000, function() {
  console.log(`server is run at port:3000`);
});
