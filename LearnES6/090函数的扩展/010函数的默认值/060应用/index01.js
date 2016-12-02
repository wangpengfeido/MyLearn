/**
 * Created by w1036_000 on 2016/11/30.
 */
//指定不可省略的参数
function throwIfMissing() {
    throw new Error("缺少参数");
}
function f(a=throwIfMissing()) {

}
f();

