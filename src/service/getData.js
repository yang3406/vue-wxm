import fetch from '../config/fetch'
import {getStore} from '../config/mUtils'

//获取用户openID
export const fetchOpenId = () => fetch('/getRoot/getWxmpuser')


//获取用户数据
export  const  getHsCode = () => fetch('/hscode/app_query',type = 'GET', data = {}, method = 'fetch')
