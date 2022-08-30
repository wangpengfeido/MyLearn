function fn(str) {
  window.localStorage.setItem('a', str);
  return window.localStorage.getItem('a');
}

module.exports = fn;
