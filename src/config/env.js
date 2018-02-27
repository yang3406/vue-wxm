/**
 * 配置编译环境和线上环境切换
 * wechatUrl: 微信后台 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * */

let wechatUrl = '';
let baseDataUrl = '';
let routerMode = 'hash';
let imgBaseUrl;

if(process.env.NODE_ENV == "development"){
  wechatUrl = 'http://yjsvip.hk1.tunnelfrp.cc';
  baseDataUrl = 'http://localhost:8080/mobile/'
}else if(process.env.NODE_ENV == "production"){

}

export {
  wechatUrl,
  baseDataUrl,
  routerMode,
  imgBaseUrl,
}
