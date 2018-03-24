import axios from 'axios'
import qs from "qs"
import {wechatUrl,baseDataUrl} from "../config/env";

axios.defaults.baseUrl = baseDataUrl;
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//before request 序列化参数
axios.interceptors.request.use(function (config) {
   if(config.method == "post"){
       return qs.stringfy(config.data)
   }
   return config;
},function (error) {
  //提示参数
  return Promise.reject(error);
})

// after response 获取请求返回后的值
axios.interceptors.response.use(res => {
  debugger
  if(!res.data.success){

  }
}, (error) => {
  return Promise.reject(error)
})

//查询列表数据
export const fetch = function (url,params) {
     return new Promise((resolve,reject) => {
        axios.post(url,params)
          .then( response => {
              reject(response.data)
          },error => {
             reject(error)
          }).catch((error) => {
              reject(error)
        })
     })
}

export const getWX = function (url,params) {
  debugger
   axios.get(wechatUrl+url,{
     params:params
   })
   .then(response => {
      return response.data;
   })
     .catch(error => {
       return error
     })
}

