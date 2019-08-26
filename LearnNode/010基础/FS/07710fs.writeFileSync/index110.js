let fs = require('fs');

/**
 * fs.writeFileSync(file, data[, options])
 * fs.writeFile()的异步版本，返回undefined
 */
fs.writeFileSync('../test.txt', 'B吧', 'utf8');
