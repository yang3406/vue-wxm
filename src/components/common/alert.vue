<template>
  <div class="alert">
    <div class="alert-wrap">
      <div class="text">
        {{alertMsg}}
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'

  export default {
    name: 'alert',
    data() {
      return {}
    },
    computed: {
      ...mapState({
        alertMsg: (state) => state.common.alertMsg
      })
    }
  }
</script>

<style lang="scss">
  @import "../../assets/css/function";

  .alert {
    z-index: 1000;

  .alert-wrap {
    position: fixed;
    width: px2rem(580px);
    height: px2rem(150px);
    line-height: px2rem(150px);
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: px2rem(45px);
    background: rgba(244, 156, 73, 0.8);

  .text {
    font-size: 14px;
    color: #fff;
  }

  }
  }

</style>
