const cluster = require('cluster');
const process = require('process');

if (cluster.isMaster) {
  console.log(`this is master process:${process.pid}`);
  /**
   * cluster.fork([env])
   * 创建一个子进程
   * 它只能在主进程中调用
   */
  cluster.fork();
} else {
  console.log(`this is child process:${process.pid}`);
}