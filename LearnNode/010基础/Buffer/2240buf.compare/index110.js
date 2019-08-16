/**
 * buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])
 * 相同返回0；target在source之前返回1；之后返回-1
 */
const buf = Buffer.from('hello world');
console.log('compare:', buf.compare(buf));
console.log('compare:', buf.compare(Buffer.from('a')));
