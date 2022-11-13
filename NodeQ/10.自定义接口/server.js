const express = require('express');
const cors = require('cors');
// 导入session包
// const session = require('express-session');

// 导入jwt的两个包
const jwt = require('jsonwebtoken'); //用于加密
const expressJWT = require('express-jwt'); //用于解密

const app = express();

// 配置解析参数的中间件
app.use(express.urlencoded({ extended: false }));
// 使用cors第三方组件库解决跨域
app.use(cors())

// 配置session中间件
// app.use(
//     session({
//         secret: 'Fuzi',
//         resave: false,
//         saveUninitialized: true,
//     })
// );

// 导入路由模块
const loginrouter = require('./router/login');

app.use('/login', loginrouter);


app.listen(3000, () => {
    console.log('server 3000 started');
});