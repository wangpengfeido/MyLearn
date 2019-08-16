let fs = require('fs');

let readStream = fs.createReadStream('../test_big.png');
let n = 0;

/**
 * Class: stream.Readable -> Event: 'data'
 * 当流让渡数据块的所有权到用户时触发。例如调用readable.pipe(), readable.resume()切到流动模式时，或绑定data事件时。readable.read()方法也会触发。
 * 注意：'readable'事件优先于'data'事件控制可读流。如果同时绑定了readable和data事件，只有当调用readable.read()方法才会触发data事件。
 * 注意：在end事件出发后，data事件的处理可能仍然在执行。因为最后一次data事件触发后会立即触发end事件
 * 参数1 chunk <Buffer>|<String>|<any>
 */
readStream
  .on('data', function(data) {
    console.log('on data:', data);

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

