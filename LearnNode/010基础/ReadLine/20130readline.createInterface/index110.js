const process = require('process');
const readline = require('readline');

/**
 * readline.createInterface(options)
 * 创建readline.Interface实例
 */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('hello. ', answer => {
  console.log(`answer:${answer}`);
  rl.close();
});
