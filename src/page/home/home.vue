<template>
  <div>
    <div v-if="showMenu">
      <!--图片切换-->
      <nav class="home-nav">
        <div class="swiper-container" v-if="swiperImgList.length">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in swiperImgList" :key="index">
              <img :src="item.imageUrl">
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </nav>
      <section class="menu-section">
        <div class="menu">
          <ul class="outter-ul">
            <li class="outter-li" v-for="(item,index) in tabMenuList" :key="index">
              <ul>
                <li><img :src="item.imageUrl"></img></li>
                <li>{{item.name}}</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>

    <div v-else>
        <user-detail v-if="loginWay"></user-detail>
        <user-login v-else @toogle="toogleChange"></user-login>
    </div>

    <div class="weui-tabbar">
      <a href="#tab1" class="weui-tabbar__item" :class="{active:isActive}" @click="toggleTab('service',$event)">
        <div class="weui-tabbar__icon">
          <span class="service"></span>
        </div>
        <p class="weui-tabbar__label">服务</p>
      </a>
      <a href="#tab2" class="weui-tabbar__item" :class="{active:!isActive}" @click="toggleTab('owner',$event)">
        <div class="weui-tabbar__icon">
          <span class="self"></span>
        </div>
        <p class="weui-tabbar__label">我的</p>
      </a>
    </div>
  </div>

</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex'
  import {tabMenuList, swiperImgList} from '@/config/tabmenu.js'
  import {getSessionStore} from '../../config/mUtils'
  import '@/plugins/swiper.min.js'
  import '@/style/swiper.min.css'
  import '@/config/expandjs'
  import * as fetch from '@/fetch/index'
  import userDetail from '@/components/user/userDetail'
  import userLogin from '@/components/user/userLogin'

  export default {
    data() {
      return {
        showMenu: true,
        isActive: true,
        swiperImgList: swiperImgList,
        tabMenuList,
        loginWay: this.getLoginStatus
      }
    },
    mounted() {
      //初始化swiper
      new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000
      });

      /*if(!this.getLoginStatus){
        if(!this.getStateOpenId){
           this.getOpenId();
        }else{
          this.autoLogin(this.getStateOpenId)
        }
      }*/
    },
    computed:{
      ...mapGetters([
        'getStateOpenId',
        'getLoginStatus',
        'getUserInfo'
      ])
    },
    components:{
      userLogin,
      userDetail
    },
    methods: {
      toggleTab: function (param, event) {
        event.preventDefault();
        if (param == "service") {
          this.isActive = true;
          this.showMenu = true;
        } else if (param == 'owner') {
          this.isActive = false;
          this.showMenu = false;
        }
      },
      getOpenId:async function(){
         /*const openId = fetch.getOpenId().then(res => {
            if(res.result){
              this.autoLogin(res.wxmpuser)
            }
         });*/
        const res = await fetch.getOpenId();
        await this.autoLogin(res.wxmpuser)
      },
      autoLogin:async function (openId) {
        if(openId){
         const res = fetch.autoLogin(openId)
           .then(res => {
             console.log(res.data);
             if(res.success){
               this.setUserInfo(res.data);
             }
           })
           .catch(error => {
              console.log(error)
           });

        }
      },
      ...mapActions([
        'setUserInfo',
        'setLoadingState'
      ])

    }
  }

</script>

<style lang="css" scoped>
  @import "../../style/queryIndex.css";


  .weui-tabbar {
    display: -webkit-flex;
    display: -webkit-box;
    display: flex;
    position: fixed;
    z-index: 500;
    bottom: 0;
    width: 100%;
    background: #f7f7fa;
  }

  .weui-tabbar:before {
    position: absolute;
    content: "";
    width: 0;
    height: 1px;
    left: 0;
    top: 0;
    right: 0;
    border-top: 1px solid #c0bfc4;
    color: #c0bfc4;
  }

  .weui-tabbar__item {
    position: relative;
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    padding: 5px 0 0;
    font-size: 0;
    color: #999;
    text-align: center;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
  }

  .weui-tabbar__icon {
    display: inline-block;
    width: 27px;
    height: 27px;
  }

  .weui-tabbar .active {
    color: #f48c2b;
  }

  .menu-section {
    margin-bottom: 53px;
    background-color: white;
  }

  .weui-tabbar__label {
    text-align: center;
    color: #999;
    font-size: 10px;
    line-height: 1.8;
  }

  .swiper-slide img {
    height: 18rem;
    width: 100%;
  }

  .weui-tabbar .service {
    display: inline-block;
    background: url("../../assets/images/service_gray.png") no-repeat no-repeat center center;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
  }

  .weui-tabbar .active .service {
    display: inline-block;
    background: url("../../assets/images/service_yellow.png") no-repeat no-repeat center center;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
  }

  .weui-tabbar .self {
    display: inline-block;
    background: url("../../assets/images/self_gray.png") no-repeat no-repeat center center;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
  }

  .weui-tabbar .active .self {
    display: inline-block;
    background: url("../../assets/images/self_yellow.png") no-repeat no-repeat center center;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
  }
</style>
