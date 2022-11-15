<template>
  <div>
    <h2 ref="title">欢迎来到{{ msg }}</h2>
    <Search></Search>
    <List></List>
  </div>
</template>

<script>
// import axios from "axios";
import Search from "./components/Search.vue";
import List from "./components/List.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "Vue",
    };
  },
  methods: {},
  // 注册组件
  components: { Search, List },
};
</script>

<style>
.title {
  color: wheat;
}
</style>