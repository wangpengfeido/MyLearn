/**
 * Created by w1036_000 on 2016/12/2.
 */
//set不添加重复值
var s=new Set();
[2,3,4,5,2,2].forEach(item=>{s.add(item);});
console.log(s);
//////////////////////////////////////////
var s2=new Set([1,2,3,4,4,5]);
console.log(s2);
console.log(s2.size);
console.log(...s2);
//数组去重///////////////////////////////////
console.log([...new Set([1,1,2,2])]);



