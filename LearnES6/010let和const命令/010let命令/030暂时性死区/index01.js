/**
 * Created by w1036_000 on 2016/11/28.
 */
let x=10;
{
    //在此处输出x是非法的（暂时性死区）
    // console.log(x);
    let x=20;
    console.log(x);
}