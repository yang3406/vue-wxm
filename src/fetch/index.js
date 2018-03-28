import {fetch,getWX} from './fetch'

//获取openID
 const getOpenId =() => {
  return getWX("/getRoot/getWxmpuser")
}

//自动登录
const autoLogin = (openId) => {
  const params = {
    openId:openId,
    username:'',
    password:'',
    imo :"1001",
    deviceType:'3',
    loginTime : new Date().getTime()
  };
  return fetch("/app_login",params)
}

//登录
const loginIn = (params) => {
  return fetch('/app_login',params)
}

//退出登录
const  loginOut = (params) => {
  return fetch('/logout',params)
}


/*获取HSCode*/
 const fetchHSCode = (params) => {
  return fetch('/hscode/app_query',params)
}
export  {
  getOpenId,
  fetchHSCode,
  autoLogin,
  loginIn,
  loginOut
}
