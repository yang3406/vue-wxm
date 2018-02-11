<template>
  <div >
    <!--<transtion name="fade" mode="out-in">
       <keep-alive>
          &lt;!&ndash;需要被缓存 如home 对应组件home&ndash;&gt;
          <router-view> v-if="$router.meta.keepAlive"></router-view>
       </keep-alive>
    </transtion>
    <transtion name="fade" mode="out-in">
      &lt;!&ndash;不需要被缓存的组件&ndash;&gt;
      <router-view> v-if="!$router.meta.keepAlive"></router-view>
    </transtion>-->
    <router-view></router-view>
    <div>helloHellod</div>
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
