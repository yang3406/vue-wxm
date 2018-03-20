import fetch from '../config/fetch'
import axios from 'axios'
import {getStore} from '../config/mUtils'
import {wechatUrl,baseDataUrl} from '../config/env'
import qs from 'qs'
//获取用户openID
//export const fetchOpenId = () => fetch('/getRoot/getWxmpuser')
//获取用户数据
//export  const  getHsCode = () => fetch('/hscode/app_query','GET', {size:7,pageNo:1}, 'fetch')

//获取用户openID
export const getOpenId = () => axios.post(wechatUrl+'getRoot/getWxmpuser')
//获取HS编码数据
//export const getHsCode = (param) => axios.post(baseDataUrl+'hscode/app_query',{size:7,pageNo:1})
export const getHsCode = (param) => axios({method:'post',url:baseDataUrl+'hscode/app_query',data:qs.stringify(param)})

