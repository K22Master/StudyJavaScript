// 引入express
const express = require('express');
// 创建实例
const app = express();
// 创建路由规则
// request是对请求报文的封装
// response是对响应报文的分装
app.get('/server', (request, response) => {
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('Hello Ajax!!!');
});
// 可以接收任意请求
app.all('/server', (request, response) => {
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send('Hello Ajax POST!!!');
});
app.all('/json-server', (request, response) => {
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        name: 'Fuzi',
        age: 20
    }
    // const str = JSON.stringify(data);
    response.send(data);
});
// 延时
app.get('/timeout', (request, response) => {
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        response.send('延时响应');
    }, 3000);
});
// axios
app.all('/axios-server', (request, response) => {
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        name: 'Fuzi',
        age: 22
    }
    // const str = JSON.stringify(data);
    response.send(data);
});
app.listen(8000, () => {
    console.log('服务已经启动,8000,POST端口监听中……');
})