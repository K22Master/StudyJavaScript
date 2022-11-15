<template>
  <div class="testColor">
    <button @click="isShow = !isShow">点击</button>
    <transition appear>
      <h2 v-show="isShow">Hello Test</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: "MyTest",
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
h2 {
  background-color: aquamarine;
  width: 50%;
}
/* 离开时激活 */
.v-leave-active {
  animation: identifier 1s reverse;
}
/* 进入时激活 */
.v-enter-active {
  animation: identifier 1s;
}

@keyframes identifier {
  from {
    transform: translateX(-100%) translateY(-100%);

  }
  to {
    transform: translateX(0px) translateY(0px);

  }
}
</style>