/*
 * Class Method: Buffer.alloc(size[, fill[, encoding]])
 * 生成指定长度的buffer，其值用00填充
 * */
let sizeBuf = Buffer.alloc(5);
console.log('sizeBuf:', sizeBuf);

sizeBuf.write('abc');
console.log('sizeBuf:', sizeBuf, sizeBuf.length);

sizeBuf.write('abcdef');
console.log('sizeBuf:', sizeBuf);
