const express = require('express');
const app = express();
// 导入路由模块
const router = require('./router/index.js');
const LoginRouter = require('./router/LoginRouter');
const ListRouter = require('./router/ListRouter');
// 使用第三方中间件解析post数据 内置的
app.use(express.urlencoded({ extended: false }));//表示可以解析form编码的格式，username=aaa&pwd=1111
app.use(express.json());//post参数 JSON格式
// 配置静态资源
app.use(express.static('public'));
app.use(express.static('static'));

// 应用级中间件
app.use(function (req, res, next) {
    console.log('验证token');
    next();
});
// 调用路由中间件
app.use('/', router);
app.use('/login', LoginRouter);
app.use('/list', ListRouter);
app.listen(3000, () => {
    console.log('server listening on portion');
});