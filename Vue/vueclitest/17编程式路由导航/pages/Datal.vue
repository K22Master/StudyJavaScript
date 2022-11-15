<template>
  <div>
    <ul>
      <li>编号：{{ id }}</li>
      <li>信息：{{ name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeDatal",
  props: ["id", "name"],
};
</script>

<style>
</style>