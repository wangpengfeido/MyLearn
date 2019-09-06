const crypto = require('crypto');

/**
 * crypto.createHash(algorithm[, options])
 * 使用给定的算法产生hash。
 * 可使用的算法由OpenSSL中支持的算法决定
 * （常用hash算法有：md5\sha1\sha256\sha512）
 * 返回Hash对象实例。
 */
const hash = crypto.createHash('sha256');
hash.update('aaaaaa');
console.log(hash.digest('base64'));
