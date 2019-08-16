/**
 * 要实现一个可读流，必须调用new stream.Readable([options])，并实现readable._read()方法
 */

const stream = require('stream');

const data = ['hello ', 'world!', null];
let n = 0;
/**
 * Constructor: new stream.Readable([options])
 * 实现可读流
 */
const myReadable = new stream.Readable();
myReadable._read = function(size) {
  let dataToPush = data[n++];
  while (dataToPush && myReadable.push(dataToPush)) {
    dataToPush = data[n++];
  }
  myReadable.push(null);
};

myReadable.on('data', chunk => {
  console.log(chunk.toString());
});
