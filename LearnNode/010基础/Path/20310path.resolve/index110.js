const path = require('path');

/**
 * path.resolve([...paths])
 * 拼接绝对路径
 * 如果最后结果不是绝对路径，则附加当前工作路径
 */
console.log(path.resolve('./one')); // 附加工作路径
console.log(path.resolve('/one')); // 附加工作路径（windows下附加到盘符）

console.log(path.resolve('/one/two/', '/three/four')); // 后面的路径是绝对路径时，直接完全替换前面的路径

console.log(path.resolve('/one/two', 'three/four')); // 不管前面的路径是不是以"/"结尾，都拼接到它最后
console.log(path.resolve('/one/two/', 'three/four'));
