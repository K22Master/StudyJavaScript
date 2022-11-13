const express = require('express');

// 路由级中间件
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Home');
})
// router.get('/list', (req, res) => {
//     res.send('list');
// })
module.exports = router;