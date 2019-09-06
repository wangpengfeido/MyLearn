const crypto = require('crypto');

/**
 * Diffie-Hellman算法：
 * 小明选择素数p\底数g\密钥a,计算出一个值A
 * 小明把p\g\A发给小红，小红用密钥b和参数p\g，计算出一个值B
 * 小明用a和B计算出协商密钥，小红用A和b计算出协商密钥，二人计算出的协商密钥相同，并且相互没有知道各自的密钥
 */

/**
 * crypto.createDiffieHellman(primeLength[, generator])
 * 创建DiffieHellman密钥交换对象，它是素数的生成者
 * 返回DiffieHellman实例
 */
const diffieHellman1 = crypto.createDiffieHellman(512);
const diffieHellman1_keys = diffieHellman1.generateKeys();

const prime = diffieHellman1.getPrime();
const generator = diffieHellman1.getGenerator();

/**
 * crypto.createDiffieHellman(prime[, primeEncoding][, generator][, generatorEncoding])
 * 使用给定的素数创建DiffieHellman密钥交换对象，它是素数和底数的接收者
 * 返回DiffieHellman实例
 */
const diffieHellman2 = crypto.createDiffieHellman(prime, generator);
const diffieHellman2_keys = diffieHellman2.generateKeys();

const diffieHellman1_secret = diffieHellman1.computeSecret(diffieHellman2_keys);
const diffieHellman2_secret = diffieHellman2.computeSecret(diffieHellman1_keys);

console.log('1 secret:', diffieHellman1_secret.toString('base64'));
console.log('2 secret:', diffieHellman2_secret.toString('base64'));
