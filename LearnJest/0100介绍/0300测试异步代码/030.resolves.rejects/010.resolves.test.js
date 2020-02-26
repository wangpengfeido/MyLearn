function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('peanut butter');
    }, 2000);
  });
}

// 使用.resolves检测Promise
test('the data is peanut butter promise', () => {
  return expect(fetchData()).resolves.toBe('peanut butter');
});
