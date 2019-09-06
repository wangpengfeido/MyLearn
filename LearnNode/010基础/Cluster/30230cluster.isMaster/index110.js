const cluster = require('cluster');
const process = require('process');

/**
 * cluster.isMaster
 * 一个线程是否是主线程
 */
if (cluster.isMaster) {
  console.log(`this is master process:${process.pid}`);
  cluster.fork();
} else {
  console.log(`this is child process:${process.pid}`);
}
