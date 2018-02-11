<template>
    <div>
      <div v-if="showMenu" >
        <!--图片切换-->
         <nav class="home-nav">
             <div class="swiper-container" v-if="tabMenuList.length">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in tabMenuList" :key="index">
                      <img :src="item.imageUrl">
                      <figcaption>imageItem.name</figcaption>
                    </div>
                </div>
               <div class="swiper-pagination"></div>
             </div>
         </nav>
         <div></div>
      </div>

      <div v-else>
         <div></div>
      </div>

      <div class="weui-tabbar">
        <a href="#tab1" class="weui-tabbar__item" :class="{active:isActive}" @click="toggleTab(event)">
          <div class="weui-tabbar__icon">
            <span class="service"></span>
          </div>
          <p class="weui-tabbar__label">服务</p>
        </a>
        <a href="#tab2" class="weui-tabbar__item" :class="{active:!isActive}" @click="toggleTab(event)">
          <div class="weui-tabbar__icon">
            <span class="self"></span>
          </div>
          <p class="weui-tabbar__label">我的</p>
        </a>
      </div>
    </div>

</template>

<script>
import tabMenuList from 'src/config/tabmenu.js'
import 'src/plugins/swiper.min.js'
import 'src/style/swiper.min.css'

export default {
  data(){
    return {
      showMenu:true,
      isActive:true,
      tabMenuList:tabMenuList
    }
  },
  method(){
    debugger
    //初始化swiper
    new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      loop: true
    });

  },
  computed(){

  }
}

</script>

<style lang="css" scoped>
  .weui-tabbar{
    display: -webkit-flex;
    display: -webkit-box;
    display: flex;
    position: absolute;
    z-index: 500;
    bottom: 0;
    width: 100%;
    background: #f7f7fa;
  }
  .weui-tabbar:before{
    position: absolute;
    content: "";
    width: 0;
    height: 1px;
    left: 0;
    top:0;
    right: 0;
    border-top:1px solid #c0bfc4;
    color:#c0bfc4;
  }
  .weui-tabbar__item{
    position: relative;
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    padding: 5px 0 0;
    font-size: 0;
    color: #999;
    text-align: center;
    -webkit-tap-highlight-color: rgba(0,0,0,0)
  }

  .weui-tabbar .active{
    color:#f48c2b;

  }

</style>
