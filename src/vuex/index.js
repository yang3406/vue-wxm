import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import userInfo from './modules/userInfo'


Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    common,
    userInfo
  }
})

