const express = require('express');
// 导入路由模块
const router = express.Router();
// 导入路由处理模块
const user_handler = require('../router_handler/user');
router.post('/login', user_handler.login);
router.post('/reguser', user_handler.regUser);
// 将路由共享出去
module.exports = router;