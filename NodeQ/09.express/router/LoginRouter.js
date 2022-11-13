const express = require('express');

// 路由级中间件
const router = express.Router();

router.get('/', (req, res) => {
    // get请求获取参数
    console.log(req.query);
    res.send('Login');
})
router.post('/', (req, res) => {
    // post请求获取参数
    console.log(req.body);
    res.send({ ok: 1 });
})
router.get('/loginS', (req, res) => {
    res.send('LoginS');
})
module.exports = router;