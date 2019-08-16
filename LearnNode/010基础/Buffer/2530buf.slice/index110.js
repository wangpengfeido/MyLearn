//buf.slice([start[, end]])
const buf = Buffer.from('hello world');
let slicedBuf = buf.slice(6, 12);
console.log('sliced buf:', slicedBuf, slicedBuf.toString());
