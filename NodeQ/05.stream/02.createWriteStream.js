const fs = require('fs');
// 创建流式写入
const ws = fs.createWriteStream('./b.txt', 'utf-8');
ws.write('!!!!!!!!!!!!!!!');
ws.write('\n');
ws.write('2222222222222222');
ws.write('!!!2323232323232');
ws.write('!3223232323233223');
ws.end();