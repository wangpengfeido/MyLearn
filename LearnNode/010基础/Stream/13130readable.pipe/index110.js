const fs = require('fs');

const readable = fs.createReadStream('../test_big.png');
const writable = fs.createWriteStream('../test_big_gen.png');

/**
 * readable.pipe(destination[, options])
 * 将一个可写流关联到一个可读流，可读流自动切换到流动模式并将其数据全部推到可写流，过程自动进行，可写流buffer不会爆炸
 * 参数1 destination：<stream.Writable> 可写流目标
 */
readable.pipe(writable);
