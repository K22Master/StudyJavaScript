<!-- 组件的结构 -->
<template>
    <div class="demo">
        <h2>学生姓名：{{studentName}}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="showName">点我</button>
    </div>
</template>
<script>
// 组件交互的代码
export default {
    name:'StudentComponent',
        data(){
            return{
                studentName: '张三',
                age: 18
            };
        },
        methods: {
            showName(){
                alert(this.studentName);
            }
        },
    };
</script>
<style>
/* 组件样式 */
.demo{
    background-color:red;
}
</style>