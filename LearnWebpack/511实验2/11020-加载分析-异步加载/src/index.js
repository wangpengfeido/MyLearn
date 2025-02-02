console.log('this is index');
import('./async.js').then((res) => {
  console.log('async load success', res);
});
