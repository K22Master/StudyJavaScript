<template>
  <div>
    <h2 ref="title">欢迎来到{{ msg }}</h2>
    <Test></Test>
    <Test2></Test2>
    <Test3></Test3>
  </div>
</template>

<script>
import Test from "./components/Test.vue";
import Test2 from "./components/Test2.vue";
import Test3 from "./components/Test3.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "Vue",
    };
  },
  // 注册组件
  components: {
    Test,
    Test2,
    Test3,
  },
};
</script>

<style>
.title {
  color: wheat;
}
</style>