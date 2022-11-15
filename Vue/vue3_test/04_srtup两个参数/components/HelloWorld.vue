<template>
  <h1>一个人的信息</h1>
  <h1>姓名：{{ person.name }}</h1>
  <h1>年龄：{{ person.age }}</h1>
  <button @click="test">测试调用app的hello事件</button>
</template>

<script>
// 导入reactive函数
import { reactive } from "vue";
export default {
  name: "HelloWorld",
  props: ["msg", "school"],
  emits: ["hello"],
  setup(props, context) {
    // console.log("---setup---+", props);
    // console.log("----setup---+", context);
    console.log("@@@@", context.slots);
    let person = reactive({
      name: "张三",
      age: 18,
    });
    function test() {
      context.emit("hello", 99);
    }
    // 返回一个对象(常用)
    return {
      person,
      test,
    };
  },
};
</script>


