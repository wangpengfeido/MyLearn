function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error');
    }, 2000);
  });
}

// 使用.reject检测Promise
test('the data is peanut butter promise', () => {
  return expect(fetchData()).rejects.toMatch('error');
});
