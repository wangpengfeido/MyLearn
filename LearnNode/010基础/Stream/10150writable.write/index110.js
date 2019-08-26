let fs = require('fs');

let readStream = fs.createReadStream('../test_big.png');
let writeStream = fs.createWriteStream('../test_big_gen.png');

readStream.on('data', function(data) {
  /**
   * writable.write(chunk[, encoding][, callback])
   * 写入数据到流
   * 返回值 如果内部buffer小于警戒高值则返回true。如果返回false，则不应该继续写入数据，直到drain事件被触发
   */
  if (writeStream.write(data) === false) {
    readStream.pause();
    console.log('readStream paused');
  }
});
readStream.on('end', function() {
  writeStream.end();
});
writeStream.on('drain', function() {
  console.log('writeStream drained and readStream will be resume');
  readStream.resume();
  console.log('readStream resumed');
});
