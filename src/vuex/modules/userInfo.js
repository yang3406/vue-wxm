
import * as types from  '../types'
import * as util from '../../config/mUtils'

const state = {
   //OPEN_ID
   openId:'',
   //用户登录状态
   loginStatus:JSON.parse(util.getSessionStore("loginStatus"))|| false,
   //用户登录信息
   userInfo:JSON.parse(util.getSessionStore("userInfo")) || false
}

const getters = {
    getLoginStatus: (state) =>  state.loginStatus,
    getUserInfo:(state) => state.userInfo,
    getStateOpenId:(state) => state.openId
}

const mutations = {
  [types.SET_LOGIN_STATUS](state,status){
     state.loginStatus = status
  },
  [types.SET_USER_INFO](state,res){
    state.userInfo = res;
  },
  [types.RECORD_OPENID](state,openId){
     state.openId = openId
  }
}

const actions = {
  setUserInfo:({commit},res) => {
    util.setSessionStore("loginStatus",true)
    util.setSessionStore("userInfo",res)
    commit(types.SET_USER_INFO,res)
    commit(types.SET_LOGIN_STATUS,true)
  }
}


export default {
   state,
   getters,
   actions,
  mutations
}

