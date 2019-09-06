const crypto = require('crypto');

/**
 * crypto.createDecipheriv(algorithm, key, iv[, options])
 * 对称解密
 * 返回Decipheriv对象
 */
const decipher = crypto.createDecipheriv('aes256', 'aaaabbbbccccddddeeeeffffgggghhhh', '1234567812345678');
decipher.update('26lU2G5os++KYi/ArvLcKg==', 'base64');
console.log(decipher.final('utf8'));
