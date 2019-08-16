let fs = require('fs');

// 返回buffer
fs.readFile('../test.png', function (err, data) {
  console.log(data);
});
