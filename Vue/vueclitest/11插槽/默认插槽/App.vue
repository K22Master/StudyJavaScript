<template>
  <div>
    <h2 ref="title">欢迎来到{{ msg }}</h2>
    <div class="box">
      <Category title="Tangqi">
        <img src="" alt="" />
      </Category>
      <Category title="Jk">
        <ul>
          <li v-for="(j, index) in Jk" :key="index">{{ j }}</li>
        </ul>
      </Category>
      <Category title="Fuzi">
        <video src=""></video>
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
      Tq: ["学习", "运动", "看书", "追剧", "游戏"],
      Jk: ["抽烟", "喝酒", "烫头", "看大腿", "开车"],
      Fz: ["吃饭", "睡觉", "打豆豆", "学习", "游戏"],
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
.box {
  display: flex;
  justify-content: space-around;
}
</style>