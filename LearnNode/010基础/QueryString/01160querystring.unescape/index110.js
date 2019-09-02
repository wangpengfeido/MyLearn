const queryString = require('querystring');

/**
 * querystring.unescape(str)
 * 将编码的字符串解码
 * 它被querystring.parse()方法在内部使用
 * 它类似于decodeURIComponent
 */
console.log(queryString.unescape('%3C%E4%BD%A0%E5%A5%BD%E4%B8%96%E7%95%8C%3Ehhh'));
