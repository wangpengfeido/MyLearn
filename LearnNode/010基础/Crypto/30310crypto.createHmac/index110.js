const crypto = require('crypto');

/**
 * crypto.createHmac(algorithm, key[, options])
 * 使用指定算法产生HMAC。(hmac,Hash-based Message Authentication Code，结合密钥产生的hash mac)
 * 返回Hmac对象实例。
 */
const hmac = crypto.createHmac('sha256','11111');
hmac.update('aaaaaa');
console.log(hmac.digest('base64'));
