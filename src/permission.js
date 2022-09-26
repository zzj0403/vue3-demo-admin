import router from "~/router/index.js"
import {getToken} from "~/composables/auth.js"
import {hideFullLoading, showFullLoading, toast} from "~/composables/util.js"
import store from "~/store/index.js";
// 全局前置守卫
router.beforeEach(async (to, form, next) => {
    // 显示 loading
    showFullLoading()
    const token = getToken()
    // 没有登入强制跳转登入页
    if (!token && to.path !== "/login") {
        toast("请先登入", "error")
        return next({path: "/login"})
    }

    // 防止重复登入
    if (token && to.path === "/login") {
        toast("请勿重复登入", "error")
        return next({path: form.path ? form.path : "/"})
    }
    // 如果用户登入，自动获取用户信息，并储存到vuex 中
    if (token) {
        await store.dispatch("getInfo")
    }
    // 设置页面标题
    document.title = (to.meta.title ? to.meta.title : "") + "-左政均管理后台"
    next()
})
// 全局后置钩子
router.afterEach((to, from) => {
    hideFullLoading()
})