import axios from 'axios'
import {getStore} from '../config/mUtils'
import {wechatUrl,baseDataUrl} from '../config/env'
import qs from 'qs'

//axios 全局配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = baseDataUrl;

//post传参序列化  请求拦截器
axios.interceptors.request.use(function (config) {
    //在发送请求前做的事
    if(config.method == 'post'){
       config.data = qs.stringify(config.data)
    }
    return config
},function (error) {
    //请求出错处理 undo
    alert("请求出错")
    return Promise.reject(error);
})




//获取用户openID
export const queryOpenId = () => axios.get(wechatUrl+'/getRoot/getWxmpuser')
//获取HS编码数据
export function fetch(url,params) {
    return new Promise((resolve,reject) => {
         axios.post(url,params)
              .then(response => {
                 resolve(response.data)
              },err => {
                reject(err)
              })
             .catch(error => {
                reject(error)
             })
      }
    )
}


