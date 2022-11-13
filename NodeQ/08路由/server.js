const http = require('http');
// 导入route的内容
const route = require('./router.js');
// 创建一个服务器
http.createServer((req, res) => {
    // 获取路径
    const myURL = new URL(req.url, 'http://127.0.0.1');
    // 获取路径
    const pathName = myURL.pathname;
    // 调用了封装的路由函数
    route(res, pathName);
    res.end();
}).listen(3000, () => {
    console.log('server start');
});