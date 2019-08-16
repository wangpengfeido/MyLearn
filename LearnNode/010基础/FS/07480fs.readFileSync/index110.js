let fs = require('fs');

/**
 * fs.readFileSync(path[, options])
 * fs.readFile()的同步版本
 */
const content = fs.readFileSync('../test.txt', 'utf8');
console.log(content);
