// var that;
// class Tab {
//     constructor(id) {
//         // 获取元素
//         that = this;
//         this.main = document.querySelector(id);
//         this.add = this.main.querySelector('.tabadd');
//         // li的父元素
//         this.ul = this.main.querySelector('.fisrstnav ul:first-child');
//         // section 父元素
//         this.fsection = this.main.querySelector('.tabscon');
//         this.init();
//     }
//     init() {
//             this.updateNode();
//             // init 初始化操作让相关的元素绑定事件
//             this.add.onclick = this.addTab;
//             for (var i = 0; i < this.lis.length; i++) {
//                 this.lis[i].index = i;
//                 this.lis[i].onclick = this.toggleTab;
//                 this.remove[i].onclick = this.removeTab;
//                 this.spans[i].ondblclick = this.editTab;
//                 this.sections[i].ondblclick = this.editTab;

//             }
//         }
//         // 因为我们动态添加元素 需要从新获取对应的元素
//     updateNode() {
//             this.lis = this.main.querySelectorAll('li');
//             this.sections = this.main.querySelectorAll('section');
//             this.remove = this.main.querySelectorAll('.icon-guanbi');
//             this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
//         }
//         // 1. 切换功能
//     toggleTab() {
//             // console.log(this.index);
//             that.clearClass();
//             this.className = 'liactive';
//             that.sections[this.index].className = 'conactive';
//         }
//         // 清除所有li 和section 的类
//     clearClass() {
//             for (var i = 0; i < this.lis.length; i++) {
//                 this.lis[i].className = '';
//                 this.sections[i].className = '';
//             }
//         }
//         // 2. 添加功能
//     addTab() {
//             that.clearClass();
//             // (1) 创建li元素和section元素 
//             var random = Math.random();
//             var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
//             var section = '<section class="conactive">测试 ' + random + '</section>';
//             // (2) 把这两个元素追加到对应的父元素里面
//             that.ul.insertAdjacentHTML('beforeend', li);
//             that.fsection.insertAdjacentHTML('beforeend', section);
//             that.init();
//         }
//         // 3. 删除功能
//     removeTab(e) {
//             e.stopPropagation(); // 阻止冒泡 防止触发li 的切换点击事件
//             var index = this.parentNode.index;
//             console.log(index);
//             // 根据索引号删除对应的li 和section   remove()方法可以直接删除指定的元素
//             that.lis[index].remove();
//             that.sections[index].remove();
//             that.init();
//             // 当我们删除的不是选中状态的li 的时候,原来的选中状态li保持不变
//             if (document.querySelector('.liactive')) return;
//             // 当我们删除了选中状态的这个li 的时候, 让它的前一个li 处于选定状态
//             index--;
//             // 手动调用我们的点击事件  不需要鼠标触发
//             that.lis[index] && that.lis[index].click();
//         }
//         // 4. 修改功能
//     editTab() {
//         var str = this.innerHTML;
//         // 双击禁止选定文字
//         window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
//         // alert(11);
//         this.innerHTML = '<input type="text" />';
//         var input = this.children[0];
//         input.value = str;
//         input.select(); // 文本框里面的文字处于选定状态
//         // 当我们离开文本框就把文本框里面的值给span 
//         input.onblur = function() {
//             this.parentNode.innerHTML = this.value;
//         };
//         // 按下回车也可以把文本框里面的值给span
//         input.onkeyup = function(e) {
//             if (e.keyCode === 13) {
//                 // 手动调用表单失去焦点事件  不需要鼠标离开操作
//                 this.blur();
//             }
//         }
//     }

// }
// new Tab('#tab');

// 定义that的原因是,我们在函数中使用this时,它指向的是被调用的本身,不是全局的
var that;
class Tab{
    constructor(id){
        that=this;
        // 获取元素
        this.main=document.querySelector(id);
         // 获取ul标签
        this.ul = that.main.querySelector('ul');
         // 获取tabscon标签
        this.tabscon=that.main.querySelector('.tabscon');
        // 获取增加
        this.addbtn=this.main.querySelector('.tabadd');
        // 调用初始化函数
        this.init();
    }
    // init 初始化操作让相关元素绑定
    init(){
        // 每次初始化前获取所有的li和section
        this.updateNode();
        // 绑定增加函数
        this.addbtn.onclick=this.addTab;
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].index=i;
            // 调用切换功能函数
            this.lis[i].onclick=this.toggleTab;
            // 给每个关闭按钮绑定删除函数
            this.removebtn[i].onclick=this.removeTab;
            // 给么给span添加双击事件
            this.spans[i].ondblclick=this.editTab;
            // 给么给sections添加双击事件
            this.sections[i].ondblclick=this.editTab;
        }
    }
    // 切换功能
    toggleTab(){
        that.claerClass();
        this.className='liactive';
        that.sections[this.index].className='conactive';
    }
    // 动态获取数据,每次调用完后,都熬重新获取一下
    // 获取所有的li和section
    updateNode(){
        // 获取所有的li标签
        this.lis=this.main.querySelectorAll('li');
        // 获取所有的section标签
        this.sections=this.main.querySelectorAll('section');
        // 获取删除
        this.removebtn=this.main.querySelectorAll('.icon-guanbi');
        // 获取所有li内的span标签
        this.spans=this.main.querySelectorAll('.fisrstnav ul li span:first-child');
    }
    // 清楚样式函数
    claerClass(){
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].className='';
            this.sections[i].className='';
        }
    }
    // 添加功能
    addTab(){
        that.claerClass();
        // 创建新的li标签
        var li = '<li class="liactive"><span>Tab</span><span class="iconfont icon-guanbi"></span></li>'
        // 创建新的section标签
        var section='<section class="conactive">测试测试测试</section>';
        // 将新的li添加到ul内
        that.ul.insertAdjacentHTML('beforeend',li);
        // 将新的section添加
        that.tabscon.insertAdjacentHTML('beforeend',section);
        // 添加完新的标签后,重新初始化一下
        that.init();
    }
    // 删除功能
    removeTab(e){
        // 触发点击事件会产生冒泡,所以要阻止冒泡
        e.stopPropagation();
        // 获取其父元素的下标
        var index = this.parentNode.index;
        // 通过remove删除标签
        that.lis[index].remove();
        that.sections[index].remove();
        // 删除完后重新获取所有标签
        that.init();
        // 进行判断,如果我们删除的不是点击事件选中的li,则原来选中的li保持不变
        if(document.querySelector('.liactive')) return;
        // 当我们删除了选中状态li时,要进行判断,是否为第一个,为第一个则删除,并将新的第一个设置为选中状态
        index===0?index=0:index--;
        // index--;
        that.lis[index] && that.lis[index].click();

    }
    // 修改功能
    editTab(){
        // 定义一个字符串存储span原先的数据
        var str=this.innerHTML;
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        // 修改span的内容,使用innerHTML,其覆盖掉原先的内容
        this.innerHTML='<input type="text" />';
        // 获取input按钮
        var input= this.children[0];
        // 设置input按钮的默认值为span之前的值
        input.value=str;
        // 设置input按钮的文字处于选中状态
        input.select();
        // 当文本框失去焦点时,把文本框内的值赋值给span
        input.onblur=function(){
            this.parentNode.innerHTML=this.value;
        }
        // 通过回车也可以把文本框里面的值给span
        input.onkeyup=function(e){
            if(e.keyCode===13){
                this.blur();
            }
        }
        
    }
}
new Tab('#tab');