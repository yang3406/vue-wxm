import {wechatUrl,baseDataUrl} from "./env";

export default async (url = '', type = 'GET', data = {}, method = 'fetch') => {
  type = type.toUpperCase();

  let arr = ['/getRoot/getWxmpuser'];
  //获取
  arr.contain(url) ?  url = wechatUrl + url:url = baseDataUrl + url;

  if (type == "GET") {
    let dataStr = ''; //数据拼接
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&';
    })
    if (dataStr != "") {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      url = url + '?' + dataStr;
    }
  }

  if (window.fetch && method == "fetch") {  //判断浏览器是否支持html5属性fetch
    let requestConfig = {
      credentials: 'include',  //解决请求带cookie 但是后台要配置  response.setHeader("Access-Control-Allow-Credentials","true");
      method: type,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
      },
      mode: 'cros', //也是跨域使用的
      cache: 'force-cache' //强制清除缓存
    }

    if (type == "post") {
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data)      //在requestConfig上新增或者修改body属性 值为value
      })
    }

    try {
      const response = await fetch(url, requestConfig);
      const responseJson = await response.json();
      return responseJson
    } catch (error) {
      throw new Error(error)
    }

  } else {

    return new Promise((resolve, reject) => {
      let requestObj;
      if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest();
      } else {
        requestObj = new ActiveXObject;
      }

      let sendData = '';
      if (type == 'POST') {
        sendData = JSON.stringify(data);
      }

      requestObj.open(type, url, true);
      requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      requestObj.send(sendData);

      requestObj.onreadystatechange = () => {
        if (requestObj.readyState == 4) {
          if (requestObj.status == 200) {
            let obj = requestObj.response
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj);
            }
            resolve(obj)
          } else {
            reject(requestObj)
          }
        }
      }
    })

  }

}
