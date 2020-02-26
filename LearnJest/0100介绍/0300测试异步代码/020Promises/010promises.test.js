
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('peanut butter');
    }, 2000);
  });
}

// 返回一个promise才标识测试结束
test('the data is peanut butter promise', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});
