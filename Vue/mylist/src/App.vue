<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 通过props属性将函数传递过去 -->
        <MyHeader @addTodo="addTodo"></MyHeader>
        <MyList :todos="todos"></MyList>
        <MyFooter
          :todos="todos"
          @checkAllTodo="checkAllTodo"
          @clearAllTodo="clearAllTodo"
        ></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  // 将所有数据放入到父元素中，父元素传递给子元素使用
  data() {
    return {
      // todos: [
      //   { id: '001', title: '抽烟', done: true },
      //   { id: '002', title: '喝酒', done: true },
      //   { id: '003', title: '烫头', done: false },
      // ],
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  // 父元素中创建一个方法，用来传递给子元素，将子元素新增的数据发送到父元素中
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    // 完成按钮的取反
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 删除一个todo
    deleteTodo(_, id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    // 全选或者取消
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    // 清除已选择的
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  // 通过监视属性，当todos发生改变时，就会将值传入到浏览器本地存储中
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },

  mounted() {
    // 在挂载完后，通过事件总线绑定指定事件
    this.$bus.$on("checkTodo", this.checkTodo);
    // this.$bus.$on("deleteTodo", this.deleteTodo);
    // 使用订阅删除
    this.pubId = pubsub.subscribe("deleteTodo", this.deleteTodo);
  },
  // 在销毁前，解除绑定的事件
  beforeDestroy() {
    this.$bus.$off("checkTodo");
    // this.$bus.$off("deleteTodo");
    // 取消订阅
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: #4967d5;
  border: 1px solid #4160d0;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn-edit:hover {
  color: #fff;
  background-color: #4f1fc0;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
