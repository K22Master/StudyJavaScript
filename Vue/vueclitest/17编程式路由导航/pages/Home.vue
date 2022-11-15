<template>
  <div>
    <h3>我是Home组件的内容</h3>
    <div>
      <router-link replace to="/home/message">message</router-link>
      <router-link to="/home/news">news</router-link>
    </div>
    <router-view></router-view>
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