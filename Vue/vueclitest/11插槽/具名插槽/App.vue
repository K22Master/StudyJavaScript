<template>
  <div>
    <h2 ref="title">欢迎来到{{ msg }}</h2>
    <div class="box">
      <Category title="Tangqi">
        <img slot="center" src="" alt="" />
        <a href="#" slot="footer">1111111</a>
      </Category>
      <Category title="Jk">
        <ul slot="center">
          <li v-for="(j, index) in Jk" :key="index">{{ j }}</li>
        </ul>
        <div slot="footer" class="foot">
          <a href="#">2222</a>
          <a href="#">3333</a>
        </div>
      </Category>
      <Category title="Fuzi">
        <video src="" slot="center"></video>
        <template slot="footer">
          <div class="foot">
            <a href="#">4444</a>
            <a href="#">4444</a>
            <a href="#">4444</a>
          </div>
          <h4>tujina</h4>
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
.box,
.foot {
  display: flex;
  justify-content: space-around;
}
</style>