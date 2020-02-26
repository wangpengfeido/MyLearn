test('using mock', () => {
  // 使用jest.fn生成一个mock函数
  const mockCallback = jest.fn(x => 42 + x);
  Array.prototype.forEach.call([0, 1], mockCallback);

  // 此 mock 函数被调用了两次
  expect(mockCallback.mock.calls.length).toBe(2);

  // 第一次调用函数时的第一个参数是 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // 第二次调用函数时的第一个参数是 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // 第一次函数调用的返回值是 42
  expect(mockCallback.mock.results[0].value).toBe(42);
});
