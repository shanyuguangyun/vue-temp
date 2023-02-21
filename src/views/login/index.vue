<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      autoComplete="on"
      class="login-form"
      label-position="left"
      @keyup.enter.native="handleLogin"
    >
      <div class="title-container">
        <svg-icon icon-class="movies" class="title-icon" />
        <h3 class="title">Login</h3>
      </div>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          name="username"
          type="text"
          ref="username"
          tabindex="1"
          autoComplete="on"
          placeholder="请输入用户名"
        >
          <span slot="prefix">
            <svg-icon icon-class="user" class="login-icon"> </svg-icon>
          </span>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          tabindex="2"
          name="password"
          placeholder="请输入密码"
        >
          <span slot="prefix">
            <svg-icon icon-class="password" class="login-icon"> </svg-icon>
          </span>
        </el-input>
      </el-form-item>
      <el-button
        type="primary"
        style="width: 100%"
        :loading="loading"
        @click.native.prevent="handleLogin"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
import { isvalidUsername } from "@/utils/validate";
export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码不能小于6位"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        name: "",
        password: "",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
      },
      loading: false,
    };
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/Login", this.loginForm)
            .then(() => {
              this.$router.push({ path: "/" });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("参数验证不合法！");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss">
$bg: #2d3a4b;
$cursor: #fff;
$light_gray: #fff;

.login-container {
  .el-input {
    height: 50px;

    input {
      background: transparent;
      color: $light_gray;
      caret-color: $cursor;
      height: 50px;
      border: 0px;
      padding: 12px 5px 12px 40px;

      // 自动填充背景透明，文本走白色
      &:-internal-autofill-previewed,
      &:-internal-autofill-selected {
        -webkit-text-fill-color: #fff !important;
        transition: background-color 5000s ease-in-out 0s !important;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
$bg: #2d3a4b;

.login-container {
  width: 100%;
  height: 100%;
  background-color: $bg;

  .login-form {
    position: relative;
    margin: 0 auto;
    width: 500px;
    max-width: 100%;
    padding: 160px 35px 0;
  }

  .title-container {
    text-align: center;
    .title-icon {
      fill: #eee;
      font-size: 40px;
    }
    .title {
      text-align: center;
      color: #eee;
    }
  }

  .el-form-item {
    height: 50px;
    border-radius: 5px;
    padding-left: 10px;
    background: rgba(0, 0, 0, 0.1);
  }

  .login-icon {
    vertical-align: -8px;
  }
}
</style>