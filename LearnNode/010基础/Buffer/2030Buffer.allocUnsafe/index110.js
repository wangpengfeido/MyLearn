/*
 * Class Method: Buffer.allocUnsafe(size)
 * 生成指定长度的buffer，保持原内存的值
 * */
let unsafeSizeBuf = Buffer.allocUnsafe(5);
console.log('unsafeSizeBuf:', unsafeSizeBuf);

unsafeSizeBuf.fill(0);
console.log('unsafeSizeBuf:', unsafeSizeBuf);
