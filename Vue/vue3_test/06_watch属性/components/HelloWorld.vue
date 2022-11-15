<template>
  <h2>当前计算结果为：{{ sum }}</h2>
  <button @click="sum++">加1</button>
  <hr />
  <h2>{{ msg }}</h2>
  <button @click="updateMsg">修改信息</button>
  <hr />
  <h2>{{ info.name }}</h2>
  <h2>{{ info.age }}</h2>
  <h2>{{ info.job.jb1 }}K</h2>
  <button @click="info.name += '@@'">修改姓名</button>
  <button @click="info.age++">增加年龄</button>
  <button @click="info.job.jb1++">修改工资</button>
</template>

<script>
// 导入reactive函数,导入computed函数
import { ref, watch, reactive } from "vue";
export default {
  name: "HelloWorld",
  setup() {
    let sum = ref(0);
    let msg = ref("测试111");
    let info = reactive({
      name: "张胜男",
      age: 19,
      job: {
        jb1: 20,
      },
    });
    // 情况1：监视ref定义的响应式数据
    watch(
      sum,
      (newvalue, oldvalue) => {
        console.log("sum发生了改变——", newvalue, oldvalue);
      },
      {
        immediate: true, //开始即做一次监视
        //deep: true, //开启深度监视
      }
    );
    // 情况2：监视ref定义的多个响应式数据
    // watch([sum, msg], (newvalue, oldvalue) => {
    //   console.log("sum或者msg发生了改变——", newvalue, oldvalue);
    // });
    // 情况3：监视reactive所定义的一个响应式数据的全部属性
    //  注意1：此处无法正确获取oldvalue
    //  注意2: 强制开启深度监视(deep配置无效)
    // watch(
    //   info,
    //   (newvalue, oldvalue) => {
    //     console.log("info发生了改变——", newvalue, oldvalue);
    //   },
    //   { deep: false }
    // );
    // 情况4:监视reactive定义的一个响应式数据的某个属性
    // watch(
    //   () => info.name,
    //   (newvalue, oldvalue) => {
    //     console.log("info发生了改变——", newvalue, oldvalue);
    //   }
    // );
    // 情况5:监视reactive定义的一个响应式数据的某些属性
    // watch([() => info.name, () => info.age], (newvalue, oldvalue) => {
    //   console.log("info中的name或age发生了改变——", newvalue, oldvalue);
    // });
    // 特殊情况:
    watch(
      () => info.job,
      (newvalue, oldvalue) => {
        console.log("info发生了改变——", newvalue, oldvalue);
      },
      { deep: true }//当监视的是reactive中定义的对象中的某个元素,deep是有效的
    );
    function updateMsg() {
      msg.value = "yiyi";
    }
    return {
      sum,
      msg,
      updateMsg,
      info,
    };
  },
};
</script>


