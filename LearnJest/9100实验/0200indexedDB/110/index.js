function fn() {
  return window.indexedDB && window.indexedDB.open;
}

module.exports = fn;
