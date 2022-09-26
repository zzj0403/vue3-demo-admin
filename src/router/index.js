import {createRouter, createWebHashHistory} from "vue-router";
import Index from "~/pages/index.vue"
import Login from "~/pages/login.vue"
import NotFound from "~/pages/404.vue"
import Admin from '~/layouts/admin.vue'

const routes = [
    {
        path: '/',
        component: Admin,
        // 后台子路由
        children: [{
            path: '/',
            component: Index,
            meta: {title: "后台首页"}
        }]
    },
    {path: '/login', component: Login, meta: {title: "登入页"}},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, meta: {title: "404"}},
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router