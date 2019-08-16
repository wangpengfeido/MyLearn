/*
* Class Method: Buffer.from(array)
* 由数组生成一个buffer，如果值超过ff，则从00重计
* */
let arrBuf=Buffer.from([1,9,256]); // 256被重计
console.log('arrBuf:',arrBuf,arrBuf[1]);
console.log('arrBuf.length',arrBuf,arrBuf.length);

