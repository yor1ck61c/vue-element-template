import { login, logout, getInfo, myLogin, myGetUserInfo, myLogout } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
// import { resolve } from 'core-js/fn/promise'
import Cookies from 'js-cookie'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  // MyLogin
  // { commit } 为使用 Action 处理异步请求时的简化写法
  MyLogin({ commit }, userInfo) {
    // ES6新语法，变量解构赋值，将userInfo中的值赋给变量username和password。
    const { username, password } = userInfo
    /* 创建一个新Promise对象，Promise 是异步编程的一种解决方案，所谓Promise，简单说就是一个容器，
       里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
       resolve和reject是由 JavaScript 引擎提供的方法。
       简单理解：resolve会将Promise对象状态由未完成（pending）变为成功（resolved）代表成功后执行的操作，
                reject代表失败后执行的操作。
       更多细节详见https://es6.ruanyifeng.com/#docs/promise
    */
    return new Promise((resolve, reject) => {
      // 这里调用二次封装后的axios中的方法，请求后端Controller中的登录方法。
      myLogin({ username: username.trim(), password: password }).then((res) => {
        // 登录成功后，获取由服务器生成的Token。
        const data = res.token
        // 将Token保存至Cookie中和vuex中。
        Cookies.set('Token', data)
        commit('SET_TOKEN', data)
        resolve()
      }).catch((error) => {
        // 请求失败
        reject(error)
      })
    })
  },
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // MyGetUserInfo
  MyGetUserInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      // axios二次封装后的方法，请求后端获取用户信息
      myGetUserInfo(state.token).then((res) => {
        // 此处res是用户信息对象，会先经过拦截器。
        // 如果信息对象为空报错
        if (!res) {
          return reject('认证失败,请重新登录')
        }
        // 并将用户昵称和头像存入本地。
        commit('SET_NAME', res.name)
        commit('SET_AVATAR', res.avatar)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          return reject('Verification failed, please Login again.')
        }

        const { name, avatar } = data

        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // MyLogout
  MyLogout({ commit, state }) {
    return new Promise((resolve, reject) => {
      myLogout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

