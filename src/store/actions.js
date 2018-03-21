import {
  fetch, queryOpenId
} from "../service/getData";

import {
  RECORD_OPENID
} from './mutation-types'

//获取用户openID
async function getOpenId(param) {
  queryOpenId().then(response => {
    return Promise.resolve(response.data);
  }, err => {
    reject(err)
  })
    .catch(error => {
      return Promise.reject(error)
    })
}

//登录
var loginReq = function () {
  
}

//获取HS编码数据
var getHsCode = async function (param) {
  return fetch('/hscode/app_query', {size: 7, pageNo: 1})
}


export default {
  getOpenId, getHsCode
}










