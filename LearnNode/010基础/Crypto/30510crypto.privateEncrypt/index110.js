const crypto = require('crypto');
const fs = require('fs');

const pubKey = fs.readFileSync('../rsa-pub.pem');
const prvKey = fs.readFileSync('../rsa-prv.pem');

/**
 * crypto.privateEncrypt(privateKey, buffer)
 * 非对称私钥加密
 */
const enc = crypto.privateEncrypt(prvKey, Buffer.from('aaa', 'utf8'));

console.log(crypto.publicDecrypt(pubKey, enc).toString('utf8'));
