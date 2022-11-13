const fs = require('fs');

// 删除文件
fs.unlink('./test/a.txt', (err) => {
    if (err && err.code === 'ENOENT') {
        console.log("文件不存在！");
    }
});