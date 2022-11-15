<template>
  <div>
    <ul>
      <li v-for="item in messageList" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeNew",
  data() {
    return {
      messageList: [
        { di: "001", name: "Jek" },
        { di: "002", name: "Jek2" },
        { di: "003", name: "Jek3" },
        { di: "004", name: "Jek4" },
      ],
    };
  },
};
</script>

<style>
</style>