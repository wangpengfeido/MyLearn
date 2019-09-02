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

// async函数也可以与.resolves和.rejects一起使用
test('the data is peanut butter', async () => {
  await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  await expect(fetchData(true)).rejects.toMatch('error');
});
