let fs = require('fs');

let readStream = fs.createReadStream('../test_big.png');
let n = 0;

readStream
  .on('data', function(data) {
    console.log('on data:', data);

    readStream.pause();
    console.log('readStream paused');

    setTimeout(function() {
      n++;
      /**
       * readable.resume()
       * 使一个暂停的流切到流动模式，重新开始触发data事件
       */
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

