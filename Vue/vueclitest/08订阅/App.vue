<template>
  <div>
    <h2 ref="title">欢迎来到{{msg}}</h2>
    <Jek name="Jek" :age="18" sex="女"></Jek>
    <Student></Student>
  </div>
</template>

<script>
    import Student from './components/Student.vue';
    // 引入组件
    import Jek from "./components/Jek.vue";
    export default {
    name:'App',
    data(){
      return{
      msg:'Vue'
      };
    },
    // 注册组件
    components:{
        Jek,
        Student
    }
}
</script>

<style>
  .title{
    color: wheat;
  }
</style>