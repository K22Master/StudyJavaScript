<template>
  <div class="demo">
    <h2>{{ msg }}</h2>
    <h2 class="title">Hello {{ name }}</h2>
    <h2>age is {{ age }}</h2>
    <h2>sex is {{ sex }}</h2>
  </div>
</template>

<script>
// 使用一个订阅库
import pubsub from "pubsub-js";
export default {
  name: "JekInfo",
  data() {
    return {
      msg: "weclome to Fz",
    };
  },
  // props:['name','age','sex'] //简单接收数据
  // 接收的同时对类型限制
  // props:{
  //     name:String,
  //     age:Number,
  //     sex:String
  // }
  // 接收的同时对类型限制+默认值的指定
  props: {
    name: {
      type: String, //类型是字符串
      required: true, //表示是必须的
    },
    age: {
      type: Number,
      default: 20, //如果没传设置默认值
    },
    sex: {
      type: String,
      required: true,
    },
  },
  methods: {
    getStudentName(msg, name) {
      console.log("Jek收到数据   " + msg + "\t" + name);
    },
  },
  mounted() {
    // 接收数据的自定义事件
    // this.$bus.$on("getStudentName", this.getStudentName);
    // 订阅消息时触发事件
    this.pubId = pubsub.subscribe("getStudentName", this.getStudentName);
  },
  beforeDestroy() {
    // 销毁前，解绑事件
    // this.$bus.$off("getStudentName");
    // 取消订阅
    pubsub.unsunbscribe(this.pubId);
  },
};
</script>

<style scoped>
.demo {
  width: 200px;
  height: 200px;
  background-color: #9933cc;
}
</style>