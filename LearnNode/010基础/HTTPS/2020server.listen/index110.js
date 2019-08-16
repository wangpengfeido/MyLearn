const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('../privatekey.pem'),
  cert: fs.readFileSync('../certificate.pem'),
};

const server = https.createServer(options, function(req, res) {
  res.statusCode = 200;
  res.end('hello world');
});

/**
 * server.listen()
 */
server.listen(3011, function() {
  console.log('listening 3011');
});
