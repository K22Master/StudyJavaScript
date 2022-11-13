const fs = require('fs');

// 写入文件
// 如果没有文件则创建文件，如果有则会覆盖文件内容
fs.writeFile('./test/b.txt', "Hello world", (err) => {
    console.log(err);
});