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
                <td name="username"></td>
              </tr>
              <tr>
                <th>所属公司</th>
                <a>
                  <td name="companyName"></td>
                </a>
              </tr>
            </table>
            <button type="submit" id="loginoutuser"><a href="javascript:void(0);">退出登录</a></button>
          </div>
        </div>
      </form>
    </div>
</template>

<script>


</script>

<style lang="css">

</style>
