console.log('this is first');

if (REMOVE !== 'yes') {
  import('./a-umd.js').then(({ a }) => {
    a();
  });
}
