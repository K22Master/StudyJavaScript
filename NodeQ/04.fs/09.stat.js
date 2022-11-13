const fs = require('fs');
// 查看目录信息
fs.stat('./test', (err, data) => {
    // 判断是否是一个文件
    console.log(data.isFile());
    // 判断是否是一个目录
    console.log(data.isDirectory());
});