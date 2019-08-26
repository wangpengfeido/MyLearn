/**
 * buf.fill(value[, offset[, end]][, encoding])
 * 改变原buffer，返回buffer的引用
 */
const buf = Buffer.from('hello world');
console.log('fill:', buf.fill(0), buf);
