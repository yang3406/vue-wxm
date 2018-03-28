<template>
    <div>
      <form @submit.prevent="onSubmit">
        <div class="loginin">
          <header class="user-login-text">
            <h1>用户登录</h1>
          </header>
          <div class="user-login-container">
            <table class="table-query-deatail">
              <tr>
                <th>用户名</th>
                <td><input placeholder="请输入用户名" v-model="username" name="username" class="placeholder"/></td>
              </tr>
              <tr>
                <th>密码</th>
                <td><input placeholder="请输入密码" v-model="password" type="password" name="password" class="placeholder"/></td>
              </tr>
            </table>
            <div>
              <div></div>
              <div></div>
            </div>
            <button @click="loginIn" ><a href="javascript:void(0);">登录</a></button>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  import  * as _ from '../../config/mUtils'
  import * as fetch from '../../fetch'
  export default {
  name:'userLogin',
  data(){
    return{
      username:'',
      password:''
    }
  },
  computed:{
    ...mapGetters(["getStateOpenId"])
  },
  methods:{
    ...mapActions({setUserInfo:'setUserInfo'}),
    loginIn(){
      if(!this.username || !this.password){
        _.alert("请填写完整!");
        return;
      }
      var params = {
        username:this.username,
        password:this.password,
        imo : "1001",
        deviceType : 3,
        loginTime : new Date().getTime(),
        openId : this.getStateOpenId
      }
      this.$store.dispatch("setLoadingState",true)
      fetch.loginIn(params)
        .then(response => {
            this.$store.dispatch("setLoadingState",false)
            this.setUserInfo(response)
        }).catch(err => {
          this.$store.dispatch("setLoadingState",false)
          console.log(err);
      })
    }
  }
}

</script>

<style lang="css">

</style>
