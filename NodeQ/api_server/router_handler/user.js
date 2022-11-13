// 导入注册验证模块
const { reguserVal, loginVal } = require('../validation/user');
exports.regUser = (req, res) => {
    // 获取服务器传过来的数据
    const userinfo = req.body;
    // 调用注册验证函数
    reguserVal(userinfo, res);
}
exports.login = (req, res) => {
    const userinfo = req.body;
    loginVal(userinfo, res)
}