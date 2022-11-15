<!-- 组件的结构 -->
<template>
  <div class="demo">
    <h2>学生姓名：{{ studentName }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="showName">点我</button>
    <button @click="sendName">点击2</button>
  </div>
</template>
<script>
import pubsub from "pubsub-js";

// 组件交互的代码
export default {
  name: "StudentComponent",
  data() {
    return {
      studentName: "张三",
      age: 18,
    };
  },
  methods: {
    showName() {
      alert(this.studentName);
    },

    sendName() {
      // 发送数据，使用自定义事件
      //   this.$bus.$emit("getStudentName", this.studentName);
      //   发布订阅
      pubsub.publish("getStudentName", this.studentName);
    },
  },
};
</script>
<style scoped>
/* 组件样式 */
.demo {
  background-color: red;
}
</style>