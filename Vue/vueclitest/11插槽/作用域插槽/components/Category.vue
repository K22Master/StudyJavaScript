<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot :info="Jk"></slot>
  </div>
</template>

<script>
export default {
  name: "MyCaregory",
  props: ["title"],
  data() {
    return {
      Jk: ["抽烟", "喝酒", "烫头", "看大腿", "开车"],
    };
  },
};
</script>

<style scoped>
.category {
  background-color: salmon;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: aqua;
}
</style>