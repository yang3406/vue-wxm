import fetch from './fetch'
import getWX from './fetch'

//获取openID
export const getOpenId = () => {
  return getWX("/getRoot/getWxmpuser")
}

/*获取HSCode*/
export const fetchHSCode = (params) => {
  return fetch('/hscode/app_query',params)
}

