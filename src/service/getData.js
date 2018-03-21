import fetch from '../config/fetch'
import axios from 'axios'
import {getStore} from '../config/mUtils'
import {wechatUrl,baseDataUrl} from '../config/env'
import qs from 'qs'
//获取用户openID
//export const fetchOpenId = () => fetch('/getRoot/getWxmpuser')
//获取用户数据
//export  const  getHsCode = () => fetch('/hscode/app_query','GET', {size:7,pageNo:1}, 'fetch')

//axios 全局配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = baseDataUrl;
/*axios.defaults = {
  baseUrl:baseDataUrl,
  timeout:5000,

}*/


//获取用户openID
export const getOpenId = () => axios.post(wechatUrl+'/getRoot/getWxmpuser')
//获取HS编码数据
//export const getHsCode = (param) => axios.post(baseDataUrl+'hscode/app_query',{size:7,pageNo:1})
export const getHsCode = (param) => axios.post('/hscode/app_query',param)

