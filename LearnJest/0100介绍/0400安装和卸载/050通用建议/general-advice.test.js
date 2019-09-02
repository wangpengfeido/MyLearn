// test.only能只运行一个文件中的一个测试
test.only('this test will not run a', () => {
  expect('A').toBe('A');
});

test('this test will not run b', () => {
  expect('B').toBe('B');
});
