// // 引入fs模块
// let fs = require('fs');
// // 打开文件
// fs.open('hello2.txt', 'w', function (err, fd) {
//     // 判断是否出差
//     if (!err) {
//         // 如果没有错误就开始写入操作
//         fs.write(fd, '写入成功！！！', function (err) {
//             if (!err) {
//                 console.log('写入陈工1');
//             }
//             // 关闭文件
//             fs.close(fd, function (err) {
//                 if (!err) {
//                     console.log('文件已关闭！');
//                 }
//             });
//         })
//     } else {
//         console.log(err);
//         // 关闭文件
//         fs.close(fd, function (err) {
//             if (!err) {
//                 console.log('文件已关闭！');
//             }
//         });
//     }
// });

// //  引入fs模块
// let fs = require('fs');

// // 写入文件
// fs.writeFile(path, '这是简单写入（异步方式）', function (err) {
//     if (!err) {
//         console.log('文件写入成功！');
//     } else {
//         console.log(err);
//     }
// });

// 引入fs模块
let fs = require('fs');
// // 创建流写入
// let ws = fs.createWriteStream('hello3.txt');
// ws.once('open', function () {
//     console.log('ws open');
// });
// ws.once('close', function () {
//     console.log('ws close');
// });
// ws.write('1111111');
// ws.write('2222222');
// ws.close();
// 简单读取
// fs.readFile('hello3.txt', function (err, data) {
//     if (!err) {
//         console.log(data.toString());
//     }
// });

// 流式文件读取
let rs = fs.createReadStream('hello3.txt');
let ws = fs.createWriteStream('holle3.txt');

rs.pipe(ws);