const crypto = require('crypto');
const fs = require('fs');

const pubKey = fs.readFileSync('../rsa-pub.pem');
const prvKey = fs.readFileSync('../rsa-prv.pem');

/**
 * crypto.publicEncrypt(key, buffer)
 * 非对称公钥加密
 */
const enc = crypto.publicEncrypt(pubKey, Buffer.from('aaa', 'utf8'));

console.log(crypto.privateDecrypt(prvKey, enc).toString('utf8'));
