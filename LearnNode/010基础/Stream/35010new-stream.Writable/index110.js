/**
 * 要实现一个可写流，必须调用new stream.Writable([options])，并实现writable._write方法，也可能实现writable.writev方法
 */

const stream = require('stream');
const fs = require('fs');

const myWritable = new stream.Writable();
myWritable._write = function(chunk, encoding, callback) {
  console.log(chunk);
  callback();
};

fs.createReadStream('../test.txt').pipe(myWritable);
