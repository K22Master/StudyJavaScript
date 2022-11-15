<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="title"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  data() {
    return {
      title: "",
    };
  },
  // 接收父元素传递的函数 props方法
  // props:['addTodo'],
  methods: {
    // 当键盘事件触发时，获取到新的数据，然后调用父元素的函数，加入新数据
    add() {
      if (!this.title.trim()) return alert("输入不能为空！！");
      const newtodo = { id: nanoid(), title: this.title, done: false };
      this.$emit("addTodo", newtodo);
      this.title = "";
    },
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>