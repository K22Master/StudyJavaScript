// 导入数据库操作模块
const { regQuery } = require('../db/reguser');
const { loginQuery } = require('../db/login');
exports.reguserVal = function (data, res) {
    console.log(data);
    // 做一次简单验证
    if (!data.username || !data.pwd) {
        return res.send({
            status: 101,
            msg: "用户名或密码不能为空"
        });
    }
    // 创建查询sql语句
    const sql = "select * from test_user where uname=?";
    // 数据进行验证
    regQuery(sql, data, res);
}
exports.loginVal = function (data, res) {
    console.log(data);
    // 做一次简单验证
    if (!data.username || !data.pwd) {
        return res.send({
            status: 101,
            msg: "用户名或密码不能为空"
        });
    }
    // 定义查询语句获取用户信息
    const sql = "select * from test_user where uname=?";
    loginQuery(sql, data, res);
}