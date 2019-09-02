function fetchData(callback) {
  setTimeout(() => {
    callback('peanut butter');
  }, 2000);
}

// 使用done来结束测试。如果不使用done，执行到函数末尾时会结束测试，而不会执行回调内的测试
test('the data is peanut butter', done => {
  fetchData(data => {
    expect(data).toBe('peanut butter');
    done();
  });
});
