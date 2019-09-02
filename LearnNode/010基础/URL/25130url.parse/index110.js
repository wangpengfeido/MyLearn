const url = require('url');

/**
 * url.parse(urlString[, parseQueryString[, slashesDenoteHost]])
 * 将url字符串转换为urlObject
 */
console.log(url.parse('https://user@www.host.com:80/static/index.html?query=a#hash'));
