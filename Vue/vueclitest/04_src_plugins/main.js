// 引入Vue
import Vue from 'vue';
// 引入app
import App from './App.vue';
// 引入插件
import plugins from './plugins';
// 使用插件
Vue.use(plugins);

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  render: h => h(App)
});