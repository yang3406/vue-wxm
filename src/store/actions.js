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
    debugger
    let res = fetchOpenId();
    commit(RECORD_OPENID,res)
  }
}









