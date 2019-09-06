const stream = require('stream');
const fs = require('fs');

class MyTransformStream extends stream.Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, callback) {
    super.push(Buffer.concat([chunk, Buffer.from('11111')]));
    callback();
  }

  /**
   * transform._flush(callback)
   * 当没有更多数据要被消费时，这个方法被调用
   */
  _flush(callback) {
    super.push('233333');
    callback();
  }
}

const myTransformStream = new MyTransformStream();
fs.createReadStream('../test.txt')
  .pipe(myTransformStream)
  .pipe(fs.createWriteStream('../test_gen.txt'));
