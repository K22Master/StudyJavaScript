// 该文件用于创建Vuex中最为核心的store
// vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex';
Vue.use(Vuex);
// 准备actions——用于响应组件中的动作(所有的业务逻辑都写在actions中)
const actions = {
    // 其内部包含对应的函数，第一个参数为上下文，第二个参数为传入的数值
    addition(context, value) {
        context.commit('Addition', value);
    },
    subtraction(context, value) {
        context.commit('Subtraction', value)
    },
    addodd(context, value) {
        if (context.state.sum % 2) {
            context.commit('Addition', value);
        }
    },
    addwait(context, value) {
        setTimeout(() => {
            context.commit('Addition', value);
        }, 1000);
    }
};
// 准本mutations——用于操作数据（state）
const mutations = {
    // 接收actions传过来的函数，第一个参数为store的简单形式，第二个参数为传入数值
    Addition(store, value) {
        store.sum += value;
    },
    Subtraction(store, value) {
        store.sum -= value;
    },
    AddPerson(store, value) {
        store.personList.unshift(value);
    }
};
// 准备state——用于存储数据
const state = {
    sum: 0,
    personList: [{
        id: '001',
        name: 'Tom'
    }],
};
// 创建store并暴露出去
export default new Vuex.Store({
    actions,
    mutations,
    state
});