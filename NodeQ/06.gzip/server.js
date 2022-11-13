const http = require('http');
const fs = require('fs');
// 引入zlib模块
const zlib = require('zlib');
// 调用zlib模块，创建gzip
const gzip = zlib.createGzip();

const server = http.createServer();

server.on('request', (req, res) => {
    const rs = fs.createReadStream('./a.txt');
    // 需要设置响应头"Content-Encoding":"gzip"，不然浏览器无法识别压缩代码
    res.writeHead(200, { "Content-Type": "application/json;charset=utf-8", "Content-Encoding": "gzip" });
    // 将数据先传给gzip中，进行过压缩，然后传给res
    rs.pipe(gzip).pipe(res);
    // rs.pipe(res);
});

server.listen(3000, () => {
    console.log("server start");
});