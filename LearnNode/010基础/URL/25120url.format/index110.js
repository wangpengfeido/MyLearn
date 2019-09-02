const url = require('url');

/**
 * url.format(urlObject)
 * 将urlObject转换为url字符串
 */
console.log(
  url.format({
    protocol: 'https:',
    slashes: true,
    auth: 'user',
    host: 'www.host.com:80',
    port: '80',
    hostname: 'www.host.com',
    hash: '#hash',
    search: '?query=a',
    query: 'query=a',
    pathname: '/static/index.html',
    path: '/static/index.html?query=a',
    href: 'https://user@www.host.com:80/static/index.html?query=a#hash',
  })
);
