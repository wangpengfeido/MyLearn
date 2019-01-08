/**
 * 转换流，是一种双工流，输出由输入经过某种方式计算而来。
 * 它继承自stream.Duplex，并实现了自己的_write()和_reade()
 * 自定义转换流必须实现_transform()和可选实现_flush()
 */

let stream = require('stream');
let util = require('util');

function ReadStream() {
  stream.Readable.call(this);
}
util.inherits(ReadStream, stream.Readable);
ReadStream.prototype._read = function (size) {
  this.push('hello ');
  this.push('world!');
  this.push(null);
};

function WriteStream() {
  stream.Writable.call(this);
  // this._cached = Buffer.from('');
}
util.inherits(WriteStream, stream.Writable);
WriteStream.prototype._write = function (chunk, encode, callback) {
  console.log(chunk.toString('utf8'));
  callback();
};

function TransformStream() {
  stream.Transform.call(this);
}
util.inherits(TransformStream, stream.Transform);
TransformStream.prototype._transform = function (chunk, encode, callback) {
  this.push(chunk);
  callback();
};
TransformStream.prototype._flush = function (callback) {
  this.push('haha');
  callback();
};


let rs = new ReadStream();
let ws = new WriteStream();
let ts = new TransformStream();
rs.pipe(ts).pipe(ws);


