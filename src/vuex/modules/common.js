import * as types from '../types'


const state = {
  loading: false,
  showToast: false,
  ToastMsg:'操作成功！',
  showAlert: false,
  alertMsg:'退出登录',
  showSuccess: true
}

const getters = {
  loading: (state) => state.loading,
  showAlert:(state) => state.showAlert,
  showToast:(state) => state.showToast
}


const mutations = {
  [types.COM_LOADING_STATUS](state, status) {
    state.loading = status;
  },
  [types.COM_ALERT_STATUS](state,status){
    state.showAlert = status;
  },
  [types.COM_TOAST_STATUS](state,status){
    state.showToast = status
  },
  [types.COM_ALERT_MSG](state,message){
    state.alertMsg = message
  },
  [types.COM_TOAST_MSG](state,message){
    state.ToastMsg = message;
  }
}

const actions = {
  setLoadingState({commit}, status) {
    commit(types.COM_LOADING_STATUS, status)
  },
  setAlertState({commit},status){
    commit(types.COM_ALERT_STATUS,status);
  },
  setToastState({commit},status){
    commit(types.COM_TOAST_STATUS,status)
  },
  setAlertMsg({commit},message){
    commit(types.COM_ALERT_MSG,message)
  },
  setToastMsg({commit},message){
    commit(types.COM_TOAST_MSG,message)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}



