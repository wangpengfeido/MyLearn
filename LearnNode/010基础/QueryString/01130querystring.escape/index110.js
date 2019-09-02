const queryString = require('querystring');

/**
 * querystring.escape(str)
 * 将字符串以合适的方式编码
 * 它被querystring.stringify方法在内部使用
 * 它类似于encodeURIComponent
 */
console.log(queryString.escape('<你好世界>hhh'));
