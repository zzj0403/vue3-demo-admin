import {createStore} from 'vuex'
import {login, getInfo} from '~/api/manager'
import {removeToken, setToken} from "~/composables/auth.js";
// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            // 用户信息
            user: {},
        }
    },
    mutations: {
        SET_USERINFO(state, user) {
            state.user = user
        }
    },
    actions: {
        login({commit},{username,password}){
          return new  Promise((resolve, reject)=>{
              login(username,password).then(res=>{
                  setToken(res.token)
                  resolve()
              }).catch(err => reject(err))
          })
        },
        // 获取当前用户登入信息
        getInfo({commit}) {
            return new Promise((resolve, reject) => {
                getInfo().then(res => {
                    commit("SET_USERINFO", res)
                    resolve(res)
                }).catch(err => reject(err))
            })

        },
        // 退出登入
        logout ({commit}){
            // 清除 token
            removeToken()
            // 清除 当前用户状态
            commit("SET_USERINFO", {})
        }
    }
})


export default store