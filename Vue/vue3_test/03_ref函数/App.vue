<template>
  <h1>一个人的信息</h1>
  <h1>姓名：{{ name }}</h1>
  <h1>年龄：{{ age }}</h1>
  <h1>职业：{{ info.type }}</h1>
  <h1>薪资：{{ info.money }}</h1>
  <button @click="sayHello">点击</button>
  <button @click="updateName">修改</button>
</template>

<script>
// import { h } from "vue";
// 导入ref函数
import { ref } from "vue";
export default {
  name: "App",
  components: {},
  // 测试setup，不考虑响应式
  setup() {
    // 定义数据，通过ref实现响应式
    let name = ref("张三");
    let age = ref(18);
    let info = ref({
      type: "前端",
      money: "40K",
    });
    // 定义方法
    function sayHello() {
      // 使用ref的基本变量，就必须通过.value获取值
      alert(`我叫${name.value}，今年${age.value}岁了`);
    }
    function updateName() {
      // 修改时，也是通过.value获取值
      name.value = "张三llll";
      age.value = 119;
      // 对象中的属性名直接获取
      info.value.type = "后端";
    }
    // 返回一个对象(常用)
    return {
      name,
      age,
      info,
      sayHello,
      updateName,
    };
    // 返回一个渲染函数（渲染式）
    // return () => h("h1", "尚硅谷");
  },
};
</script>


