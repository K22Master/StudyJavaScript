// 引入vue-router
import Vuerouter from 'vue-router';
// 将对应的组件，导入其中
import About from '../pages/About'
import Home from '../pages/Home'
import HomeNew from '../pages/HomeNew'
import Message from '../pages/Message'
import Datal from '../pages/Datal'


const router = new Vuerouter({
    // 给对应的组件绑定路径
    routes: [
        {
            path: '/about',
            component: About,
            meta: {
                isAuth: true,
                title: 'GGGG'
            }
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
                            path: 'datal',
                            component: Datal,
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    name: $route.query.name,
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
export default router;
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        if (localStorage.getItem() === null)
            next();
        else
            alert('权限不对');
    } else {
        next();
    }
});
router.afterEach((to) => {
    document.title = to.meta.title || '测试';
});