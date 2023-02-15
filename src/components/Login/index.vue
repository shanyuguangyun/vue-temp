<template>
  <div id="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      autoComplete="on"
    >
      <div style="text-align: center">Login</div>
      <el-form-item label="username" prop="username">
        <el-input
          v-model="loginForm.username"
          name="username"
          type="text"
          autoComplete="on"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="password" prop="password">
        <svg-icon icon-class="movies" />
        <el-input
          v-model="loginForm.password"
          type="password"
          name="password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button type="primary">登录</el-button>
        <el-button type="primary">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        name: '',
        password: ''
      },
      loginRules: {}
    }
  }
}
</script>

<style scoped>
#login-container {
  width: 500px;
  height: 500px;
  margin: 0 auto;
  margin-top: calc(250px);
}
</style>