const fn = require('./index');

test('localStorage', () => {
  const str = '1';
  expect(fn(str)).toBe(str);
});
