<template>
  <div>
    <ul>
      <li>编号：{{ $route.query.id }}</li>
      <li>信息：{{ $route.query.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeDatal",
};
</script>

<style>
</style>