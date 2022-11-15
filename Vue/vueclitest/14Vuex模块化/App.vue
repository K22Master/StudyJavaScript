<template>
  <div>
    <h2 ref="title">欢迎来到{{ msg }}</h2>
    <Category></Category>
    <hr />
    <!-- <Person></Person> -->
  </div>
</template>

<script>
import Category from "./components/Category.vue";
// import Person from "./components/person.vue";r
// import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      msg: "Vue",
    };
  },
  methods: {},
  // 注册组件
  components: { Category },
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
</style>