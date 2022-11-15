// 引入Vue
import Vue from 'vue';
// 引入app
import App from './App.vue';
// 引入插件
import Vuerouter from 'vue-router';
// 导入路由文件
import router from './router/router'

Vue.use(Vuerouter);
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  render: h => h(App),
  router
});