const express = require('express');
// 导入jwt的两个包
const jwt = require('jsonwebtoken'); //用于加密
const expressJWT = require('express-jwt'); //用于解密
const router = express.Router();

const secretKey = 'Fuzi~%@@%1006';

router.get('/', (req, res) => {
    res.send("Login");
});
router.get('/user', (req, res) => {
    const query = req.query;
    res.send({
        status: 200,
        msg: 'get请求成功！',
        data: query,
    });
});
// router.post('/user', (req, res) => {
//     if (req.body.name !== 'admin' || req.body.pwd != '123456') {
//         return res.send({
//             status: 404,
//             msg: '登录失败！'
//         });
//     }
//     req.session.user = req.body;
//     req.session.islogin = true;
//     const body = req.body;
//     res.send({
//         status: 200,
//         msg: 'post请求成功！',
//         data: body,
//     });
// });

router.post('/user', (req, res) => {
    if (req.body.name !== 'admin' || req.body.pwd != '123456') {
        return res.send({
            status: 404,
            msg: '登录失败！'
        });
    }
    const tokenStr = jwt.sign({ name: req.body.name }, secretKey, { expiresIn: '30s' });
    res.send({
        status: 200,
        msg: 'post请求成功！',
        token: tokenStr,
    });
});

router.get('/username', (req, res) => {
    if (!req.session.islogin) {
        return res.send({
            status: 404,
            msg: '未登录！'
        });
    }
    res.send({
        status: 200,
        msg: '访问成功！',
        data: req.session.user,
    });
});
// 将路由暴露出去
module.exports = router;

