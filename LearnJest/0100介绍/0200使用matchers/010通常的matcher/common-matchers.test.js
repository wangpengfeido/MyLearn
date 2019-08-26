// toBe是精确相等
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

// toEqual是深度比较
test('object assignment', () => {
  expect({ one: 1, two: 2, three: { a: 'a' } }).toEqual({ one: 1, two: 2, three: { a: 'a' } });
});

// not 是相反
test('adding positive numbers is not zero',()=>{
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
})


