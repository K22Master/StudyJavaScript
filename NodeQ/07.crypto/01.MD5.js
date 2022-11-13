// 导入crypto模块
const crypto = require('crypto');
// 创建hash算法，以md5形式(其他形式，输入相应的形式名)
const hash = crypto.createHash('md5');
// 加密数据
hash.update("123141");
hash.update("AAAA1");
// 通过十六进制形式读取数据
console.log(hash.digest('hex'));