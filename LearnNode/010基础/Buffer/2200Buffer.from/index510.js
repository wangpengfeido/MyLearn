/*
 * Class Method: Buffer.from(string[, encoding])
 * 从字符串生成一个buffer，长度由字符串决定
 * encoding：编码，默认，utf-8 如果字符不在编码范围内，则会忽略
 * */
let strBuf = Buffer.from('a啊');
console.log('strBuf:', strBuf);

// '啊'被忽略
console.log('忽略-超出编码范围：',Buffer.from('a啊', 'base64'));
