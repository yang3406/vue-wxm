import {
  RECORD_OPENID
} from './mutation-types'

import {
  setSessionStore,
  getSessionStore
} from "../config/mUtils";

export default {
  //记录用户openId
  [RECORD_OPENID](state,openId){
    state.openId = openId;
    setSessionStore("openId",openId)
  }
}


