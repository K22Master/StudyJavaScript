<template>
  <div>
    <h3>Search</h3>
    <div>
      <input type="text" v-model="keyWord" />
      <button @click="searchUsers">Search</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MySearch",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          //   console.log(response.data);
          this.$bus.$emit("getUsers", response.data.items);
        },
        (error) => {
          console.log("请求失败！" + error.message);
        }
      );
    },
  },
};
</script>

<style>
</style>