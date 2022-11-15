// 该文件用于创建Vuex中最为核心的store
// vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex';
Vue.use(Vuex);

const conunt = {
    namespaced: true,
    actions: {
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
    },
    mutations: {
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
    },
    state: {
        sum: 0,
    }
}
const person = {
    namespaced: true,
    actions: {
    },
    mutations: {
        AddPerson(store, value) {
            store.personList.unshift(value);
        }
    },
    state: {
        personList: [{
            id: '001',
            name: 'Tom'
        }],
    }
}


// 创建store并暴露出去
export default new Vuex.Store({
    modules: {
        conunt,
        person,
    }

});