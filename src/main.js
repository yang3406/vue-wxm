import Vue from 'vue'
import VueRouter from 'vue-router'
import FastClick from 'fastclick'
import store from './store'
import routers from './router/router'
import {routerMode} from './config/env'
import './config/rem'
//点击事件 移动端有300ms的延迟 使用双击
if(FastClick in document){
  document.addEventListener('DOMContentLoaded',function () {
    FastClick.attach(document.body);
  },false)
}

Vue.use(VueRouter);
const router = new VueRouter({
  routers,
  mode: routerMode,
  strict:process.env.NODE_ENV !== 'production',
  //scrollBehavior是页面跳转到一个新页面时 定位的地方
  /*scrollBehavior(to,from,savedPosition){
    // return 希望定位的地方
    if(savedPosition){
       return savedPosition;
    }else{
       if(from.meta.keepAlive){
         from.meta.savedPosition = document.body.scrollTop;
       }
       return {x:0,y:to.meta.savedPosition || 0}
    }
  }*/
})

new Vue({
  router
}).$mount("#app")
