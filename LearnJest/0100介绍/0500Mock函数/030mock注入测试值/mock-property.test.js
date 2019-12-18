// .mock 属性保存了如何被调用、调用时返回值信息、每次调用this信息
test('mock return values', () => {
  const myMock = jest.fn();

  expect(myMock()).toBe(undefined);

  // 注入一个返回值
  myMock.mockReturnValueOnce(10);
  expect(myMock()).toBe(10);
});

test('filter test', () => {
  // 可以使用模拟返回值的函数来测试组件
  
  const filterTestFn = jest.fn();
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

  expect([1, 2].filter(filterTestFn)).toEqual([1]);
});
