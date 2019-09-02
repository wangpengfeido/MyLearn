const { initializeCityDatabase, clearCityDatabase, isCity } = require('../city');

// beforeAll和afterAll在所有测试前后执行，只执行一次
beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test('city database has Vienna', () => {
  return expect(isCity('Vienna')).resolves.toBeTruthy();
});

test('city database has San Juan', () => {
  return expect(isCity('San Juan')).resolves.toBeTruthy();
});
