// 导入fs模块
const fs = require('fs');

// 删除目录
fs.rmdir('./test2', (err) => {
    if (err && err.code === "ENOENT") {
        console.log("文件已经删除！");
    };
});