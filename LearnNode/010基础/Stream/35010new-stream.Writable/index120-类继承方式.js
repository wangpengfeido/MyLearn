const stream = require('stream');
const fs = require('fs');

// 继承了stream.Writable类
class MyWritableStream extends stream.Writable {
  constructor() {
    super();
  }

  _write(chunk, encoding, callback) {
    console.log(chunk);
    callback();
  }
}

const myWritable = new MyWritableStream();
fs.createReadStream('../test.txt').pipe(myWritable);
