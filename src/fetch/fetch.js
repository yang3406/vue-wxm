import axios from 'axios'
import qs from "qs"
import {wechatUrl, baseDataUrl} from "../config/env";
import store from '../vuex'
import {autoLogin} from './index'

/*axios.defaults.baseUrl = baseDataUrl;*/
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.withCredentials=true;

//before request 序列化参数
axios.interceptors.request.use(function (config) {
  if (config.method == "post") {
    config.data = qs.stringify(config.data)
  }
  return config;
}, function (error) {
  //提示参数
  return Promise.reject(error);
})

// after response 获取请求返回后的值
axios.interceptors.response.use(res => {
  //登录超时
  if(res.data.status == "3"){
    const openID = store.getters.getStateOpenId || "1001";
    if(openID ){
      return autoLogin(openID)
    }
  }

  if (!(res.data.status == 0 || res.data.status == "操作成功" || res.data.result)){
    return Promise.reject(res.data.message)
  }

  return res.data;
}, (error) => {
  return Promise.reject(error)
})

//查询列表数据
export const fetch = function (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(baseDataUrl + url, params)
      .then(response => {
        response.data == "" ? response.data = {'status':0} :response.data = response.data;
        resolve(response.data)
      }, err => {
        reject(err)
      }).catch((error) => {
      reject(error)
    })
  })
}

export async function getWX(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(wechatUrl + url, {
      params: params
    })
      .then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
      .catch(error => {
        return error
      })
  })
}

