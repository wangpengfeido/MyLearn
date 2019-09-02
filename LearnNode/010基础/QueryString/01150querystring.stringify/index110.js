const queryString = require('querystring');

/**
 * querystring.stringify(obj[, sep[, eq[, options]]])
 * 将对象的own property转换为query字符串
 */
console.log(queryString.stringify({ a: 'aa', b: 'bb', c: { x: '1' } }));
