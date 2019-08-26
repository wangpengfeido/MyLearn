let buf = Buffer.from('hello world!');
// 在某个位置写入某长度的字符串
buf.write('hiiiii', 2, 3);
console.log('written buf:', buf, buf.toString());