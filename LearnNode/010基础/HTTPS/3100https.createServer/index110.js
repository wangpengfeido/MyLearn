const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('../privatekey.pem'),
  cert: fs.readFileSync('../certificate.pem'),
};

/**
 * https.createServer([options][, requestlistener])
 */
const server = https.createServer(options, function(req, res) {
  res.statusCode = 200;
  res.end('hello world');
});

server.listen(3011, function() {
  console.log('listening 3011');
});
