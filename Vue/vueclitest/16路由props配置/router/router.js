// 引入vue-router
import Vuerouter from 'vue-router';
// 将对应的组件，导入其中
import About from '../pages/About'
import Home from '../pages/Home'
import HomeNew from '../pages/HomeNew'
import Message from '../pages/Message'
import Datal from '../pages/Datal'

export default new Vuerouter({
    // 给对应的组件绑定路径
    routes: [
        {
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            // 给路由命名
                            name: 'msginfo',
                            path: 'datal/:id/:name',
                            component: Datal,
                            props($route) {
                                return {
                                    id: $route.params.id,
                                    name: $route.params.name,
                                }
                            }
                        }
                    ],
                }, {
                    path: 'news',
                    component: HomeNew,
                }
            ],
        }
    ],
});