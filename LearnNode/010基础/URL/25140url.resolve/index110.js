const url = require('url');

/**
 * url.resolve(from, to)
 * 拼接两个url
 */
console.log('==========================================');
// to url 以'/'开头时，直接替换到path开头
console.log(url.resolve('/one/two', '/three/four'));    // /three/four
console.log(url.resolve('/one/two/', '/three/four'));
console.log(url.resolve('https://example.com/one/two', '/three/four'));    // https://example.com/three/four
console.log(url.resolve('https://example.com/one/two/', '/three/four'));

console.log('==========================================');
// from url 不以/结尾时，to url替换path最后一部分
console.log(url.resolve('/one/two', 'three/four'));
console.log(url.resolve('https://example.com/one/two', 'three/four'));

console.log('==========================================');
// from url 以/结尾时，to url拼接到最后
console.log(url.resolve('/one/two/', 'three/four'));
console.log(url.resolve('https://example.com/one/two/', 'three/four'));
