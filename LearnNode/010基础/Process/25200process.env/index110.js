const process = require('process');

/**
 * process.env
 * 获取用户的环境变量列表
 */
console.log(process.env.NODE_ENV);
console.log(process.env);


/**
 * 注：
 * windows cmd 设置环境变量的方法：set NODE_ENV="xxx"
 * windows power shell 设置环境变量的方法：$env:NODE_ENV="xxx"
 * linux 设置环境变量的方法：export NODE_ENV=xxx
 */