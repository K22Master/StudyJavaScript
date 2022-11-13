const fs = require('fs');

// 创建读取
const rs = fs.createReadStream('./a.txt');
// 创建写入
const ws = fs.createWriteStream('./c.txt');
// 关闭管道
rs.pipe(ws);