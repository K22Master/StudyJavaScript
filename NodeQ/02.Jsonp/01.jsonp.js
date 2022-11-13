const http = require('http');
const url = require('url');
const myServer = http.createServer((req, res) => {
    // 获取url中的参数
    let urlobj = url.parse(req.url, true);
    // 通过query获取对应键值的数据
    let callbakcName = urlobj.query.callback;
    switch (urlobj.pathname) {
        case "/api/user":
            // 动态传入到要返回的数据中
            res.end(`${callbakcName}(${JSON.stringify(
                {
                    name: 'Fuzi',
                    age: 18
                }
            )})`);
            break;
        default: res.end("404");
    }
});
myServer.listen(3001, () => {
    console.log("3001 Server Start!");
});