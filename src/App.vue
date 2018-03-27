<template>
  <div>
    <v-toast v-show="showToast"></v-toast>
    <v-alert v-show="showAlert"></v-alert>
    <v-loading v-show="loading"></v-loading>

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
  import { mapGetters, mapActions } from 'vuex'
  import alert from '@/components/common/alert'
  import loading from '@/components/common/loading'
  import toast from '@/components/common/toast'

  export default {
    name: 'AppVue',
    data() {
      return {}
    },
    computed:{
      ...mapGetters([
        'loading',
        'showToast',
        'showAlert'
      ]),
    },
    components: {
      'v-toast': toast,
      'v-alert': alert,
      'v-loading': loading
    }
  }
</script>

<style lang="css">
  @import "style/common.css";

  fade-enter-active, fade-leave-active {
    transition: opacity .3s;
  }

  fade-enter, fade-enter-to {
    opacity: 0;
  }
</style>
