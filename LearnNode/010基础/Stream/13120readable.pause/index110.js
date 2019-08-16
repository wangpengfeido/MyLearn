let fs = require('fs');

let readStream = fs.createReadStream('../test_big.png');
let n = 0;

readStream
  .on('data', function(data) {
    console.log('on data:', data);

    /**
     * readable.pause()
     * 使一个处在流动模式的流切出流动模式，并停止触发'data'事件
     */
    readStream.pause();
    console.log('readStream paused');

    setTimeout(function() {
      n++;
      readStream.resume();
    }, 1000);
  })
  .on('end', function() {
    console.log('on end:', n);
  })
  .on('close', function() {
    console.log('on close');
  })
  .on('error', function() {
    console.log('on error');
  });

