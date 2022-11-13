const express = require('express');

// 路由级中间件
const router = express.Router();

router.get('/', (req, res) => {
    res.send('List');
})
module.exports = router;