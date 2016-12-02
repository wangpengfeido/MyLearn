/**
 * Created by w1036_000 on 2016/12/2.
 */
//es6中属性名定义允许使用表达式
let b = 'b';
let c = 'c';
let obj = {
    ['a' + b]: "ab",
    [c](){
        return 'ccc';
    }
};
console.log(obj);
console.log(obj.c());


