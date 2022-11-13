const fs = require('fs');
// 读取文件夹
fs.readdir('./test', (err, data) => {
    if (!err) {
        // data中的保存的文件名，数组形式
        console.log(data);
    }
});