/**
 * Created by w1036_000 on 2016/11/29.
 */
function f() {
    console.log('I am outside');
}
(function () {
    if(false){
        function f() {
            console.log('I am inside');
        }
    }
    f();//结果：ES5:inside;ES6:outside
}());