<!-- 组件的结构 -->
<template>
    <div class="demo1">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="showName">点我</button>
    </div>
</template>
<script>
// 组件交互的代码
export default {
        name:'SchoolComponent',
        data(){
            return{
                schoolName: '湖北工厂',
                address: '孝感'
            };
        },
        methods: {
            showName(){
                alert(this.schoolName);
            }
        },
    };
    
</script>
<style>
/* 组件样式 */
.demo1{
    background-color:aquamarine;
}
</style>