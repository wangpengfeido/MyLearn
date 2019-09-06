const crypto = require('crypto');
const fs = require('fs');

const pubKey = fs.readFileSync('../rsa-pub.pem');
const prvKey = fs.readFileSync('../rsa-prv.pem');

const enc = crypto.publicEncrypt(pubKey, Buffer.from('aaa', 'utf8'));

/**
 * crypto.privateDecrypt(privateKey, buffer)
 * 非对称私钥解密
 */
console.log(crypto.privateDecrypt(prvKey, enc).toString('utf8'));
