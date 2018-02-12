<template>
  <div >
    <transition name="fade" mode="out-in">
       <keep-alive>
          <!--需要被缓存 如home 对应组件home-->
          <router-view v-if="$route.meta.keepAlive"></router-view>
       </keep-alive>
    </transition>
    <transition name="fade" mode="out-in">
       <!--不需要被缓存的组件-->
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppVue',
}
</script>

<style lang="css">
  @import "style/common.css";
  fade-enter-active,fade-leave-active{
     transition: opacity .3s;
  }
  fade-enter,fade-enter-to{
    opacity: 0;
  }
</style>
