<template>
  <button @click="isShowcpt=!isShowcpt">点击显示/隐藏</button>
  <HelloWorld v-if="isShowcpt"></HelloWorld>
</template>

<script>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: { HelloWorld },
  setup() {
    let isShowcpt = ref(true);
    return {
      isShowcpt,
    };
  },
};
</script>


