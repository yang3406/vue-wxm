/**
 * 配置编译环境和线上环境切换
 * wechatUrl: 微信后台 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * */

let wechatUrl = '';
let routerMode = 'hash';
let imgBaseUrl;

if(process.env.NODE_ENV == "development"){
  wechatUrl = 'http://yjsvip.hk1.tunnelfrp.cc';
}else if(process.env.NODE_ENV == "production"){

}

export {
  wechatUrl,
  routerMode,
  imgBaseUrl
}
