const crypto = require('crypto');
const fs = require('fs');

const pubKey = fs.readFileSync('../rsa-pub.pem');
const prvKey = fs.readFileSync('../rsa-prv.pem');

const enc = crypto.privateEncrypt(prvKey, Buffer.from('aaa', 'utf8'));

/**
 * crypto.publicDecrypt(key, buffer)
 * 非对称公钥解密
 */
console.log(crypto.publicDecrypt(pubKey, enc).toString('utf8'));
