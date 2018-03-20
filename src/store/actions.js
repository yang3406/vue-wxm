import {
  fetchOpenId
} from "../service/getData";

import {
  RECORD_OPENID
} from './mutation-types'


export default {
  async getOpenId({
    commit,state
   }){
    fetchOpenId().then(res => {
      if(res.result && res.wxmpuser){
        commit(RECORD_OPENID,res.wxmpuser);
      }
    })

  }


}









