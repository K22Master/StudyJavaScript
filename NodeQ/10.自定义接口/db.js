// 导入mysql数据库
const mysql = require('mysql2');
// 简历链接
const db = mysql.createPool({
    host: '127.0.0.1',//表示数据库链接的地址
    user: 'root',//登录数据库的账号
    password: '123456',//登录数据库的密码
    database: 'xsgl',//具体操作某个数据库
});
// 测试是否能够正常工作吗
// db.query('select 1', (err, res) => {
//     if (err) return console.log('@@' + err.message);
//     console.log(res);
// });
// 查询
// const sql = "select * from user";
// db.query(sql, (err, res) => {
//     if (err) return console.log(err.message);
//     //如果执行了查询语句，则返回的是一个数组
//     console.log(res);
// });
// 增加
// 定义一条新数据
// const user = { name: "Fuzi", age: 17 };
// // 定义执行增加的sql语句，通过？进行占位
// const sql = "insert into user (name,age) values (?,?)";
// // 执行sql语句，其后使用数组进行传值
// db.query(sql, [user.name, user.age], (err, res) => {
//     // 有错则表示执行sql语句失败
//     if (err) return console.log(err.message);
//     // 否则执行语句成功，会返回一个对象，对象中包含一个属性affectedRows，等于1则成功
//     if (res.affectedRows === 1) {
//         console.log("插入成功！");
//     }
// });
// 更新
// const user = { id: 1, name: '张三', age: 20 };
// // 定义新的sql语句
// const sql = 'update user set name=?,age=? where id=?';
// // 执行sql语句时，使用数组的依次按照占位符形式指定具体的值
// db.query(sql, [user.name, user.age, user.id], (err, res) => {
//     if (err) return console.log(err.message);
//     if (res.affectedRows === 1) {
//         console.log("更新成功！");
//     }
// });
// 删除
const id = 2;
const sql = 'delete from user where id=?';
db.query(sql, id, (err, res) => {
    if (err) return console.log(err.message);
    if (res.affectedRows === 1) {
        console.log('删除成功！');
    }
});