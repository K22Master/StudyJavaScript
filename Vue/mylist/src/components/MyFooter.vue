<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ dotoTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos"],
  computed: {
    // 通过计算接受的todos内的数量确定个数
    total() {
      return this.todos.length;
    },
    // 计算数据内的已选择的数据
    dotoTotal() {
      let i = 0;
      this.todos.forEach((todo) => {
        if (todo.done) i++;
      });
      return i;
    },
    // 当数据全选时，全选按钮自动勾上
    isAll: {
      get() {
        return this.doneTotal === this.total && this.total > 0;
      },
      set(value) {
        // 使用自定义网站
        this.$emit("checkAllTodo", value);
      },
    },
  },
  methods: {
    // checkAll(e){
    //   this.checkAllTodo(e.target.checked);
    // },
    clearAll() {
      this.$emit("clearAllTodo");
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>