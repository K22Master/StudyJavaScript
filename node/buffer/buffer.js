// 导入文件系统模块
let fs = require('fs');
// 打开文件
let fd = fs.openSync('file.txt', 'w');
// 写入数据
fs.writeSync(fd, '山之巅，傲世间，夫子学习node每一天');
// 关闭文件
fs.closeSync(fd);