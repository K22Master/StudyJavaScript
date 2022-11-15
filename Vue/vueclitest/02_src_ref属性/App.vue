<template>
  <div>
    <!-- <school></school>
    <student></student> -->
    <h2 ref="title">欢迎来到{{msg}}</h2>
    <button @click="showDom" ref="btn">点击</button>
    <Tom ref="Tom"></Tom>
  </div>
</template>

<script>
    // 引入组件
    // import school from './components/School.vue';
    // import student from './components/Student.vue';
    import Tom from './components/Tom.vue';
    export default {
    name:'App',
    data(){
      return{
      msg:'Vue'
      };
    },
    methods:{
      showDom(){
        console.log(this.$refs.title);//真实DOM元素
        console.log(this.$refs.btn);//真实DOM元素
        console.log(this.$refs.Tom);//School组件包含的实例对象
      }
    },
    // 注册组件
    components:{
        // school,
        // student,
        Tom
    }
}
</script>

<style>

</style>