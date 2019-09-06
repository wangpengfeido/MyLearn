const repl = require('repl');

const replServer = repl.start();

replServer.defineCommand('sayhello',{
  help:'Say hello',
  action(name){
    this.clearBufferedCommand();
    console.log(`hello ${name}`);
    /**
     * replServer.displayPrompt([preserveCursor])
     * 打印输入提示符
     */
    this.displayPrompt();
  }
})
