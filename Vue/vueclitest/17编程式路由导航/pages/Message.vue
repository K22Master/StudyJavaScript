<template>
  <div>
    <ul>
      <li v-for="item in messageList" :key="item.id">
        <!-- 跳转路由并且携带参数 to的字符串写法 -->
        <!-- <router-link
          replace
          :to="`/home/message/datal/${item.id}/${item.name}`"
          >{{ item.name }}</router-link
        > -->

        <!-- 跳转路由并且携带参数 对象写法 -->
        <router-link
          replace
          :to="{
            name: 'msginfo',
            query: {
              id: item.id,
              name: item.name,
            },
          }"
          >{{ item.name }}</router-link
        >
        <button @click="pushShow(item)">push</button>
        <button @click="repalceShow(item)">replace</button>
      </li>
    </ul>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: "HomeMsg",
  data() {
    return {
      messageList: [
        { id: "001", name: "Tom" },
        { id: "002", name: "Tom2" },
        { id: "003", name: "Tom3" },
        { id: "004", name: "Tom4" },
      ],
    };
  },
  methods: {
    pushShow(item) {
      this.$router.push({
        name: "msginfo",
        query: {
          id: item.id,
          name: item.name,
        },
      });
    },
    repalceShow(item) {
      this.$router.replace({
        name: "msginfo",
        query: {
          id: item.id,
          name: item.name,
        },
      });
    },
  },
};
</script>

<style>
</style>