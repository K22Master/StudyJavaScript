// 引入Vue
import Vue from 'vue';
// 引入app
import App from './App.vue';
// 引入插件
// import Vuex from './Vuex';
// 导入store
import store from './store/index.js'
// 使用插件
// Vue.use(Vuex);

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
});