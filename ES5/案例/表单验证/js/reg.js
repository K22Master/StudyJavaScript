window.onload = function () {
    // 手机号表达式
    var regtel = /^1[3|4|5|7|8]\d{9}$/;
    // QQ号表达式
    var regqq = /^[1-9]\d{4,}$/;
    // 昵称表达式
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/;
    // 验证码表达式
    var regmsg = /^\d{6}$/;
    // 密码表达式
    var regpwd = /^[a-zA-Z0-9_-]{6,16}$/;
    // 获取手机号的输入框
    var tel = document.querySelector('#tel');
    // 获取QQ的输入框
    var qq = document.querySelector('#qq');
    // 获取昵称的输入框
    var nc = document.querySelector('#nc');
    // 获取验证码输入框
    var msg = document.querySelector('#msg');
    // 获取密码输入框
    var pwd = document.querySelector('#pwd');
    // 获取确认密码
    var surepwd = document.querySelector('#surepwd');
    // 手机号调用
    regexp(tel, regtel);
    // qq调用
    regexp(qq, regqq);
    // 昵称调用
    regexp(nc, regnc);
    // 验证码调用
    regexp(msg, regmsg);
    // 密码调用
    regexp(pwd, regpwd);
    // 将所有的验证封装成一个函数
    // 传入两个参数，一个为某个元素，二个为表达式
    function regexp(ele, reg) {
        ele.onblur = function () {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = `<i class="success_icon"></i> 恭喜您输入正确`;
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请从新输入 ';
            }
        };
    }
    // 确认密码的验证
    surepwd.onblur = function () {
        if (this.value === pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = `<i class="success_icon"></i> 恭喜您输入正确`;
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次密码不一样 ';
        }
    };
}
// var regtel = /^1[3|4|5|7|8]\d{9}$/; // 手机号码的正则表达式
// var regqq = /^[1-9]\d{4,}$/; // 10000
// var regnc = /^[\u4e00-\u9fa5]{2,8}$/;
// var regmsg = /^\d{6}$/;
// var regpwd = /^[a-zA-Z0-9_-]{6,16}$/;
// var tel = document.querySelector('#tel');
// var qq = document.querySelector('#qq');
// var nc = document.querySelector('#nc');
// var msg = document.querySelector('#msg');
// var pwd = document.querySelector('#pwd');
// var surepwd = document.querySelector('#surepwd');
// regexp(tel, regtel); // 手机号码
// regexp(qq, regqq); // qq号码
// regexp(nc, regnc); // 昵称
// regexp(msg, regmsg); // 短信验证
// regexp(pwd, regpwd); // 密码框
// // 表单验证的函数
// function regexp(ele, reg) {
//     ele.onblur = function () {
//         if (reg.test(this.value)) {
//             // console.log('正确的');
//             this.nextElementSibling.className = 'success';
//             this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
//         } else {
//             // console.log('不正确');
//             this.nextElementSibling.className = 'error';
//             this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请从新输入 ';
//         }
//     }
// };

// surepwd.onblur = function () {
//     if (this.value == pwd.value) {
//         this.nextElementSibling.className = 'success';
//         this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
//     } else {
//         this.nextElementSibling.className = 'error';
//         this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次密码输入不一致';

//     }
// }
