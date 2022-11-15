<template>
  <div class="testColor">
    <button @click="isShow = !isShow">点击</button>
    <transition appear name="hello">
      <h2 v-show="isShow">Hello Test</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: "MyTest2",
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
/* .v-leave-active {
  animation: identifier 1s reverse;
} */
/* 进入时激活 */
/* .v-enter-active {
  animation: identifier 1s;
} */

/* @keyframes identifier {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
} */
/* 使用过度效果 */
/* 进入的起点、和离开的终点是一直的 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}
/* 设置中间过渡时间和速度 */
.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}
/* 进入的终点，和离开的起点是一直的 */
.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}
</style>