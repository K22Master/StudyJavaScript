// 导入crypto模块
const crypto = require('crypto');
// 封装加密算法函数
function encrypt(key, iv, data) {
    // 创建加密         加密算法格式  传入自己的key和iv
    let dep = crypto.createCipheriv("aes-128-cbc", key, iv);
    // data存放要加密的数据，binary表示输入的格式以二进制的形式，hex表示以十六进制输出
    // 最后加上final方法表示加密结束
    return dep.update(data, 'binary', 'hex') + dep.final('hex');
}

// 分装解密算法函数
function decrypt(key, iv, data) {
    // 将数据先从十六进制转换为buffer格式，然后再转换成二进制
    data = Buffer.from(data, 'hex').toString('binary');
    // 创建解密        解密算法格式要与加密算法格式一样，传入key和iv
    let dep = crypto.createDecipheriv("aes-128-cbc", key, iv);
    // 将数据从二进制转为utf8形式
    // 最后加上final表示解密结束
    return dep.update(data, 'binary', 'utf8') + dep.final('utf8');
}

// key和iv都得设置为16位
let key = 'Fuzi1234567890WS';
let iv = 'WS1234567890Fuzi';

let dataString = "JK爱JK，喜欢跳舞！";
let requestText = encrypt(key, iv, dataString);
console.log(requestText);
let decryptString = decrypt(key, iv, requestText);
console.log(decryptString);