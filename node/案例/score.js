let fs = require('fs');
fs.readFile('file.txt', 'utf8', function (err, data) {
    if (!err) {
        console.log('读取成功\n' + data);
        let arr = data.split(' ');
        let resarr = [];
        arr.forEach(item => resarr.push(item.replace('=', '：')));
        let newarr = resarr.join('\n');
        fs.writeFile('score.txt', newarr, 'utf8', function (err, data) {
            if (!err) {
                console.log('已成功\n');
            }
        });
    }
});