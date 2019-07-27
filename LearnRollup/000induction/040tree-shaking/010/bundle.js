'use strict';

const a = 'aaa';

// 因为只导入并使用了"a"，所以其他的b和obj等被优化掉了

function main () {
  console.log(a);
}

module.exports = main;
