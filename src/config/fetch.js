import {baseUrl} from "./env";

export default async(url='',type='GET',data={},method='fetch') => {
   type = type.toUpperCase();
   url = baseUrl + url;

   if(type == "GET"){
     let dataStr = ''; //数据拼接
     Object.keys(data).forEach(key =>{
       dataStr += key +'='+data[key]+'&';
     })
     if(dataStr != ""){
       dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
       url = url + '?' + dataStr;
     }
   }

   if(window.fetch && method == "fetch"){
      let requestConfig = {
        credentials : 'include',
        method:type,
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode:'cros',
        cache:'force-cache'
      }

      if(type == "post"){
         Object.defineProperty(requestConfig,'body',{
           value:JSON.stringify(data)
         })
      }


   }

}
