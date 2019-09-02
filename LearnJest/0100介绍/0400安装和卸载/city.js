const cityDatabase = [];

module.exports.initializeCityDatabase = function() {
  cityDatabase.push('Vienna');
  cityDatabase.push('San Juan');
  return Promise.resolve('success');
};

module.exports.isCity = function(city) {
  return Promise.resolve(cityDatabase.indexOf(city) >= 0);
};

module.exports.clearCityDatabase = function() {
  cityDatabase.length = 0;
  return Promise.resolve('success');
};
