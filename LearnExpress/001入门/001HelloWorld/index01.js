let express = require('express');
let app = express();

app.get('/', function (req, res) {
  res.send('hello world!');
});

app.listen(3000, function () {
  console.log('server is listening 3000');
});


