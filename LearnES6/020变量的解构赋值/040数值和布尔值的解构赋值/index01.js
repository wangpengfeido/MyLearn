/**
 * Created by w1036_000 on 2016/11/28.
 */
//右边会转换为对象
let {toString:s}=123;
console.log(s===Number.prototype.toString);