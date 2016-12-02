/**
 * Created by w1036_000 on 2016/12/2.
 */
let obj={
    sayName(){
        console.log(arguments.callee.name);
    }
};
console.log(obj.sayName.name);
obj.sayName();


