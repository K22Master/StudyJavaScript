<template>
  <HelloWorld @hello="showHello" msg="你好" school="SGG">
    <!-- 默认插槽 -->
    <!-- <span>!!!!!!@3</span> -->
    <!-- 具名插槽 -->
    <template v-slot:qwe>
      <span>!!!!!!@3</span>
    </template>
  </HelloWorld>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
export default {
  name: "App",
  components: { HelloWorld },
  setup() {
    function showHello(value) {
      alert(`你好，你触发了APP身上的hello事件，获得了一个值——${value}`);
    }
    return {
      showHello,
    };
  },
};
</script>


