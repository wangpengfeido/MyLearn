const url = require('url');

/**
 * url.format(urlObject)
 * 将urlObject转换为url字符串
 */
console.log(
  url.format({
    href: 'https://user@www.host.com:80/static/index.html?query=a#hash',
    protocol: 'https:',
    slashes: true,    // 协议后面是否有 '//'
    auth: 'user',    // 授权，'@'前面
    host: 'www.host.com:80',
    hostname: 'www.host.com',
    port: '80',
    path: '/static/index.html?query=a',
    pathname: '/static/index.html',
    search: '?query=a',
    query: 'query=a',
    hash: '#hash',
  })
);
