/**
 * Created by w1036_000 on 2016/11/30.
 */
let foo='outer';
function f(fun=x=>foo) {
    let foo='inner';
    console.log(fun());
}
f();

