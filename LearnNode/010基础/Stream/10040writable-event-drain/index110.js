let fs = require('fs');

let readStream = fs.createReadStream('../test_big.png');
let writeStream = fs.createWriteStream('../test_big_gen.png');

readStream.on('data', function(data) {
  if (writeStream.write(data) === false) {
    readStream.pause();
    console.log('readStream paused');
  }
});
readStream.on('end', function() {
  writeStream.end();
});
/**
 * Event: 'drain'
 * 当stream.write方法返回false时，drain将在恢复适合写入数据到流时触发
 */
writeStream.on('drain', function() {
  console.log('writeStream drained and readStream will be resume');
  readStream.resume();
  console.log('readStream resumed');
});
