var timer;
// 定义一个函数，用于获取指定元素的当前样式
        // 参数：obj 要获取样式的元素，name获取的样式名
        function getStyle(obj,name){
            if(window.getComputedStyle){
                return getComputedStyle(obj,null)[name];
            }else{
                return obj.currentStyle[name];
            }
        };
        // obj要执行的对象
        // attr：要执行动画的样式：top、left、width
        // target：要执行动画的目标位置
        // speed：移动速度（正数右动，负数左动）
        // callback:回调函数，这个函数将会在动画执行完成后执行
        function move(obj,attr,target,speed,callback){
            var current=parseInt(getStyle(obj,attr));
            if(current>target){
                speed=-speed;
            }
            clearInterval(obj.timer);
            obj.timer=setInterval(function(){
                // 获取要移动对象的原先left值
                var oldValue=parseInt(getStyle(obj,attr));
                // 在旧值的基础上增加减少
                var newValue=oldValue+speed;
                // 判断newValue是否到达指定值
                if(speed>0 && newValue>target||speed<0 && newValue<target){
                    newValue=target;
                }
                // 将新值设置给obj
                obj.style[attr]=newValue+"px";
                if(newValue==target){
                    clearInterval(obj.timer);
                    callback&&callback();
                }
            },30);
        }