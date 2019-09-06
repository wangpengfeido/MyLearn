const process = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('hello. ', answer => {
  console.log(`answer:${answer}`);
  rl.close();
});
