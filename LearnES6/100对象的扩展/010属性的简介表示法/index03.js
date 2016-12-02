/**
 * Created by w1036_000 on 2016/12/2.
 */
function fn() {
    return "hi";
}
let obj={
    fn,
    method(){
        return "hello";
    }
};
console.log(obj.fn());
console.log(obj.method());
