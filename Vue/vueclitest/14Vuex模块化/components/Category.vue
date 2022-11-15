<template>
  <div class="category">
    <!-- <h4>人员列表的和{{ personList.length }}</h4> -->
    <h2>当前的计算结果为{{ sum }}</h2>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="Addition(num)">+</button>
    <button @click="Subtraction(num)">-</button>
    <button @click="addodd(num)">技术不加</button>
    <button @click="addwait(num)">延迟1秒加</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "MyCaregory",
  props: ["title"],
  data() {
    return {
      num: 1,
    };
  },
  computed: {
    ...mapState("conunt", ["sum"]),
    ...mapState("person", ["personList"]),
  },
  methods: {
    // addition() {
    //   // this.$store.dispatch("addition", this.num);
    //   this.$store.commit("Addition", this.num);
    // },
    // subtraction() {
    //   // this.$store.dispatch("subtraction", this.num);
    //   this.$store.commit("Subtraction", this.num);
    // },
    ...mapMutations("conunt", ["Addition", "Subtraction"]),
    // addodd() {
    //   // if (this.$store.state.sum % 2) {
    //   //   this.$store.dispatch("addition", this.num);
    //   // }
    //   this.$store.dispatch("addodd", this.num);
    // },
    // addwait() {
    //   // setTimeout(() => {
    //   //   this.$store.dispatch("addition", this.num);
    //   // }, 1000);
    //   this.$store.dispatch("addwait", this.num);
    // },
    ...mapActions("conunt", ["addodd", "addwait"]),
  },
  mounted() {
    console.log(this);
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