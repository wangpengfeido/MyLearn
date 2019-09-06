const stream = require('stream');
const fs = require('fs');

class MyTransformStream extends stream.Transform {
  constructor() {
    super();
  }

  /**
   * transform._transform(chunk, encoding, callback)
   * 转换每一个数据块
   */
  _transform(chunk, encoding, callback) {
    super.push(Buffer.concat([chunk, Buffer.from('11111')]));
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
