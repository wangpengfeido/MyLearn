/**
 * buf.equals(otherBuffer)
 */
const buf = Buffer.from('hello world');
console.log('equals:', buf.equals(Buffer.from('hello world')));
console.log('equals:', buf.equals(Buffer.from('aaa')));
