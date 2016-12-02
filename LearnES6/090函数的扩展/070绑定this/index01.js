/**
 * Created by w1036_000 on 2016/12/2.
 */
//此语法暂不支持
var a="a1";
let obj={
    a:"a2"
};
function saya() {
    console.log(this.a);
}
saya();
obj::saya();