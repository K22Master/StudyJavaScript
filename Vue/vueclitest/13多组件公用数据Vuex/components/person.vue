<template>
  <div>
    <input type="text" v-model="name" />
    <button @click="addName">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
    <h3>上面组件的和为：{{ sum }}</h3>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "MyPerson",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    addName() {
      const perobj = { id: nanoid(), name: this.name };
      this.name = "";
      this.$store.commit("AddPerson", perobj);
    },
  },
  computed: {
    ...mapState(["personList", "sum"]),
  },
};
</script>

<style>
</style>