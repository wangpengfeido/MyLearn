/**
 * buf.toString([encoding[, start[, end]]])
 */
let buf = Buffer.from('hello world!');
console.log('buf:', buf, buf.toString());

buf.write('hiiiii', 2, 3);
console.log('written buf:', buf, buf.toString());
