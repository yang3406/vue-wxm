import * as types from '../types'


const state = {
    loading:false,
    showToast:false,
    showSuccess:true
}

const getters = {
   loading: (state) => state.loading,
}


const mutations = {
    [types.COM_LOADING_STATUS] (state,status)  {
        state.loading = status;
}
}

const actions = {
  setLoadingState({commit},status){
    commit(types.COM_LOADING_STATUS,status)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}



