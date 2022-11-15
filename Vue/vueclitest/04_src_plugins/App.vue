<template>
  <div>
    <h2 ref="title">欢迎来到{{msg}}</h2>
    <button @click="showDom" ref="btn">点击</button>
    <Jek name="Jek" :age="18" sex="女"></Jek>
    <Jek name="Tom" sex="男"></Jek>
  </div>
</template>

<script>
    // 引入组件
    import Jek from "./components/Jek.vue";
    export default {
    name:'App',
    data(){
      return{
      msg:'Vue'
      };
    },
    methods:{
      showDom(){
      }
    },
    // 注册组件
    components:{
      Jek
    }
}
</script>

<style>

</style>