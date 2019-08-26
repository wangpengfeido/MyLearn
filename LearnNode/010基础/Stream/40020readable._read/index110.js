const stream = require('stream');

const data = ['hello ', 'world!'];
class MyReadableStream extends stream.Readable {
  constructor() {
    super();
    this.n = 0;
  }
  /**
   * readable._read(size)
   * 实现的可读流中应实现该方法。
   * 当_data被调用时，应该使用readable.push方法推送数据到读队列中,直到readable.push返回false
   * 当流暂停后被恢复，只有当_read方法被调用后才重新向读队列中push数据
   */
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
