/**
 * buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
 * 从buf复制一个范围到target
 */
let buf = Buffer.from('hello word');
let target = Buffer.alloc(10);
buf.copy(target, 1, 2, 4);
console.log('target:', target, target.toString());
