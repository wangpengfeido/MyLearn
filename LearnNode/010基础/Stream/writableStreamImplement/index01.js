/**
 * 要实现一个可写流，应该使用new stream.Writable()创建流对象，并且必须实现其_write方法，可能实现其_writev方法
 */
let stream = require('stream');

let readStream = new stream.Readable();
/**
 * stream.Writable
 * 创建实现可写流
 */
let writeStream = new stream.Writable();

readStream.push('hello ');
readStream.push('world!');
readStream.push(null);

/**
 * tream.Writable -> writable._write(chunk,encode,callback)
 * 实现_write方法以将数据提供给后面的资源
 * @param chunk
 * @param encode
 * @param callback <Function> chunk处理完成后调用，可以带一个可选的错误参数。
 */
writeStream._write = function (chunk, encode, callback) {
  console.log(chunk);
  callback();
};

readStream.pipe(writeStream);

