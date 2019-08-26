let fs = require('fs');

let readStream = fs.createReadStream('../test_big.png');
let n = 0;

readStream
  /**
   * Event: 'readable'
   * 在流中有数据可读时被触发。一般会在其中调用readable.read方法
   * 注意：'readable'事件优先于'data'事件控制可读流。如果同时绑定了readable和data事件，只有当调用readable.read()方法才会触发data事件。
   */
  .on('readable', function() {
    setTimeout(() => {
      const chunk = readStream.read();
      console.log('on readable', chunk);
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
