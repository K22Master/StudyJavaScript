const fs = require('fs');
// 读取文件
// fs.readFile('./test/a.txt', (err, data) => {
//     if (!err) {
//         // data传过来的数据是buffer流，要通过toString转译
//         console.log(data.toString());
//     }
// });
// 方法二
fs.readFile('./test/a.txt', "utf-8", (err, data) => {
    if (!err) {
        // data传过来的数据是buffer流，要通过toString转译
        console.log(data);
    }
});