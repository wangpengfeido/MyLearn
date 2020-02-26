// .mock 属性保存了如何被调用、调用时返回值信息、每次调用this信息
test('mock property', () => {
  const myMock = jest.fn();

  const a = new myMock(999);
  a.name = 'test';

  const b = { myMock };
  b.myMock(888);

  myMock(777);

  // mock 函数实际执行了3次 (new 调用也算)
  expect(myMock.mock.calls.length).toBe(3);

  // 第一次调用函数时的第一个参数是 9999
  expect(myMock.mock.calls[0][0]).toBe(999);

  // 第二次调用函数时的第一个参数是 888
  expect(myMock.mock.calls[1][0]).toBe(888);

  // 第2次函数调用的返回值是 undefined
  expect(myMock.mock.results[1].value).toBe(undefined);

  // mock函数实例化次数3次
  expect(myMock.mock.instances.length).toBe(3);

  // 第一个mock函数实例有name属性值为test
  expect(myMock.mock.instances[0].name).toEqual('test');
});
