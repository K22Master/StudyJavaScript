const fs = require('fs').promises;
// 通过promise将数据处理
fs.readdir('./test').then(async (data) => {
    // 创建一个空数组用于存储所有异步操作
    let arr = [];
    data.forEach(item => {
        // 将所有的异步操作压入数组中
        arr.push(fs.unlink(`./test/${item}`));
    });
    // 然后通过all，当所有的异步操作完成时，才进行后面的任务
    await Promise.all(arr);
    await fs.rmdir("./test");
}).catch(err => {
    console.log(err);
});