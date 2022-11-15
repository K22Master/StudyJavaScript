<template>
  <div>
    <div v-for="user in users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" />
      </a>
      <p>{{ user.login }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyList",
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.$bus.$on("getUsers", (users) => {
      this.users = users;
    });
  },
  beforeDestroy() {
    this.$bus.$off("getUsers");
  },
};
</script>

<style>
</style>