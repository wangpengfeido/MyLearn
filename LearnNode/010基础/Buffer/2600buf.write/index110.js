/*
 * buf.write(string[, offset[, length]][, encoding])
 * 写入buffer，会覆盖原来的值，如果长度超过buffer长度则会省略
 * offset 偏移值，默认0
 * length 写入的字符长度
 * */
const strBuf = Buffer.from('a啊');
console.log('before:', strBuf);
strBuf.write('b吧'); 
console.log('after:', strBuf);

// 超出Buffer大小会忽略
strBuf.write('b吧拨'); 
console.log('忽略-超出:', strBuf);
