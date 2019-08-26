// toBeGreaterThan大于
// toBeGreaterThanOrEqual大于等于
// toBeLessThan小于
// toBeLessThanOrEqual小于等于
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // 对于数字来书，toBe 和 toEqual 是一样的
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// toCloseTo 匹配相近的小数。在小数比较时应该使用它，而不是toEqual
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
});


