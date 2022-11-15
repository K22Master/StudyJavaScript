<template>
  <div>
    <h2 ref="title">欢迎来到{{ msg }}</h2>
    <div class="box">
      <Category title="Jk">
        <template slot-scope="{ info }">
          <ul>
            <li v-for="(j, index) in info" :key="index">{{ j }}</li>
          </ul>
        </template>
      </Category>
      <Category title="Jk">
        <template slot-scope="{ info }">
          <ol>
            <li v-for="(j, index) in info" :key="index">{{ j }}</li>
          </ol>
        </template>
      </Category>
      <Category title="Jk">
        <template slot-scope="{ info }">
          <h4 v-for="(j, index) in info" :key="index">{{ j }}</h4>
        </template>
      </Category>
    </div>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
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