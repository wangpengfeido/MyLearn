// 不能用圆括号的情况

// 变量声明
// let [(a)] = [1];

// 函数参数，因为函数参数也是变量声明
// function f([(a)]) {}

// 赋值语句的模式部分
// ([a])=[5];
//////////////////////////////////////////////////////////

// 可以使用圆括号的情况

// 赋值语句的非模式部分
let a1, a2;
({a: (a1)} = {a: 1});
({a2} = {a2: 2});


