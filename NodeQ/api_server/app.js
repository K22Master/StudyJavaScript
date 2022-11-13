// 导入express框架
const express = require('express');
// 导入config文件
const config = require('./util/config');
// 导入cors中间件解决跨域
const cors = require('cors');
const app = express();
// 将cors注册
app.use(cors());
// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// 导入解密token模块
const expressJWT = require('express-jwt');
// 导入user路由模块
const userRouter = require('./router/user');
app.use(expressJWT({ secret: config.secretkey }).unless({ path: [/^\/api\//] }));
// 注册user模块
app.use('/api', userRouter);

app.get('/', (req, res) => res.send({ status: 200, msg: 'hello' }));
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        return res.send({
            status: 105,
            msg: '身份认证失败'
        });
    }
});
app.listen(3000, () => console.log(`Example app listening on port 3000!`));