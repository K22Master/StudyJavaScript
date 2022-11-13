// 导入util模块
const util = require('util');
// 导入fs模块
const fs = require('fs');
// 返回结构就是promise对象
let myReadFile = util.promisify(fs.readFile);
myReadFile(path).then(val => {
    console.log(val);
});