const repl = require('repl');

const replServer = repl.start();
/**
 * replServer.defineCommand(keyword, cmd)
 * 添加命令到REPL实例
 */
replServer.defineCommand('sayhello',{
  help:'Say hello',
  action(name){
    this.clearBufferedCommand();
    console.log(`hello ${name}`);
    this.displayPrompt();
  }
})
