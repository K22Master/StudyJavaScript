// 导入fs模块
const fs = require('fs');

// 创建目录
fs.rename("./test1", "./test2", (err) => {
    if (err && err.code == "ENOENT") {
        console.log("目录不存在！");
    }
});