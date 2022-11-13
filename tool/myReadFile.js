// 封装一个函数用来读取文件
function myReadFile(path) {
    return new Promise((resolve, reject) => {
        require('fs').readFile(path, (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    });
}