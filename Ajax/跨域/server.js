const express = require('express');
const app = express();
app.get('/home', (request, response) => {
    // 返回一个网页
    response.sendFile(__dirname + '/index.html');
});
app.get('/data', (request, response) => {
    response.send('用户数据');
});
app.all('/check-name', (request, response) => {
    const data = {
        id: 1,
        msg: '用户名已存在'
    };
    let str = JSON.stringify(data);
    response.send(`handle(${str})`);
});
app.listen(9000, () => {
    console.log('Server running at http://localhost:9000');
});
