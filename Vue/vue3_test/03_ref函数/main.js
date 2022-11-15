// 引入的不再是vue构造函数，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象，并挂载
createApp(App).mount('#app')
