// 导入fs模块
const fs = require('fs');

// 创建目录
fs.mkdir("./test", (err) => {
    if (err && err.code === "EEXIST") {
        console.log("该目录已存在");
    }
});