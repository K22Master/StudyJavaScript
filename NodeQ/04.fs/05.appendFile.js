const fs = require('fs');

// 追加文件
// 如果没有文件则创建文件，如果有则会覆盖文件内容
fs.appendFile('./test/a.txt', "\n你好2！", (err) => {
    console.log(err);
});