function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error');
    }, 2000);
  });
}

test('the data is peanut butter promise', () => {
  // 如果要测试reject的情况，使用.assertions()验证一定数量的断言被调用。
  // 否则resolve情况时不会测试失败
  expect.assertions(1);
  return fetchData().catch(e => {
    expect(e).toMatch('error');
  });
});
