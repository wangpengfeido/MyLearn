// 如果移除必不执行代码后，模块未被使用，模块代码也会被优化掉
import { a } from './a';

console.log('this is main file');

if (1 + 1 === 3) {
  console.log(a);
}
