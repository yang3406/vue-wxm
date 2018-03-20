import {
  fetchOpenId,
  getHsCode
} from "../service/getData";

import {
  RECORD_OPENID
} from './mutation-types'


export default {
  async getOpenId({
    commit,state
   }){
    getHsCode({size:7,pageNo:1}).then(function (response) {
      debugger
      console.log(response)
    }).catch(function (error) {
      console.log(error)
    })

  }


}









