/**
 * Created by w1036_000 on 2016/12/2.
 */
let obj={a:1};
let b=2;
console.log(Object.assign(3));
//跳过无法转换为对象的非源对象值（2，3。。。参数）
console.log(Object.assign(obj,b));
console.log(Object.assign(3,null,obj));
//字符串
console.log(Object.assign("hello"));
console.log(Object.assign(obj,"hello"));