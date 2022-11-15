<template>
  <div>
    <h2 ref="title">欢迎来到{{ msg }}</h2>
    <button @click="forward">前进</button>
    <button @click="back">后退</button>
    <div style="background-color: red; height: 300px">
      <div class="left">
        <router-link to="/about" class="display-block">About</router-link>
        <router-link to="/home" class="display-block">Home</router-link>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "Vue-Router",
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
  },
  // 注册组件
  components: {},
};
</script>

<style>
.title {
  color: wheat;
}
.box,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
.left {
  float: left;
}
.right {
  float: right;
}
.display {
  display: block;
}
</style>