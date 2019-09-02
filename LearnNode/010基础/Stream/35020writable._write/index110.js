const stream = require('stream');
const fs = require('fs');

class MyWritableStream extends stream.Writable {
  constructor() {
    super();
  }

  /**
   * writable._write(chunk, encoding, callback)
   * 处理写入的数据
   */
  _write(chunk, encoding, callback) {
    console.log(chunk);
    callback();
  }
}

const myWritable = new MyWritableStream();
fs.createReadStream('../test.txt').pipe(myWritable);



