// 导入crypto模块
const crypto = require('crypto');
// 创建hash算法，Hmac算法形式,需要传入一个密钥名称
// 当密钥名称发生改变时，则相同的数据，加密也会改变值
const hash = crypto.createHmac('md5', 'zi');
hash.update('1234313');
console.log(hash.digest('hex'));