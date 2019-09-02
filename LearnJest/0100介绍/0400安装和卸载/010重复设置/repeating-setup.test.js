const { initializeCityDatabase, clearCityDatabase, isCity } = require('../city');

// beforeEach和afterEach在每个测试前后执行
beforeEach(() => {
  return initializeCityDatabase();
});

afterEach(() => {
  return clearCityDatabase();
});

test('city database has Vienna', () => {
  return expect(isCity('Vienna')).resolves.toBeTruthy();
});

test('city database has San Juan', () => {
  return expect(isCity('San Juan')).resolves.toBeTruthy();
});
