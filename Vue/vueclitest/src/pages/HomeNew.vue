<template>
  <div>
    <ul>
      <li :style="{ opacity }">欢迎来到HomeNews</li>
      <li v-for="item in messageList" :key="item.id">
        {{ item.name }} <input type="text" />
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
      opacity: 1,
    };
  },
  activated() {
    this.timers = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 16);
  },
  deactivated() {
    clearInterval(this.timers);
  },
};
</script>

<style>
</style>