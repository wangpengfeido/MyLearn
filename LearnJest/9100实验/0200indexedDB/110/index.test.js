require('fake-indexeddb/auto');
const fn = require('./index');

test('index', () => {
  expect(fn()).not.toBe(undefined);
});
