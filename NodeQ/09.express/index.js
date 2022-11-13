const { application } = require('express');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});
// 数组形式
let fn1 = function (req, res, next) {
    console.log('验证token');
    const isValid = true;
    if (isValid) {
        // 继续下一步
        next();
    } else {
        // 如果不成功则不会走后面的代码，直接返回一个报错
        res.send('404s');
    }

}
// 应用级中间件
app.use(fn1);
let fn2 = function (req, res) {
    res.send({ list: [1, 2, 3, 4] });
}
app.get('/login', [fn2]);
app.listen(3000, () => {
    console.log('listening on port 3000');
});