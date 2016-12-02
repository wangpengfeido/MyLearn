/**
 * Created by w1036_000 on 2016/12/2.
 */
//Object.assign不获取不可枚举和继承的属性
function F() {
    this.a = 'aaa';
}
F.prototype.b = 'bbb';

let obj={
    name:'hi'
};
let obj2=new F();
console.log(Object.assign(obj,obj2));

