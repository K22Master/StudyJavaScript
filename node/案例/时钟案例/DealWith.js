const fs = require('fs');
const path = require('path');
// 创建匹配style标签和script标签的正则表达式
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;
fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
    if (!err) {
        resolveCSS(data);
        resolveJS(data);
    }
});

function resolveCSS(htmlData) {
    // 通过正则表达式，将对应的数据提取出来，会形成一个新的数组
    const res = regStyle.exec(htmlData);
    //  将提出来的数据进行替换，消除style标签
    const newStr = res[0].replace('<style>', '').replace('</style>', '');
    fs.writeFile(path.join(__dirname, 'index.css'), newStr, (err, data) => {
        if (!err) {
            console.log('CSS写入成功！！！');
        }
    });
}
function resolveJS(htmlData) {
    // 通过正则表达式，将对应的数据提取出来，会形成一个新的数组
    const res = regScript.exec(htmlData);
    //  将提出来的数据进行替换，消除style标签
    const newStr = res[0].replace('<script>', '').replace('</script>', '');
    fs.writeFile(path.join(__dirname, 'index.js'), newStr, (err, data) => {
        if (!err) {
            console.log('Js写入成功！！！');
        }
    });
}