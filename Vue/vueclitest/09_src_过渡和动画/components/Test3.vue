<template>
  <div class="testColor">
    <button @click="isShow = !isShow">点击</button>
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__fadeInDown"
      leave-active-class="animate__fadeOut"
    >
      <h2 v-show="isShow" key="1">Hello Test3</h2>
      <h2 v-show="!isShow" key="2">Hello Test3-1</h2>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "MyTest3",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
.testColor {
  height: 200px;
  background-color: burlywood;
}
</style>