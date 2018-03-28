<template>
    <div>
      <form @submit.prevent="onSubmit">
        <div class="loginout">
          <header class="user-login-text">
            <h1>用户管理</h1>
          </header>

          <div class="user-login-container ">
            <table class="table-query-deatail">
              <tr>
                <th>用户名</th>
                <td name="userName">{{getUserInfo.userName}}</td>
              </tr>
              <tr>
                <th>所属公司</th>
                  <td name="companyName">{{getUserInfo.companyCode}}</td>
              </tr>
            </table>
            <button @click="loginOut"><a href="javascript:void(0);">退出登录</a></button>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import * as _ from '../../config/mUtils'
import * as fetch from '../../fetch'
export default {
  data(){
    return {

    }
  },
  computed:{
    ...mapGetters(['getUserInfo','getStateOpenId'])
  },
  methods:{
    ...mapActions(["setLoginOut",'setLoadingState']),
    loginOut(){
      this.setLoadingState(true);
      const params = {
        deviceType:"3",
        openId:this.getStateOpenId
      }
      fetch.loginOut(params).then(res => {
          if(res.status == 0){
            this.setLoginOut();
            this.setLoadingState(false);
          }

      }).catch(err => {
        this.setLoadingState(false);
        console.log(err);
      })
    }

  }
}

</script>

<style lang="css">

</style>
