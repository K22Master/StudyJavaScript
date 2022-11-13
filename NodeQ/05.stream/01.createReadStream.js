const fs = require('fs');

//创建读取文件流
const rs = fs.createReadStream('./a.txt', 'utf-8');
// 监听，当开始读取的时候就会触发
rs.on("data", (chunk) => {
    console.log("chunk--", chunk);
});
// 监听结束事件，当数据读取完触发
rs.on("end", () => {
    console.log("end");
});
// 如果在读取过程中报错，触发报错事件
rs.on("error", (err) => {
    console.log(err);
});

