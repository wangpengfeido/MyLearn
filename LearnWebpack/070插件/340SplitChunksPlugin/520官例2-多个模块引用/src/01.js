console.log('this is 01');

// 动态加载
import('./a.js').then(({a})=>{
  a();
});
import('./b.js').then(({b})=>{
  b();
});