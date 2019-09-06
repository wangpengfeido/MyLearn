const crypto = require('crypto');

/**
 * crypto.createCipheriv(algorithm, key, iv[, options])
 * 对称加密
 * （常用的对称加密算法有aes128\aes192\aes256\des\des3）
 * 返回Cipheriv对象
 */
const cipher = crypto.createCipheriv('aes256', 'aaaabbbbccccddddeeeeffffgggghhhh', '1234567812345678');
cipher.update('aaaaaaaaa');
console.log(cipher.final('base64'));
