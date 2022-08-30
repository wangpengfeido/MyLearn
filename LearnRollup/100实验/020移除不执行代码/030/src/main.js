import { a } from './a';

console.log('this is main file');

// 使用 plugin-replace ，代码仍然可以正常移除
if (process.env.NODE_ENV === 'bbb') {
  console.log(a);
}
