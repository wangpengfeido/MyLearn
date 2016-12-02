"use strict";

/**
 * Created by w1036_000 on 2016/11/29.
 */
////////////////////////////////////////////////////////////
//Set不会添加重复值
var s = new Set();
[2, 3, 5, 4, 5, 2, 2].map(function (x) {
  return s.add(x);
});

console.log(s);
//////////////////////////////////////////////////////////
//# sourceMappingURL=010基本用法.js.map