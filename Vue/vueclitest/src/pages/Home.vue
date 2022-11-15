<template>
  <div>
    <h3>我是Home组件的内容</h3>
    <div>
      <router-link replace to="/home/message">message</router-link>
      <router-link to="/home/news">news</router-link>
    </div>
    <!-- 该标签可以使要显示的组件保持活性，不会被销毁，用于留存数据 -->
    <!-- 单个组件 -->
    <!-- <keep-alive include="HomeNew">
      <router-view></router-view>
    </keep-alive> -->
    <!-- 多个组件用数组形式 -->
    <keep-alive :include="['HomeNew', 'HomeMsg']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "HomeTest",
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style>
</style>