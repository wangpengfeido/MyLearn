const stream = require('stream');
const fs = require('fs');

/**
 * new stream.Transform([options])
 * 转换流是输出由输入经过某种方式得来的双工流
 * 要实现一个转换流，必须实现_transform方法，可能实现_flush方法
 */
class MyTransformStream extends stream.Transform {
  constructor() {
    super();
  }
  _transform(chunk, encoding, callback) {
    super.push(chunk);
    callback();
  }
  _flush(callback) {
    super.push('233333');
    callback();
  }
}

const myTransformStream = new MyTransformStream();
fs.createReadStream('../test.txt')
  .pipe(myTransformStream)
  .pipe(fs.createWriteStream('../test_gen.txt'));
