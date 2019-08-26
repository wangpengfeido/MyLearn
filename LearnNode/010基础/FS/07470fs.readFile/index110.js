let fs = require('fs');

/**
 * fs.readFile(path[, options], callback)
 * 异步读取一个文件的全部内容
 * 如果不指定编码，则返回buffer，否则返回指定编码的字符串
 */
fs.readFile('../test.txt', 'utf8', function(err, data) {
  console.log(data);
});

