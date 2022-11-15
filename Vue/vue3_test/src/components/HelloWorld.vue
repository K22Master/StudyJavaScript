<template>
  <h2>当前计算结果为：{{ sum }}</h2>
  <button @click="sum++">加1</button>
  <h2>当前鼠标作别为：x={{ poine.x }}，y={{ poine.y }}</h2>
</template>

<script>
// 导入reactive函数,导入computed函数
import { ref } from "vue";
import usePoine from "@/hooks/usePoine";
export default {
  name: "HelloWorld",
  setup() {
    let sum = ref(0);
    let poine = usePoine();
    return {
      sum,
      poine,
    };
  },
};
</script>
