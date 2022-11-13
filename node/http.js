// 导入模块
const http = require('http');
// 创建web服务器实例
const server = http.createServer();
// 为服务器实例绑定request事件，监听客户端的请求
server.on('request', (req, res) => {
    console.log('request');
});
// 启动服务器
server.listen(8080, function () {
    console.log('listening on port 8080');
});
