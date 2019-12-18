function fetchData(isError) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isError) {
        reject('error');
      } else {
        resolve('peanut butter');
      }
    }, 2000);
  });
}

// 使用async函数
// 实际上与promise的用法类似，因为async实际上只是promise的语法糖
test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData(true);
  } catch (e) {
    expect(e).toMatch('error');
  }
});
