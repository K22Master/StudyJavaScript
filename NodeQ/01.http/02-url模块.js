// 导入http模块
const http = require("http");
const url = require("url");
// 创建服务器
// req 接收浏览器传递的参数
// res 返回个浏览器的内容
http.createServer((req, res) => {
    // 设置响应头
    let pathname = url.parse(req.url).pathname;
    // 通过url内置模块，可以拆解出url路径和参数
    let queryobj = url.parse(req.url, true).query;
    console.log(queryobj);
    console.log(pathname);
    res.writeHead(ReturnStatus(pathname), { "Content-Type": "text/html;charset=utf-8" });
    res.write(ReturnHtml(pathname));
    res.end();
}).listen(3000, () => {
    console.log("3000 Server Start!");
});

// 将状态码进行封装，如果包含指定路径，为200，否则为404
function ReturnStatus(url) {
    let arr = ['/list', '/home'];
    return arr.includes(url) ? 200 : 404;

}

// 将路径进行封装，并且进行判断，如果有指定路径，则跳转到指定路径，没有则跳转默认路径
function ReturnHtml(url) {
    switch (url) {
        case '/list':
            return `
    <html>
        <h1>List</h1>
        <p>大多数</p>
    </html>
    `;
        case '/home':
            return `
    <html>
        <h1>Home</h1>
    </html>
    `
        default: return `
    <html>
        <h1>Error Url</h1>
    </html>
    `
    }
}
