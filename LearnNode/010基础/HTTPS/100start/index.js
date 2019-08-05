const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('../privatekey.pem'),
  cert: fs.readFileSync('../certificate.pem'),
};

const server = https.createServer(options, function(incommingMessage, serverResponse) {
  serverResponse.statusCode = 200;
  serverResponse.end('hello world');
});
server.listen(3011, function() {
  console.log('listening 3011');
});
