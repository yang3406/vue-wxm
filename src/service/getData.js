import fetch from '../config/fetch'
import {getStore} from '../config/mUtils'
//获取用户openID
export const fetchOpenId = () => fetch('/getRoot/getWxmpuser')


