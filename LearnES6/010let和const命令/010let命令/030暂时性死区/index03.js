/**
 * Created by w1036_000 on 2016/11/29.
 */
function fn1(x = 2, y = x) {
    return [x,y];
}
console.log(fn1());
//////////////////////////////////////////////
function fn(x = y, y = 2) {
    return [x,y];
}
fn();
////////////////////////////////////////////