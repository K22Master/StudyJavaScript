const express = require('express');
const session = require('express-session');
const app = express();

// 配置session中间件
app.use(
    session({
        secret: 'Fuzi',
        resave: false,
        saveUninitialized: true,
    })
);

