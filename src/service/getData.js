import fetch from '../config/fetch'
import {getStore} from '../config/mUtils'
import {baseUrl} from "../config/env";
//获取用户openID
export const fetchOpenId = () => fetch(baseUrl+'/getRoot/getWxmpuser')


