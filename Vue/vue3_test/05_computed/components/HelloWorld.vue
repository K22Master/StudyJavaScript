<template>
  <h1>一个人的信息</h1>
  姓：<input type="text" v-model="person.firstName" /> <br />
  名：<input type="text" v-model="person.lastName" /><br />
  <span> 姓名：{{ person.name }} </span><br />
  姓名：<input type="text" v-model="person.name" />
</template>

<script>
// 导入reactive函数,导入computed函数
import { reactive, computed } from "vue";
export default {
  name: "HelloWorld",
  setup() {
    let person = reactive({
      lastName: "三",
      firstName: "张",
    });
    // 计算属性——简写形式（未考虑计算属性的修改情况）
    // person.name = computed(() => {
    //   return person.firstName + "-" + person.lastName;
    // });
    // 计算属性——完整形式（考虑计算属性的修改情况）
    person.name = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(value) {
        const nameArr = value.split("-");
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      },
    });
    // 返回一个对象(常用)
    return {
      person,
    };
  },
};
</script>


