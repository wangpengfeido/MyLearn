const stream = require('stream');

const data = ['hello ', 'world!'];
// 使用类继承的方式实现可读流
class MyReadableStream extends stream.Readable {
  constructor() {
    super();
    this.n = 0;
  }
  _read(size) {
    let dataToPush = data[this.n++];
    while (dataToPush && super.push(dataToPush)) {
      dataToPush = data[this.n++];
    }
    super.push(null);
  }
}

const myReadable = new MyReadableStream();
myReadable.on('data', chunk => {
  console.log(chunk.toString());
});
