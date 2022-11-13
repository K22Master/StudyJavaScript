<!-- 组件的结构 -->
<template>
    <div class="demo">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="showName">点我</button>
    </div>
</template>
<script>
// 组件交互的代码
    const school=Vue.extend({
        name:'School',
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
    });
    export default school;
</script>
<style>
/* 组件样式 */
.demo{
    background-color:aquamarine;
}
</style>