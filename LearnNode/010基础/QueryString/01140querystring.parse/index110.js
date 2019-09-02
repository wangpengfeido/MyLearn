const queryString=require('querystring');

/**
 * querystring.parse(str[, sep[, eq[, options]]])
 * 将query string转换为键值对
 */
console.log(queryString.parse('a=aa&b=bb'));